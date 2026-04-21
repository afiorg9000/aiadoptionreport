/**
 * Shared Puppeteer helpers for snapshotting the live site into a
 * single linear document for export (DOCX, PDF, etc).
 *
 * Used by both generate-pdf.mjs and generate-docx.mjs so the two
 * exported artifacts stay in sync structurally — same prep flow,
 * same expanded references, same market-profiles splice.
 */

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

export async function waitFonts(page) {
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
  });
}

export async function scrollEndToEnd(page) {
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.8;
    const total = document.documentElement.scrollHeight;
    for (let y = 0; y < total; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, document.documentElement.scrollHeight);
    await new Promise((r) => setTimeout(r, 300));
    window.scrollTo(0, 0);
  });
  await wait(800);
}

export async function expandAllCollapsibles(page) {
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

export async function preparePage(page) {
  await waitFonts(page);
  await scrollEndToEnd(page);
  await expandAllCollapsibles(page);
}

/**
 * Visit /market-profiles first and return the captured `<main>` HTML
 * with its own framer-motion animations settled. Does NOT inline
 * computed styles — caller can do that pass once the markup is back
 * in the main page DOM (so any styles that need parent context
 * resolve correctly).
 */
export async function captureMarketProfilesHTML(page, baseUrl) {
  await page.goto(baseUrl + "/market-profiles", {
    waitUntil: "networkidle0",
    timeout: 60000,
  });
  await preparePage(page);
  return await page.evaluate(() => {
    const main = document.querySelector("main");
    if (!main) return "";
    for (const el of main.querySelectorAll("header, nav")) el.remove();
    return main.innerHTML;
  });
}

/**
 * Splice market profile HTML into the main report DOM in place of the
 * "View Market Profiles" CTA card. Idempotent if called twice.
 */
export async function spliceMarketProfiles(page, marketProfilesHtml) {
  await page.evaluate((html) => {
    if (document.getElementById("market-profiles-inline")) return;
    const cta = document.querySelector('a[href="/market-profiles"]');
    if (!cta) {
      const inline = document.createElement("section");
      inline.id = "market-profiles-inline";
      inline.innerHTML = html;
      document.querySelector("main")?.appendChild(inline);
      return;
    }
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
