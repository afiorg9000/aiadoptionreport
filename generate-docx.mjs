/**
 * Generate the editable Word DOCX directly from the live website.
 *
 * Pipeline:
 *   1. Visit /market-profiles, scroll, expand all collapsibles, bake
 *      computed styles into inline `style=""` attrs, capture main HTML.
 *   2. Visit /, do the same prep, then splice the market-profiles HTML
 *      into the location of the "View Market Profiles" CTA card so the
 *      final document reads as a single linear narrative.
 *   3. (HTML-only mode) inline external Tailwind CSS + base64-embed
 *      images so the file is fully self-contained for previewing.
 *   4. Strip chrome (header/nav/dialogs), unwrap interactive buttons
 *      while keeping their text, and serialize.
 *   5. Convert to DOCX via @turbodocx/html-to-docx, then post-process
 *      the zip XML to scrub residual pure-black shading.
 *
 * Usage:
 *   node generate-docx.mjs [PREVIEW_URL] [OUTPUT_PATH] [--html-only]
 *
 * Defaults:
 *   PREVIEW_URL  = http://localhost:4173
 *   OUTPUT_PATH  = public/Enterprise-AI-Adoption-Report-2025-layout.docx
 *                  (or report-preview.html if --html-only)
 *
 * Prereq: `npm run build && npx vite preview --port 4173` running.
 */

import puppeteer from "puppeteer";
import HTMLtoDOCX from "@turbodocx/html-to-docx";
import { readFile, writeFile } from "node:fs/promises";
import JSZip from "jszip";

const args = process.argv.slice(2);
const HTML_ONLY = args.includes("--html-only");
const positional = args.filter((a) => !a.startsWith("--"));
const URL = positional[0] || "http://localhost:4173";
const OUTPUT =
  positional[1] ||
  (HTML_ONLY
    ? "report-preview.html"
    : "public/Enterprise-AI-Adoption-Report-2025-layout.docx");

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// ----- Page-context helpers (re-injected into each evaluate) ------------

async function waitFonts(page) {
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
}

async function scrollEndToEnd(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    const total = document.documentElement.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await wait(800);
}

async function expandAllCollapsibles(page) {
  for (let pass = 0; pass < 3; pass++) {
    const clicked = await page.evaluate(() => {
      let n = 0;
      for (const btn of document.querySelectorAll("button")) {
        const t = (btn.textContent || "").trim().toLowerCase();
        if (/^(show all|show more|expand|view all|read more)/.test(t)) {
          btn.click();
          n++;
        }
      }
      for (const el of document.querySelectorAll('[aria-expanded="false"]')) {
        el.click?.();
        n++;
      }
      return n;
    });
    if (!clicked) break;
    await wait(400);
  }
  await wait(400);
}

