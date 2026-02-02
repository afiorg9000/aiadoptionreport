import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, Users, Target, Layers, Building, BookOpen } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { typography, spacing, containers, iconSizes, iconWrapperBase, getRotatingColor } from "./styles";

const metrics = [
  {
    metric: "Global Enterprise AI Adoption",
    value: 88,
    label: "88%",
    description: "of organizations using AI (up from 78% in 2024)",
    citations: [1, 2],
    color: "llpa-blue",
  },
  {
    metric: "Foundational Training Demand",
    value: 86,
    label: "86%",
    description: "of providers report this as top client request",
    citations: [8],
    color: "llpa-green",
  },
  {
    metric: "Skills Gap Persistence",
    value: 45,
    label: "45%",
    description: "of providers report knowledge/skills gaps as a key barrier",
    citations: [5],
    color: "llpa-orange",
  },
  {
    metric: "Strategic Planning Gap",
    value: 64,
    label: "64%",
    description: "of providers report clients lack strategic clarity on AI goals",
    citations: [6],
    color: "llpa-yellow",
  },
  {
    metric: "Post-Purchase Failure",
    value: 60,
    label: "60%",
    description: "of Copilot licenses unused within 90 days",
    citations: [7],
    color: "destructive",
  },
  {
    metric: "Industry-Specific Demand",
    value: 55,
    label: "55%",
    description: "of members cite demand for customized training",
    citations: [9],
    color: "llpa-blue",
  },
  {
    metric: "Value Realization Gap",
    value: 39,
    label: "39%",
    description: "report any EBIT impact (only 6% are \"high performers\")",
    citations: [3, 4],
    color: "llpa-orange",
  },
  {
    metric: "Portfolio Skill Level Gap",
    value: 90,
    label: "89.8%",
    description: "beginner/intermediate courses (only 10.1% advanced/expert)",
    citations: [11],
    color: "llpa-green",
  },
  {
    metric: "Portfolio Vendor Concentration",
    value: 46,
    label: "46.4%",
    description: "Microsoft-focused (0% Claude; 1.5% Google)",
    citations: [10],
    color: "llpa-yellow",
  },
];

const criticalFindings = [
  {
    number: 1,
    title: "The Value Gap Is the industry's Core Opportunity",
    content:
      "88% of organizations use AI, but only 39% report any EBIT impact. Nearly two-thirds remain stuck in experimentation/pilot phase. Organizations don't need more awareness training—they need implementation expertise, strategic guidance, and adoption support. training providers must expand from training providers to offer strategic advisory and implementation consulting.",
    icon: TrendingUp,
    color: "llpa-orange",
  },
  {
    number: 2,
    title: "The Strategic Planning Gap Is Universal",
    content:
      "64% of providers report clients lack strategic clarity on AI goals—citing undefined objectives, confusion about use cases, and difficulty prioritizing initiatives. Organizations struggle not with \"What is AI?\" but with \"How should we apply AI strategically?\" This gap persists across all market tiers and represents the highest-value consulting opportunity.",
    icon: Target,
    color: "llpa-blue",
  },
  {
    number: 3,
    title: "Post-Purchase Adoption Failure Is Epidemic",
    content:
      "60% of Microsoft Copilot licenses go unused within 90 days. Organizations buy tools, employees try them briefly, encounter friction, and abandon them. Training purchased after adoption has already failed has limited impact. training providers must position upstream—before and during deployment, not after failure.",
    icon: AlertTriangle,
    color: "llpa-yellow",
  },
  {
    number: 4,
    title: "The Skills Gap Is Structural, Not Temporary",
    content:
      "Counterintuitively, skills gaps have not narrowed as adoption increased. Markets with 40%+ adoption report skills shortages as severe as markets with 10% adoption. As organizations progress through adoption stages, they encounter new skill requirements. This means ongoing demand for progressively advanced training—but the industry's portfolio is 90% beginner/intermediate.",
    icon: Users,
    color: "llpa-green",
  },
  {
    number: 5,
    title: "Vendor Concentration Creates Strategic Risk",
    content:
      "46.4% of the industry's portfolio is Microsoft-focused. While this creates depth advantage, 68% of enterprises use multiple AI vendors. training providers has zero courses on Anthropic Claude (42% Fortune 500 adoption), minimal Google Gemini coverage (3+ billion Workspace users), and no open-source AI training despite 58% of enterprises planning open-source LLM deployments by 2026.",
    icon: Layers,
    color: "destructive",
  },
];

