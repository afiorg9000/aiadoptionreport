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
import { writeFile } from "node:fs/promises";

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

  console.log("Extracting rendered HTML…");
  const html = await page.evaluate(() => {
    const doc = document.cloneNode(true);

    // Strip chrome and interactive-only elements that don't translate.
    const kill = doc.querySelectorAll(
      "header, nav, .sr-only, [data-radix-popper-content-wrapper], [role='dialog'], script, noscript, button",
    );
    for (const el of kill) el.remove();

    // Flatten framer-motion transform/opacity on leftover elements so
    // nothing renders invisible in Word.
    for (const el of doc.querySelectorAll("[style]")) {
      const s = el.getAttribute("style") || "";
      const cleaned = s
        .replace(/opacity:\s*[^;]+;?/g, "")
        .replace(/transform:\s*[^;]+;?/g, "")
        .replace(/will-change:\s*[^;]+;?/g, "");
      if (cleaned.trim()) el.setAttribute("style", cleaned);
      else el.removeAttribute("style");
    }

    // Inject a small Word-oriented stylesheet. Keeping this tight
    // because html-to-docx does its own CSS parsing and a giant
    // Tailwind sheet just confuses it.
    const style = doc.createElement("style");
    style.textContent = `
      body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #0f172a; }
      h1 { font-size: 24pt; color: #0f172a; margin: 18pt 0 8pt; font-weight: 700; text-align: center; }
      h2 { font-size: 18pt; color: #1e40af; margin: 16pt 0 6pt; font-weight: 600; page-break-before: always; }
      h3 { font-size: 14pt; color: #0f172a; margin: 12pt 0 4pt; font-weight: 600; }
      h4 { font-size: 12pt; color: #334155; margin: 10pt 0 4pt; font-weight: 600; }
      p { margin: 0 0 6pt; line-height: 1.45; }
      ul, ol { margin: 0 0 6pt 18pt; }
      li { margin: 0 0 3pt; }
      table { border-collapse: collapse; margin: 8pt 0; width: 100%; }
      th, td { border: 1px solid #cbd5e1; padding: 4pt 6pt; text-align: left; font-size: 10pt; vertical-align: top; }
      th { background: #f1f5f9; font-weight: 600; }
      a { color: #1e40af; text-decoration: underline; }
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
  console.log(`Saved ${OUTPUT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
