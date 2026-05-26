/**
 * Parse src/data/marketProfilesExpanded.md → src/data/marketProfilesData.ts
 *
 * Usage: node scripts/parse-market-profiles-expanded.mjs
 */

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const inputPath = join(root, "src/data/marketProfilesExpanded.md");
const outputPath = join(root, "src/data/marketProfilesData.ts");
const tierPath = join(root, "src/data/marketTierClassification.ts");

function slugCountry(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function parseBullets(block) {
  return block
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.startsWith("- "))
    .map((l) => l.replace(/^-\s+/, "").replace(/\*\*/g, "").trim());
}

function parseStats(block) {
  return parseBullets(block).map((line) => {
    const m = line.match(/^(.+?):\s*(.+)$/);
    if (m) return { label: m[1].trim(), value: m[2].trim() };
    return { label: line, value: "" };
  });
}

function parseComparative(block) {
  const inRegion =
    block.match(/\*\*In Europe:\*\*\s*([\s\S]*?)(?=\n-\s*\*\*Globally|\n\*\*Globally|$)/i)?.[1]?.trim() ||
    block.match(/\*\*In Asia-Pacific:\*\*\s*([\s\S]*?)(?=\n-\s*\*\*Globally|\n\*\*Globally|$)/i)?.[1]?.trim() ||
    block.match(/\*\*In (?:Latin America|Middle East|Africa|North America|South America|Caribbean)[^:]*:\*\*\s*([\s\S]*?)(?=\n-\s*\*\*Globally|\n\*\*Globally|$)/i)?.[1]?.trim() ||
    block.match(/\*\*In region:\*\*\s*([\s\S]*?)(?=\n-\s*\*\*Globally|\n\*\*Globally|$)/i)?.[1]?.trim() ||
    "";
  const globally =
    block.match(/\*\*Globally:\*\*\s*([\s\S]*?)$/i)?.[1]?.trim() ||
    block.match(/Globally:\s*([\s\S]*?)$/i)?.[1]?.trim() ||
    "";
  const clean = (s) =>
    s
      .replace(/^-\s+/, "")
      .replace(/\n---[\s\S]*$/, "")
      .trim();
  return { inRegion: clean(inRegion), globally: clean(globally) };
}

function parseProfile(body, meta) {
  const sections = {};
  const re = /^### (.+)$/gm;
  let match;
  const headers = [];
  while ((match = re.exec(body)) !== null) {
    headers.push({ title: match[1].trim(), index: match.index, len: match[0].length });
  }
  for (let i = 0; i < headers.length; i++) {
    const start = headers[i].index + headers[i].len;
    const end = i + 1 < headers.length ? headers[i + 1].index : body.length;
    sections[headers[i].title.toLowerCase()] = body.slice(start, end).trim();
  }

  const partnerMatch = body.match(/\*\*LLPA partner:\s*([^*]+)\*\*/i);
  const qualityMatch = body.match(/Data quality:\s*(\w+)/i);

  return {
    ...meta,
    partner: partnerMatch?.[1]?.trim() || null,
    dataQuality: qualityMatch?.[1] || null,
    stats: parseStats(sections["current statistics (2025 reference year)"] || sections["current statistics"] || ""),
    marketInsights: (sections["market insights"] || "").replace(/\n/g, " ").trim(),
    strengths: parseBullets(sections["strengths"] || ""),
    weaknesses: parseBullets(sections["weaknesses"] || ""),
    comparativeContext: parseComparative(sections["comparative context"] || ""),
  };
}

