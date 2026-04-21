import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, Users, Target, Layers, Building, BookOpen } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { typography, spacing, containers, iconSizes, iconWrapperBase, getRotatingColor } from "./styles";
import { sourceCount } from "@/data/reportData";

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
    metric: "Large Enterprise Adoption",
    value: 79,
    label: "79%",
    description: "of enterprises 1,000+ employees actively using AI",
    citations: [1],
    color: "llpa-green",
  },
  {
    metric: "SMB Adoption Gap",
    value: 35,
    label: "35%",
    description: "of small businesses actively using AI tools",
    citations: [1],
    color: "llpa-orange",
  },
  {
    metric: "Strategic Planning Gap",
    value: 64,
    label: "64%",
    description: "of enterprises lack strategic clarity on AI goals",
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
    metric: "Multi-Vendor Reality",
    value: 68,
    label: "68%",
    description: "of enterprises use multiple AI vendors",
    citations: [10],
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
    metric: "Skills Gap Persistence",
    value: 45,
    label: "45%",
    description: "report knowledge/skills gaps as primary adoption barrier",
    citations: [5],
    color: "llpa-green",
  },
  {
    metric: "GenAI Investment Growth",
    value: 60,
    label: "$60B+",
    description: "projected enterprise GenAI spending by 2027",
    citations: [2],
    color: "llpa-yellow",
  },
];

const criticalFindings = [
  {
    number: 1,
    title: "The Value Gap Defines Enterprise AI in 2025",
    content:
      "88% of organizations use AI, but only 39% report any EBIT impact. Nearly two-thirds remain stuck in experimentation/pilot phase. The gap between adoption and value realization represents the defining challenge of enterprise AI today.",
    icon: TrendingUp,
    color: "llpa-orange",
  },
  {
    number: 2,
    title: "The Strategic Planning Gap Is Universal",
    content:
      "64% of enterprises lack strategic clarity on AI goals—citing undefined objectives, confusion about use cases, and difficulty prioritizing initiatives. Organizations struggle not with \"What is AI?\" but with \"How should we apply AI strategically?\"",
    icon: Target,
    color: "llpa-blue",
  },
  {
    number: 3,
    title: "Post-Purchase Adoption Failure Is Epidemic",
    content:
      "60% of Microsoft Copilot licenses go unused within 90 days. Organizations buy tools, employees try them briefly, encounter friction, and abandon them. Technology deployment without change management consistently fails to drive adoption.",
    icon: AlertTriangle,
    color: "llpa-yellow",
  },
  {
    number: 4,
    title: "The Skills Gap Is Structural, Not Temporary",
    content:
      "Counterintuitively, skills gaps have not narrowed as adoption increased. Markets with 40%+ adoption report skills shortages as severe as markets with 10% adoption. As organizations progress through adoption stages, they encounter new and more complex skill requirements.",
    icon: Users,
    color: "llpa-green",
  },
  {
    number: 5,
    title: "Multi-Vendor Reality Creates Complexity",
    content:
      "68% of enterprises use multiple AI vendors. 37% now use 5+ AI models. The multi-vendor reality creates integration complexity, governance challenges, and skills requirements across diverse platforms including Microsoft, OpenAI, Anthropic, Google, and open-source solutions.",
    icon: Layers,
    color: "destructive",
  },
];

const strategicImperatives = [
  {
    number: 1,
    title: "Strategic Clarity Before Technology Deployment",
    description:
      "Organizations achieving AI value consistently report having clear strategic objectives, defined success metrics, and executive alignment before technology selection—not after.",
    icon: Building,
    color: "llpa-orange",
  },
  {
    number: 2,
    title: "Change Management Is Non-Negotiable",
    description:
      "Technology deployment alone does not drive adoption. Successful organizations invest equally in change management, user enablement, and ongoing support alongside technology implementation.",
    icon: Layers,
    color: "llpa-green",
  },
  {
    number: 3,
    title: "Skills Development Must Match Adoption Maturity",
    description:
      "As organizations progress from experimentation to scaling, skill requirements evolve. Foundational awareness gives way to implementation expertise, governance capability, and advanced technical skills.",
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
                Enterprise AI adoption has reached{" "}
                <span className={typography.emphasis}>88% globally</span>, yet only{" "}
                <span className={typography.emphasis}>6% of organizations</span> qualify as "high
                performers" capturing significant value. This disconnect between adoption and impact
                represents the defining challenge of enterprise AI in 2025.
              </p>

              <p className={typography.body}>
                This report synthesizes {sourceCount} market research sources to analyze global AI adoption 
                patterns, identify key barriers, and understand the factors that differentiate 
                organizations achieving value from those stuck in experimentation.
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
              Data synthesized from {sourceCount} market research sources including industry surveys, analyst reports, and government statistics.
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
