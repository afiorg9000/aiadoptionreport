import puppeteer from "puppeteer";

const URL = process.argv[2] || "http://localhost:8082";
const OUTPUT = process.argv[3] || "public/Enterprise-AI-Adoption-Report-2025.pdf";

const PDF_STYLES = `
  /* ===== HIDE UI ELEMENTS ===== */
  header, aside, .sr-only, [aria-label="Main navigation"],
  .print\\:hidden, nav.sticky {
    display: none !important;
  }
  .fixed, .sticky {
    position: static !important;
  }

  /* ===== FORCE ANIMATIONS VISIBLE ===== */
  * {
    opacity: 1 !important;
    transform: none !important;
    animation: none !important;
    transition: none !important;
  }

  /* ===== LAYOUT: FULL WIDTH ===== */
  /* Remove header top padding */
  main.pt-16, main[class*="pt-16"] {
    padding-top: 0 !important;
  }

  /* Force single column */
  .xl\\:flex {
    display: block !important;
  }

  /* Make container full-width for print */
  .container {
    max-width: 100% !important;
    padding-left: 1.5rem !important;
    padding-right: 1.5rem !important;
  }

  /* Remove narrow max-width constraints */
  .max-w-4xl, .max-w-5xl, .max-w-6xl, .max-w-3xl {
    max-width: 100% !important;
  }

  /* ===== SPACING: TIGHTER FOR PRINT ===== */
  /* Reduce section vertical padding */
  .py-24 { padding-top: 2.5rem !important; padding-bottom: 2.5rem !important; }
  .py-20 { padding-top: 2rem !important; padding-bottom: 2rem !important; }
  .py-16 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
  .mb-20 { margin-bottom: 2.5rem !important; }
  .mb-16 { margin-bottom: 2rem !important; }
  .mb-12 { margin-bottom: 1.5rem !important; }

  /* ===== HERO: FIT ON FIRST PAGE ===== */
  section[class*="min-h-"] {
    min-height: auto !important;
    padding-top: 3rem !important;
    padding-bottom: 2.5rem !important;
  }

  /* ===== CHARTS ===== */
  .recharts-responsive-container {
    width: 100% !important;
    min-height: 280px !important;
  }

  /* ===== PAGE BREAKS ===== */
  /* Only keep small elements together - let large blocks split naturally */
  tr {
    page-break-inside: avoid !important;
    break-inside: avoid !important;
  }

  /* Keep headings with some content after them */
  h1, h2, h3, h4 {
    page-break-after: avoid !important;
    break-after: avoid !important;
  }

  /* ===== GRID LAYOUTS: FORCE PROPER COLUMNS ===== */
  /* Industry cards: 2-col in PDF */
  .grid.md\\:grid-cols-2.lg\\:grid-cols-3 {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  /* References: 3-col max in PDF */
  .grid.xl\\:grid-cols-5 {
    grid-template-columns: repeat(3, 1fr) !important;
  }
`;

async function generatePdf() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1100, height: 1400 });

  console.log(`Navigating to ${URL}...`);
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });

  // Wait for fonts + animations to finish
  await new Promise((r) => setTimeout(r, 3000));

  // Inject PDF-specific styles
  await page.evaluate((styles) => {
    const el = document.createElement("style");
    el.textContent = styles;
    document.head.appendChild(el);
  }, PDF_STYLES);

  await new Promise((r) => setTimeout(r, 500));

  console.log("Generating PDF...");
  await page.pdf({
    path: OUTPUT,
    format: "A4",
    margin: { top: "12mm", bottom: "12mm", left: "10mm", right: "10mm" },
    printBackground: true,
    preferCSSPageSize: false,
  });

  console.log(`PDF saved to ${OUTPUT}`);
  await browser.close();
}

generatePdf().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
