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
import { sourceCount } from "@/data/reportData";
const tierFramework = [{
  tier: 1,
  name: "Leaders",
  profile: "High enterprise adoption (40%+), mature AI governance, significant public/private investment, advanced implementation across industries",
  color: "bg-llpa-green text-white",
  borderColor: "border-llpa-green",
  icon: TrendingUp
}, {
  tier: 2,
  name: "Advanced",
  profile: "Growing adoption (25-40%), active enterprise experimentation, emerging governance frameworks, strong government AI initiatives",
  color: "bg-llpa-blue text-white",
  borderColor: "border-llpa-blue",
  icon: Sparkles
}, {
  tier: 3,
  name: "Emerging",
  profile: "Moderate adoption (15-25%), awareness-level engagement, limited but growing AI initiatives, early governance development",
  color: "bg-llpa-yellow text-foreground",
  borderColor: "border-llpa-yellow",
  icon: Globe
}, {
  tier: 4,
  name: "Nascent",
  profile: "Early adoption (<15%), foundational awareness stage, minimal AI initiatives, governance frameworks not yet developed",
  color: "bg-llpa-orange text-white",
  borderColor: "border-llpa-orange",
  icon: Leaf
}];
const tierDistribution = [{
  tier: 1,
  name: "Leaders",
  markets: ["Denmark", "Singapore", "Netherlands", "Switzerland", "Australia"]
}, {
  tier: 2,
  name: "Advanced",
  markets: ["Germany", "UK", "Mexico", "Brazil", "Croatia", "Romania", "South Africa", "North Macedonia"]
}, {
  tier: 3,
  name: "Emerging",
  markets: ["Portugal"]
}, {
  tier: 4,
  name: "Nascent",
  markets: ["Slovenia"]
}];
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
  citations: [375, 10, 11, 12, 13, 14],
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
  large: "41% (250+ employees)",
  sme: "11% (10-49 employees)",
  gap: "30pp",
  citations: []
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
  citations: [375]
}];
const skillsGapEvidenceTier1 = [{
  content: "Denmark leads Tier 1 with 42.03% adoption, yet 62% of organizations still cite lack of AI skills as a major barrier to further progress.",
  citations: [375, 26]
}, {
  content: "The Netherlands reports ~25% adoption (above EU average), but a striking 74.6% of businesses identify \"lack of experience\" as their primary obstacle.",
  citations: [42]
}, {
  content: "Switzerland, with 32% workforce adoption, reveals a training disconnect: a minority of employees feel adequately prepared to use AI in their work.",
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
            Global AI Adoption Landscape
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
              1.1 Maturity Tier Framework & Methodology
            </h3>

            {/* Strategic Context */}
            <div id="strategic-context-1" className={spacing.blockMargin}>
              <div className={`space-y-4 ${typography.body}`}>
                <p>
                  Enterprise AI adoption is accelerating rapidly across global markets. The latest Eurostat data (December 2025) shows EU enterprise AI adoption reached 20.0% — a 6.5% increase from 13.5% in January 2025 and nearly triple the 7.7% recorded in 2021.<CitationLink id={375} /> This growth is unevenly distributed: Nordic markets lead with 35-42% adoption, while parts of Eastern and Southern Europe remain below 10%.<CitationLink id={375} />
                </p>
                <p>This acceleration highlights the critical gap between AI adoption and AI value realization.  The following maturity tier framework helps understand which markets are ready for advanced AI implementations and which are still building foundational capabilities.</p>
              </div>
            </div>

            {/* Maturity Tier Framework */}
            <div id="maturity-tier-framework" className={spacing.blockMargin}>
              <h4 className={`${typography.smallTitle} ${spacing.titleMargin}`}>
                Maturity Tier Framework
              </h4>
              <p className={`${typography.body} ${spacing.paragraphMargin}`}>
                Markets are classified into four tiers using a four-factor assessment framework. This framework was recalibrated in December 2025 to reflect market evolution and incorporates qualitative factors beyond raw adoption statistics.
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

              <p className={`${typography.note} ${containers.note}`}>
                <strong>Note:</strong> Only markets with sufficient validated data across all four assessment factors are included in the tier classification.
              </p>
              </div>
            </div>

            {/* Tier Classification Summary */}
            <div id="tier-classification" className={spacing.blockMargin}>
              <h4 className={`${typography.smallTitle} mb-2`}>
                Global Markets: Tier Classification Summary
              </h4>
              <p className={`${typography.bodySmall} ${spacing.paragraphMargin}`}>
                The following tier distributions are based on available market data across enterprise AI adoption, investment intensity, ecosystem maturity, and policy environment.
              </p>
              
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
                Source: Eurostat December 2025, Stanford HAI AI Index 2025, Oxford Insights AI Readiness Index 2024, national statistical offices.
              </p>
            </div>

            {/* Training Demand by Tier */}
            <div id="training-demand-tier" className={spacing.blockMargin}>
              <h4 className={`${typography.smallTitle} ${spacing.paragraphMargin}`}>
                Training Demand by Tier
              </h4>
              
              <div className={`overflow-x-auto mb-4 ${spacing.indent}`}>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-foreground">
                      <th className="text-left py-3 pr-4 font-semibold text-foreground w-20">Tier</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Primary Training Demand</th>
                      <th className="text-left py-3 px-4 font-semibold text-foreground">Secondary Training Demand</th>
                      <th className="text-left py-3 pl-4 font-semibold text-foreground w-48">training providers Portfolio Fit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trainingDemandByTier.map(row => <tr key={row.tier} className={`border-b border-border ${row.tier === 1 ? 'bg-llpa-green/10' : row.tier === 2 ? 'bg-llpa-blue/10' : row.tier === 3 ? 'bg-llpa-yellow/10' : 'bg-llpa-orange/10'}`}>
                        <td className="py-3 pr-4 font-medium text-foreground">
                          Tier {row.tier}
                        </td>
                        <td className="py-3 px-4 text-foreground">
                          {row.primary}
                        </td>
                        <td className="py-3 px-4 text-muted-foreground">
                          {row.secondary}
                        </td>
                        <td className="py-3 pl-4 text-muted-foreground">
                          <span className="font-semibold">{row.portfolioFit.split(' ')[0]}</span> {row.portfolioFit.split(' ').slice(1).join(' ')}
                        </td>
                      </tr>)}
                  </tbody>
                </table>
              </div>

              {/* Strategic Implication */}
              <div className="mt-4">
                <h5 className={`${typography.blockTitle} mb-2 flex items-center gap-2`}>
                  <IconWrapper icon={AlertTriangle} color="llpa-orange" size="sm" />
                  Strategic Implication
                </h5>
                <p className={typography.bodySmall}>
                  Organizations in Tier 3-4 markets focus on foundational AI capabilities. Tier 1-2 markets — where enterprises have significant AI budgets and are actively seeking implementation support — represent the highest-value opportunities but require more advanced capabilities to serve effectively.
                </p>
              </div>
            </div>

            {/* Methodology (sub-block under §1.1 — distinct id avoids duplicate #methodology with main Methodology section) */}
            <div id="section-1-1-maturity-methodology" className="mb-6">
              <h4 className={`${typography.smallTitle} ${spacing.paragraphMargin} flex items-center gap-3`}>
                <IconWrapper icon={FlaskConical} color="llpa-green" size="sm" />
                Methodology
              </h4>
              
              <p className={`${typography.bodySmall} ${spacing.paragraphMargin}`}>
                This methodology describes how the maturity tier framework was created. It establishes standardized criteria for classifying markets into tiers, enabling consistent comparison of market readiness and AI adoption maturity.
              </p>

              {/* Four-Factor Assessment */}
              <div className={spacing.paragraphMargin}>
                <h5 className={`${typography.blockTitle} ${spacing.titleMargin}`}>Four-Factor Assessment</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-foreground">
                        <th className="text-left py-3 pr-4 font-semibold text-foreground">Factor</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">What It Measures</th>
                        <th className="text-left py-3 pl-4 font-semibold text-foreground">Data Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fourFactorAssessment.map(row => <tr key={row.factor} className="border-b border-border">
                          <td className="py-3 pr-4 font-medium text-foreground">{row.factor}</td>
                          <td className="py-3 px-4 text-foreground">{row.measures}</td>
                          <td className="py-3 pl-4 text-muted-foreground">{row.source}</td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Weighted Composite Index */}
              <div className={spacing.paragraphMargin}>
                <h5 className={`${typography.blockTitle} ${spacing.titleMargin}`}>Weighted Composite Index</h5>
                <p className={`${typography.bodySmall} ${spacing.titleMargin}`}>
                  Enterprise AI maturity is assessed using a weighted composite index:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-foreground">
                        <th className="text-left py-3 pr-4 font-semibold text-foreground">Factor</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Weight</th>
                        <th className="text-left py-3 px-4 font-semibold text-foreground">Data Source</th>
                        <th className="text-left py-3 pl-4 font-semibold text-foreground">Rationale</th>
                      </tr>
                    </thead>
                    <tbody>
                      {weightedIndex.map(row => <tr key={row.factor} className="border-b border-border">
                          <td className="py-3 pr-4 font-medium text-foreground">{row.factor}</td>
                          <td className="py-3 px-4 text-steel font-medium">{row.weight}</td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {row.source}
                            {row.citations.map(c => <CitationLink key={c} id={c} />)}
                          </td>
                          <td className="py-3 pl-4 text-muted-foreground">{row.rationale}</td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
                <p className={`${typography.note} ${containers.note} mt-3`}>
                  <strong>Note:</strong> Oxford Insights 2024 is the most recent published index (released December 20, 2024). The 2025 framework has been announced but the index has not yet been published.
                </p>
              </div>

              {/* Qualitative Validation */}
              <div className={spacing.paragraphMargin}>
                <h5 className={`${typography.blockTitle} mb-2`}>Qualitative Validation</h5>
                <p className={typography.bodySmall}>
                  Industry surveys and enterprise interviews provide ground-level validation through reported AI adoption patterns, implementation challenges, and value realization metrics.
                </p>
              </div>

              {/* Data Sources */}
              <div className={spacing.paragraphMargin}>
                <h5 className={`${typography.blockTitle} ${spacing.titleMargin}`}>Data Sources</h5>
                <ul className={`space-y-2 ${typography.bodySmall}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-green mt-1">•</span>
                    <span><strong>Firm usage:</strong> Eurostat enterprise AI survey (December 2025 release)<CitationLink id={375} />, UK Office for National Statistics<CitationLink id={12} />, US Census Bureau Business Trends and Outlook Survey<CitationLink id={13} />, Statistics Canada<CitationLink id={14} />, Singapore IMDA<CitationLink id={15} /><CitationLink id={16} /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-blue mt-1">•</span>
                    <span><strong>Enterprise surveys:</strong> Industry research providing qualitative validation of enterprise AI adoption patterns, implementation sophistication, and market readiness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-yellow mt-1">•</span>
                    <span><strong>Investment:</strong> Stanford HAI AI Index 2025 country-level private investment data<CitationLink id={17} /></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-orange mt-1">•</span>
                    <span><strong>Readiness:</strong> Oxford Insights Government AI Readiness Index 2024<CitationLink id={18} /></span>
                  </li>
                </ul>
              </div>

              {/* Data Limitations */}
              <div className={`${containers.note} ${spacing.compactPadding} ${spacing.paragraphMargin}`}>
                <h5 className={`${typography.blockTitle} mb-2`}>Data Limitations</h5>
                <ul className={`space-y-2 ${typography.bodySmall}`}>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-blue mt-1">•</span>
                    <span>Markets without official enterprise AI statistics are classified as "estimated" and scored using investment (60%) and readiness (40%) data only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-yellow mt-1">•</span>
                    <span>Survey data reflects enterprise self-reporting, which may overstate actual AI deployment maturity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-llpa-orange mt-1">•</span>
                    <span>Eurostat methodology covers enterprises with 10+ employees; micro-enterprises excluded</span>
                  </li>
                </ul>
              </div>

              {/* Market Profiles Reference */}
              <div className="mt-6 p-6 bg-gradient-to-r from-llpa-blue/10 to-llpa-green/10 border border-llpa-blue/20 rounded-xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Explore Individual Market Profiles</h4>
                    <p className="text-sm text-muted-foreground">
                      Detailed analysis of each market with statistics, insights, and comparative context.
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
              1.2 Cross-Market Adoption Patterns
            </h3>

            {/* Methodology & Objective */}
            <div className={spacing.blockMargin}>
              <MethodologyBlock methodology={`Analysis of enterprise AI adoption data across global markets spanning Europe, Asia-Pacific, Americas, Middle East, and Africa. Patterns identified through statistical correlation analysis and market research synthesis from ${sourceCount} sources.`} objective="Identify recurring adoption dynamics that transcend individual markets to understand enterprise AI maturity patterns and value realization challenges." />
            </div>

            {/* Romania regional spotlight (event / regional messaging) */}
            <div className={`${spacing.blockMargin} p-6 rounded-xl border border-llpa-blue/25 bg-llpa-blue/5`}>
              <h4 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                <Glob className="w-5 h-5 text-llpa-blue shrink-0" aria-hidden />
                Romania in cross-market context
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Cross-market patterns above apply to Romania as a <strong className="text-foreground">Tier 2 (Advanced)</strong> market in our framework: strong IT services and technical talent, but{" "}
                <strong className="text-foreground">enterprise AI adoption is the lowest in the EU and concentrated in large enterprises</strong>. The headline gap looks small because the floor is so low; the size-class divide is actually more pronounced than the EU average.
              </p>
              <ul className={`space-y-2 ${typography.bodySmall} text-muted-foreground list-disc pl-5`}>
                <li>
                  Eurostat enterprise AI usage: <strong className="text-foreground">5.21%</strong> of Romanian enterprises (2025 data)—lowest in the EU versus the EU average of ~20%; Denmark leads at 42.03% for contrast.<CitationLink id={375} />
                </li>
                <li>
                  Size-class breakdown: <strong className="text-foreground">large enterprises 20.75%</strong> vs <strong className="text-foreground">small (10–49) 4.13%</strong> — a <strong className="text-foreground">5.0x ratio</strong>, the most concentrated divide in the Pattern 1 table above (EU average is 3.7x). The 17pp absolute gap understates the structural distance between large and small Romanian firms.<CitationLink id={375} />
                </li>
                <li>
                  Individual use of generative AI tools among citizens was <strong className="text-foreground">17.8%</strong> in 2025—the lowest in the EU, signalling room for literacy and enablement programs.<CitationLink id={517} />
                </li>
                <li>
                  Romania sits with Poland (8.4%) and Bulgaria (8.5%) in the lower band of EU adoption; the IT outsourcing sector creates a bridge to scale delivery once enterprise demand accelerates among small and mid-market firms.<CitationLink id={375} />
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                For event collateral and country-specific talking points, see the full{" "}
                <Link to="/market-profiles" className="text-llpa-blue font-medium hover:underline">
                  Romania market profile
                </Link>
                .
              </p>
            </div>

            {/* Pattern 1: Size-Class Divide */}
            <PatternCard id="pattern-1" patternNumber={1} icon={Building2} color="llpa-green" title="The Size-Class Divide Persists Despite Overall Growth" description="Across all markets with available data, AI adoption shows pronounced size-class disparity that has not narrowed despite overall market acceleration.">
              <EvidenceBlock title="Evidence (December 2025)" note="Note: Gap measured in percentage points (pp).">
                <DataTableStandard columns={[{
                key: "market",
                header: "Market"
              }, {
                key: "large",
                header: "Large Enterprise"
              }, {
                key: "gap",
                header: "Gap"
              }, {
                key: "sme",
                header: "SME/Small"
              }]} data={sizeClassEvidence.map(row => ({
                market: <>{row.market}{row.citations.map(c => <CitationLink key={c} id={c} />)}</>,
                large: row.large,
                gap: <span className="text-llpa-yellow font-medium">{row.gap}</span>,
                sme: row.sme
              }))} />
                
                <div className="mt-6">
                  <h6 className="text-sm font-medium text-muted-foreground mb-3">Adoption Gap Visualization (sorted by gap magnitude)</h6>
                  <SizeClassChart data={sizeClassEvidence} />
                </div>
              </EvidenceBlock>

              <FindingBlock>
                <p className="mb-3">
                  The size-class gap has widened as large enterprises accelerated adoption faster than SMEs. In several markets, large enterprise adoption exceeds 60% while small business adoption remains below 20%.
                </p>
                <p className="text-sm text-muted-foreground border-l-2 border-llpa-yellow/50 pl-3">
                  <strong>Reading the table — absolute gap vs. ratio:</strong> the "Gap" column is a percentage-point difference, which mechanically shrinks in low-adoption markets. <strong className="text-foreground">Romania's 17pp gap is the smallest in the table, but its <em>large-to-small ratio</em> (5.0x) is the highest</strong> — large Romanian enterprises adopt AI at five times the rate of small ones, more concentrated than the EU average (3.7x), Singapore (4.3x) or the Nordic markets (~4x). The divide is not less severe in Romania; it is hidden by the low floor (small-enterprise adoption of just 4.13%). Read the two columns together when comparing low-base markets to the rest.
                </p>
              </FindingBlock>

              <RecommendationBlock>
                <p>
                  See <a href="#demand-pattern-1" className="text-llpa-blue hover:underline font-medium">Demand Pattern 1 (Section 2)</a> for detailed recommendations addressing this divide.
                </p>
              </RecommendationBlock>
            </PatternCard>

            {/* Pattern 2: Skills Gap */}
            <PatternCard id="pattern-2" patternNumber={2} icon={GraduationCap} color="llpa-blue" title="Skills Gap Remains Universal Despite Adoption Growth" description="Counterintuitively, the skills gap has not narrowed as adoption increased. Markets with 30-40% adoption report skills shortages as severe as markets with 10% adoption.">
              <EvidenceBlock title="Evidence Across Tiers">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The skills gap persists across all market tiers.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Among Tier 1 leaders:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-llpa-green mt-1.5">•</span>
                        <span>Denmark reports 42.03% adoption yet 62% of organizations cite lack of AI skills as a major barrier.<CitationLink id={375} /><CitationLink id={26} /></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-llpa-green mt-1.5">•</span>
                        <span>The Netherlands sees ~25% adoption (above EU average) but a striking 74.6% identify "lack of experience" as their primary obstacle.<CitationLink id={42} /></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-llpa-green mt-1.5">•</span>
                        <span>Switzerland, with 32% workforce adoption, reveals a training disconnect where a minority of employees feel adequately prepared to use AI in their work.<CitationLink id={380} /></span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">In Tier 2:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-llpa-blue mt-1.5">•</span>
                        <span>Germany's 20-27% adoption is constrained by skills scarcity, with 33% of organizations citing limited AI talent as their top barrier.<CitationLink id={76} /></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-llpa-blue mt-1.5">•</span>
                        <span>South Africa remains early-stage with over 60% identifying the skills gap as their key barrier.<CitationLink id={390} /></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-llpa-blue mt-1.5">•</span>
                        <span>Mexico has reached 95% enterprise AI adoption, but organizational culture and operational complexity — not software availability — are cited as the primary obstacles to scaling, and 100% of Mexican CEOs identify AI investment as the principal lever for profitability and growth.<CitationLink id={521} /><CitationLink id={522} /></span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-llpa-blue mt-1.5">•</span>
                        <span>Romania — the EU's lowest-adoption market at 5.2% — shows the same skills-gap pattern from a low base: members report low digital literacy and a conservative client mindset, with demand concentrated on awareness and foundational topics rather than advanced AI skills.<CitationLink id={375} /><CitationLink id={150} /></span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Tier 3 markets face similar challenges at earlier stages:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-llpa-yellow mt-1.5">•</span>
                        <span>Portugal struggles to scale beyond 13-15% adoption with 71% reporting difficulty hiring digital skills.<CitationLink id={384} /></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </EvidenceBlock>

              <InterpretationBlock>
                <p>
                  The evidence demonstrates that skills gaps persist regardless of market maturity level — high-adoption markets (Denmark at 42.03%, Netherlands at ~25%) report skill shortages at comparable severity to early-stage markets (South Africa, Portugal). This pattern suggests the skills gap is <strong>structural rather than a temporary lag</strong> that resolves with increased adoption. As organizations progress through adoption stages, they encounter new skill requirements rather than "catching up."
                </p>
              </InterpretationBlock>

              <RecommendationBlock title="Strategic Recommendations: Learning Pathway Levels">
                <p className="mb-4">
                  <strong>Develop leveled learning pathways</strong> spanning the full organizational-maturity spectrum — from strategic transformation work for AI-native enterprises down to foundational literacy for early adopters.
                </p>
                <p className="mb-6 text-sm text-muted-foreground border-l-2 border-llpa-blue/40 pl-3">
                  <strong>Note:</strong> the level numbering aligns with Section 1.1's Market Maturity Tiers — Level 1 is for the most advanced organizations, Level 4 for those just starting. The two systems are still independent: tiers describe whole markets; levels describe individual organizations' learning needs.
                </p>

                <div className="space-y-3">
                  {learningPathwayLevels.map((pathway, index) => {
                  const getLevelStyles = (level: number) => {
                    switch (level) {
                      case 1:
                        return {
                          bg: 'bg-llpa-orange/10',
                          borderColor: 'border-l-llpa-orange',
                          iconBg: 'bg-llpa-orange/20',
                          iconColor: 'text-llpa-orange',
                          textColor: 'text-llpa-orange'
                        };
                      case 2:
                        return {
                          bg: 'bg-llpa-yellow/10',
                          borderColor: 'border-l-llpa-yellow',
                          iconBg: 'bg-llpa-yellow/20',
                          iconColor: 'text-llpa-yellow',
                          textColor: 'text-llpa-yellow'
                        };
                      case 3:
                        return {
                          bg: 'bg-llpa-blue/10',
                          borderColor: 'border-l-llpa-blue',
                          iconBg: 'bg-llpa-blue/20',
                          iconColor: 'text-llpa-blue',
                          textColor: 'text-llpa-blue'
                        };
                      case 4:
                        return {
                          bg: 'bg-llpa-green/10',
                          borderColor: 'border-l-llpa-green',
                          iconBg: 'bg-llpa-green/20',
                          iconColor: 'text-llpa-green',
                          textColor: 'text-llpa-green'
                        };
                      default:
                        return {
                          bg: 'bg-llpa-green/10',
                          borderColor: 'border-l-llpa-green',
                          iconBg: 'bg-llpa-green/20',
                          iconColor: 'text-llpa-green',
                          textColor: 'text-llpa-green'
                        };
                    }
                  };
                  const styles = getLevelStyles(pathway.level);
                  return <motion.div key={pathway.level} initial={{
                    opacity: 0,
                    y: 20
                  }} whileInView={{
                    opacity: 1,
                    y: 0
                  }} viewport={{
                    once: true
                  }} transition={{
                    delay: index * 0.1,
                    duration: 0.5
                  }} className={`rounded-xl p-4 border-l-4 ${styles.borderColor} ${styles.bg}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-6 h-6 rounded flex items-center justify-center ${styles.iconBg}`}>
                            <pathway.icon className={`w-3 h-3 ${styles.iconColor}`} />
                          </div>
                          <span className={`text-xs font-semibold uppercase tracking-wider ${styles.textColor}`}>
                            Level {pathway.level}
                          </span>
                          <h6 className="text-base font-semibold text-foreground">
                            {pathway.name}
                          </h6>
                        </div>
                        
                        <p className="text-xs text-muted-foreground mb-2 italic">
                          <strong>Target:</strong> {pathway.target}
                        </p>
                        
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                            Learning Objectives:
                          </p>
                          <ul className="space-y-1">
                            {pathway.objectives.map((obj, i) => <li key={i} className="text-xs text-muted-foreground flex gap-2">
                                <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5 ${styles.iconBg.replace('/20', '')}`} />
                                <span>{obj}</span>
                              </li>)}
                          </ul>
                        </div>
                      </motion.div>;
                })}
                </div>

                <p className="mt-6 text-muted-foreground leading-relaxed flex items-start gap-3">
                  <IconWrapper icon={Lightbulb} color="llpa-yellow" size="sm" className="mt-0.5" />
                  <span><strong>Key Insight:</strong> Organizations don't need every level at once—they need the right learning pathway level for their current organizational maturity (independent of the Market Maturity Tiers in Section 1.1). An organization stuck in pilot phase doesn't benefit from advanced LLMOps training; they need implementation skills to break out of pilots. Conversely, organizations with production systems don't need more awareness training—they need governance expertise.</span>
                </p>
              </RecommendationBlock>
            </PatternCard>

            {/* Pattern 3: Regulated Industries */}
            <PatternCard id="pattern-3" patternNumber={3} icon={Shield} color="llpa-orange" title="Regulated Industries Show Higher Training Investment" description="Regulated sectors (financial services, healthcare, insurance, pharmaceuticals, public sector) show distinct adoption patterns characterized by heightened caution.">
              <EvidenceBlock>
                <DataTableStandard columns={[{
                key: "market",
                header: "Market"
              }, {
                key: "finding",
                header: "Finding"
              }]} data={regulatedIndustryEvidence.map(row => ({
                market: row.market,
                finding: <>{row.finding}{row.citations.map(c => <CitationLink key={c} id={c} />)}</>
              }))} />
              </EvidenceBlock>

              <FindingBlock>
                <p>
                  The evidence shows regulated industries exhibit heightened caution (security concerns, governance gaps, conservative deployment approaches) compared to unregulated sectors. Research from regulated-industry-heavy markets (Switzerland, Germany, Netherlands) reports cautious enterprise approaches, with organizations emphasizing security, quality, and proof-of-value. Security and compliance concerns create both friction and opportunity for AI adoption.
                </p>
              </FindingBlock>

              <RecommendationBlock>
                <ul className="space-y-4 list-none">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-llpa-green mt-2" />
                    <span>
                      <strong>Build sector-specific governance modules</strong> addressing <a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer" className="text-llpa-blue hover:underline">GDPR</a>, <a href="https://artificialintelligenceact.eu/" target="_blank" rel="noopener noreferrer" className="text-llpa-blue hover:underline">AI Act</a>, <a href="https://www.finma.ch/en/" target="_blank" rel="noopener noreferrer" className="text-llpa-blue hover:underline">FINMA</a>, <a href="https://www.digital-operational-resilience-act.com/" target="_blank" rel="noopener noreferrer" className="text-llpa-blue hover:underline">DORA</a>, and industry-specific regulations—compliance requirements justify premium pricing. In practice, this means developing curriculum that goes beyond generic "AI ethics" content to address specific regulatory frameworks relevant to each sector: for financial services, this includes model risk management requirements, algorithmic trading disclosures, and DORA's ICT risk management mandates; for healthcare, <a href="https://www.hhs.gov/hipaa/index.html" target="_blank" rel="noopener noreferrer" className="text-llpa-blue hover:underline">HIPAA</a> considerations for AI-generated content and medical device regulations; for insurance, Solvency II implications and actuarial model governance.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-llpa-blue mt-2" />
                    <span>
                      <strong>Shadow AI risk is significant</strong>—the evidence shows governance gaps (only 49% with effective data governance in Netherlands); employees using personal AI tools without oversight creates compliance exposure. Shadow AI refers to employees using personal ChatGPT accounts, uploading company data to unsanctioned AI tools, or deploying AI solutions without IT approval. Organizations must establish acceptable use policies, deploy sanctioned tools, and ensure compliant AI usage.
                    </span>
                  </li>
                </ul>
              </RecommendationBlock>
            </PatternCard>

            {/* Pattern 4: Strategic Planning Gap */}
            <div id="pattern-4" className={`${containers.card} mb-10`}>
              <h4 className={`${typography.cardTitle} ${spacing.titleMargin} flex items-center ${spacing.contentGap}`}>
                <IconWrapper icon={Target} color="llpa-green" size="md" />
                Pattern 4: The Strategic Planning Gap Is Universal
              </h4>

              <p className={`${typography.bodySmall} ${spacing.paragraphMargin} font-bold`}>
                64% of enterprises lack strategic clarity on AI goals — citing undefined objectives, confusion about use cases, and difficulty prioritizing initiatives.
              </p>

              <p className={`${typography.body} mb-6`}>
                Across all tiers, organizations struggle not with "what is AI?" but with "how should we apply AI strategically?"
              </p>

              {/* Enterprise Survey Evidence */}
              <div className="mb-6">
                <h5 className={`${typography.blockTitle} ${spacing.titleMargin} flex items-center ${spacing.contentGap}`}>
                  <IconWrapper icon={MessageSquare} color="llpa-blue" size="sm" />
                  Enterprise Survey Evidence
                </h5>
                <ul className="space-y-2">
                  {strategicPlanningQuotes.map((item, index) => {
                  const colors = ['text-llpa-green', 'text-llpa-blue', 'text-llpa-yellow', 'text-llpa-orange'];
                  return <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className={`${colors[index % 4]} mt-1`}>•</span>
                        <span>
                          <span className="text-foreground">{item.attribution}</span>{" "}
                          <span className="italic">"{item.quote}"</span>
                          <CitationLink id={item.citation} />
                        </span>
                      </li>;
                })}
                </ul>
              </div>

              {/* External Validation */}
              <div className="mb-6">
                <h5 className={`${typography.blockTitle} ${spacing.titleMargin}`}>External Validation</h5>
                <ul className="space-y-3">
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-llpa-green mt-1">•</span>
                    <span>88% of organizations using AI, but only 39% report any EBIT impact at enterprise level; nearly two-thirds still in experimentation/pilot phase; only 6% are "high performers" capturing significant value<CitationLink id={393} /></span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-llpa-blue mt-1">•</span>
                    <span>82% of leaders say this is a pivotal year to rethink strategy, yet 67% of leaders report familiarity with AI agents compared to only 40% of employees — highlighting the execution gap<CitationLink id={394} /></span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-llpa-yellow mt-1">•</span>
                    <span>63% of employers identify skills gaps as primary barrier to business transformation<CitationLink id={395} /></span>
                  </li>
                  <li className="text-muted-foreground flex items-start gap-2">
                    <span className="text-llpa-orange mt-1">•</span>
                    <span>60% of Copilot licenses unused within 90 days of deployment<CitationLink id={130} /></span>
                  </li>
                </ul>
              </div>

              {/* Strategic Recommendations */}
              <div className="mt-6">
                <h5 className={`${typography.smallTitle} ${spacing.paragraphMargin}`}>
                  Strategic Recommendations
                </h5>
                
                <div className="mb-6">
                  <div className={`flex items-start ${spacing.contentGap} ${spacing.paragraphMargin}`}>
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-llpa-green mt-2" />
                    <p className={typography.blockTitle}>
                      Organizations need AI readiness and opportunity assessment frameworks:
                    </p>
                  </div>
                  <ul className={`${spacing.indent} space-y-2 list-none`}>
                    {assessmentTools.map((tool, index) => {
                    const colors = ['bg-llpa-green/60', 'bg-llpa-blue/60', 'bg-llpa-yellow/60', 'bg-llpa-orange/60'];
                    return <li key={tool} className="flex items-start gap-2">
                          <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full ${colors[index % 4]} mt-1.5`} />
                          <span className="text-sm text-muted-foreground">{tool}</span>
                        </li>;
                  })}
                  </ul>
                </div>

                <ul className="space-y-3 list-none">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-llpa-blue mt-2" />
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">Strategic planning is the critical gap</strong> — organizations struggle with "how" and "where" to apply AI, not "what" AI is</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 rounded-full bg-llpa-yellow mt-2" />
                    <p className="text-sm text-muted-foreground"><strong className="text-foreground">Create implementation consulting offerings</strong> as premium services layered on top of training — see <a href="#demand-pattern-1" className="text-llpa-blue hover:underline font-medium">Demand Pattern 1 (Section 2)</a> for detailed recommendations</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default GlobalAILandscape;