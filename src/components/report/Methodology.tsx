import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { typography } from "./styles";
import CitationLink from "./CitationLink";

const evidenceTiers = [
  {
    tier: "Tier A (high confidence)",
    description:
      "Official government statistics (Eurostat, US Census BTOS, UK ONS, Statistics Canada) and peer-reviewed studies. Headline claims rest here.",
  },
  {
    tier: "Tier B (moderate)",
    description:
      "Major analyst and consulting surveys (Gartner, McKinsey, BCG, Deloitte, PwC) with disclosed methodology and large samples.",
  },
  {
    tier: "Tier C (low — directional only)",
    description:
      "Vendor surveys, self-selected online polls, single-market commercial samples, aggregated forecasts, and LLPA\u2019s own member-survey observations \u2014 the latter a small, non-random sample of member training providers reporting on their own clients. Used for color and field texture, never to anchor a conclusion.",
  },
];

const Methodology = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="methodology" className="bg-muted/40 border-t border-border">
      <div className="container">
        <div className="max-w-4xl mx-auto">

          {/* Trigger button */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
              Publisher Disclosure &amp; How to Read This Report
            </span>
            <ChevronDown
              className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Collapsible content */}
          {open && (
            <div className="pb-12 space-y-12 border-t border-border/50 pt-8">

              {/* Publisher Disclosure */}
              <div id="publisher-disclosure">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  Publisher disclosure
                </h2>

                <p className={`${typography.body} mb-4`}>
                  This report is published by LLPA (Leading Learning Partners Association), a consortium of leading IT training centres — each a top IT training company in its country — delivering multi-vendor training solutions worldwide, in any language.
                  LLPA's members earn revenue when organizations purchase AI training and
                  implementation services. That is a direct interest in the conclusions of any
                  report about whether — and how — organizations should invest in AI capability.
                </p>

                <p className={`${typography.body}`}>
                  We disclose this because it is the single most important thing a reader needs to
                  weigh our inferences. We have tried to control for it in three ways: (1) the
                  evidence sections below are written and sourced independently of any
                  training-industry inference, and reach conclusions before any course of action is
                  proposed; (2) where the text draws a training-industry inference, it is presented
                  as <em>our</em> view as an interested party, not as neutral findings;
                  and (3) headline claims rest on government statistics and peer-reviewed research,
                  with commercial, self-selected, and our own internal-survey data clearly marked as
                  lower-confidence. Readers should still apply their own scrutiny. Where a figure
                  could not be verified, we say so rather than presenting it as settled.
                </p>
              </div>

              {/* How to Read */}
              <div id="how-to-read">
                <h2 className="text-xl font-semibold text-foreground mb-4">
                  How to read this report
                </h2>

                <h3 className={`${typography.subsectionTitle} mb-3`}>Evidence tiers</h3>
                <p className={`${typography.body} mb-5`}>
                  Claims in this report are graded by source quality:
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-foreground">
                        <th className="text-left py-3 pr-6 font-semibold w-48">Tier</th>
                        <th className="text-left py-3 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {evidenceTiers.map((row) => (
                        <tr key={row.tier} className="border-b border-border">
                          <td className="py-3 pr-6 font-medium align-top">{row.tier}</td>
                          <td className="py-3 text-muted-foreground">{row.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className={`${typography.subsectionTitle} mb-3`}>Limitations</h3>
                <p className={`${typography.body} mb-4`}>
                  This report synthesizes published research and primary observations from our
                  members. Two limitations matter most:
                </p>

                <div className="space-y-4 pl-4 border-l-4 border-muted-foreground/20">
                  <div>
                    <p className={`${typography.body} font-semibold mb-1`}>
                      Self-reported adoption overstates real deployment, and different surveys count different things.
                    </p>
                    <p className={`${typography.bodySmall} text-muted-foreground`}>
                      AI adoption is reported anywhere from under 20% to nearly 90%, because the
                      figures measure different populations. The high numbers (≈78–88%) come from
                      consulting surveys that ask whether an organization uses AI in{" "}
                      <em>any</em> business function — capturing one-off pilots and individual
                      experimentation, often among self-selected respondents<CitationLink id={5} /><CitationLink id={6} />.
                      The low numbers (≈17–20%) come from government firm-level surveys using
                      tighter, consistent definitions (US Census BTOS, Eurostat)<CitationLink id={3} /><CitationLink id={4} /><CitationLink id={24} />.
                      A third figure — about a third of EU and US individuals having used a
                      generative-AI tool, mostly personally<CitationLink id={106} /><CitationLink id={107} /> —
                      sits between them but measures people, not organizations. This report uses
                      the government figures for headline claims and labels the higher numbers as
                      broad-definition estimates. The size-class divide compounds the confusion:
                      US Census data analyzed by Brookings puts the firm-count adoption rate near
                      5% but the <em>employment-weighted</em> rate near 20%, because adopters
                      tend to be large employers<CitationLink id={108} />.
                    </p>
                  </div>
                  <div>
                    <p className={`${typography.body} font-semibold mb-1`}>
                      Country-level statistics carry false precision.
                    </p>
                    <p className={`${typography.bodySmall} text-muted-foreground`}>
                      The companion <em>Regional Market Profiles</em> present figures to two
                      decimal places (e.g., 42.03%, 5.21%) drawn from a mix of a December 2025
                      Eurostat release, OECD, Microsoft, BCG, national offices, and explicit proxy
                      estimates, on differing definitions and reference periods. Those decimals
                      imply a uniformity of measurement the underlying data does not have. Treat
                      the profiles as a directional map rather than a verified dataset, and check
                      any individual figure against the primary source for its stated reference
                      year before quoting it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tier scoring */}
              <div id="tier-scoring">
                <h3 className={`${typography.subsectionTitle} mb-3`}>
                  How tier scores are calculated
                </h3>
                <p className={`${typography.body} mb-5`}>
                  Each market's tier placement is driven by a weighted composite of three scored inputs:
                </p>
                <div className="overflow-x-auto mb-3">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b-2 border-foreground">
                        <th className="text-left py-3 pr-4 font-semibold">Factor</th>
                        <th className="text-left py-3 px-4 font-semibold">Weight</th>
                        <th className="text-left py-3 px-4 font-semibold">Data source</th>
                        <th className="text-left py-3 pl-4 font-semibold">Rationale</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium align-top">Enterprise AI Usage</td>
                        <td className="py-3 px-4 font-medium align-top">50%</td>
                        <td className="py-3 px-4 text-muted-foreground align-top">Eurostat (EU), national statistical offices</td>
                        <td className="py-3 pl-4 text-muted-foreground">Direct measure of firm-level adoption</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium align-top">Private AI Investment</td>
                        <td className="py-3 px-4 font-medium align-top">30%</td>
                        <td className="py-3 px-4 text-muted-foreground align-top">Stanford HAI AI Index 2025</td>
                        <td className="py-3 pl-4 text-muted-foreground">Proxy for ecosystem strength and future growth</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4 font-medium align-top">Government AI Readiness</td>
                        <td className="py-3 px-4 font-medium align-top">20%</td>
                        <td className="py-3 px-4 text-muted-foreground align-top">Oxford Insights AI Readiness Index 2024 (most recent published; 2025 edition announced but not yet released)</td>
                        <td className="py-3 pl-4 text-muted-foreground">Digital infrastructure, policy frameworks, public data availability</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className={`${typography.bodySmall} text-muted-foreground`}>
                  Markets without official enterprise AI statistics are scored on investment and readiness only and marked <strong>[estimated]</strong> in the profiles.
                </p>
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
