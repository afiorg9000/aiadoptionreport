import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Globe,
  Building2,
  TrendingUp,
  AlertTriangle,
  Users,
  BarChart3,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import { PrintProvider } from "@/contexts/PrintContext";
import Header from "@/components/report/Header";
import Footer from "@/components/report/Footer";
import MarketProfileCitation from "@/components/report/MarketProfileCitation";
import MarketProfileReferences from "@/components/report/MarketProfileReferences";
import MarketProfileSidebar from "@/components/report/MarketProfileSidebar";
import {
  marketProfiles,
  type MarketProfile,
} from "@/data/marketProfilesData";
import {
  tierDistributionSummary,
  totalClassifiedMarkets,
} from "@/data/marketTierClassification";

const getTierColor = (tier: number) => {
  switch (tier) {
    case 1:
      return "bg-llpa-green/15 text-llpa-green border-llpa-green/30";
    case 2:
      return "bg-llpa-blue/15 text-llpa-blue border-llpa-blue/30";
    case 3:
      return "bg-llpa-yellow/15 text-llpa-yellow border-llpa-yellow/30";
    case 4:
      return "bg-llpa-orange/15 text-llpa-orange border-llpa-orange/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const MarketProfiles = () => {
  const groupedProfiles = marketProfiles.reduce(
    (acc, profile) => {
      const key = profile.subRegion
        ? `${profile.region} — ${profile.subRegion}`
        : profile.region;
      if (!acc[key]) acc[key] = [];
      acc[key].push(profile);
      return acc;
    },
    {} as Record<string, MarketProfile[]>,
  );

  return (
    <PrintProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Link
              to="/#section-1-1"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Report
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Regional Market Profiles
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-4">
                Comprehensive AI Adoption Analysis by Country, with Local Training
                Provider Mapping
              </p>
              <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mb-8">
                Expanded edition covering {totalClassifiedMarkets} markets across
                Europe, Asia-Pacific, the Americas, the Middle East, and Africa —
                enterprise adoption statistics, strengths, weaknesses, comparative
                context, and LLPA-affiliated local training providers where mapped.
              </p>

              <div className="bg-muted/40 border border-border rounded-lg p-6 mb-8 text-sm text-muted-foreground leading-relaxed space-y-3">
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-llpa-blue" />
                  Methodology & data quality
                </p>
                <p>
                  EU markets anchor on Eurostat ICT Enterprise Survey (December
                  2025, reference year 2025). Non-EU markets draw on OECD, Microsoft
                  AI Diffusion (H2 2025), Stanford HAI, ILIA, BCG GCC, and national
                  offices. Tier thresholds follow Section 1.1 (Tier 1: 40%+; Tier 2:
                  25–40%; Tier 3: 15–25%; Tier 4: &lt;15%). Profiles marked{" "}
                  <span className="text-foreground font-medium">[estimated]</span>{" "}
                  use best-available proxies where harmonised enterprise data is
                  unavailable.
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-steel" />
                  Tier distribution ({totalClassifiedMarkets} markets)
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-foreground">
                        <th className="text-left py-3 pr-4 font-semibold text-foreground">
                          Tier
                        </th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">
                          Count
                        </th>
                        <th className="text-left py-3 pl-4 font-semibold text-foreground">
                          Markets
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tierDistributionSummary.map((row) => (
                        <tr key={row.tier} className="border-b border-border">
                          <td className="py-3 pr-4 font-medium text-foreground">
                            Tier {row.tier} ({row.name})
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {row.count}
                          </td>
                          <td className="py-3 pl-4 text-muted-foreground">
                            {row.markets.join(", ")}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-muted/30">
                        <td className="py-3 pr-4 font-semibold text-foreground">
                          Total
                        </td>
                        <td className="py-3 px-4 font-semibold text-foreground">
                          {totalClassifiedMarkets}
                        </td>
                        <td className="py-3 pl-4 text-muted-foreground">
                          classified markets across 4 tiers
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            <div className="flex gap-8">
              <div className="flex-1 min-w-0">
                {Object.entries(groupedProfiles).map(
                  ([region, regionProfiles], regionIndex) => (
                    <motion.section
                      key={region}
                      id={`region-${region.toLowerCase().replace(/\s+/g, "-")}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + regionIndex * 0.05 }}
                      className="mb-12 scroll-mt-24"
                    >
                      <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Globe className="w-6 h-6 text-steel" />
                        {region}
                      </h2>

                      <div className="space-y-6">
                        {regionProfiles.map((profile) => (
                          <div
                            key={profile.country}
                            id={`country-${profile.country.toLowerCase().replace(/\s+/g, "-")}`}
                            className="border border-border rounded-lg overflow-hidden bg-card scroll-mt-24"
                          >
                            <div className="p-6 border-b border-border bg-muted/30">
                              <div className="flex flex-wrap items-start justify-between gap-4">
                                <div>
                                  <div className="flex flex-wrap items-center gap-3 mb-2">
                                    <h3 className="text-xl font-bold text-foreground">
                                      {profile.country}
                                    </h3>
                                    <span
                                      className={`px-3 py-1 text-xs font-medium rounded-full border ${getTierColor(profile.tier)}`}
                                    >
                                      Tier {profile.tier}: {profile.tierLabel}
                                    </span>
                                    {profile.dataQuality && (
                                      <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground border border-border">
                                        Data: {profile.dataQuality}
                                      </span>
                                    )}
                                  </div>
                                  {profile.partner && (
                                    <p className="text-sm text-muted-foreground">
                                      <span className="font-medium text-foreground">
                                        LLPA partner:
                                      </span>{" "}
                                      {profile.partner}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="p-6 space-y-6">
                              <div>
                                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                                  <TrendingUp className="w-4 h-4 text-steel" />
                                  Current statistics (2025 reference year)
                                </h4>
                                <div className="grid gap-2">
                                  {profile.stats.map((stat, i) => (
                                    <div
                                      key={i}
                                      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 text-sm"
                                    >
                                      <span className="text-muted-foreground">
                                        {stat.label}:
                                      </span>
                                      <span className="font-medium text-foreground">
                                        <MarketProfileCitation text={stat.value} />
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3 flex items-center gap-2">
                                  <Users className="w-4 h-4 text-steel" />
                                  Market insights
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  <MarketProfileCitation text={profile.marketInsights} />
                                </p>
                              </div>

                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <h4 className="text-sm font-semibold text-emerald-700 uppercase tracking-wide mb-3">
                                    Strengths
                                  </h4>
                                  <ul className="space-y-2">
                                    {profile.strengths.map((strength, i) => (
                                      <li
                                        key={i}
                                        className="text-sm text-muted-foreground flex gap-2"
                                      >
                                        <span className="text-emerald-600 mt-1">✓</span>
                                        <span>
                                          <MarketProfileCitation text={strength} />
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h4 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4" />
                                    Weaknesses
                                  </h4>
                                  <ul className="space-y-2">
                                    {profile.weaknesses.map((weakness, i) => (
                                      <li
                                        key={i}
                                        className="text-sm text-muted-foreground flex gap-2"
                                      >
                                        <span className="text-red-600 mt-1">•</span>
                                        <span>
                                          <MarketProfileCitation text={weakness} />
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <div className="pt-4 border-t border-border">
                                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
                                  Comparative context
                                </h4>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="font-medium text-foreground">
                                      Regional:
                                    </span>
                                    <p className="text-muted-foreground mt-1">
                                      <MarketProfileCitation
                                        text={profile.comparativeContext.inRegion}
                                      />
                                    </p>
                                  </div>
                                  <div>
                                    <span className="font-medium text-foreground">
                                      Globally:
                                    </span>
                                    <p className="text-muted-foreground mt-1">
                                      <MarketProfileCitation
                                        text={profile.comparativeContext.globally}
                                      />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.section>
                  ),
                )}
              </div>

              <MarketProfileSidebar groupedProfiles={groupedProfiles} />
            </div>
          </div>

          <div id="references">
            <MarketProfileReferences />
          </div>
        </main>
        <Footer />
      </div>
    </PrintProvider>
  );
};

export default MarketProfiles;
