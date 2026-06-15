/**
 * Parse src/data/marketProfilesExpanded.md → marketProfilesData.ts + meta
 *
 * Cited Edition format:
 *   ## Europe — Nordic
 *   ### Denmark — *HIGH*
 *   Two paragraphs...
 *
 * Usage: node scripts/parse-market-profiles-expanded.mjs
 */

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const inputPath = join(root, "src/data/marketProfilesExpanded.md");
const outputPath = join(root, "src/data/marketProfilesData.ts");
const metaPath = join(root, "src/data/marketProfilesMeta.ts");
const tierPath = join(root, "src/data/marketTierClassification.ts");

const TIER_BY_COUNTRY = {
  Denmark: 1, Finland: 1, Sweden: 1, Norway: 1, Iceland: 3,
  Netherlands: 1, Belgium: 1, Luxembourg: 1, Germany: 2, Austria: 2,
  Switzerland: 1, France: 2, Ireland: 2, "United Kingdom": 2, Spain: 2,
  Italy: 2, Portugal: 3,
  Czechia: 3, Slovakia: 3, Hungary: 3, Poland: 4, Slovenia: 3,
  Croatia: 3, Bulgaria: 4, Romania: 4, Serbia: 4, Albania: 4,
  "Bosnia and Herzegovina": 4, Montenegro: 4, Kosovo: 4,
  "North Macedonia": 4, Greece: 4, Turkey: 3, Cyprus: 4,
  Singapore: 1, Australia: 1, "New Zealand": 1, Japan: 2, "South Korea": 2,
  Taiwan: 2, China: 2, India: 2, "Hong Kong": 3, Indonesia: 3,
  Malaysia: 3, Thailand: 3, Vietnam: 3, Philippines: 4, "Sri Lanka": 4,
  "United Arab Emirates": 1, "Saudi Arabia": 2, Qatar: 2, Bahrain: 4,
  Kuwait: 4, Oman: 4, Israel: 2,
  "United States": 2, Canada: 2, Mexico: 2, "Dominican Republic": 4,
  "Puerto Rico": 4,
  Brazil: 2, Argentina: 3, Colombia: 3, Uruguay: 2,
  "South Africa": 2, Morocco: 3,
};

const TIER_LABELS = { 1: "Leader", 2: "Advanced", 3: "Emerging", 4: "Nascent" };

function normalizeSubRegion(name) {
  if (!name) return undefined;
  const trimmed = name.trim();
  if (/^central & eastern$/i.test(trimmed)) return "Central & Eastern";
  if (/^nordic$/i.test(trimmed)) return "Nordic";
  if (/^western$/i.test(trimmed)) return "Western";
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
}

function parseRegionHeader(title) {
  if (/^references$/i.test(title)) return null;
  if (/^enterprise ai adoption/i.test(title)) return null;

  if (/^Europe\s*—\s*(.+)/i.test(title)) {
    return { region: "Europe", subRegion: normalizeSubRegion(title.split("—")[1]) };
  }
  if (/^Asia-Pacific$/i.test(title)) return { region: "Asia-Pacific" };
  if (/^Middle East$/i.test(title)) return { region: "Middle East" };
  if (/^North America$/i.test(title)) return { region: "North America" };
  if (/^South America$/i.test(title)) return { region: "South America" };
  if (/^Africa$/i.test(title)) return { region: "Africa" };
  return null;
}

function parseIntro(md) {
  const titleMatch = md.match(/^# (.+)$/m);
  const title = titleMatch?.[1]?.trim() || "67 Market Profiles on Adoption";

  const introEnd = md.search(/\n---\n\n## /);
  const introBlock = introEnd > 0 ? md.slice(0, introEnd) : "";
  const withoutTitle = introBlock.replace(/^# .+\n+/, "").trim();

  let subtitle = "";
  let caution = "";

  if (/^\*\*One cross-cutting caution\.\*\*/.test(withoutTitle)) {
    caution = withoutTitle.trim();
  } else {
    const [subtitleRaw, cautionRaw] = withoutTitle.split(/\n\n(?=\*\*One cross-cutting caution\.\*\*)/);
    subtitle = subtitleRaw?.replace(/^\*|\*$/g, "").trim() || "";
    caution = cautionRaw?.trim() || "";
  }

  const summaryMatch = md.match(/\*Data-confidence summary:[\s\S]*?gap is explained\.\*/);
  const referencesSummary = summaryMatch?.[0]?.replace(/^\*|\*$/g, "") || "";

  return { title, subtitle, description: subtitle, caution, referencesSummary };
}

function isStructuralParagraph(p) {
  if (p === "---") return true;
  if (/^## .+$/.test(p)) return true;
  return false;
}

function parseProfiles(md) {
  const profiles = [];
  const regionRe = /^## (.+)$/gm;
  const countryRe = /^### (.+?) — \*(.+)\*\s*$/gm;

  const regionHeaders = [];
  let m;
  while ((m = regionRe.exec(md)) !== null) {
    const parsed = parseRegionHeader(m[1]);
    if (parsed) regionHeaders.push({ ...parsed, index: m.index });
  }

  const countryHeaders = [];
  while ((m = countryRe.exec(md)) !== null) {
    countryHeaders.push({
      country: m[1].trim(),
      dataConfidence: m[2].trim(),
      index: m.index,
      len: m[0].length,
    });
  }

  for (let i = 0; i < countryHeaders.length; i++) {
    const h = countryHeaders[i];
    const start = h.index + h.len;
    const end =
      i + 1 < countryHeaders.length
        ? countryHeaders[i + 1].index
        : md.search(/\n## References\n/i) !== -1
          ? md.search(/\n## References\n/i)
          : md.length;
    let body = md.slice(start, end).trim();
    const paragraphs = body
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean)
      .filter((p) => !isStructuralParagraph(p));

    const lastRegion = regionHeaders.filter((rh) => rh.index < h.index).pop();
    const tier = TIER_BY_COUNTRY[h.country] || 3;

    profiles.push({
      country: h.country,
      dataConfidence: h.dataConfidence,
      region: lastRegion?.region || "Global",
      subRegion: lastRegion?.subRegion,
      tier,
      tierLabel: TIER_LABELS[tier] || "Emerging",
      paragraphs,
      brief: /^LOW/i.test(h.dataConfidence) && paragraphs.length <= 1,
    });
  }

  return profiles;
}

async function main() {
  const md = await readFile(inputPath, "utf8");
  const meta = parseIntro(md);
  const profiles = parseProfiles(md);
  console.log(`Parsed ${profiles.length} country profiles`);

  const dataOut = `/* AUTO-GENERATED by scripts/parse-market-profiles-expanded.mjs — do not edit by hand */

export interface MarketProfile {
  region: string;
  subRegion?: string;
  country: string;
  dataConfidence: string;
  tier: number;
  tierLabel: string;
  paragraphs: string[];
  brief?: boolean;
}

export const marketProfiles: MarketProfile[] = ${JSON.stringify(profiles, null, 2)};
`;

  const metaOut = `/* AUTO-GENERATED by scripts/parse-market-profiles-expanded.mjs — do not edit by hand */

export const marketProfilesMeta = ${JSON.stringify(meta, null, 2)};
`;

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

  await writeFile(outputPath, dataOut);
  await writeFile(metaPath, metaOut);
  await writeFile(tierPath, tierOut);
  console.log(`Wrote ${outputPath}`);
  console.log(`Wrote ${metaPath}`);
  console.log(`Wrote ${tierPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
