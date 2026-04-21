/**
 * Generate the editable Word .docx directly from the live website
 * via pandoc.
 *
 * Pipeline:
 *   1. Visit /market-profiles, prep, capture <main> innerHTML.
 *   2. Visit /, prep, splice market profiles in place of the CTA.
 *   3. Bake getComputedStyle() values into inline `style=""` attrs.
 *   4. Inline the Tailwind stylesheet bundle and base64-encode images.
 *   5. Strip chrome; convert TOC buttons to anchors; unwrap remaining
 *      buttons to spans; serialize to a single self-contained HTML.
 *   6. Pipe HTML to pandoc → real .docx with native Word styles
 *      (heading hierarchy, hyperlinks, tables).
 *
 * Why pandoc:
 *   Pandoc's docx writer is structural — it maps semantic HTML to
 *   Word's native styles (Heading 1, Body Text, etc.) rather than
 *   trying to reproduce the website's CSS pixel-for-pixel. The output
 *   is a clean, standards-compliant Word document that's easy to edit
 *   and re-style. Visual brand colors are not preserved (that's a
 *   docx writer limitation), but heading structure, hyperlinks,
 *   tables, and images all carry over cleanly.
 *
 * Usage:
 *   node generate-docx.mjs [PREVIEW_URL] [OUTPUT_PATH] [--html-only]
 *   node generate-docx.mjs --from-html report-preview.html [OUTPUT_PATH]
 *     (skips Puppeteer; converts existing self-contained HTML from a prior
 *      --html-only capture)
 *
 * Prereqs:
 *   - Vite preview server running at PREVIEW_URL.
 *   - pandoc installed: `npm run docs:install-pandoc` (one-shot).
 */

import puppeteer from "puppeteer";
import { readFile, writeFile, unlink } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { homedir } from "node:os";
import { existsSync } from "node:fs";
import { join } from "node:path";
import {
  preparePage,
  captureMarketProfilesHTML,
  spliceMarketProfiles,
} from "./lib/site-snapshot.mjs";
import { normalizeHtmlForDocx } from "./lib/docx-html-normalize.mjs";

const DEFAULT_DOCX = "public/Enterprise-AI-Adoption-Report-2025.docx";

let argv = process.argv.slice(2);
let FROM_HTML = null;
const fh = argv.indexOf("--from-html");
if (fh !== -1) {
  FROM_HTML = argv[fh + 1];
  if (!FROM_HTML || FROM_HTML.startsWith("--")) {
    console.error("Usage: node generate-docx.mjs --from-html <file.html> [output.docx]");
    process.exit(1);
  }
  argv.splice(fh, 2);
}

const HTML_ONLY = argv.includes("--html-only");
const positional = argv.filter((a) => !a.startsWith("--"));

let URL;
let OUTPUT;
if (FROM_HTML) {
  if (HTML_ONLY) {
    console.error("--from-html cannot be combined with --html-only");
    process.exit(1);
  }
  if (!existsSync(FROM_HTML)) {
    console.error(`File not found: ${FROM_HTML}`);
    process.exit(1);
  }
  URL = null;
  OUTPUT = positional[0] || DEFAULT_DOCX;
} else {
  URL = positional[0] || "http://localhost:4173";
  OUTPUT =
    positional[1] ||
    (HTML_ONLY ? "report-preview.html" : DEFAULT_DOCX);
}

function findPandoc() {
  if (process.env.PANDOC_PATH && existsSync(process.env.PANDOC_PATH)) {
    return process.env.PANDOC_PATH;
  }
  const candidates = [
    join(homedir(), ".local/bin/pandoc"),
    "/usr/local/bin/pandoc",
    "/opt/homebrew/bin/pandoc",
    "/usr/bin/pandoc",
  ];
  for (const p of candidates) if (existsSync(p)) return p;
  const which = spawnSync("which", ["pandoc"]);
  if (which.status === 0) return which.stdout.toString().trim();
  return null;
}

