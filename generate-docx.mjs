/**
 * Generate the editable Word file (.doc) directly from the live website.
 *
 * Why .doc and not .docx:
 *   The previous attempt used @turbodocx/html-to-docx to produce a true
 *   .docx file. That library's CSS support is shallow — it ignored most
 *   of the inlined styling we worked hard to bake into the HTML, so the
 *   output looked nothing like the website.
 *
 *   Microsoft Word natively opens HTML files when given a .doc/.docm
 *   extension, and Word's HTML parser preserves inlined CSS, real
 *   tables, hyperlinks, and base64 images with very high fidelity.
 *   The user can `File → Save As → Word Document (.docx)` once it's
 *   open in Word to get a proper OOXML file.
 *
 * Pipeline:
 *   1. Visit /market-profiles, prep, capture <main> innerHTML.
 *   2. Visit /, prep, splice market profiles in place of the CTA.
 *   3. Bake getComputedStyle() values into inline `style=""` attrs.
 *   4. Inline the Tailwind stylesheet bundle and base64-encode all
 *      relative images so the file is fully self-contained.
 *   5. Strip true chrome (header/nav/dialogs); convert TOC buttons to
 *      anchor links; unwrap remaining buttons to spans.
 *   6. Write `.doc` (or `.html` in --html-only mode).
 *
 * Usage:
 *   node generate-docx.mjs [PREVIEW_URL] [OUTPUT_PATH] [--html-only]
 *
 * Defaults:
 *   PREVIEW_URL  = http://localhost:4173
 *   OUTPUT_PATH  = public/Enterprise-AI-Adoption-Report-2025.doc
 *                  (or report-preview.html if --html-only)
 */

import puppeteer from "puppeteer";
import { writeFile } from "node:fs/promises";
import {
  preparePage,
  captureMarketProfilesHTML,
  spliceMarketProfiles,
} from "./lib/site-snapshot.mjs";

const args = process.argv.slice(2);
const HTML_ONLY = args.includes("--html-only");
const positional = args.filter((a) => !a.startsWith("--"));
const URL = positional[0] || "http://localhost:4173";
const OUTPUT =
  positional[1] ||
  (HTML_ONLY
    ? "report-preview.html"
    : "public/Enterprise-AI-Adoption-Report-2025.doc");

