import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, TrendingUp, Sparkles, Leaf, Building2, Users, GraduationCap, Shield, Target, AlertTriangle, Lightbulb, Scale, BookOpen, Rocket, Brain, Briefcase, FlaskConical, Crosshair, MessageSquare, ArrowRight } from "lucide-react";
import CitationLink from "./CitationLink";
import MethodologyBlock from "./MethodologyBlock";
import IconWrapper from "./IconWrapper";
import PatternCard from "./PatternCard";
import FindingBlock from "./FindingBlock";
import EvidenceBlock from "./EvidenceBlock";
import RecommendationBlock from "./RecommendationBlock";
import InterpretationBlock from "./InterpretationBlock";
import DataTableStandard from "./DataTableStandard";
import SizeClassChart from "./SizeClassChart";
import BulletList from "./BulletList";
import { typography, spacing, containers, iconSizes, iconWrapperBase, tierColors, cardStyles } from "./styles";
import { tierDistributionSummary } from "@/data/marketTierClassification";
const tierFramework = [{
  tier: 1,
  name: "Leaders",
  profile: "High enterprise adoption (40%+), mature governance, significant investment, advanced implementation",
  color: "bg-llpa-green text-white",
  borderColor: "border-llpa-green",
  icon: TrendingUp
}, {
  tier: 2,
  name: "Advanced",
  profile: "Growing adoption (25–40%), active experimentation, emerging governance, strong government initiatives",
  color: "bg-llpa-blue text-white",
  borderColor: "border-llpa-blue",
  icon: Sparkles
}, {
  tier: 3,
  name: "Emerging",
  profile: "Moderate adoption (15–25%), awareness-level engagement, early governance development",
  color: "bg-llpa-yellow text-foreground",
  borderColor: "border-llpa-yellow",
  icon: Globe
}, {
  tier: 4,
  name: "Nascent",
  profile: "Early adoption (<15%), foundational awareness, minimal initiatives, governance not yet developed",
  color: "bg-llpa-orange text-white",
  borderColor: "border-llpa-orange",
  icon: Leaf
}];
const tierDistribution = tierDistributionSummary.map((t) => ({
  tier: t.tier,
  name: t.name === "Leader" ? "Leaders" : t.name,
  markets: t.markets,
}));
const adoptionCharacteristicsByTier = [{
  tier: 1,
  primary: "Production AI deployments, advanced use cases (RAG, agents), established governance",
  secondary: "Multi-vendor strategies, industry-specific implementations",
  challenge: "Scaling from pilots to enterprise-wide deployment",
  challengeColor: "text-llpa-orange"
}, {
  tier: 2,
  primary: "Active experimentation, role-based pilots, emerging governance frameworks",
  secondary: "Tool consolidation, ROI measurement challenges",
  challenge: "Moving from experimentation to measurable business value",
  challengeColor: "text-llpa-yellow"
}, {
  tier: 3,
  primary: "Foundational AI literacy, basic tool adoption, use case exploration",
  secondary: "Executive buy-in, budget justification",
  challenge: "Building organizational AI capability and culture",
  challengeColor: "text-llpa-blue"
}, {
  tier: 4,
  primary: "AI awareness building, executive education, foundational digital skills",
  secondary: "Infrastructure development, talent acquisition",
  challenge: "Establishing baseline AI readiness",
  challengeColor: "text-llpa-green"
}];
const trainingDemandByTier = [{
  tier: 1,
  primary: "Advanced implementation (RAG, agents, fine-tuning)",
  secondary: "Multi-model strategy, governance, LLMOps",
  portfolioFit: "Gap: Advanced technical content needed"
}, {
  tier: 2,
  primary: "Role-based AI applications, pilot-to-production",
  secondary: "Change management, ROI measurement",
  portfolioFit: "Partial: Role-based content exists"
}, {
  tier: 3,
  primary: "Foundational GenAI, prompt engineering basics",
  secondary: "Use case discovery, executive awareness",
  portfolioFit: "Strong: Core curriculum aligned"
}, {
  tier: 4,
  primary: "AI literacy, digital foundations",
  secondary: "Executive education, infrastructure basics",
  portfolioFit: "Strong: Awareness content available"
}];
const fourFactorAssessment = [{
  factor: "Enterprise Adoption",
  measures: "AI usage rates by company size and sector",
  source: "Eurostat, national statistics, industry surveys"
}, {
  factor: "Investment Intensity",
  measures: "Private AI investment, venture capital, R&D spending",
  source: "Stanford HAI AI Index, Crunchbase, CB Insights"
}, {
  factor: "Ecosystem Maturity",
  measures: "AI talent availability, research output, startup density",
  source: "LinkedIn Economic Graph, academic databases"
}, {
  factor: "Policy Environment",
  measures: "Government programs, regulatory frameworks, public investment",
  source: "National AI strategies, Oxford Insights AI Readiness Index"
}];
const weightedIndex = [{
  factor: "Enterprise AI Usage",
  weight: "50%",
  source: "Eurostat (EU), national statistical offices",
  citations: [4, 10, 11, 12, 13, 14],
  rationale: "Direct measure of firm-level adoption"
}, {
  factor: "Private AI Investment",
  weight: "30%",
  source: "Stanford HAI AI Index 2025",
  citations: [17],
  rationale: "Proxy for ecosystem strength and future growth"
}, {
  factor: "Government AI Readiness",
  weight: "20%",
  source: "Oxford Insights AI Readiness Index 2024",
  citations: [18],
  rationale: "Digital infrastructure, policy frameworks, public data availability"
}];
const sizeClassEvidence = [{
  market: "EU Average",
  large: "55% (250+ employees)",
  sme: "17% (10-49 employees)",
  gap: "38pp (~3.2x)",
  citations: []
}, {
  market: "Denmark",
  large: "74.5% (250+ employees)",
  sme: "37.5% (10-49 employees)",
  gap: "37pp",
  citations: [4]
}, {
  market: "Finland",
  large: "70%",
  sme: "~15-20% (estimated)",
  gap: "50-55pp",
  citations: [81]
}, {
  market: "Netherlands",
  large: "67.6% (100+ employees)",
  sme: "17.8% (10-19 employees)",
  gap: "50pp",
  citations: [39]
}, {
  market: "Slovenia",
  large: "72%",
  sme: "18%",
  gap: "54pp",
  citations: []
}, {
  market: "Germany",
  large: "48%",
  sme: "~15% (estimated)",
  gap: "33pp",
  citations: [68]
}, {
  market: "Austria",
  large: "50%",
  sme: "18%",
  gap: "32pp",
  citations: []
}, {
  market: "Singapore",
  large: "62.5% (non-SME)",
  sme: "14.5% (SME)",
  gap: "48pp",
  citations: [15]
}, {
  market: "Romania",
  large: "20.75% (250+ employees)",
  sme: "4.13% (10-49 employees)",
  gap: "17pp",
  citations: [4]
}];
const skillsGapEvidenceTier1 = [{
  content: "Denmark leads Tier 1 with 42.03% adoption, yet 62% of organizations still cite lack of AI skills as a major barrier to further progress.",
  citations: [4, 26]
}, {
  content: "The Netherlands reports 33.2% adoption (top-5 EU), but a striking 74.6% of businesses identify \"lack of experience\" as their primary obstacle.",
  citations: [42]
}, {
  content: "Switzerland shows the same pattern among SMEs: the AXA / Sotomo survey of 300 Swiss SMEs finds 55% have started integrating AI (22% fully, 33% experimenting), yet integration concentrates in specific use cases and skews heavily by firm size — 52% of firms with 50+ employees view AI positively vs just 27% of firms with 5–9 employees — signalling that adoption has outpaced organizational capability.",
  citations: [380]
}];
const skillsGapEvidenceTier2 = [{
  content: "Germany's 20-27% adoption rate is constrained by skills scarcity, with 33% of organizations citing limited AI talent as their top barrier.",
  citations: [76]
}];
const skillsGapEvidenceTier3 = [{
  content: "Portugal struggles to scale beyond 13-15% adoption, with 71% of companies reporting difficulty hiring workers with digital skills.",
  citations: [384]
}, {
  content: "South Africa remains in early-stage adoption, where over 60% of organizations identify the skills gap as their key barrier to AI implementation.",
  citations: [390]
}, {
  content: "Mexico has reached 95% enterprise AI adoption, but organizational culture and operational complexity — not software availability — are cited as the primary obstacles to scaling; a specialized-talent deficit reinforces the same constraint.",
  citations: [521, 522]
}];
// Numbering aligns directionally with Section 1.1 Market Maturity Tiers:
// Level 1 = most advanced organization; Level 4 = least advanced. (Still distinct
// from Market Maturity Tiers, which describe whole markets — see clarifier below.)
const learningPathwayLevels = [{
  level: 1,
  name: "Strategic AI Transformation",
  target: "Organizations where AI is embedded across most business functions; multiple production AI systems generating measurable business value; dedicated AI/ML teams",
  objectives: ["AI strategy development and roadmapping at enterprise scale", "Building and scaling internal AI platforms", "Advanced agentic AI architectures and autonomous systems", "AI product development and monetization", "Organizational design for AI-augmented workforces", "Emerging capabilities (multimodal AI, reasoning models, AI agents)", "Responsible AI leadership and ethics frameworks", "Competitive positioning through AI differentiation"],
  icon: Brain,
  color: "border-llpa-orange"
}, {
  level: 2,
  name: "Production & Governance Expertise",
  target: "Organizations with enterprise-wide AI deployment; multiple AI systems in production; regulatory compliance requirements",
  objectives: ["Production RAG architecture and optimization", "LLMOps and model lifecycle management", "AI governance frameworks and policy development", "EU AI Act compliance and risk classification", "Bias detection and fairness auditing", "Multi-model orchestration and cost optimization", "Building and managing AI agents"],
  icon: Shield,
  color: "border-llpa-yellow"
}, {
  level: 3,
  name: "Implementation Skills",
  target: "Organizations with successful pilots seeking to expand; 20-50% of workforce using AI tools; dedicated AI initiatives underway",
  objectives: ["Use case identification and prioritization frameworks", "Workflow redesign to incorporate AI tools effectively", "Change management for AI adoption", "Measuring and demonstrating ROI", "Vendor evaluation and selection", "Building internal centers of excellence"],
  icon: Rocket,
  color: "border-llpa-blue"
}, {
  level: 4,
  name: "Foundational AI Literacy",
  target: "Organizations where <20% of employees have used AI tools; leadership exploring AI but no systematic deployment",
  objectives: ["Understanding what generative AI can and cannot do", "Basic prompt engineering for productivity tools (ChatGPT, Copilot)", "Recognizing appropriate vs. inappropriate AI use cases", "Data privacy and security fundamentals", "Identifying low-risk experimentation opportunities"],
  icon: BookOpen,
  color: "border-llpa-green"
}];
const regulatedIndustryEvidence = [{
  market: "Switzerland",
  finding: "Regulated industries (banking, healthcare, insurance) move cautiously despite 82% knowledge worker adoption; clients request compliance-ready training",
  citations: [50]
}, {
  market: "Netherlands",
  finding: "60% identify IT security as largest barrier; only 49% have effective data governance policies",
  citations: [42, 43]
}, {
  market: "Germany",
  finding: "Risk-averse Mittelstand; SMEs lag with 70% not yet implemented",
  citations: [65]
}, {
  market: "UK",
  finding: "39% cite \"difficulty identifying use cases\" — conservative approach to deployment",
  citations: [12]
}];
// Quotes are paraphrased from the LLPA Member Survey 2025 (anonymized, aggregated by region).
// `attribution` is shown before the quote so the reader sees the source clearly without
// identifying individual members.
const strategicPlanningQuotes = [{
  attribution: "An LLPA member in the Asia-Pacific region reports",
  quote: "clients are unclear on what they want to achieve with AI; uncertainty about ROI and implementation persists across the customer base.",
  citation: 140
}, {
  attribution: "An LLPA member in Eastern Europe described client posture as",
  quote: "they don't know but they're trying.",
  citation: 141
}, {
  attribution: "An LLPA member in Latin America cites",
  quote: "poorly defined business objectives, poor data quality, and lack of collaboration between teams.",
  citation: 142
}, {
  attribution: "An LLPA member in Central Europe described clients as",
  quote: "often unsure what they want — 'do some AI'.",
  citation: 143
}, {
  attribution: "An LLPA member in Eastern Europe identifies",
  quote: "a lack of clear methodology for mapping AI opportunities within organizations.",
  citation: 144
}, {
  attribution: "An LLPA member in the Nordic region reports",
  quote: "confusion of all the possibilities.",
  citation: 113
}, {
  attribution: "An LLPA member in Eastern Europe (Romania) reports",
  quote: "few clients ask for specialized or advanced courses; demand is concentrated on general awareness, foundational courses and prompt engineering.",
  citation: 150
}];
const assessmentTools = ["Organizational readiness diagnostic", "Use case discovery framework", "Vendor evaluation and bullshit detector", "Quick-win identification tool", "Decision frameworks", "Competitive benchmarks", "Team capability assessment"];
const GlobalAILandscape = () => {
  return <section id="section-1" className={`${spacing.section} bg-background`}>
      <div className="container">
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className={`max-w-5xl mx-auto ${spacing.sectionMargin}`}>
          <p className={`${typography.sectionLabel} text-llpa-orange`}>
            Section 1
          </p>
          <h2 className={typography.sectionTitle}>
            Global AI Landscape
          </h2>
        </motion.div>

        {/* 1.1 Maturity Tier Framework & Methodology */}
        <div id="section-1-1" className={`max-w-5xl mx-auto ${spacing.sectionMargin}`}>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="mb-12">
            <h3 className={`${typography.subsectionTitle} mb-6`}>
              1.1 Maturity tier framework
            </h3>

            {/* Strategic Context */}
            <div id="strategic-context-1" className={spacing.blockMargin}>
              <div className={`space-y-4 ${typography.body}`}>
                <p>
                  Enterprise AI adoption is accelerating unevenly across markets. The December 2025 Eurostat release puts EU enterprise AI adoption at <strong>20.0%</strong> (reference year 2025), up from 13.5% in 2024 — but the distribution is wide: Nordic markets lead at 35–42%, while parts of Eastern and Southern Europe remain below 10%.<CitationLink id={4} /> This section sets out how 67 markets are classified and the structural patterns that cut across them. Detailed country-by-country analysis is in the companion{" "}
                  <a
                    href="#regional-market-profiles"
                    className="font-semibold text-llpa-blue hover:text-llpa-blue/80 underline-offset-2 hover:underline"
                  >
                    Regional Market Profiles
                  </a>{" "}
                  document.
                </p>
              </div>
            </div>

            {/* Maturity Tier Framework */}
            <div id="maturity-tier-framework" className={spacing.blockMargin}>
              <h4 className={`${typography.smallTitle} ${spacing.titleMargin}`}>
                Maturity Tier Framework
              </h4>
              <p className={`${typography.body} ${spacing.paragraphMargin}`}>
                Markets are classified into four tiers. Thresholds are based primarily on enterprise adoption, with investment, ecosystem, and policy factors informing borderline cases.
              </p>
              
              <div className={spacing.indent}>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-foreground">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground w-24">Tier</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground w-32">Name</th>
                      <th className="text-left py-3 pl-4 font-semibold text-foreground">Profile</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tierFramework.map(tier => <tr key={tier.tier} className={`border-b border-border ${tier.tier === 1 ? 'bg-llpa-green/10' : tier.tier === 2 ? 'bg-llpa-blue/10' : tier.tier === 3 ? 'bg-llpa-yellow/10' : 'bg-llpa-orange/10'}`}>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tier {tier.tier}
                        </td>
                        <td className="py-3 px-4 font-semibold text-foreground">
                          {tier.name}
                        </td>
                        <td className="py-3 pl-4 text-muted-foreground">
                          {tier.profile}
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>

              </div>

              <p className={`${typography.body} mb-3`}>
                <strong>Four-factor assessment.</strong> Tier placement draws on: enterprise adoption (Eurostat, national statistics, OECD); investment intensity (Stanford HAI AI Index, CB Insights); ecosystem maturity (talent, research output, startup density); and policy environment (national strategies, readiness indices). Where firm-level statistics exist, enterprise adoption is weighted most heavily (a 50/30/20 split across adoption / investment / government readiness).
              </p>
              <p className={`${typography.body} mb-0`}>
                <strong>Data caveat.</strong> EU figures anchor on Eurostat (December 2025, reference year 2025) and are verified. Non-EU and estimated markets draw on mixed sources (Microsoft AI Diffusion, OECD, BCG, national offices) on differing definitions; the profiles mark each market&apos;s verification status.
              </p>
            </div>

            {/* Tier Classification Summary */}
            <div id="tier-classification" className={spacing.blockMargin}>
              <h4 className={`${typography.smallTitle} mb-2`}>
                Global Markets: Tier Classification Summary
              </h4>
              <div className={`overflow-x-auto mb-4 ${spacing.indent}`}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-foreground">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground w-40">Tier</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground w-32">Count</th>
                      <th className="text-left py-3 pl-4 font-semibold text-foreground">Markets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tierDistribution.map(tier => <tr key={tier.tier} className={`border-b border-border ${tier.tier === 1 ? 'bg-llpa-green/10' : tier.tier === 2 ? 'bg-llpa-blue/10' : tier.tier === 3 ? 'bg-llpa-yellow/10' : 'bg-llpa-orange/10'}`}>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tier {tier.tier} ({tier.name})
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">
                          {tier.markets.length} markets
                        </td>
                        <td className="py-3 pl-4 text-muted-foreground">
                          {tier.markets.join(', ')}
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-muted-foreground">
                Source: Eurostat December 2025; Stanford HAI AI Index 2025; Oxford Insights AI Readiness Index 2024; national statistical offices; LLPA Member Survey 2025 (qualitative validation from 22 member training providers across 20+ markets — Tier C).
              </p>

              <p className="text-xs text-muted-foreground italic mt-3">
                Per-country size-class splits are reported in the Regional Market Profiles where available; some derive from the Eurostat databrowser rather than published releases and are flagged accordingly.
              </p>

              <div id="regional-market-profiles" className="mt-6 p-6 bg-gradient-to-r from-llpa-blue/10 to-llpa-green/10 border border-llpa-blue/20 rounded-xl scroll-mt-28">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Regional Market Profiles</h4>
                    <p className="text-sm text-muted-foreground">
                      67 cited market profiles — two-paragraph adoption snapshots with inline source markers and data-confidence flags.
                    </p>
                  </div>
                  <Link to="/market-profiles" className="inline-flex items-center gap-2 px-5 py-2.5 bg-llpa-blue text-white font-medium rounded-lg hover:bg-llpa-blue/90 transition-colors shadow-sm whitespace-nowrap">
                    View Market Profiles
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* 1.2 Cross-Market Adoption Patterns */}
        <div id="section-1-2" className={`max-w-5xl mx-auto ${spacing.sectionMargin}`}>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="mb-12">
            <h3 className={`${typography.subsectionTitle} mb-6`}>
              1.2 Cross-market pattern: the size-class divide
            </h3>

            <div className={`space-y-4 ${typography.body} mb-8`}>
              <p>
                <strong>The most consistent cross-market pattern is a pronounced gap between large-enterprise and small-firm adoption that has not narrowed as overall adoption rose.</strong> Across the EU, large enterprises (250+ employees) adopt AI at <strong>55%</strong>, medium firms at <strong>30%</strong>, and small firms (10–49) at <strong>17%</strong> (Eurostat 2025, verified)<CitationLink id={4} /><CitationLink id={22} /> — roughly a <strong>3.2x gap</strong> between large and small. The OECD (Organisation for Economic Co-operation and Development, whose 38 member countries account for most of global GDP) finds the same divide on an independent dataset (large firms ~40%+ versus markedly lower SME adoption)<CitationLink id={23} />.
              </p>
              <p>
                <strong>The reason is mostly fixed costs.</strong> The overhead of adopting a technology — evaluation, integration, data preparation, the staff hours to learn it — barely scales with company size, so a large firm with dedicated IT absorbs it easily while a small firm has to pull a generalist off running the business; the Federal Reserve Bank of Minneapolis notes that larger firms are simply better equipped to manage the learning curve and the upfront investment<CitationLink id={113} />, and the OECD finds <strong>the SME gap persists even after controlling for sector, firm age, and asset composition</strong> — a sign it is structural, not a quirk of which industries are small<CitationLink id={23} />. What makes it look durable rather than temporary is that <strong>the gap hasn&apos;t narrowed as overall adoption climbed</strong>: OECD analysis of 2023–2024 uptake finds diffusion has been driven more by leaders pulling ahead than by laggards catching up, with <strong>business-adoption gaps widening across the OECD area</strong><CitationLink id={114} />. The head start isn&apos;t being given back. The figure may also overstate the divide, since a lot of genuine small-business AI use hides inside consumer apps and features bolted onto software firms already run — the Federal Reserve Bank of San Francisco documents small firms using AI &ldquo;embedded in existing software&rdquo; they already license<CitationLink id={115} />, and JPMorganChase Institute finds AI reaches SMEs through passive integration in platform tools as much as deliberate adoption<CitationLink id={116} /> — exactly the use a survey about intentional &ldquo;AI adoption&rdquo; misses. <strong>So the measured gap is real; its true width is less certain.</strong>
              </p>
              <p>
                <strong>A note on reading the gap:</strong> the <em>percentage-point</em> difference mechanically shrinks in low-adoption markets, which can make a divide look smaller than it is. Romania is the clearest case — its large-vs-small gap is the smallest in the EU in points (<strong>≈17pp</strong>) but the largest as a <em>ratio</em> (<strong>about 5.0x</strong>, vs the EU&apos;s ~3.2x), because its small-firm base is so low (~4%). <strong>The two measures should be read together; in low-base markets the ratio is the more honest indicator.</strong>
              </p>
              <p className={`${typography.body} mt-2`}>
                The other cross-market patterns the draft framework grouped here — the universal skills gap, regulated-industry caution, and the strategic-clarity gap — are treated as barriers to value realization and are analyzed in Section 2.
              </p>
            </div>

            </motion.div>
        </div>

        {/* 1.3 The geography of adoption */}
        <div id="section-1-3" className={`max-w-5xl mx-auto ${spacing.sectionMargin}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className={`${typography.subsectionTitle} mb-6`}>
              1.3 The geography of adoption
            </h3>

            <div className={`space-y-4 ${typography.body}`}>
              <p>
                Adoption is uneven across countries as well as across sizes and sectors, and the national picture reinforces two of this report&apos;s themes: the gap between where AI capital concentrates and where the technology actually reaches working life, and the recurrence of the adoption-versus-value pattern inside individual economies.
              </p>

              <p>
                <strong>Within the EU, the leaders are northern.</strong> On Eurostat&apos;s 2025 enterprise measure, Denmark leads at 42.0%, followed by Finland (37.8%), Sweden (35.0%), Belgium (34.5%) and the Netherlands (33.2%) — all far above the EU average of 20.0%, while Romania (5.2%), Poland (8.4%) and Bulgaria (8.5%) trail<CitationLink id={4} /><CitationLink id={91} />. Notably, Europe&apos;s largest economies and AI-funding centers do not lead on adoption. Germany and France both sit above the EU average but well short of the Nordic front-runners<CitationLink id={4} />, and the UK&apos;s official adoption rate (16–23%, depending on the survey) sits around or below the EU average<CitationLink id={25} /><CitationLink id={133} /> — though the UK figure comes from national surveys not directly comparable to Eurostat&apos;s. The places where AI capital and frontier firms concentrate, in other words, are not the places where enterprises are furthest along in putting AI to work<CitationLink id={92} />. Capital and adoption are different leaderboards — and the capital one is extraordinarily concentrated. Stanford&apos;s AI Index put US private AI investment at roughly $109 billion in 2024, about 12 times China&apos;s and 24 times the UK&apos;s<CitationLink id={96} />, and the OECD&apos;s venture-capital data is starker still: the US absorbed about 75% (≈$194 billion) of global AI venture funding, against 6% (≈$15.8 billion) for the entire EU27<CitationLink id={97} />. The Federal Reserve notes that Europe invests on the order of 4% of what the US does<CitationLink id={98} />. None of that capital concentration shows up in the adoption table, where the EU&apos;s most AI-funded economies trail its smallest.
              </p>

              <p>
                <strong>National surveys echo the global ones.</strong> Germany&apos;s digital association, Bitkom, runs an annual firm-level survey; it found AI use climbing steeply — to 36% in 2025, from 20% a year earlier<CitationLink id={90} /> — with the familiar friction underneath: about a third of firms found AI more expensive than expected, and roughly half cite legal uncertainty, lack of know-how, and a shortage of qualified staff<CitationLink id={90} />.
              </p>

              <p>
                <strong>Asia-Pacific holds both the frontier and the divide.</strong> Singapore ranks second globally on population-level use (60.9%, behind the UAE)<CitationLink id={94} />, and its government data shows AI reaching enterprises fast — SME adoption tripling to 14.5% in a year and large-enterprise adoption at 62.5%<CitationLink id={93} />. But the size-class gap from §1.2 is sharp here too (roughly 4x), and 84% of adopting firms rely on off-the-shelf tools<CitationLink id={93} /> — &ldquo;adoption&rdquo; at the leading edge still often means light, generic use.
              </p>

              <p>
                <strong>The global divide is real but should be read carefully.</strong> Population-level adoption averages roughly 24.7% across the Global North versus 14.1% across the Global South<CitationLink id={95} />, and the United States illustrates the capital-versus-use split most starkly of all: it leads the world in AI research and frontier-model development yet ranks only 24th in working-age-population usage at 28.3%<CitationLink id={94} />. As always in this report, the number depends on what is being measured — population use, enterprise deployment, and measurable value are three different things — so cross-country league tables are best read as directional rather than precise.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>;
};
export default GlobalAILandscape;