function findSoffice() {
  if (process.env.SOFFICE_PATH && existsSync(process.env.SOFFICE_PATH)) {
    return process.env.SOFFICE_PATH;
  }
  const candidates = [
    join(homedir(), "Applications/LibreOffice.app/Contents/MacOS/soffice"),
    "/Applications/LibreOffice.app/Contents/MacOS/soffice",
    "/usr/local/bin/soffice",
    "/opt/homebrew/bin/soffice",
  ];
  for (const p of candidates) if (existsSync(p)) return p;
  const which = spawnSync("which", ["soffice"]);
  if (which.status === 0) return which.stdout.toString().trim();
  return null;
}

/**
 * Convert an HTML string (already self-contained) to .docx via LibreOffice or pandoc.
 */
async function writeHtmlStringToDocx(html, outputPath) {
  html = normalizeHtmlForDocx(html);
  const soffice = findSoffice();
  const pandoc = findPandoc();
  const tmpHtml = outputPath + ".tmp.html";
  await writeFile(tmpHtml, html);

  if (soffice) {
    console.log(`Using LibreOffice headless: ${soffice}`);
    const outDir = outputPath.includes("/")
      ? outputPath.slice(0, outputPath.lastIndexOf("/")) || "."
      : ".";
    const r = spawnSync(
      soffice,
      [
        "--headless",
        "--infilter=HTML (StarWriter)",
        "--convert-to",
        "docx:MS Word 2007 XML",
        "--outdir",
        outDir,
        tmpHtml,
      ],
      { stdio: ["ignore", "inherit", "pipe"] },
    );
    if (r.status !== 0) {
      console.error(r.stderr?.toString() || "(no stderr)");
      console.error(`soffice exited ${r.status}`);
      process.exit(1);
    }
    const baseNoExt = tmpHtml.slice(0, tmpHtml.lastIndexOf("."));
    const lastSlash = baseNoExt.lastIndexOf("/");
    const stem = lastSlash >= 0 ? baseNoExt.slice(lastSlash + 1) : baseNoExt;
    const written = `${outDir}/${stem}.docx`;
    if (existsSync(written) && written !== outputPath) {
      const { rename } = await import("node:fs/promises");
      await rename(written, outputPath);
    }
    await unlink(tmpHtml);
    console.log(`Saved ${outputPath}`);
    return;
  }

  if (pandoc) {
    console.log(`Using pandoc: ${pandoc}`);
    const r = spawnSync(
      pandoc,
      [
        "-f",
        "html",
        "-t",
        "docx",
        "-s",
        "--metadata=title:Enterprise AI Adoption Report 2025",
        "--metadata=author:LLPA",
        "-o",
        outputPath,
        tmpHtml,
      ],
      { stdio: ["ignore", "inherit", "pipe"] },
    );
    const stderr = r.stderr?.toString() || "";
    const meaningful = stderr
      .split("\n")
      .filter((l) => l && !/Could not convert image .+\.svg/.test(l))
      .join("\n");
    if (meaningful.trim()) console.error(meaningful);
    if (r.status !== 0) {
      console.error(`pandoc exited ${r.status}`);
      process.exit(1);
    }
    await unlink(tmpHtml);
    console.log(`Saved ${outputPath}`);
    return;
  }

  await unlink(tmpHtml).catch(() => {});
  console.error(
    "ERROR: no DOCX converter found. Install one:\n" +
      "  npm run docs:install-libreoffice   (best fidelity, ~700 MB)\n" +
      "  npm run docs:install-pandoc        (lightweight fallback)",
  );
  process.exit(1);
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
  if (FROM_HTML) {
    console.log(`Converting HTML file → DOCX: ${FROM_HTML}`);
    const html = await readFile(FROM_HTML, "utf8");
    await writeHtmlStringToDocx(html, OUTPUT);
    return;
  }

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

  if (HTML_ONLY) {
    console.log(`Writing → ${OUTPUT}`);
    await writeFile(OUTPUT, normalizeHtmlForDocx(html));
    return;
  }

  // Pick a converter. Preference order: LibreOffice > pandoc.
  // - LibreOffice gives the best visual fidelity (real CSS support,
  //   brand colors and shading preserved).
  // - Pandoc is the lightweight fallback (clean structure, no colors).
  await writeHtmlStringToDocx(html, OUTPUT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
