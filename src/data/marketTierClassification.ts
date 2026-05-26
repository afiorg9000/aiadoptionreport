/**
 * Market maturity tier assignments for Section 1.1 and /market-profiles.
 * Sourced from LLPA Regional Market Profiles — Expanded Edition (~60 markets).
 */

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

/** All classified markets with region grouping for navigation. */
export const marketTierEntries: MarketTierEntry[] = [
  // Europe — Nordic
  { country: "Denmark", tier: 1, region: "Europe", subRegion: "Nordic" },
  { country: "Finland", tier: 1, region: "Europe", subRegion: "Nordic" },
  { country: "Sweden", tier: 1, region: "Europe", subRegion: "Nordic" },
  { country: "Norway", tier: 1, region: "Europe", subRegion: "Nordic" },
  { country: "Iceland", tier: 3, region: "Europe", subRegion: "Nordic" },
  // Europe — Western
  { country: "Netherlands", tier: 1, region: "Europe", subRegion: "Western" },
  { country: "Belgium", tier: 1, region: "Europe", subRegion: "Western" },
  { country: "Luxembourg", tier: 1, region: "Europe", subRegion: "Western" },
  { country: "Germany", tier: 2, region: "Europe", subRegion: "Western" },
  { country: "Austria", tier: 2, region: "Europe", subRegion: "Western" },
  { country: "Switzerland", tier: 1, region: "Europe", subRegion: "Western" },
  { country: "France", tier: 2, region: "Europe", subRegion: "Western" },
  { country: "Ireland", tier: 2, region: "Europe", subRegion: "Western" },
  { country: "United Kingdom", tier: 2, region: "Europe", subRegion: "Western" },
  { country: "Spain", tier: 2, region: "Europe", subRegion: "Western" },
  { country: "Italy", tier: 2, region: "Europe", subRegion: "Western" },
  { country: "Portugal", tier: 3, region: "Europe", subRegion: "Western" },
  // Europe — Central & Eastern
  { country: "Czechia", tier: 3, region: "Europe", subRegion: "Central & Eastern" },
  { country: "Slovakia", tier: 3, region: "Europe", subRegion: "Central & Eastern" },
  { country: "Hungary", tier: 3, region: "Europe", subRegion: "Central & Eastern" },
  { country: "Poland", tier: 4, region: "Europe", subRegion: "Central & Eastern" },
  { country: "Slovenia", tier: 3, region: "Europe", subRegion: "Central & Eastern" },
  { country: "Croatia", tier: 3, region: "Europe", subRegion: "Central & Eastern" },
  { country: "Bulgaria", tier: 4, region: "Europe", subRegion: "Central & Eastern" },
  { country: "Romania", tier: 4, region: "Europe", subRegion: "Central & Eastern" },
  { country: "Serbia", tier: 4, region: "Europe", subRegion: "Balkans" },
  { country: "Albania", tier: 4, region: "Europe", subRegion: "Balkans" },
  { country: "Bosnia and Herzegovina", tier: 4, region: "Europe", subRegion: "Balkans" },
  { country: "Montenegro", tier: 4, region: "Europe", subRegion: "Balkans" },
  { country: "Kosovo", tier: 4, region: "Europe", subRegion: "Balkans" },
  { country: "North Macedonia", tier: 4, region: "Europe", subRegion: "Balkans" },
  { country: "Greece", tier: 4, region: "Europe", subRegion: "Southern" },
  { country: "Turkey", tier: 3, region: "Europe", subRegion: "Southern" },
  { country: "Cyprus", tier: 4, region: "Europe", subRegion: "Southern" },
  // Asia-Pacific
  { country: "Singapore", tier: 1, region: "Asia-Pacific" },
  { country: "Australia", tier: 1, region: "Asia-Pacific" },
  { country: "New Zealand", tier: 1, region: "Asia-Pacific" },
  { country: "Japan", tier: 2, region: "Asia-Pacific" },
  { country: "South Korea", tier: 2, region: "Asia-Pacific" },
  { country: "Taiwan", tier: 2, region: "Asia-Pacific" },
  { country: "China", tier: 2, region: "Asia-Pacific" },
  { country: "India", tier: 2, region: "Asia-Pacific" },
  { country: "Indonesia", tier: 3, region: "Asia-Pacific" },
  { country: "Malaysia", tier: 3, region: "Asia-Pacific" },
  { country: "Thailand", tier: 3, region: "Asia-Pacific" },
  { country: "Vietnam", tier: 3, region: "Asia-Pacific" },
  { country: "Philippines", tier: 4, region: "Asia-Pacific" },
  { country: "Sri Lanka", tier: 4, region: "Asia-Pacific" },
  // Middle East
  { country: "United Arab Emirates", tier: 1, region: "Middle East" },
  { country: "Saudi Arabia", tier: 2, region: "Middle East" },
  { country: "Qatar", tier: 2, region: "Middle East" },
  { country: "Bahrain", tier: 4, region: "Middle East" },
  { country: "Kuwait", tier: 4, region: "Middle East" },
  { country: "Oman", tier: 4, region: "Middle East" },
  { country: "Israel", tier: 2, region: "Middle East" },
  // North America
  { country: "United States", tier: 2, region: "North America" },
  { country: "Canada", tier: 2, region: "North America" },
  { country: "Mexico", tier: 2, region: "North America" },
  { country: "Dominican Republic", tier: 4, region: "North America", subRegion: "Caribbean" },
  { country: "Puerto Rico", tier: 4, region: "North America", subRegion: "Caribbean" },
  // South America
  { country: "Brazil", tier: 2, region: "South America" },
  { country: "Argentina", tier: 3, region: "South America" },
  { country: "Colombia", tier: 3, region: "South America" },
  { country: "Uruguay", tier: 2, region: "South America" },
  // Africa
  { country: "South Africa", tier: 2, region: "Africa" },
  { country: "Morocco", tier: 3, region: "Africa" },
];

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
