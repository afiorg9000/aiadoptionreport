/**
 * Generate the public PDF from the running site.
 *
 * Fixes vs the original pipeline that produced a broken PDF
 * (blurred ToC, fallback fonts, missing/half-rendered sections):
 *
 *   1. Wait for `document.fonts.ready` so brand/body fonts are loaded
 *      before the snapshot.
 *   2. Use `emulateMediaType("print")` so any `@media print` rules in
 *      the stylesheet apply.
 *   3. Auto-scroll the entire page top to bottom in small steps so
 *      every framer-motion `whileInView` block triggers and reaches
 *      its final state. Then scroll back to the top.
 *   4. Force any element framer-motion left at `opacity: 0` /
 *      `transform: translate*` to its final settled state via inline
 *      style (overrides framer-motion's own inline styles).
 *   5. Set the viewport to the same printable width Puppeteer will use
 *      for an A4 page (~794px @ 96 DPI) so there's no scale-down blur.
 *   6. Use Puppeteer's bundled Chromium by default; only fall back to
 *      a system Chrome via env var so the script is portable.
 *   7. Wait for Recharts ResponsiveContainer to settle (chart SVGs
 *      mount asynchronously after their container measures).
 *
 * Usage:
 *   node generate-pdf.mjs http://localhost:4173 \
 *     public/Enterprise-AI-Adoption-Report-2025.pdf
 */

import puppeteer from "puppeteer";

const URL = process.argv[2] || "http://localhost:4173";
const OUTPUT =
  process.argv[3] || "public/Enterprise-AI-Adoption-Report-2025.pdf";

// A4 portrait at 96 DPI ≈ 794 × 1123 px. Render at 2x for crisp text and
// SVG, then let Puppeteer's `scale: 0.5` shrink it down for the PDF.
const RENDER_WIDTH = 1588; // 2x A4 width
const RENDER_HEIGHT = 2246; // 2x A4 height
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

  /* Belt-and-braces vs framer-motion entrance animations. The JS pass
     below also forces final state, but this catches anything we miss. */
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
`;

async function autoScroll(page) {
  // Walk the document in 600px increments so framer-motion's
  // whileInView observers all trigger. Pause briefly between steps
  // so charts and lazy components have a frame to render.
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const step = 600;
    for (
      let y = 0;
      y < document.documentElement.scrollHeight;
      y += step
    ) {
      window.scrollTo(0, y);
      await sleep(120);
    }
    window.scrollTo(0, document.documentElement.scrollHeight);
    await sleep(400);
    window.scrollTo(0, 0);
    await sleep(120);
  });
}

async function settleAnimations(page) {
  // Force every element framer-motion left in mid-animation to its
  // final visible state. We override inline styles framer-motion sets.
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

    // Use print media so any @media print rules apply.
    await page.emulateMediaType("print");

    console.log(`Navigating to ${URL}…`);
    await page.goto(URL, { waitUntil: "networkidle0", timeout: 90000 });

    // Wait until brand and body fonts are actually loaded.
    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    });

    // Inject PDF-specific style overrides.
    await page.evaluate((styles) => {
      const el = document.createElement("style");
      el.dataset.pdfOverrides = "true";
      el.textContent = styles;
      document.head.appendChild(el);
    }, PDF_STYLES);

    // Trigger every framer-motion whileInView block, then settle.
    await autoScroll(page);
    await settleAnimations(page);

    // Give Recharts SVGs and any final paint a beat to commit.
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
