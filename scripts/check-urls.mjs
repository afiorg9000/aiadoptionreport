#!/usr/bin/env node
/**
 * URL liveness check for all citation entries that have a `url` field
 * in src/data/reportData.ts and src/data/marketProfileReferences.ts.
 *
 * Usage:
 *   node scripts/check-urls.mjs                  # check both files
 *   node scripts/check-urls.mjs --ids 380,521    # only these ids
 *   node scripts/check-urls.mjs --json           # machine-readable output
 *
 * Going-forward policy (from launch-readiness review):
 *   Every URL added or modified in reportData.ts or
 *   marketProfileReferences.ts must be verified in the same commit.
 *   If verification fails in the local sandbox, the commit message
 *   must explicitly flag the URL as "URL UNVERIFIED — needs external
 *   liveness check" rather than shipping silently.
 */
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const args = process.argv.slice(2);
const wantsJson = args.includes("--json");
const idsArgIdx = args.indexOf("--ids");
const filterIds = idsArgIdx >= 0
  ? new Set(args[idsArgIdx + 1].split(",").map(s => parseInt(s.trim(), 10)))
  : null;

const FILES = [
  resolve(ROOT, "src/data/reportData.ts"),
  resolve(ROOT, "src/data/marketProfileReferences.ts"),
];

function extractRefs(file) {
  const text = readFileSync(file, "utf8");
  const re = /\{\s*id:\s*(\d+),[^}]*?(?:url:\s*"([^"]+)")?\s*\}/g;
  const out = [];
  let m;
  while ((m = re.exec(text))) {
    if (m[2]) out.push({ file: file.replace(ROOT + "/", ""), id: +m[1], url: m[2] });
  }
  return out;
}

async function check(url) {
  // Use a realistic browser User-Agent + Accept headers. Many sites
  // (Cloudflare-fronted, Eurostat, Microsoft TechCommunity, etc.) return 404
  // or 403 to script-y headers but 200 to browsers — those are false negatives.
  const ua =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
    "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
  const headers = {
    "User-Agent": ua,
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
  };
  for (const method of ["HEAD", "GET"]) {
    try {
      const c = new AbortController();
      const t = setTimeout(() => c.abort(), 15000);
      const r = await fetch(url, { method, redirect: "follow", signal: c.signal, headers });
      clearTimeout(t);
      if (method === "GET" && r.body) try { await r.body.cancel(); } catch {}
      // HEAD often rejected by Cloudflare-fronted sites; fall back to GET.
      if (method === "HEAD" && [400, 403, 404, 405, 501].includes(r.status)) continue;
      return { status: r.status, redirected: r.url !== url, finalUrl: r.url };
    } catch (e) {
      if (method === "HEAD") continue;
      return { status: "ERR:" + (e.code || e.name || (e.message || "").slice(0, 40)) };
    }
  }
  return { status: "GAVE_UP" };
}

const refs = FILES.flatMap(extractRefs)
  .filter(r => !filterIds || filterIds.has(r.id))
  .sort((a, b) => a.id - b.id);

const results = [];
for (const r of refs) {
  const res = await check(r.url);
  results.push({ ...r, ...res });
  if (!wantsJson) {
    const flag = typeof res.status === "string" || res.status >= 400 ? "  ⚠️" : "";
    console.log(
      [
        String(r.id).padStart(4),
        String(res.status).padEnd(8),
        res.redirected ? "(redir)" : "       ",
        r.file,
        r.url,
        flag,
      ].join("  "),
    );
  }
}

const dead = results.filter(r => typeof r.status === "string" || r.status >= 400);
if (wantsJson) {
  console.log(JSON.stringify({ checked: results.length, dead: dead.length, results }, null, 2));
} else {
  console.log("\n———");
  console.log(`Checked: ${results.length}   Live: ${results.length - dead.length}   Problem: ${dead.length}`);
  if (dead.length) {
    console.log("\nProblem URLs:");
    for (const d of dead) console.log(`  [${d.id}] ${d.status}  ${d.url}`);
    process.exit(1);
  }
}
