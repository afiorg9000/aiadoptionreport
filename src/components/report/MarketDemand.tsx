import { motion } from "framer-motion";
import { Users, Briefcase, LifeBuoy, TrendingUp, AlertTriangle, Lightbulb, CheckCircle, XCircle, Target, Building2, GraduationCap, Wrench, HelpCircle, Layers, FlaskConical } from "lucide-react";
import CitationLink from "./CitationLink";
import SectionHeader from "./SectionHeader";
import MethodologyBlock from "./MethodologyBlock";
import InsightBox from "./InsightBox";
import IconWrapper from "./IconWrapper";
import { typography, spacing, containers, iconSizes, iconWrapperBase } from "./styles";
const demandPatterns = [{
  id: 1,
  title: "Foundational GenAI Training (ChatGPT, Copilot Basics)",
  percentage: "86%",
  icon: Users,
  color: "bg-gold/20",
  iconColor: "text-gold",
  borderColor: "border-gold",
  clientRequests: ['"ChatGPT training" (general understanding of what it is, how to use it)', '"Microsoft Copilot basics" (prompt engineering, integration with Microsoft 365 apps)', '"AI awareness and essentials for all employees" (company-wide literacy initiatives)'],
  marketPhase: "Organizations in awareness/early adoption phase (Tier 3-4 markets predominantly)",
  positives: [{
    label: "High volume demand",
    description: "Foundational training addresses largest audience (all employees, not just technical staff)"
  }, {
    label: "Entry point",
    description: "Awareness training often leads to advanced training purchases (progression path)"
  }, {
    label: "Low barriers",
    description: "No prerequisites, accessible to all skill levels"
  }],
  challenges: [{
    label: "Commoditization risk",
    description: "Free resources abundant (Microsoft Learn, YouTube tutorials, ChatGPT's own help documentation)"
  }, {
    label: "Low conversion",
    description: 'Members report "people attend free webinars but don\'t purchase paid training"'
  }, {
    label: "Price pressure",
    description: "Difficult to justify high prices for content comparable to free alternatives"
  }]
}, {
  id: 2,
  title: "Role-Based & Industry-Specific Training",
  percentage: "55%",
  icon: Briefcase,
  color: "bg-info/20",
  iconColor: "text-info",
  borderColor: "border-info",
  clientRequests: ['"Training customized to our industry" (healthcare, finance, manufacturing, etc.)', '"AI for specific job functions" (marketing, sales, HR, finance, operations)', '"Real examples from our sector, not generic business scenarios"'],
  whyClientsWant: [{
    label: "Relevance",
    description: "Generic training requires learners to translate concepts to their context; role-specific training provides immediate applicability",
    icon: Target,
    color: "text-success"
  }, {
    label: "ROI justification",
    description: '"AI for Email Campaign Personalization" or "AI for Ad Copy A/B Testing" easier to justify than generic "AI Fundamentals" (specific value proposition)',
    icon: TrendingUp,
    color: "text-gold"
  }, {
    label: "Engagement",
    description: "Learners more engaged when examples match their daily work",
    icon: Users,
    color: "text-info"
  }]
}, {
  id: 3,
  title: "Post-Purchase Adoption Support",
  percentage: "18%",
  icon: LifeBuoy,
  color: "bg-steel/20",
  iconColor: "text-steel",
  borderColor: "border-steel",
  clientRequests: ["Organizations purchase AI tool licenses (Copilot, ChatGPT Enterprise) WITHOUT prior training", "Initial enthusiasm, then usage declines over weeks/months", "Reach out to training providers for training after adoption stalls"],
  withoutTraining: ["Try tool briefly with obvious use cases (write email, summarize document)", "Encounter limitations or unexpected outputs (hallucinations, formatting issues)", "Lack troubleshooting skills to overcome barriers", "Revert to old workflows", "Tool ROI never realized despite license spend"]
}];
const foundationalValidation = [{
  source: "McKinsey State of AI Survey (March 2025)",
  finding: "80%+ of respondents say organizations aren't seeing tangible EBIT impact from gen AI despite widespread experimentation",
  implications: ["Organizations have foundational awareness but lack implementation capability", 'Skills gap is not just "how to use ChatGPT" but "how to identify where AI creates business value"']
}, {
  source: "IBM Global AI Adoption Index (2024)",
  finding: "42% of organizations struggle to define success metrics for AI initiatives",
  implications: ["Skills gap includes strategic planning, not just tool operation", "Organizations need frameworks for opportunity assessment and ROI measurement, not more prompt engineering courses"]
}, {
  source: "Worklytics Copilot Adoption Report (2025)",
  finding: "60% of organizations remain in pilot/testing phase despite seeing positive pilot results; average 60% of Copilot licenses unused within 90 days of deployment",
  citations: [130],
  implications: ["Foundational training exists (organizations bought licenses, some received training) but adoption still fails", "Skills gap includes change management, workflow redesign, and organizational adoption — areas foundational training doesn't address"]
}];
const industryValidation = [{
  finding: "Industry-specific courses achieve 3.2x higher completion rates than generic courses; learners report 40% higher skill confidence when training includes role-specific examples",
  implication: "Learners recognize generic training requires additional translation effort; specialized content provides immediate applicability"
}, {
  finding: "Industry vertical training commands 30-50% pricing premium over generic equivalents; financial services and healthcare sectors show highest willingness-to-pay for specialized AI training",
  implication: "Market validates both demand AND revenue potential for vertical-specific curriculum"
}, {
  finding: '67% of enterprises prioritize AI training that addresses industry-specific use cases; 54% cite "lack of relevant examples" as barrier to effective AI training adoption',
  implication: "Generic training creates adoption friction; industry customization removes barrier"
}];
const postPurchaseValidation = [{
  source: "Worklytics Microsoft Copilot Report (2025)",
  finding: "Average 60% of Copilot licenses unused within 90 days of deployment",
  implication: "Organizations buying tools but failing to drive adoption",
  citations: [130]
}, {
  source: "CNBC Tech Executive Council (2024)",
  finding: "79% of enterprises using Microsoft Copilot, but only 50% deploying to all employees",
  implication: "Organizations see value in pilots but cannot scale adoption enterprise-wide"
}, {
  source: "Microsoft Community Hub (May 2025)",
  finding: "Vodafone case study shows 77% of Copilot users report productivity gains, average 3 hours/week saved",
  implication: "Tools CAN deliver value when properly adopted; adoption failure is NOT due to tool limitations"
}];
const foundationalRecommendations = [{
  title: "Develop AI implementation consulting services as premium offering",
  description: "Move beyond commoditized training market",
  items: ["AI readiness assessments that diagnose organizational preparedness", "Use case discovery workshops that help clients identify high-value applications", "Vendor evaluation support that cuts through marketing claims", "Implementation roadmaps that sequence initiatives by feasibility and impact"]
}, {
  title: "Target mid-market enterprises specifically",
  description: "Can't afford big consultants but need more than training",
  items: ['These organizations face the same strategic planning gap as large enterprises (64% lack strategic clarity on AI goals) but lack internal strategy teams to fill it', "Members can offer implementation consulting at $25K-$150K price points—premium to training but accessible to mid-market budgets", 'This "missing middle" represents significant whitespace: big consultancies don\'t pursue these clients (too small), while traditional training providers don\'t offer strategic services (capability gap)']
}];
const postPurchaseRecommendations = [{
  title: "Bundle training with 90-day post-implementation support",
  description: "Address the 60% license abandonment problem",
  items: ["Check-in sessions at 30/60/90 days", "Troubleshooting clinics for common barriers", "Usage analytics review to identify adoption gaps", "Targeted interventions for lagging teams or use cases"],
  insight: 'This shifts the value proposition from "we trained your people" to "we ensured your investment paid off"'
}, {
  title: 'Develop "rescue packages" for failed AI deployments',
  description: "Productized service for warm leads actively seeking solutions",
  items: ["Adoption audit (identify where and why usage dropped)", "Recovery plan (prioritize quick wins to rebuild momentum)", "Power user bootcamp (create internal champions)", "Workflow redesign (integrate AI into actual daily tasks)", "Measurement iteration (track progress and adjust)"],
  insight: "Position pricing as fraction of the sunk license cost they're trying to recover"
}, {
  title: "Adopt frameworks that training providers will develop",
  description: "Opportunity assessment, success metrics definition, and implementation roadmapping",
  items: ["Rather than each member developing these tools independently, Industry associations will create standardized methodologies that members can customize for their markets", "This ensures consistent quality across the alliance, reduces individual member development costs, and enables knowledge sharing about what works", "Members should plan to integrate these frameworks into their consulting offerings as they become available"]
}];
const MarketDemand = () => {
  return <section id="section-2" className={`${spacing.section} bg-card`}>
      <div className="container">
        {/* Section Header */}
        <SectionHeader sectionNumber={2} label="Section 2" title="Market Demand & Client Needs" id="section-2-header" />

        {/* Methodology */}
        <div className="mb-12">
          <p className={`${typography.bodySmall} mb-2 flex items-start ${spacing.contentGap}`}>
            <IconWrapper icon={FlaskConical} color="llpa-green" size="sm" className="mt-0.5" />
            <span><strong>Methodology:</strong> Thematic analysis of training provider surveys conducted July-September 2025, validated against independent market research from consulting firms, technology vendors, academic institutions, and government agencies.</span>
          </p>
          <p className={`${typography.note} ${containers.note}`}>
            <strong>Note:</strong> Members primarily serve organizational clients (enterprises, SMBs, government, education institutions) rather than individual consumers. "Client demand" reflects organizational buyer needs.
          </p>
        </div>

        {/* Demand Pattern 1: Foundational GenAI Training */}
        <div id="demand-pattern-1" className={spacing.sectionMargin}>
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
        }} className="bg-card rounded-xl border border-border shadow-sm p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className={`${iconWrapperBase} ${iconSizes.xl.wrapper} bg-gradient-to-br from-llpa-orange/20 to-llpa-yellow/20`}>
                <Users className={`${iconSizes.xl.icon} text-llpa-orange`} />
              </div>
              <div>
                <span className="text-xs font-medium text-llpa-orange uppercase tracking-wider">Most Requested</span>
                <h3 className={typography.subsectionTitle}>
                  Demand Pattern 1: {demandPatterns[0].title}
                </h3>
              </div>
            </div>

            {/* Client Requests */}
            <div className="mb-6">
              <p className="font-body text-sm font-medium text-foreground mb-4">
                <span className="text-llpa-orange font-bold">86%</span> of providers report this is what clients request:
              </p>
              <ul className="space-y-3 mb-4">
                {demandPatterns[0].clientRequests.map((request, i) => <li key={i} className="flex gap-3">
                    <span className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${i === 0 ? 'bg-llpa-orange' : i === 1 ? 'bg-llpa-blue' : 'bg-llpa-green'}`} />
                    <span className="text-sm text-muted-foreground leading-relaxed">{request}</span>
                  </li>)}
              </ul>
              <p className="font-body text-sm text-muted-foreground italic">
                <strong>Market Phase:</strong> {demandPatterns[0].marketPhase}
              </p>
            </div>

            {/* Business Implications */}
            <h4 className="font-display text-lg font-semibold text-foreground mb-4">Business Implications:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Positive */}
              <div>
                <h5 className="font-display text-sm font-semibold text-success mb-3 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Positive
                </h5>
                <ul className="space-y-2">
                  {demandPatterns[0].positives.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-success mt-1.5">•</span>
                      <p className="font-body text-sm">
                        <strong className="text-foreground">{item.label}:</strong>{" "}
                        <span className="text-muted-foreground">{item.description}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div>
                <h5 className="font-display text-sm font-semibold text-destructive mb-3 flex items-center gap-2">
                  <XCircle className="w-4 h-4" />
                  Challenges
                </h5>
                <ul className="space-y-2">
                  {demandPatterns[0].challenges.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-destructive mt-1.5">•</span>
                      <p className="font-body text-sm">
                        <strong className="text-foreground">{item.label}:</strong>{" "}
                        <span className="text-muted-foreground">{item.description}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* External Validation */}
            <div className="bg-background rounded-xl p-6 border border-border mb-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                External Validation: Foundational Training Is Necessary Yet Insufficient
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                External Research Shows Skills Gap Is Structural, Not Just Foundational:
              </p>

              <div className="space-y-6">
                {foundationalValidation.map((item, i) => <div key={i} className="border-l-4 border-info pl-4">
                    <p className="font-body text-sm font-semibold text-foreground mb-1">
                      {item.source}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mb-2">
                      {item.finding}
                      {item.citations?.map(c => <CitationLink key={c} id={c} />)}
                    </p>
                    <ul className="space-y-1">
                      <li className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-info mt-1">→</span>
                        <span><em>Implication:</em> {item.implications[0]}</span>
                      </li>
                      {item.implications.slice(1).map((imp, j) => <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-info mt-1">→</span>
                          <span>{imp}</span>
                        </li>)}
                    </ul>
                  </div>)}
              </div>

              {/* This explains why */}
              <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                <p className="font-body text-sm font-semibold text-foreground mb-4">This explains why:</p>
                <div className="space-y-4">
                  <p className="font-body text-sm text-foreground">
                    <span className="font-bold text-base text-foreground">86%</span> of providers report foundational training demand <span className="text-muted-foreground">(awareness remains necessary)</span>
                  </p>
                  <p className="font-body text-sm text-foreground">
                    <span className="font-bold text-base text-foreground">YET 64%</span> report clients lack strategic clarity on AI goals <span className="text-muted-foreground">(need strategic guidance, not more tool training)</span>
                  </p>
                  <p className="font-body text-sm text-foreground">
                    <span className="font-bold text-base text-foreground">YET 55%</span> report demand for industry-specific training <span className="text-muted-foreground">(generic foundational content insufficient)</span>
                  </p>
                  <p className="font-body text-sm text-foreground">
                    <span className="font-bold text-base text-foreground">YET Tier 1</span> market members request "advanced use cases beyond basics" <span className="text-muted-foreground">(foundational training saturated)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Strategic Recommendations */}
            <div className="mt-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Strategic Recommendations
              </h4>

              <div className="space-y-6">
                {foundationalRecommendations.map((rec, i) => <div key={i} className="space-y-3">
                    <p className="font-body text-sm text-foreground">
                      <span className="font-bold">{rec.title}</span> to {rec.description.toLowerCase()}
                    </p>
                    <ul className="space-y-2 pl-4">
                      {rec.items.map((item, j) => <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-foreground mt-0.5">•</span>
                          <span>{item}</span>
                        </li>)}
                    </ul>
                    {rec.insight && <p className="font-body text-sm text-foreground italic">
                        {rec.insight}
                      </p>}
                  </div>)}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Demand Pattern 2: Role-Based & Industry-Specific Training */}
        <div id="demand-pattern-2" className="mb-16">
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
        }} className="bg-card rounded-xl border border-border shadow-sm p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-llpa-blue/20 to-info/20 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-llpa-blue" />
              </div>
              <div>
                <span className="text-xs font-medium text-llpa-blue uppercase tracking-wider">High Value</span>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Demand Pattern 2: {demandPatterns[1].title}
                </h3>
              </div>
            </div>

            {/* Client Requests */}
            <div className="mb-6">
              <p className="font-body text-sm font-medium text-foreground mb-4">
                <span className="text-llpa-blue font-bold">55%</span> of members explicitly cite this is what clients request:
              </p>
              <ul className="space-y-2">
                {demandPatterns[1].clientRequests.map((request, i) => <li key={i} className="font-body text-muted-foreground flex items-start gap-2">
                    <span className="text-info mt-1">•</span>
                    <span>{request}</span>
                  </li>)}
              </ul>
            </div>

            {/* Why Clients Want This */}
            <div className="bg-background rounded-xl p-6 border border-border mb-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Why Clients Want This
              </h4>
              <ul className="space-y-3">
                {demandPatterns[1].whyClientsWant?.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i} className="flex items-start gap-3 font-body text-sm">
                      <span className={`${item.color} mt-0.5`}>
                        <Icon size={18} />
                      </span>
                      <span>
                        <strong className={`${item.color}`}>{item.label}:</strong>{" "}
                        <span className="text-muted-foreground">{item.description}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* External Validation */}
            <div className="bg-background rounded-xl p-6 border border-border mb-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                External Validation: Industry-Specific & Role-Based Training Commands Premium
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                External Research Confirms Market Preference for Specialized Content:
              </p>

              <div className="space-y-4">
                {industryValidation.map((item, i) => <div key={i} className="border-l-4 border-info pl-4">
                    <p className="font-body text-sm text-muted-foreground mb-2">
                      {item.finding}
                    </p>
                    <p className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-info">→</span>
                      <span><em>Implication:</em> {item.implication}</span>
                    </p>
                  </div>)}
              </div>

              <div className="mt-6 p-4 bg-info/10 rounded-xl border border-info/30">
                <p className="font-body text-sm text-foreground flex items-start gap-3">
                  <IconWrapper icon={Lightbulb} color="info" size="sm" className="mt-0.5" />
                  <span>
                    <strong>Key Insight:</strong> External research confirms provider-reported pattern — organizations willing to pay premium for training that reduces "translation effort" from generic concepts to specific workflows.
                  </span>
                </p>
              </div>
            </div>

            {/* Strategic Recommendations */}
            <div className="mt-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Strategic Recommendations
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                Launch government and education sector-specific AI adoption programs (currently underserved 5% segments). See Section 4 for more details.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Demand Pattern 3: Post-Purchase Adoption Support */}
        <div id="demand-pattern-3" className="mb-8">
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
        }} className="bg-gradient-to-br from-card to-gold/5 rounded-xl border border-gold/20 shadow-sm p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold/20 to-llpa-yellow/20 flex items-center justify-center">
                <LifeBuoy className="w-6 h-6 text-gold" />
              </div>
              <div>
                <span className="text-xs font-medium text-gold uppercase tracking-wider">Critical Gap</span>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Demand Pattern 3: {demandPatterns[2].title}
                </h3>
              </div>
            </div>

            {/* Client Experience */}
            <div className="mb-6">
              <p className="font-body text-sm font-medium text-foreground mb-4">
                Members report this is what clients commonly experience:
              </p>
              <ul className="space-y-2 mb-4">
                {demandPatterns[2].clientRequests.map((request, i) => <li key={i} className="font-body text-muted-foreground flex items-start gap-2">
                    <span className="text-gold mt-1">•</span>
                    <span className={i === 0 ? "font-semibold text-foreground" : ""}>{request}</span>
                  </li>)}
              </ul>

              <div className="border-t border-border pt-4">
                <p className="font-body text-sm font-semibold text-foreground mb-4">
                  Without training, employees:
                </p>
                <ul className="space-y-2">
                  {demandPatterns[2].withoutTraining?.map((item, i) => <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-destructive font-bold mt-0.5">→</span>
                      <span className="font-body text-muted-foreground">{item}</span>
                    </li>)}
                </ul>
              </div>
            </div>

            {/* External Validation */}
            <div className="bg-gradient-to-br from-gold/5 to-llpa-yellow/5 rounded-xl p-6 border border-gold/20 mb-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold" />
                External Validation: Post-Purchase Adoption Failure Is Common
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                External Research Confirms Post-Purchase Adoption is Major Problem:
              </p>

              <div className="space-y-4">
                {postPurchaseValidation.map((item, i) => <div key={i} className="border-l-4 border-gold/50 pl-4 bg-background/50 rounded-r-lg py-2">
                    <p className="font-body text-sm font-semibold text-foreground mb-1">
                      {item.source}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mb-2">
                      {item.finding}
                      {item.citations?.map(c => <CitationLink key={c} id={c} />)}
                    </p>
                    <p className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-gold">→</span>
                      <span><em>Implication:</em> {item.implication}</span>
                    </p>
                  </div>)}
              </div>

              <div className="mt-6 p-4 bg-gold/10 rounded-xl border border-gold/30">
                <p className="font-body text-sm text-foreground flex items-start gap-3">
                  <IconWrapper icon={Lightbulb} color="gold" size="sm" className="mt-0.5" />
                  <span>
                    <strong>Key Insight:</strong> External research confirms post-purchase adoption challenge is widespread. Organizations need help not just learning tools, but ensuring organizational adoption through change management, workflow redesign, and success measurement.
                  </span>
                </p>
              </div>
            </div>

            {/* Strategic Recommendations */}
            <div className="mt-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Strategic Recommendations
              </h4>

              <div className="space-y-6">
                {postPurchaseRecommendations.map((rec, i) => <div key={i} className="space-y-3">
                    <p className="font-body text-sm text-foreground">
                      <span className="font-bold">{rec.title}</span> to {rec.description.toLowerCase()}
                    </p>
                    <ul className="space-y-2 pl-4">
                      {rec.items.map((item, j) => {
                        const colors = ['text-llpa-orange', 'text-llpa-green', 'text-llpa-blue', 'text-llpa-yellow'];
                        return (
                          <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                            <span className={`${colors[j % 4]} mt-0.5`}>•</span>
                            <span>{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                    {rec.insight && <p className="font-body text-sm text-foreground italic">
                        {rec.insight}
                      </p>}
                  </div>)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default MarketDemand;