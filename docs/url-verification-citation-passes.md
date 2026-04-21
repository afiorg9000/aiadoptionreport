# URL liveness verification — full citation set

**Last full sweep:** 2026-04-20 (28-URL sweep commit)  
**Scope:** every entry with a `url` field in `src/data/reportData.ts` and `src/data/marketProfileReferences.ts` (170 URLs after sweep; was 190).

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

## Run results (2026-04-20, post-28-URL-sweep)

| Outcome | Count |
|---|---:|
| Live (200, possibly via redirect) | **162 / 170** |
| Bot-blocked / paywalled / rate-limited (real URLs, flagged in description field) | **8** |
| Truly dead, still cited | **0** |
| Deleted this pass (dead URL + orphan) | **20** |

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

## 28-URL sweep (2026-04-20) — action log

Per-ID resolution of every URL flagged by the sweep:

| ID | Action | New URL / note | Verification |
|---:|---|---|:-:|
| 2 | DROPPED (orphan) | deleted entry; Eurostat claim already sourced via ID 10 in prose | n/a |
| 8 | DROPPED (orphan) | Training Industry report — not cited in any prose | n/a |
| 18 | KEPT-NOTE | Oxford Insights AI Readiness Index — Cloudflare bot-block; description now notes "verified live in browser" | browser 200 |
| 20 | DROPPED (orphan) | Staffing Industry — orphan with Cloudflare 403 | n/a |
| 23 | DROPPED (orphan) | EOS Intelligence — URL was truly 404 in browser and orphan | n/a |
| 27 | DROPPED (orphan) | eWeek — orphan with Cloudflare 403 | n/a |
| 38 | DROPPED (orphan) | HostingJournalist — orphan with Cloudflare 403 | n/a |
| 129 | FIXED-METHOD | Microsoft TechCommunity — HEAD→GET fallback already exists in `check-urls.mjs`; no longer flagged in current run | script 200 |
| 159 | DROPPED (orphan) | Deloitte state-of-ai-2024 — real 404 + orphan | n/a |
| 160 | KEPT-NOTE | Gartner "cloud business necessity 2028" — Cloudflare bot-block; note added | browser 200 |
| 163 | KEPT-NOTE | EDUCAUSE AI literacy — Cloudflare bot-block; note added | browser 200 |
| 169 | KEPT-NOTE | ATD State of the Industry — 429 rate-limit; note added | browser 200 |
| 170 | KEPT-PAYWALL | Science (AAAS) — paywall note added to description | browser 200 (paywall) |
| 187 | SWAPPED | `https://www.uschamber.com/assets/documents/Empowering-Small-Business-Report-2025.pdf` | fetched 200 on 2026-04-20 |
| 189 | SWAPPED | `https://quickbooks.intuit.com/r/small-business-data/small-business-insights/` (original Intuit URL returned persistent 502; canonical replacement covers the same claim with updated 2026 data) | fetched 200 on 2026-04-20 |
| 215 | DROPPED (orphan) | Prem AI — real 404 + orphan | n/a |
| 217 | DROPPED (orphan) | Converge — orphan with Cloudflare 403 | n/a |
| 218 | DROPPED (orphan) | Taylor & Francis — orphan with paywall 403 | n/a |
| 219 | DROPPED (orphan) | BigSur.ai — orphan with SSL/DNS error | n/a |
| 263 | KEPT-NOTE | Gartner "30% of GenAI projects abandoned" — Cloudflare bot-block; note added | browser 200 |
| 303 | KEPT-NOTE | BusinessWire Gartner CIO survey — Cloudflare bot-block; note added | browser 200 |
| 378 | DROPPED (orphan) | `swissaireport.ch` — domain dead + orphan. The actual Swiss AI Report 2025 lives at corpin.ch but was never cited in prose, so no swap needed. | n/a |
| 381 | DROPPED (orphan) | Bitkom AI-Adoption-Germany — fabricated URL + orphan. Real Bitkom research is already cited via IDs 382, 383. | n/a |
| 385 | DROPPED (orphan) | OpenAI "enterprise adoption-report-2025" — fabricated URL + orphan | n/a |
| 386 | DROPPED (orphan) | DCDT (South Africa) — fabricated gov URL + orphan. Real South African skilling claim is sourced via ID 518 (Microsoft SA Skilling Initiative). | n/a |
| 387 | DROPPED (orphan) | Deloitte Mexico — already retired during Mexico rewrite (commit `b04c6f71`); now deleted. | n/a |
| 388 | DROPPED (orphan) | MCTI (Brazil) — fabricated gov URL + orphan. Real PBIA plan is sourced separately via other citations; no swap needed. | n/a |
| 404 | DROPPED (orphan) | Bain talent gap release — orphan with Cloudflare 403 | n/a |
| 406 | DROPPED (orphan) in `reportData.ts`; SWAPPED in `marketProfileReferences.ts` | `marketProfileReferences.ts#406` now points to canonical `https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2025/singapore-digital-economy` | fetched 200 on 2026-04-20 |
| 421 | DROPPED (orphan) | Emerald — orphan with paywall 403 | n/a |
| 521 | KEPT-NOTE | Bain Mexico — Cloudflare bot-block; note added | browser 200 |

Additional swap in `marketProfileReferences.ts`:

| ID | Action | New URL | Verification |
|---:|---|---|:-:|
| 2 (mpr) | SWAPPED | `https://investindk.com/insights/denmark-tops-europe-in-ai-adoption-a-testbed-for-tomorrows-ai-breakthroughs` | fetched 200 on 2026-04-20 |

**Totals:** 2 SWAPPED in `reportData.ts` + 2 SWAPPED in `marketProfileReferences.ts`; 20 DROPPED (orphans); 8 KEPT-NOTE; 1 FIXED-METHOD (no change needed).

No cited claims were removed — every DROPPED entry was already an orphan, so there was nothing to rewrite in the surrounding prose.

## Run history

- **2026-04-20 (28-URL sweep)** — 170 checked / 162 live / 8 flagged. All 8 flagged are in the KEPT-NOTE / KEPT-PAYWALL / KEPT-NOTE-RATE-LIMITED categories with explanatory notes embedded in the reference `description` field.
- **2026-04-21 (post-fix)** — 30 problems flagged; 6 genuinely fixed; 15 bot-blocks of live URLs; 9 orphans; 6 truly cited+dead and followup needed.
- **2026-04-21 (initial sweep)** — 28 problems flagged before fixes.
- **2026-04-21 (recent-passes scope only)** — 23 URLs, all 200 OK.

## Re-running before launch

```bash
cd /Users/sofiamendez/aiadoptionreport
node scripts/check-urls.mjs
```

Expect **8 flagged entries** in the current state (IDs 18, 160, 163, 169, 170, 263, 303, 521), all with explanatory notes in their reference descriptions. Any new failures outside this set are real regressions.
