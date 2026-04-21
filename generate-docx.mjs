/**
 * Generate the editable Word DOCX directly from the live website.
 *
 * Why this exists:
 *   The previous pipeline went `site → PDF (Puppeteer) → DOCX (pdf2docx)`,
 *   which produced a Word file full of invisible "layout tables" that
 *   pdf2docx uses to pin content to page coordinates. Editing in those
 *   cells felt like fighting the document. This pipeline goes straight
 *   `site → rendered HTML → DOCX (@turbodocx/html-to-docx)`, preserving
 *   heading hierarchy, real tables, and normal prose flow.
 *
 * Usage:
 *   node generate-docx.mjs [PREVIEW_URL] [OUTPUT_PATH]
 *
 * Defaults:
 *   PREVIEW_URL  = http://localhost:4173
 *   OUTPUT_PATH  = public/Enterprise-AI-Adoption-Report-2025-layout.docx
 *
 * Prereq: `npm run build && npx vite preview --port 4173` running in
 * another shell, or pass a different URL that serves the built site.
 */

import puppeteer from "puppeteer";
import HTMLtoDOCX from "@turbodocx/html-to-docx";
import { readFile, writeFile } from "node:fs/promises";
import JSZip from "jszip";

const URL = process.argv[2] || "http://localhost:4173";
const OUTPUT =
  process.argv[3] ||
  "public/Enterprise-AI-Adoption-Report-2025-layout.docx";

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  console.log("Launching Chromium…");
  const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    headless: true,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 2000, deviceScaleFactor: 1 });

  console.log(`Navigating to ${URL}…`);
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });

  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });

  // Scroll end-to-end so framer-motion `whileInView` elements mount.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    const total = document.documentElement.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await wait(1200);

  console.log("Extracting rendered HTML + flattening computed styles…");
  const html = await page.evaluate(() => {
    // 1) Walk the LIVE DOM and bake getComputedStyle() values into
    //    inline styles BEFORE we clone. html-to-docx can only see
    //    inline `style=""` attributes — it does not resolve class
    //    selectors against an external stylesheet. So we extract the
    //    key visual properties for each element and write them in.
    //
    //    Properties we keep:
    //      color, background-color    (Tailwind colors, card fills)
    //      font-weight, font-style    (bold / italic / medium)
    //      font-size                  (preserved at computed px; Word
    //                                  will round to the nearest pt)
    //      text-align, text-decoration
    //      padding, margin, border    (spacing, accent bars)
    //      border-radius              (pill / card corners — Word will
    //                                  ignore but it doesn't hurt)
    //
    //    We SKIP display / position / flex properties — html-to-docx
    //    doesn't honor them and they just confuse the converter.
    const INTERESTING = [
      "color",
      "background-color",
      "font-weight",
      "font-style",
      "font-size",
      "text-align",
      "text-decoration",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-bottom",
      "border",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-color",
      "border-style",
      "border-width",
      "border-radius",
    ];

    const GRADIENT_FALLBACKS = {
      // Map common Tailwind gradients to a representative solid color.
      "linear-gradient": "#1e40af", // blue-800 — our primary accent
    };

    function flatten(value) {
      if (!value) return value;
      // Gradient backgrounds don't render in Word — collapse to solid.
      if (/gradient\(/i.test(value)) {
        return GRADIENT_FALLBACKS["linear-gradient"];
      }
      return value;
    }

    function inlineComputedStyles(el) {
      const cs = window.getComputedStyle(el);
      const existing = el.getAttribute("style") || "";
      // Don't overwrite existing inline style overrides from framer-motion
      // that we DO want (the ones we'll strip below are opacity/transform).
      const out = [];
      // Extract element's own text color so we can sanity-check
      // background + foreground contrast below.
      const fgRGB = (() => {
        const m = cs.getPropertyValue("color").match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        return m ? [+m[1], +m[2], +m[3]] : [15, 23, 42]; // slate-900 fallback
      })();

      for (const prop of INTERESTING) {
        let v = cs.getPropertyValue(prop);
        if (!v) continue;
        // Ignore transparent backgrounds, inherit placeholders.
        if (prop === "background-color") {
          if (v === "rgba(0, 0, 0, 0)" || v === "transparent") continue;
          // Skip backgrounds that would make text unreadable on white
          // paper: either the bg is very dark (the site's dark hero /
          // footer sections), OR the bg is very close in luminance to
          // the foreground text color (unreadable either way in Word).
          const m = v.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (m) {
            const [r, g, b] = [+m[1], +m[2], +m[3]];
            const bgLum = 0.299 * r + 0.587 * g + 0.114 * b;
            const fgLum = 0.299 * fgRGB[0] + 0.587 * fgRGB[1] + 0.114 * fgRGB[2];
            // Skip dark backgrounds (< ~40% luminance). Lets through
            // pastel card fills, callout tints, tier-color badges.
            if (bgLum < 100) continue;
            // Skip if bg/fg contrast is too low (< 40 lum delta).
            if (Math.abs(bgLum - fgLum) < 40) continue;
          }
        }
        if (v === "none" && !prop.startsWith("border")) continue;
        if (v === "auto") continue;
        // Ignore default/neutral values that bloat the HTML.
        if (prop === "font-weight" && (v === "400" || v === "normal")) continue;
        if (prop === "font-style" && v === "normal") continue;
        if (prop === "text-decoration" && /\bnone\b/.test(v)) continue;
        if (prop === "text-align" && v === "start") continue;
        if (prop.startsWith("padding") && v === "0px") continue;
        if (prop.startsWith("margin") && v === "0px") continue;
        if (prop === "border-radius" && v === "0px") continue;

        v = flatten(v);
        out.push(`${prop}: ${v}`);
      }
      if (out.length) {
        const prefix = existing && !existing.endsWith(";") ? existing + ";" : existing;
        el.setAttribute("style", prefix + out.join("; ") + ";");
      }
    }

    // Walk everything in the main content area and inline styles.
    // We scope to <main> / body to skip off-screen React portals.
    const root = document.querySelector("main") || document.body;
    const selector = "h1, h2, h3, h4, h5, h6, p, li, td, th, span, strong, em, a, sup, div, section, article";
    const nodes = root.querySelectorAll(selector);
    for (const el of nodes) {
      try {
        inlineComputedStyles(el);
      } catch {}
    }

    // 2) Clone AFTER styles are baked in.
    const doc = document.cloneNode(true);

    // 3) Strip navigation/chrome.
    const kill = doc.querySelectorAll(
      "header, nav, .sr-only, [data-radix-popper-content-wrapper], [role='dialog'], script, noscript, button",
    );
    for (const el of kill) el.remove();

    // 4) Strip transform/opacity leftovers from framer-motion so nothing
    //    renders invisible. Keep everything else.
    for (const el of doc.querySelectorAll("[style]")) {
      const s = el.getAttribute("style") || "";
      const cleaned = s
        .replace(/opacity:\s*[^;]+;?/g, "")
        .replace(/transform:\s*[^;]+;?/g, "")
        .replace(/will-change:\s*[^;]+;?/g, "");
      if (cleaned.trim()) el.setAttribute("style", cleaned);
      else el.removeAttribute("style");
    }

    // 5) Minimal typography fallback so even text that didn't get an
    //    inline style has sensible defaults in Word.
    const style = doc.createElement("style");
    style.textContent = `
      body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #0f172a; }
      h1 { margin: 18pt 0 8pt; text-align: center; }
      h2 { margin: 16pt 0 6pt; page-break-before: always; }
      h3 { margin: 12pt 0 4pt; }
      h4 { margin: 10pt 0 4pt; }
      p  { margin: 0 0 6pt; line-height: 1.45; }
      ul, ol { margin: 0 0 6pt 18pt; }
      li { margin: 0 0 3pt; }
      table { border-collapse: collapse; margin: 8pt 0; width: 100%; }
      th, td { border: 1px solid #cbd5e1; padding: 4pt 6pt; vertical-align: top; }
      th { background: #f1f5f9; font-weight: 600; }
      a  { color: #1e40af; text-decoration: underline; }
      sup { font-size: 8pt; color: #64748b; }
      hr { border: 0; border-top: 1px solid #cbd5e1; margin: 12pt 0; }
      blockquote { margin: 8pt 18pt; padding: 6pt 10pt; border-left: 3px solid #1e40af; color: #334155; }
    `;
    doc.querySelector("head")?.appendChild(style);

    return "<!DOCTYPE html>" + doc.documentElement.outerHTML;
  });

  await browser.close();

  console.log(`Rendering DOCX → ${OUTPUT}`);
  const buffer = await HTMLtoDOCX(html, null, {
    orientation: "portrait",
    margins: { top: 1134, right: 1134, bottom: 1134, left: 1134 },
    font: "Calibri",
    fontSize: 22, // half-points → 11pt
    title: "Enterprise AI Adoption Report 2025",
    creator: "LLPA",
    pageNumber: true,
    footer: true,
  });

  await writeFile(OUTPUT, buffer);

  // Post-process: DOCX is a zip of XML; strip any paragraph shading
  // with fill="000000" (pure black), plus any run background fill that
  // matches. Defensive scrub for cases where the computed-style filter
  // missed a dark background — black boxes on white paper would make
  // the Word copy unreadable.
  console.log("Post-processing: stripping residual black shading…");
  const zipBuf = await readFile(OUTPUT);
  const zip = await JSZip.loadAsync(zipBuf);
  const docXml = await zip.file("word/document.xml").async("string");
  const cleaned = docXml.replace(
    /<w:shd[^/]*w:fill="0{6,8}"[^/]*\/>/gi,
    "",
  );
  zip.file("word/document.xml", cleaned);
  const out = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
  });
  await writeFile(OUTPUT, out);

  console.log(`Saved ${OUTPUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
