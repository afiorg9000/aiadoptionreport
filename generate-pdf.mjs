/**
 * Generate the public PDF from the running site.
 *
 * Pipeline (now structurally aligned with generate-docx.mjs so the two
 * downloads stay in sync):
 *
 *   1. Visit /market-profiles, prep, capture <main> innerHTML.
 *   2. Visit /, prep, splice the market-profiles HTML in place of the
 *      "View Market Profiles" CTA card.
 *   3. Apply PDF-specific style overrides (hide chrome, flatten the
 *      sticky/fixed layout, expand container max-widths, tighten
 *      section paddings for paginated print).
 *   4. Print via Puppeteer in print emulation at 2x scale for crisp
 *      text and SVG.
 *
 * Usage:
 *   node generate-pdf.mjs [PREVIEW_URL] [OUTPUT_PATH]
 *
 * Defaults:
 *   PREVIEW_URL  = http://localhost:4173
 *   OUTPUT_PATH  = public/Enterprise-AI-Adoption-Report-2025.pdf
 *
 * Prereq: `npm run build && npx vite preview --port 4173` running.
 */

import puppeteer from "puppeteer";
import {
  preparePage,
  captureMarketProfilesHTML,
  spliceMarketProfiles,
} from "./lib/site-snapshot.mjs";

const URL = process.argv[2] || "http://localhost:4173";
const OUTPUT =
  process.argv[3] || "public/Enterprise-AI-Adoption-Report-2025.pdf";

// A4 portrait at 96 DPI ≈ 794 × 1123 px. Render at 2x for crisp text and
// SVG, then let Puppeteer's `scale: 0.5` shrink it down for the PDF.
const RENDER_WIDTH = 1588;
const RENDER_HEIGHT = 2246;
const PDF_SCALE = 0.5;

const PDF_STYLES = `
  /* Hide chrome that doesn't belong in the PDF. */
  header,
  aside,
  .sr-only,
  [aria-label="Main navigation"],
  .print\\:hidden,
  nav.sticky {
    display: none !important;
  }

  /* Anything pinned in the live UI must flow normally for paginated PDF. */
  .fixed,
  .sticky {
    position: static !important;
  }

  /* Belt-and-braces vs framer-motion entrance animations. */
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }

  /* Drop wrapper paddings that exist only because of the fixed header. */
  main.pt-16,
  main[class*="pt-16"] {
    padding-top: 0 !important;
  }

  /* Force the xl two-column layout to single column for paginated print. */
  .xl\\:flex {
    display: block !important;
  }

  /* Use the full printable width — don't render at 1100px and shrink. */
  .container {
    max-width: 100% !important;
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }
  .max-w-3xl,
  .max-w-4xl,
  .max-w-5xl,
  .max-w-6xl {
    max-width: 100% !important;
  }

  /* Tighten the giant section paddings designed for scroll. */
  .py-24 { padding-top: 2.5rem !important; padding-bottom: 2.5rem !important; }
  .py-20 { padding-top: 2rem  !important; padding-bottom: 2rem  !important; }
  .py-16 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
  .mb-20 { margin-bottom: 2.5rem !important; }
  .mb-16 { margin-bottom: 2rem  !important; }
  .mb-12 { margin-bottom: 1.5rem !important; }

  /* Hero shouldn't claim a full viewport in a paginated layout. */
  section[class*="min-h-"] {
    min-height: auto !important;
    padding-top: 3rem !important;
    padding-bottom: 2.5rem !important;
  }

  /* Recharts: keep a sensible min-height so empty containers don't collapse. */
  .recharts-responsive-container {
    width: 100% !important;
    min-height: 280px !important;
  }

  /* Don't split table rows across pages. */
  tr {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  /* Keep headings with whatever follows. */
  h1, h2, h3, h4 {
    page-break-after: avoid !important;
    break-after: avoid !important;
  }

  /* Industry cards: 2-up in PDF (was 3-up at xl). */
  .grid.md\\:grid-cols-2.lg\\:grid-cols-3 {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  /* References: cap at 3 columns so cards stay legible. */
  .grid.xl\\:grid-cols-5 {
    grid-template-columns: repeat(3, 1fr) !important;
  }

  /* Spliced market-profiles section: page break before for clean pagination. */
  #market-profiles-inline {
    page-break-before: always !important;
    break-before: page !important;
  }
`;

async function settleAnimations(page) {
  await page.evaluate(() => {
    document.querySelectorAll("*").forEach((el) => {
      const cs = window.getComputedStyle(el);
      if (parseFloat(cs.opacity) < 1) {
        el.style.setProperty("opacity", "1", "important");
      }
      if (cs.transform && cs.transform !== "none") {
        el.style.setProperty("transform", "none", "important");
      }
    });
  });
}

async function generatePdf() {
  console.log("Launching Chromium…");
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({
      width: RENDER_WIDTH,
      height: RENDER_HEIGHT,
      deviceScaleFactor: 2,
    });
    await page.emulateMediaType("print");

    console.log("Capturing /market-profiles…");
    const marketProfilesHtml = await captureMarketProfilesHTML(page, URL);
    console.log(`  captured ${marketProfilesHtml.length} chars`);

    console.log(`Navigating to ${URL}…`);
    await page.goto(URL, { waitUntil: "networkidle0", timeout: 90000 });

    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    });

    // Inject PDF-specific style overrides BEFORE preparePage so the
    // print layout is already applied during scroll/expand.
    await page.evaluate((styles) => {
      const el = document.createElement("style");
      el.dataset.pdfOverrides = "true";
      el.textContent = styles;
      document.head.appendChild(el);
    }, PDF_STYLES);

    await preparePage(page);
    await spliceMarketProfiles(page, marketProfilesHtml);

    // After the splice, scroll once more so any framer-motion blocks
    // inside the newly-injected market-profiles content trigger.
    await preparePage(page);
    await settleAnimations(page);

    await new Promise((r) => setTimeout(r, 1500));

    console.log(`Rendering PDF → ${OUTPUT}`);
    await page.pdf({
      path: OUTPUT,
      format: "A4",
      margin: { top: "12mm", bottom: "12mm", left: "10mm", right: "10mm" },
      printBackground: true,
      preferCSSPageSize: false,
      scale: PDF_SCALE,
    });
    console.log(`Saved ${OUTPUT}`);
  } finally {
    await browser.close();
  }
}

generatePdf().catch((err) => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