async function inlineComputedStyles(page) {
  await page.evaluate(() => {
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
      // `margin` shorthand intentionally omitted: getComputedStyle
      // resolves `mx-auto` to specific pixel margins based on the
      // Puppeteer viewport width (e.g., margin: 0px 220px), which would
      // lock content into a narrow column at any viewing width.
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
    function flatten(value) {
      if (!value) return value;
      if (/gradient\(/i.test(value)) return "#1e40af";
      return value;
    }
    function inline(el) {
      const cs = window.getComputedStyle(el);
      const existing = el.getAttribute("style") || "";
      const fgRGB = (() => {
        const m = cs.getPropertyValue("color").match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        return m ? [+m[1], +m[2], +m[3]] : [15, 23, 42];
      })();
      const out = [];
      for (const prop of INTERESTING) {
        let v = cs.getPropertyValue(prop);
        if (!v) continue;
        if (prop === "background-color") {
          if (v === "rgba(0, 0, 0, 0)" || v === "transparent") continue;
          const m = v.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
          if (m) {
            const [r, g, b] = [+m[1], +m[2], +m[3]];
            const bgLum = 0.299 * r + 0.587 * g + 0.114 * b;
            const fgLum = 0.299 * fgRGB[0] + 0.587 * fgRGB[1] + 0.114 * fgRGB[2];
            if (bgLum < 100) continue;
            if (Math.abs(bgLum - fgLum) < 40) continue;
          }
        }
        if (v === "none" && !prop.startsWith("border")) continue;
        if (v === "auto") continue;
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
    const root = document.querySelector("main") || document.body;
    const sel = "h1, h2, h3, h4, h5, h6, p, li, td, th, span, strong, em, a, sup, div, section, article";
    for (const el of root.querySelectorAll(sel)) {
      try { inline(el); } catch {}
    }
  });
}

async function inlineCSSAndImages(page, origin) {
  await page.evaluate(async (origin) => {
    const links = [...document.querySelectorAll('link[rel="stylesheet"]')];
    for (const link of links) {
      try {
        const abs = new URL(link.getAttribute("href"), origin).toString();
        const text = await fetch(abs).then((r) => r.text());
        const style = document.createElement("style");
        style.setAttribute("data-inlined-from", abs);
        style.textContent = text;
        link.replaceWith(style);
      } catch (e) {
        console.warn("Could not inline CSS:", e);
      }
    }
    for (const img of document.querySelectorAll("img[src]")) {
      const src = img.getAttribute("src");
      if (!src || !src.startsWith("/")) continue;
      try {
        const abs = new URL(src, origin).toString();
        const resp = await fetch(abs);
        const blob = await resp.blob();
        const ab = await blob.arrayBuffer();
        const u8 = new Uint8Array(ab);
        let bin = "";
        for (let i = 0; i < u8.length; i++) bin += String.fromCharCode(u8[i]);
        const b64 = btoa(bin);
        img.setAttribute("src", `data:${blob.type};base64,${b64}`);
      } catch (e) {
        console.warn("Could not inline image:", src, e);
      }
    }
  }, origin);
}

async function extractCleanedHTML(page) {
  return await page.evaluate(() => {
    const doc = document.cloneNode(true);
    const kill = doc.querySelectorAll(
      "header, nav, .sr-only, [data-radix-popper-content-wrapper], [role='dialog'], script, noscript",
    );
    for (const el of kill) el.remove();
    // TOC buttons → anchor links so the rendered file can navigate.
    for (const btn of doc.querySelectorAll("button[data-toc-target]")) {
      const target = btn.getAttribute("data-toc-target");
      const a = doc.createElement("a");
      a.setAttribute("href", "#" + target);
      a.setAttribute("style", btn.getAttribute("style") || "");
      while (btn.firstChild) a.appendChild(btn.firstChild);
      btn.replaceWith(a);
    }
    // All other buttons collapse to spans.
    for (const btn of doc.querySelectorAll("button")) {
      const span = doc.createElement("span");
      span.setAttribute("style", btn.getAttribute("style") || "");
      while (btn.firstChild) span.appendChild(btn.firstChild);
      btn.replaceWith(span);
    }
    for (const el of doc.querySelectorAll("[style]")) {
      const s = el.getAttribute("style") || "";
      const cleaned = s
        .replace(/opacity:\s*[^;]+;?/g, "")
        .replace(/transform:\s*[^;]+;?/g, "")
        .replace(/will-change:\s*[^;]+;?/g, "");
      if (cleaned.trim()) el.setAttribute("style", cleaned);
      else el.removeAttribute("style");
    }
    // Word-friendly print fallbacks. Word's HTML import respects <style>
    // blocks so this gives sensible defaults for any element that didn't
    // get an inline style.
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
}

async function main() {
  console.log("Launching Chromium…");
  const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 2000, deviceScaleFactor: 1 });

  console.log("Capturing /market-profiles…");
  const marketProfilesHtml = await captureMarketProfilesHTML(page, URL);
  console.log(`  captured ${marketProfilesHtml.length} chars`);

  console.log("Capturing main report and splicing in market profiles…");
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
  await preparePage(page);
  await spliceMarketProfiles(page, marketProfilesHtml);
  await inlineComputedStyles(page);

  console.log("Inlining external CSS + embedding images…");
  await inlineCSSAndImages(page, URL);

  console.log("Extracting cleaned HTML…");
  const html = await extractCleanedHTML(page);

  await browser.close();

  console.log(`Writing → ${OUTPUT}`);
  await writeFile(OUTPUT, html);
  console.log(`Saved ${OUTPUT}`);
  if (!HTML_ONLY) {
    console.log(
      "Open in Word: double-click the .doc — Word renders the inlined HTML.\n" +
        "  File → Save As → Word Document (.docx) inside Word for a true OOXML file.",
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
