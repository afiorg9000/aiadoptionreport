# URL liveness verification — recent citation passes

**Generated:** 2026-04-21  
**Scope:** every citation entry added or modified across the recent passes (17-claim Pass 3 + Mexico ID 391 rewrite + ID 380 Sotomo correction + the four new IDs added during pattern fixes).

## Going-forward policy

Every URL added to `src/data/reportData.ts` or `src/data/marketProfileReferences.ts` must be liveness-verified in the same commit that adds it. If verification fails in the agent sandbox, the commit message must explicitly flag the URL as **"URL UNVERIFIED — needs external liveness check"** rather than shipping silently.

The script `scripts/check-urls.mjs` (added in the same commit as this file) automates the check. Usage:

```bash
node scripts/check-urls.mjs                  # all URLs in both data files
node scripts/check-urls.mjs --ids 380,521    # specific ids
node scripts/check-urls.mjs --json           # machine-readable
```

Exit code is non-zero if any URL returns ≥ 400 or errors out, so it can be wired into CI as a precommit / pre-push gate.

## Method (this run)

`HEAD` first, falling back to `GET` on 405 / 403 / 501. 15-second timeout per attempt. Browser User-Agent. Redirects followed.

## Results — 23 URLs, all 200 OK

| ID | URL | HTTP | Notes |
|---:|---|:---:|---|
| 221 | https://trainingmag.com/2023-training-industry-report/ | **200** | clean |
| 253 | https://a16z.com/generative-ai-enterprise-2024/ | **200** | clean |
| 263 | https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025 | **200** | clean |
| 268 | https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching | **200** | redirected within docs.anthropic.com (Anthropic reorganised their docs paths) |
| 302 | https://menlovc.com/perspective/2025-mid-year-llm-market-update/ | **200** | clean |
| 303 | https://www.businesswire.com/news/home/20251021636718/en/Gartner-Survey-Reveals-50-of-Non-U.S.-CIOs-and-Technology-Executives-Anticipate-Changes-to-Vendor-Engagement-Based-on-Regional-Factors | **200** | clean |
| 316 | https://hai.stanford.edu/ai-index/2025-ai-index-report | **200** | clean |
| 319 | https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part | **200** | clean |
| 345 | https://www2.deloitte.com/global/en/about/press-room/gen-ai-survey.html | **200** | redirected within deloitte.com |
| 380 | https://www.kmu.admin.ch/kmu/en/home/new/news/2024/one_in_five_companies_has_already_integrated_ai_into_its_operations.html | **200** | clean |
| 384 | https://www.edstellar.com/blog/skills-in-demand-in-portugal | **200** | clean |
| 390 | https://www.weforum.org/publications/the-future-of-jobs-report-2025/ | **200** | clean |
| 391 | *retired* | — | Marker comment only, no URL. Not in scope. |
| 394 | https://www.microsoft.com/en-us/worklab/work-trend-index/2025-the-year-the-frontier-firm-is-born | **200** | clean |
| 396 | https://media-publications.bcg.com/The-Widening-AI-Value-Gap-Sept-2025.pdf | **200** | clean |
| 397 | https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part | **200** | clean (same URL as 319) |
| 399 | https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/successful-transformations | **200** | clean |
| 400 | https://www.bcg.com/featured-insights/the-leaders-guide-to-transforming-with-ai | **200** | clean |
| 517 | https://ec.europa.eu/eurostat/web/products-eurostat-news/w/ddn-20251216-3 | **200** | clean (added during ID 380 spotlight cite cleanup) |
| 518 | https://news.microsoft.com/source/emea/features/microsoft-south-africa-launches-ai-skilling-initiative-to-train-1-million-people-by-2026/ | **200** | clean (added when splitting ID 390) |
| 519 | https://www.bcg.com/publications/2026/as-ai-investments-surge-ceos-take-the-lead | **200** | clean (added when splitting ID 397) |
| 520 | https://media-publications.bcg.com/The-Widening-AI-Value-Gap-Sept-2025.pdf | **200** | clean (added when splitting ID 399) |
| 521 | https://www.bain.com/es-mx/insights/ai-en-mexico-del-entusiasmo-a-la-escala-real/ | **200** | clean (Mexico ID 391 reframe) |
| 522 | https://www.ey.com/es_mx/ceo/consolidacion-ia-estrategia-ceo-mexico-2026 | **200** | clean (Mexico ID 391 reframe) |

## Summary

- **Total checked:** 23
- **Live (200):** 23
- **Dead / unreachable:** 0
- **Redirects (still 200):** 2 (IDs 268, 345 — both within their own domain, content present)

## Ref 387 — out of scope, still dead

`https://www2.deloitte.com/mx/es/pages/technology/articles/ai-workforce-mexico-2025.html` (Deloitte Mexico / IMCO) returned 404 during the Mexico citation pass (commit `b04c6f71`). The one claim citing 387 was dropped at that time; the ref entry itself is now orphaned and listed in `docs/orphans-to-delete.md` for the upcoming sweep. Not in this report's scope because no recent commit *added* it; it was inherited dead.

## Re-running before launch

Before the launch event, expand the check to cover the entire reference set (not just the recent pass) by simply running `node scripts/check-urls.mjs` — it walks both `reportData.ts` and `marketProfileReferences.ts` and exits non-zero if anything has died in the meantime.
