import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
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
import { marketProfilesMeta } from "@/data/marketProfilesMeta";
import { typography } from "@/components/report/styles";

const getConfidenceStyles = (confidence: string) => {
  if (/^LOW|LOW\//i.test(confidence)) {
    return {
      badge: "text-llpa-orange border-llpa-orange/30 bg-llpa-orange/10",
      border: "border-l-llpa-orange",
    };
  }
  if (/^MEDIUM/i.test(confidence)) {
    return {
      badge: "text-llpa-yellow border-llpa-yellow/40 bg-llpa-yellow/10",
      border: "border-l-llpa-yellow",
    };
  }
  if (/HIGH/i.test(confidence)) {
    return {
      badge: "text-llpa-green border-llpa-green/30 bg-llpa-green/10",
      border: "border-l-llpa-green",
    };
  }
  return {
    badge: "text-muted-foreground border-border bg-muted",
    border: "border-l-border",
  };
};

const stripCautionHeading = (text: string) =>
  text.replace(/^\*\*One cross-cutting caution\.\*\*\s*/, "");

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
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            <Link
              to="/#section-1-1"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Report
            </Link>

            <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_15rem] xl:gap-10 xl:items-start">
              <div className="min-w-0">
                <motion.header
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-10 pb-8 border-b border-border"
                >
                  <span className="font-body text-xs font-medium tracking-widest uppercase text-llpa-blue mb-3 block">
                    Companion document
                  </span>
                  <h1 className={`${typography.sectionTitle} mb-0`}>
                    {marketProfilesMeta.title}
                  </h1>
                  <p className={`${typography.bodySmall} mt-3`}>
                    67 countries · inline citations · data-confidence flags on each profile
                  </p>
                </motion.header>

                <div className="space-y-16">
                  {Object.entries(groupedProfiles).map(
                    ([region, regionProfiles], regionIndex) => (
                      <motion.section
                        key={region}
                        id={`region-${region.toLowerCase().replace(/\s+/g, "-")}`}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: regionIndex * 0.02 }}
                        className="scroll-mt-28"
                      >
                        <h2 className="font-display text-xl font-semibold text-foreground mb-8">
                          {region}
                        </h2>

                        <div className="space-y-8">
                          {regionProfiles.map((profile) => {
                            const styles = getConfidenceStyles(profile.dataConfidence);
                            return (
                              <article
                                key={profile.country}
                                id={`country-${profile.country.toLowerCase().replace(/\s+/g, "-")}`}
                                className={`scroll-mt-28 border-l-4 ${styles.border} pl-5 sm:pl-6`}
                              >
                                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-3">
                                  <h3 className="font-display text-lg font-semibold text-foreground">
                                    {profile.country}
                                  </h3>
                                  <span className="text-muted-foreground text-sm">—</span>
                                  <span
                                    className={`text-[11px] font-medium uppercase tracking-wide px-2 py-0.5 rounded border ${styles.badge}`}
                                  >
                                    {profile.dataConfidence}
                                  </span>
                                </div>

                                <div
                                  className={`space-y-4 text-[15px] leading-[1.75] text-muted-foreground ${
                                    profile.brief ? "italic" : ""
                                  }`}
                                >
                                  {profile.paragraphs.map((paragraph, i) => (
                                    <p key={i}>
                                      <MarketProfileCitation text={paragraph} />
                                    </p>
                                  ))}
                                </div>
                              </article>
                            );
                          })}
                        </div>
                      </motion.section>
                    ),
                  )}
                </div>

                {marketProfilesMeta.caution && (
                  <motion.section
                    id="reading-the-profiles"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 pt-10 border-t border-border scroll-mt-28"
                  >
                    <div className="rounded-xl border border-border bg-muted/30 p-6 sm:p-8">
                      <p className="font-semibold text-foreground flex items-center gap-2 mb-4 text-sm">
                        <BookOpen className="w-4 h-4 text-llpa-blue shrink-0" />
                        Reading the profiles
                      </p>
                      <p className={`${typography.bodySmall} text-[15px] leading-[1.75]`}>
                        <MarketProfileCitation
                          text={stripCautionHeading(
                            marketProfilesMeta.caution.replace(/\n---$/, ""),
                          )}
                        />
                      </p>
                    </div>
                  </motion.section>
                )}

                <div id="references" className="scroll-mt-28">
                  <MarketProfileReferences embedded />
                </div>
              </div>

              <MarketProfileSidebar groupedProfiles={groupedProfiles} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </PrintProvider>
  );
};

export default MarketProfiles;