function parseMarkdown(md) {
  const profiles = [];
  let region = "Global";
  let subRegion;

  const regionRe = /^# (.+)$/gm;
  const countryRe = /^## (.+?) — Tier (\d) \((\w+)\)([^\n]*)/gm;

  const regionHeaders = [];
  let m;
  while ((m = regionRe.exec(md)) !== null) {
    if (!m[1].startsWith("LLPA") && !m[1].includes("CONSOLIDATED") && !m[1].includes("USING")) {
      regionHeaders.push({ title: m[1], index: m.index });
    }
  }

  const countryHeaders = [];
  while ((m = countryRe.exec(md)) !== null) {
    const tail = m[4] || "";
    countryHeaders.push({
      country: m[1].trim(),
      tier: Number(m[2]),
      tierLabel: m[3],
      estimated: /\[estimated\]/i.test(tail),
      subtitle: tail.includes("—")
        ? tail.replace(/\[estimated\]/gi, "").replace(/^[\s—]+/, "").trim() || undefined
        : undefined,
      index: m.index,
      len: m[0].length,
    });
  }

  for (let i = 0; i < countryHeaders.length; i++) {
    const h = countryHeaders[i];
    const start = h.index + h.len;
    const end = i + 1 < countryHeaders.length ? countryHeaders[i + 1].index : md.length;
    let body = md.slice(start, end);
    // Stop at horizontal rule before consolidated index / appendix sections
    const appendix = body.search(/\n---\n\n# (?:CONSOLIDATED|DATA QUALITY|PARTNER|USING THESE)/);
    if (appendix !== -1) body = body.slice(0, appendix);
    body = body.trim();

    // Find region header before this country
    let r = "Global";
    let sr;
    for (const rh of regionHeaders) {
      if (rh.index < h.index) {
        const t = rh.title;
        if (t.includes("—")) {
          const parts = t.split("—").map((s) => s.trim());
          r = parts[0].replace(/^EUROPE\s*/, "Europe").replace(/^ASIA-PACIFIC/, "Asia-Pacific").replace(/^MIDDLE EAST/, "Middle East").replace(/^NORTH AMERICA/, "North America").replace(/^SOUTH AMERICA/, "South America").replace(/^AFRICA/, "Africa");
          sr = parts[1] || undefined;
        } else if (t.startsWith("EUROPE")) {
          r = "Europe";
          sr = t.replace(/^EUROPE\s*—\s*/, "").trim() || undefined;
        } else if (t === "ASIA-PACIFIC") r = "Asia-Pacific";
        else if (t === "MIDDLE EAST") r = "Middle East";
        else if (t === "NORTH AMERICA") r = "North America";
        else if (t === "SOUTH AMERICA") r = "South America";
        else if (t === "AFRICA") r = "Africa";
      }
    }

    // Normalize region names from headers like "# EUROPE — NORDIC"
    const lastRegion = regionHeaders.filter((rh) => rh.index < h.index).pop();
    if (lastRegion) {
      const t = lastRegion.title;
      if (/^EUROPE\s*—\s*(.+)/i.test(t)) {
        r = "Europe";
        sr = t.replace(/^EUROPE\s*—\s*/i, "").trim();
        sr = sr.charAt(0) + sr.slice(1).toLowerCase();
        if (sr === "Central & eastern") sr = "Central & Eastern";
        if (sr === "Nordic") sr = "Nordic";
        if (sr === "Western") sr = "Western";
      } else if (t === "ASIA-PACIFIC") {
        r = "Asia-Pacific";
        sr = undefined;
      } else if (t === "MIDDLE EAST") {
        r = "Middle East";
      } else if (t === "NORTH AMERICA") {
        r = "North America";
      } else if (t === "SOUTH AMERICA") {
        r = "South America";
      } else if (t === "AFRICA") {
        r = "Africa";
      }
    }

    profiles.push(
      parseProfile(body, {
        country: h.country,
        tier: h.tier,
        tierLabel: h.tierLabel,
        region: r,
        subRegion: sr,
        estimated: h.estimated || false,
        subtitle: h.subtitle,
      }),
    );
  }

  return profiles;
}

function esc(s) {
  return JSON.stringify(s);
}

async function main() {
  const md = await readFile(inputPath, "utf8");
  const profiles = parseMarkdown(md);
  console.log(`Parsed ${profiles.length} country profiles`);

  const out = `/* AUTO-GENERATED by scripts/parse-market-profiles-expanded.mjs — do not edit by hand */

export interface MarketProfile {
  region: string;
  subRegion?: string;
  country: string;
  tier: number;
  tierLabel: string;
  partner?: string | null;
  dataQuality?: string | null;
  estimated?: boolean;
  subtitle?: string;
  stats: { label: string; value: string }[];
  marketInsights: string;
  strengths: string[];
  weaknesses: string[];
  comparativeContext: { inRegion: string; globally: string };
}

export const marketProfiles: MarketProfile[] = ${JSON.stringify(profiles, null, 2)};
`;

  await writeFile(outputPath, out);
  console.log(`Wrote ${outputPath}`);

  const tierOut = `/* AUTO-GENERATED by scripts/parse-market-profiles-expanded.mjs — do not edit by hand */

export type MarketTier = 1 | 2 | 3 | 4;

export const tierLabels: Record<MarketTier, string> = {
  1: "Leader",
  2: "Advanced",
  3: "Emerging",
  4: "Nascent",
};

export interface MarketTierEntry {
  country: string;
  tier: MarketTier;
  region: string;
  subRegion?: string;
}

export const marketTierEntries: MarketTierEntry[] = ${JSON.stringify(
    profiles.map((p) => ({
      country: p.country,
      tier: p.tier,
      region: p.region,
      ...(p.subRegion ? { subRegion: p.subRegion } : {}),
    })),
    null,
    2,
  )};

export const tierDistributionSummary = ([1, 2, 3, 4] as MarketTier[]).map((tier) => {
  const markets = marketTierEntries.filter((e) => e.tier === tier).map((e) => e.country);
  return {
    tier,
    name: tierLabels[tier],
    markets,
    count: markets.length,
  };
});

export const totalClassifiedMarkets = marketTierEntries.length;
`;

  await writeFile(tierPath, tierOut);
  console.log(`Wrote ${tierPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