async function preparePage(page) {
  await waitFonts(page);
  await scrollEndToEnd(page);
  await expandAllCollapsibles(page);
}

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
      // Intentionally NOT inlining `margin` shorthand: getComputedStyle
      // resolves `mx-auto` to specific pixel margins based on the
      // Puppeteer viewport width (e.g., `margin: 0px 220px`). Baking
      // those in locks content into a narrow column when the file is
      // viewed at any other width. Vertical-only margins are safe
      // because they don't depend on parent width.
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
      if (/gradient\(/i.test(value)) return "#1e40af"; // brand blue fallback
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
    // TOC buttons get the React click handler stripped during unwrap.
    // Convert them to real anchor links so the rendered HTML and DOCX
    // can navigate to the target section. Each TOC button is tagged
    // with data-toc-target=<section-id> in TableOfContents.tsx.
    for (const btn of doc.querySelectorAll("button[data-toc-target]")) {
      const target = btn.getAttribute("data-toc-target");
      const a = doc.createElement("a");
      a.setAttribute("href", "#" + target);
      a.setAttribute("style", btn.getAttribute("style") || "");
      while (btn.firstChild) a.appendChild(btn.firstChild);
      btn.replaceWith(a);
    }
    // All other buttons collapse to a span (children survive, ARIA noise
    // is dropped). Done after the TOC pass so we don't double-process.
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

async function spliceMarketProfiles(page, marketProfilesHtml) {
  await page.evaluate((html) => {
    // Find the CTA that links out to /market-profiles. The card around it
    // is the gradient-styled "Explore Individual Market Profiles" block.
    const cta = document.querySelector('a[href="/market-profiles"]');
    if (!cta) {
      console.warn("Market Profiles CTA link not found — appending at end.");
      const inline = document.createElement("section");
      inline.id = "market-profiles-inline";
      inline.innerHTML = html;
      document.querySelector("main")?.appendChild(inline);
      return;
    }
    // Walk up to find the styled card container.
    let card = cta;
    for (let i = 0; i < 6 && card.parentElement; i++) {
      const cls = card.getAttribute("class") || "";
      if (/rounded-xl|rounded-2xl|bg-gradient/.test(cls)) break;
      card = card.parentElement;
    }
    const wrapper = document.createElement("section");
    wrapper.id = "market-profiles-inline";
    wrapper.setAttribute(
      "style",
      "margin-top: 32px; page-break-before: always;",
    );
    const heading = document.createElement("h2");
    heading.textContent = "Market Profiles";
    heading.setAttribute(
      "style",
      "text-align: center; font-size: 28px; color: #1e40af; margin: 32px 0 16px;",
    );
    wrapper.appendChild(heading);
    const body = document.createElement("div");
    body.innerHTML = html;
    wrapper.appendChild(body);
    card.replaceWith(wrapper);
  }, marketProfilesHtml);
}

// ----- Main ---------------------------------------------------------------

async function main() {
  console.log("Launching Chromium…");
  const browser = await puppeteer.launch({
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    headless: true,
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 2000, deviceScaleFactor: 1 });

  // ----- Step 1: capture /market-profiles inner HTML -----
  console.log("Capturing /market-profiles…");
  await page.goto(URL + "/market-profiles", {
    waitUntil: "networkidle0",
    timeout: 60000,
  });
  await preparePage(page);
  await inlineComputedStyles(page);
  const marketProfilesHtml = await page.evaluate(() => {
    const main = document.querySelector("main");
    if (!main) return "";
    // Strip the page-level header/nav before snapshotting innerHTML.
    for (const el of main.querySelectorAll("header, nav")) el.remove();
    return main.innerHTML;
  });
  console.log(`  captured ${marketProfilesHtml.length} chars`);

  // ----- Step 2: navigate to / and splice market profiles in -----
  console.log("Capturing main report and splicing in market profiles…");
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
  await preparePage(page);
  await spliceMarketProfiles(page, marketProfilesHtml);
  await inlineComputedStyles(page);

  // For the HTML-only preview, inline the Tailwind bundle + embed images
  // so the file renders correctly when opened from disk.
  if (HTML_ONLY) {
    console.log("Inlining external CSS + embedding images…");
    await inlineCSSAndImages(page, URL);
  }

  console.log("Extracting cleaned HTML…");
  const html = await extractCleanedHTML(page);

  await browser.close();

  if (HTML_ONLY) {
    console.log(`Writing intermediate HTML → ${OUTPUT}`);
    await writeFile(OUTPUT, html);
    console.log(`Open with: open "${OUTPUT}"`);
    return;
  }

  console.log(`Rendering DOCX → ${OUTPUT}`);
  const buffer = await HTMLtoDOCX(html, null, {
    orientation: "portrait",
    margins: { top: 1134, right: 1134, bottom: 1134, left: 1134 },
    font: "Calibri",
    fontSize: 22,
    title: "Enterprise AI Adoption Report 2025",
    creator: "LLPA",
    pageNumber: true,
    footer: true,
  });
  await writeFile(OUTPUT, buffer);

  // Post-process: scrub residual pure-black paragraph shading.
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
