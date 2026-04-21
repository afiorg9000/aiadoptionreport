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
    // Strip header/nav.
    for (const el of main.querySelectorAll("header, nav")) el.remove();
    // Strip the "Back to Report" link — it makes no sense once the
    // market profiles content is inlined into the main report.
    for (const a of main.querySelectorAll('a[href="/#section-1-1"]')) {
      a.remove();
    }
    // Also catch any "Back to" anchor by text, in case the href changes.
    for (const a of main.querySelectorAll("a")) {
      const t = (a.textContent || "").trim().toLowerCase();
      if (t === "back to report" || t.startsWith("← back")) a.remove();
    }
    return main.innerHTML;
  });
}

/**
 * Splice market profile HTML into the main report DOM.
 *
 * Strategy: place it as a TOP-LEVEL <section> (peer to section-1,
 * section-3, etc.) right after the section that contained the original
 * CTA, instead of nesting it INSIDE the methodology sub-block. Nesting
 * caused the captured content to inherit the parent section's
 * typography (centered serif headings) and width constraints, so it
 * looked nothing like the live /market-profiles page.
 *
 * Also removes the original CTA card so we don't ship a "View Market
 * Profiles" link pointing into our own document.
 */
export async function spliceMarketProfiles(page, marketProfilesHtml) {
  await page.evaluate((html) => {
    if (document.getElementById("market-profiles-inline")) return;
    const cta = document.querySelector('a[href="/market-profiles"]');

    // Build the wrapper. Aggressive style reset so it doesn't inherit
    // the surrounding section's color/text-align/font even if our move
    // up the tree hits a styled ancestor.
    const wrapper = document.createElement("section");
    wrapper.id = "market-profiles-inline";
    wrapper.setAttribute(
      "style",
      [
        "display: block",
        "width: 100%",
        "margin-top: 48px",
        "padding: 32px 0",
        "background: #ffffff",
        "color: #0f172a",
        "text-align: left",
        "page-break-before: always",
      ].join("; ") + ";",
    );
    wrapper.innerHTML = html;

    // Find the nearest ancestor <section> of the CTA so we can insert
    // the wrapper as its NEXT sibling (peer in the document, not
    // nested inside it).
    let host = cta;
    while (host && host.tagName !== "SECTION") host = host.parentElement;
    if (host && host.parentElement) {
      host.parentElement.insertBefore(wrapper, host.nextSibling);
    } else {
      document.querySelector("main")?.appendChild(wrapper);
    }

    // Remove the original "Explore Individual Market Profiles" card so
    // we don't ship a link that points back into the same document.
    if (cta) {
      let card = cta;
      for (let i = 0; i < 6 && card.parentElement; i++) {
        const cls = card.getAttribute("class") || "";
        if (/rounded-xl|rounded-2xl|bg-gradient/.test(cls)) break;
        card = card.parentElement;
      }
      card?.remove();
    }
  }, marketProfilesHtml);
}