const strategicImperatives = [
  {
    number: 1,
    title: "Expand from Training Provider to Offer Strategic Advisory and Implementation Consulting",
    description:
      "training providers should support members in developing AI implementation consulting services, readiness assessment tools, and strategic advisory capabilities that position them upstream of tool deployment.",
    icon: Building,
    color: "llpa-orange",
  },
  {
    number: 2,
    title: "Diversify Beyond Microsoft Vendor Dependency",
    description:
      "Develop comprehensive training tracks for Anthropic Claude, OpenAI ChatGPT Enterprise, Google Gemini, and the open-source AI ecosystem to align with enterprise multi-vendor reality and move beyond vendor dependency with Microsoft.",
    icon: Layers,
    color: "llpa-green",
  },
  {
    number: 3,
    title: "Maximize Overall Reach with Tiered and Industry-Specific Training",
    description:
      "Develop comprehensive, tiered learning pathways (Foundational, Implementation, Governance) and build industry-specific curriculum depth to address the skills gap and serve high-value verticals across all client maturity levels (Tier 1-4) and industries.",
    icon: BookOpen,
    color: "llpa-blue",
  },
];

const ExecutiveSummary = () => {
  return (
    <section id="executive-summary" className={`${spacing.section} bg-background`}>
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Strategic Context */}
          <motion.div
            id="strategic-context"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={spacing.sectionMargin}
          >
            <p className={`${typography.sectionLabel} text-llpa-blue`}>Executive Summary</p>
            <h2 className={typography.sectionTitle}>Strategic Context</h2>

            <div className="space-y-4">
              <p className={typography.body}>
                The global AI training market is undergoing rapid transformation. Enterprise AI
                adoption has reached{" "}
                <span className={typography.emphasis}>88% globally</span>, yet only{" "}
                <span className={typography.emphasis}>6% of organizations</span> qualify as "high
                performers" capturing significant value. This disconnect between adoption and value
                realization represents both the industry's greatest challenge and greatest opportunity.
              </p>

              <p className={typography.body}>
                This report synthesizes insights from training provider surveys across 20 countries,
                analysis of the industry's 892-course portfolio, and validation against 425+ external market
                research sources to identify strategic priorities for 2025-2027.
              </p>
            </div>
          </motion.div>

          {/* Critical Findings */}
          <motion.div
            id="critical-findings"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className={spacing.sectionMargin}
          >
            <h3 className={`${typography.subsectionTitle} mb-6`}>Critical Findings</h3>

            <ul className={`${spacing.listGap} ${spacing.indent} list-none`}>
              {criticalFindings.map((finding, index) => {
                const FindingIcon = finding.icon;
                return (
                  <motion.li
                    key={finding.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`flex ${spacing.contentGap}`}
                  >
                    <IconWrapper icon={FindingIcon} color={finding.color} size="sm" className="mt-0.5" />
                    <div>
                      <h4 className={`${typography.blockTitle} mb-1`}>{finding.title}</h4>
                      <p className={typography.bodySmall}>{finding.content}</p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>

          {/* Key Metrics Summary Table */}
          <motion.div
            id="key-metrics-summary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className={spacing.sectionMargin}
          >
            <h3 className={`${typography.subsectionTitle} mb-2`}>Key Metrics Summary</h3>
            <p className={`${typography.bodySmall} mb-6`}>
              Data synthesized from member interviews, portfolio analysis, and external market
              research.
            </p>

            <div className={`overflow-x-auto ${spacing.indent}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-foreground">
                    <th className="text-left py-3 pr-4 font-semibold text-foreground">Metric</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground w-24">
                      Value
                    </th>
                    <th className="text-left py-3 pl-4 font-semibold text-foreground">Finding</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((row) => (
                    <tr key={row.metric} className="border-b border-border">
                      <td className="py-3 pr-4 font-medium text-foreground">{row.metric}</td>
                      <td className="py-3 px-4 text-right">
                        <span className="font-semibold text-foreground">{row.label}</span>
                      </td>
                      <td className="py-3 pl-4 text-muted-foreground">{row.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Strategic Imperatives */}
          <motion.div
            id="strategic-imperatives"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className={`${typography.subsectionTitle} mb-6`}>
              Strategic Imperatives for 2025-2027
            </h3>

            <div className={`${spacing.listGap} ${spacing.indent}`}>
              {strategicImperatives.map((imperative, index) => (
                <motion.div
                  key={imperative.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  className={`${containers.card}`}
                >
                  <div className="flex items-start gap-4">
                    <IconWrapper icon={imperative.icon} color={imperative.color} size="lg" />
                    <div className="flex-1">
                      <h4 className={`${typography.blockTitle} mb-2`}>{imperative.title}</h4>
                      <p className={typography.bodySmall}>{imperative.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
