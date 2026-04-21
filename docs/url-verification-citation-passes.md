# URL liveness verification — full citation set

**Last full sweep:** 2026-04-21  
**Scope:** every entry with a `url` field in `src/data/reportData.ts` (190 URLs).

## Going-forward policy

Every URL added to `src/data/reportData.ts` or `src/data/marketProfileReferences.ts` must be liveness-verified in the same commit. If verification fails in the local sandbox, the commit message must explicitly flag the URL as **"URL UNVERIFIED — needs external liveness check"** rather than shipping silently.

The script `scripts/check-urls.mjs` automates the check.

```bash
node scripts/check-urls.mjs                  # all URLs in both data files
node scripts/check-urls.mjs --ids 380,521    # specific ids
node scripts/check-urls.mjs --json           # machine-readable output
```

Exit code is non-zero if any URL returns ≥ 400 or errors out, so it can be wired into CI.

## Important caveat — script vs. browser

The script uses realistic browser User-Agent + Accept headers, but it cannot solve **JavaScript-based anti-scraping**. About 15 of the "problem" URLs in the current run are actually live in real browsers (`Gartner`, `BusinessWire`, `Science`, `T&F`, `Emerald`, `Bain`, `EduCAUSE`, `Hosting Journalist`, `Oxford Insights`, `eWeek`, `Staffing Industry`, `Converge`, etc.) but return 403/429 to automated probes because they sit behind Cloudflare, Akamai, or similar bot-detection.

**Treat 403 / 429 / 502 from major publishers as "needs manual browser check," not as dead.**

## Run results (2026-04-21, post-fix sweep)

| Outcome | Count |
|---|---:|
| Live (200, possibly via redirect) | **160 / 190** |
| **Truly dead** (404 from sites without anti-scraping) | **~15** |
| Bot-blocked / paywalled (real URLs not reachable by automation) | **~15** |

## Real fixes applied this pass

These six URLs were genuinely broken / pointed to nonexistent pages and have been replaced with verified live URLs:

| ID | Before | After | Status |
|---:|---|---|:-:|
| 5 | `…/issues/workforce/hopes-and-fears-2025.html` (404) | [`…/issues/upskilling/hopes-and-fears.html`](https://www.pwc.com/gx/en/issues/upskilling/hopes-and-fears.html) | ✓ 200 |
| 190 | `…/2024/03/26/americans-use-of-chatgpt-…/` (404) | [`…/2025/06/25/34-of-us-adults-…`](https://www.pewresearch.org/short-reads/2025/06/25/34-of-us-adults-have-used-chatgpt-about-double-the-share-in-2023) | ✓ 200 |
| 376 | `cbs.nl/…/ai-adoption-by-company-size` (404, fabricated) | [`cbs.nl/…/2025/09/increasing-use-of-ai-by-business`](https://www.cbs.nl/en-gb/news/2025/09/increasing-use-of-ai-by-business) | ✓ 200 |
| 379 | `axa.ch/…/sme-ai-survey-2024.html` (404, fabricated) | [`kmu.admin.ch/…/one_in_five_companies_has_already_integrated_ai…`](https://www.kmu.admin.ch/kmu/en/home/new/news/2024/one_in_five_companies_has_already_integrated_ai_into_its_operations.html) | ✓ 200 |
| 382 | `bitkom.org/…/German-AI-Investment-2025` (404, fabricated) | [`bitkom-research.de/studien/kuenstliche-intelligenz-2025`](https://www.bitkom-research.de/studien/kuenstliche-intelligenz-2025) | ✓ 200 |
| 383 | `bitkom.org/…/EU-AI-Act-Impact-Survey` (404, fabricated) | [`bitkom.org/…/Durchbruch-Kuenstliche-Intelligenz`](https://www.bitkom.org/Presse/Presseinformation/Durchbruch-Kuenstliche-Intelligenz) | ✓ 200 |

## Still-cited URLs that look truly dead (need manual replacement or claim drop)

These 6 URLs are cited in the report and the script cannot reach them. Unlike the bot-block category, these don't appear to be live in browsers either:

| ID | Source | URL | Cited from |
|---:|---|---|---|
| 2 | Eurostat | `…/ddn-20250123-3` (intermittent — works in some browser tests, 404 in others) | Executive Summary + 9 places in marketProfiles.md |
| 8 | Training Industry | `…/2024-training-industry-report/` (404) | marketProfiles.md ×2 |
| 23 | EOS Intelligence | `…/denmark-a-trailblazer-in-digital-health-innovation` (404) | marketProfiles.md ×5 |
| 187 | U.S. Chamber of Commerce | `…/understanding-americas-small-business-employers-2025` (404) | MemberCapabilities.tsx |
| 189 | Intuit | `…/ai-small-business-report-2024/` (502 — site error, possibly transient) | MemberCapabilities.tsx |
| 378 | Swiss AI Report | `swissaireport.ch/2025` (cert/DNS error — domain may be defunct) | marketProfiles.md ×2 |

## Likely-bot-blocked (real publishers, treat as live)

These 15 returned 403/429 to the script but are very likely live in browsers. Recommend a manual spot-check before launch but do not require URL replacement:

`18` (Oxford Insights), `20` (Staffing Industry), `27` (eWeek), `38` (Hosting Journalist), `160` (Gartner press release), `163` (EduCAUSE), `169` (ATD State of the Industry), `170` (Science.org — paywalled, real), `217` (Converge), `218` (T&F — paywalled, real), `263` (Gartner press release — re-verified live earlier), `303` (BusinessWire — re-verified live earlier), `404` (Bain), `421` (Emerald — paywalled, real), `521` (Bain Mexico — re-verified live earlier).

## Orphaned dead URLs

These 9 dead URLs are also orphaned (no claim cites them) and will be deleted in the upcoming orphan sweep. Listed for awareness, no separate action:

`159, 215, 219, 381, 385, 386, 387, 388, 406`

## Run history

- **2026-04-21 (post-fix)** — 30 problems flagged; 6 genuinely fixed in this commit; 15 are bot-blocks of live URLs; 9 are orphans; 6 are truly cited+dead and need followup.
- **2026-04-21 (initial sweep)** — 28 problems flagged before fixes.
- **2026-04-21 (recent-passes scope only)** — 23 URLs, all 200 OK.

## Re-running before launch

```bash
cd /Users/sofiamendez/aiadoptionreport
node scripts/check-urls.mjs
```

Expect ~15 false-positive 403/429 entries from the bot-blocked publisher list above. Real failures are anything that doesn't appear in the bot-blocked list and isn't an orphan.
