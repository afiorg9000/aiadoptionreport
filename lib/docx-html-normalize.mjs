/**
 * Post-process exported report HTML so LibreOffice / Word import lays out
 * predictably: remove overlay UI, clamp negative margins, relax fixed pixel
 * widths (charts), and add CSS overrides that beat Tailwind for linear flow.
 *
 * Tailwind's bundled <style> is huge and uses @import — JSDOM's CSS parser
 * throws on it. We strip <style> blocks before parsing, then splice them back
 * after DOM tweaks so the document stays self-contained for Word/LO.
 */

import { JSDOM } from "jsdom";

const STYLE_BLOCK_ID = "docx-layout-normalize-v1";

function cleanInlineStyle(style) {
  if (!style || !style.trim()) return "";
  const decls = style
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);
  const out = [];
  for (const d of decls) {
    const ci = d.indexOf(":");
    if (ci === -1) continue;
    const prop = d.slice(0, ci).trim().toLowerCase();
    let val = d.slice(ci + 1).trim();

    if (prop === "transform" || prop === "filter" || prop === "will-change") {
      continue;
    }
    if (prop === "position" && /^(fixed|sticky)$/.test(val)) {
      out.push("position: relative");
      continue;
    }
    if (prop === "display" && val === "grid") {
      out.push("display: block");
      continue;
    }
    if (prop.startsWith("margin") && /^-[\d.]/.test(val)) {
      out.push(`${prop}: 0`);
      continue;
    }
    if (
      (prop === "width" || prop === "min-width" || prop === "max-width") &&
      /px/i.test(val)
    ) {
      const m = val.match(/(\d+(?:\.\d+)?)\s*px/i);
      if (m && parseFloat(m[1], 10) > 720) {
        if (prop === "width") {
          out.push("width: 100%");
          out.push("max-width: 100%");
        } else if (prop === "min-width") {
          out.push("min-width: 0");
        } else {
          out.push("max-width: 100%");
        }
        continue;
      }
    }
    if (
      (prop === "height" || prop === "min-height") &&
      /\b(100vh|100dvh|100svh|100lvh)\b/i.test(val)
    ) {
      out.push(`${prop}: auto`);
      continue;
    }
    if (
      (prop === "left" || prop === "right" || prop === "top") &&
      /-9999/.test(val)
    ) {
      continue;
    }
    out.push(`${prop}: ${val}`);
  }
  return out.join("; ");
}

function extractStyleTags(html) {
  const chunks = [];
  const stripped = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, (full) => {
    chunks.push(full);
    return `<meta data-docx-style-hold="${chunks.length - 1}" />`;
  });
  return { stripped, chunks };
}

function restoreStyleTags(html, chunks) {
  return html.replace(
    /<meta\s+data-docx-style-hold="(\d+)"\s*\/?>/gi,
    (_, i) => chunks[Number(i)] ?? "",
  );
}

function removeNoiseNodes(doc) {
  doc
    .querySelectorAll('[role="region"][aria-label*="Notifications"]')
    .forEach((el) => el.remove());
  doc
    .querySelectorAll('section[aria-label^="Notifications"]')
    .forEach((el) => el.remove());
}

function softenCharts(doc) {
  doc.querySelectorAll(".recharts-responsive-container").forEach((el) => {
    const base = cleanInlineStyle(el.getAttribute("style") || "");
    const merged = [base, "width: 100%", "max-width: 100%", "height: auto", "min-height: 220px"]
      .filter(Boolean)
      .join("; ");
    el.setAttribute("style", merged);
  });
  doc.querySelectorAll(".recharts-wrapper").forEach((el) => {
    el.setAttribute(
      "style",
      cleanInlineStyle(
        (el.getAttribute("style") || "") + "; width: 100%; max-width: 100%; height: auto",
      ),
    );
  });
}

const LAYOUT_OVERRIDES = `
@page { size: 8.5in 11in; margin: 0.65in; }
html { width: 100%; }
body {
  margin: 0 !important;
  padding: 10pt 14pt !important;
  max-width: 100% !important;
  width: 100% !important;
}
main {
  max-width: 100% !important;
  width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
}
main [class*="mx-auto"] {
  margin-left: 0 !important;
  margin-right: 0 !important;
}
main [class*="max-w-"] {
  max-width: 100% !important;
}
[class*="min-h-screen"] {
  min-height: auto !important;
}
main [class*="grid-cols"],
main div.grid {
  display: block !important;
  grid-template-columns: none !important;
  grid-template-rows: none !important;
  gap: 0 !important;
}
main [class*="grid-cols"] > *,
main div.grid > * {
  display: block !important;
  width: 100% !important;
  max-width: 100% !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-bottom: 10pt !important;
}
main .flex.flex-wrap,
main .flex.justify-between {
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 8pt !important;
}
main .flex.flex-wrap > *,
main .flex.justify-between > * {
  max-width: 100% !important;
}
`;

/**
 * @param {string} html full HTML document string
 * @returns {string}
 */
export function normalizeHtmlForDocx(html) {
  const { stripped, chunks } = extractStyleTags(html);
  const dom = new JSDOM(stripped, { contentType: "text/html" });
  const doc = dom.window.document;

  removeNoiseNodes(doc);
  softenCharts(doc);

  doc.querySelectorAll("[style]").forEach((el) => {
    const next = cleanInlineStyle(el.getAttribute("style") || "");
    if (next.trim()) el.setAttribute("style", next);
    else el.removeAttribute("style");
  });

  let out = "<!DOCTYPE html>\n" + doc.documentElement.outerHTML;
  out = restoreStyleTags(out, chunks);
  // After original Tailwind <style> blocks are back, append overrides last.
  out = out.replace(
    /<\/head>/i,
    `<style id="${STYLE_BLOCK_ID}">${LAYOUT_OVERRIDES}</style></head>`,
  );
  return out;
}
