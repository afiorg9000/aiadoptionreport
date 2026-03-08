import { motion } from "framer-motion";
import { DollarSign, Users, AlertTriangle, Lightbulb, Target, BookOpen, Link2 } from "lucide-react";
import CitationLink from "./CitationLink";
import SectionHeader from "./SectionHeader";
import MethodologyBlock from "./MethodologyBlock";
import InsightBox from "./InsightBox";
import IconWrapper from "./IconWrapper";
import { subsectionStyles, cardStyles, iconWrapperStyles, spacing, containers, typography } from "./styles";

const financialEvidence = [
  {
    category: "Corporate training spending declined significantly in 2024",
    items: [
      { text: "Per-learner spending decreased 19% from $954 (2023) to $774 (2024)", citation: 220 },
      { text: "Training outsourcing spending declined from $322,376 (2023) to $241,311 (2024)", citation: 222 },
    ],
  },
  {
    category: 'L&D teams explicitly instructed to "do more with less"',
    items: [
      { text: "11% of companies decreased L&D budgets in 2023, with 91% citing economic uncertainty", citation: 221 },
      { text: "Organizations face pressure to prove ROI before securing additional training investment", citation: 222 },
    ],
  },
  {
    category: "Abundance of free resources creates pricing pressure",
    items: [
      { text: "Microsoft Learn provides free Copilot training courses", citation: null },
      { text: "YouTube contains thousands of free AI tutorials", citation: null },
      { text: "ChatGPT's own interface provides built-in help and examples", citation: null },
    ],
    implication: "Paid training must demonstrate clear value beyond free alternatives",
  },
  {
    category: "Self-paced platforms offer low-cost alternatives",
    items: [
      { text: "LinkedIn Learning: 300+ AI courses included in $29.99/month LinkedIn Premium subscription", citation: 211 },
      { text: "Coursera: 7,000+ AI/ML courses, $399/user/year for business subscription", citation: 212 },
      { text: "Udemy Business: 500+ AI courses at $30/user/month", citation: 213 },
    ],
  },
  {
    category: "Organizations prioritize tools over training",
    items: [
      { text: "Nearly three-quarters of CEOs call generative AI a 'top investing priority'... However, more than half of respondents said they're spending more money on new technology than on training current employees.", citation: 220 },
    ],
    note: "Post-purchase adoption failures (Challenge 3) demonstrate this prioritization is backwards, but purchasing pattern persists",
  },
];

const changeManagementEvidence = [
  {
    category: "Leadership vision gap",
    items: [
      { text: 'The biggest barrier to scaling AI isn\'t employees—who are ready—but leaders, who are not steering fast enough; only 1% of companies describe their AI rollouts as "mature"', citation: 396 },
      { text: "60% of business leaders say their organization's leadership lacks a plan or vision to implement AI", citation: 397 },
    ],
  },
  {
    category: "Job displacement fears create resistance",
    items: [
      { text: "72% of workers worry AI will negatively impact salary or pay; 67% fear losing out on promotions for not knowing how to use AI", citation: 398 },
      { text: "53% of workers worry that using AI for work tasks would make them look replaceable to their employers", citation: 397 },
    ],
  },
  {
    category: "Security and trust concerns",
    items: [
      { text: "72% of organizational leaders admit they lack skills for implementing AI responsibly; up to 70% of change initiatives fail due to employee pushback or inadequate management support", citation: 399 },
    ],
  },
  {
    category: "Change management is underinvested",
    items: [
      { text: "74% of companies struggle to achieve and scale value from AI; roughly 70% of challenges in AI projects stem from people and process issues, not technical ones", citation: 400 },
      { text: "Only about one-third of companies in late 2024 were prioritizing change management and training as part of their AI rollouts", citation: 400 },
    ],
  },
];

const relatedAnalysis = [
  {
    title: "Post-Purchase Adoption Failure",
    stat: "60%",
    description: "of Copilot licenses go unused within 90 days of deployment",
    linkText: "See Demand Pattern 3 (Section 2)",
    href: "#demand-pattern-3",
  },
  {
    title: "Knowledge & Skills Gaps",
    stat: "45%",
    description: "of enterprises cite knowledge/skills gaps as a primary adoption barrier",
    linkText: "See Pattern 2 (Section 1.2)",
    href: "#pattern-2",
  },
  {
    title: "Strategic Planning Gap",
    stat: "64%",
    description: 'of enterprises lack strategic clarity on AI goals — the most frequently cited barrier',
    linkText: "See Pattern 4 (Section 1.2)",
    href: "#pattern-4",
  },
  {
    title: "Financial Constraints & SME Barriers",
    stat: null,
    description: "The size-class divide in AI adoption has widened, not narrowed, despite overall market acceleration",
    linkText: "See Pattern 1 (Section 1.2)",
    href: "#pattern-1",
  },
  {
    title: "Regulated Industry Caution",
    stat: null,
    description: "Regulated sectors show distinct adoption patterns characterized by heightened caution",
    linkText: "See Pattern 3 (Section 1.2)",
    href: "#pattern-3",
  },
];

const BarriersToAdoption = () => {
  return (
    <section id="section-3" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm text-llpa-yellow mb-2">
              Section 3
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Barriers to AI Adoption
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Analysis of enterprise AI adoption surveys, validated against independent market research from consulting firms, technology vendors, academic institutions, and government agencies.
            </p>
          </motion.div>

        {/* Challenge 1: Financial Constraints */}
        <div id="challenge-1" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl border border-border shadow-sm p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-llpa-orange/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-llpa-orange" />
              </div>
              <div>
                <span className="text-xs font-medium text-llpa-orange uppercase tracking-wider">Challenge 1</span>
                <h3 className="text-2xl font-semibold text-foreground">
                  Financial Constraints
                </h3>
              </div>
            </div>
            <p className="font-body text-sm text-foreground font-medium mb-6">
              <span className="text-llpa-orange font-bold">41%</span> of enterprises cite cost as a barrier; <span className="text-llpa-orange font-bold">55%</span> report difficulty justifying AI investment ROI
            </p>

            {/* Research Findings */}
            <div className="mb-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">Research findings:</h4>
              <ul className={`space-y-3 ${spacing.indent}`}>
                <li className="flex gap-3">
                  <span className="text-llpa-orange mt-0.5">•</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">Customer reluctance to pay for training when free alternatives exist</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-llpa-green mt-0.5">•</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">Low Copilot license penetration due to cost</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-llpa-blue mt-0.5">•</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">Budget constraints keeping most clients in pilot phase</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-llpa-yellow mt-0.5">•</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">High webinar attendance but minimal conversion to paid offerings</span>
                </li>
              </ul>
            </div>

            {/* External Validation */}
            <div className="mb-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                External Validation
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                External Research Explains the Financial Barrier:
              </p>

              <div className={`space-y-6 ${spacing.indent}`}>
                {financialEvidence.map((section, i) => {
                  return (
                    <div key={i} className="border-l-4 border-info pl-4">
                      <p className="font-body text-sm font-semibold text-foreground mb-2">
                        {section.category}
                      </p>
                      <ul className="space-y-2">
                        {section.items.map((item, j) => (
                          <li key={j} className="flex gap-3">
                            <span className="text-info mt-0.5">•</span>
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {item.text}
                              {item.citation && <CitationLink id={item.citation} />}
                            </span>
                          </li>
                        ))}
                      </ul>
                      {section.implication && (
                        <p className="font-body text-sm text-muted-foreground mt-2 flex items-start gap-2">
                          <span className="text-info">→</span>
                          <span><em>Implication:</em> {section.implication}</span>
                        </p>
                      )}
                      {section.note && (
                        <p className={`${typography.note} ${containers.note} mt-2`}>
                          <strong>Note:</strong> {section.note}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Key Insight */}
              <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                <p className="font-body text-sm text-foreground">
                  <strong>Key Insight:</strong> The barrier is not absolute budget constraints but rather inability to justify AI investment when organizations cannot articulate expected ROI. This connects directly to the strategic planning gap (64% lack strategic clarity) covered in <a href="#pattern-4" className="text-llpa-blue hover:underline">Pattern 4, Section 1.2</a>.
                </p>
              </div>
            </div>

            {/* Strategic Recommendations */}
            <div className="mt-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Strategic Recommendations
              </h4>

              <div className={`space-y-3 ${spacing.indent}`}>
                <p className="font-body text-sm text-foreground">
                  <span className="font-bold">Use ROI calculators and business case templates</span> that help clients justify training investment to leadership
                </p>
                <p className="font-body text-sm text-muted-foreground italic mb-3">
                  Address the "cannot articulate expected ROI" barrier directly
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-llpa-orange mt-0.5">•</span>
                    <span>Many training purchases stall not because clients lack budget, but because they cannot build a compelling internal case for the investment</span>
                  </li>
                  <li className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-llpa-green mt-0.5">•</span>
                    <span>Provide clients with customizable templates that quantify expected productivity gains, time savings, and cost avoidance based on industry benchmarks and case studies</span>
                  </li>
                  <li className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-llpa-blue mt-0.5">•</span>
                    <span>Organizations that can articulate AI ROI clearly face significantly less internal resistance to investment approval</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Challenge 2: Organizational Inertia & Change Resistance */}
        <div id="challenge-2" className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-xl border border-border shadow-sm p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-llpa-green/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-llpa-green" />
              </div>
              <div>
                <span className="text-xs font-medium text-llpa-green uppercase tracking-wider">Challenge 2</span>
                <h3 className="text-2xl font-semibold text-foreground">
                  Organizational Inertia & Change Resistance
                </h3>
              </div>
            </div>
            <p className="font-body text-sm text-foreground font-medium mb-6">
              <span className="text-llpa-green font-bold">45%</span> of enterprises report leadership reluctance and conservative culture as barriers
            </p>

            {/* Research Findings */}
            <div className="mb-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">Research findings:</h4>
              <ul className={`space-y-2 ${spacing.indent}`}>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-llpa-orange mt-0.5">•</span>
                  <span>Reluctance from leadership and security concerns</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-llpa-green mt-0.5">•</span>
                  <span>Lack of vision and communication from leadership groups</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-llpa-blue mt-0.5">•</span>
                  <span>Fear around security and lack of clear value creation</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-llpa-yellow mt-0.5">•</span>
                  <span>Conservative mindset and concerns over disruption</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-llpa-orange mt-0.5">•</span>
                  <span>Worries about job displacement</span>
                </li>
                <li className="font-body text-muted-foreground flex items-start gap-2">
                  <span className="text-llpa-green mt-0.5">•</span>
                  <span>General fear and lack of trust in AI</span>
                </li>
              </ul>
            </div>

            {/* External Validation */}
            <div className="mb-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-3">
                External Validation
              </h4>
              <p className="font-body text-sm text-muted-foreground mb-4">
                External Research Confirms Change Management is Critical Barrier:
              </p>

              <div className={`space-y-6 ${spacing.indent}`}>
                {changeManagementEvidence.map((section, i) => {
                  return (
                    <div key={i} className="border-l-4 border-info pl-4">
                      <p className="font-body text-sm font-semibold text-foreground mb-2">
                        {section.category}
                      </p>
                      <ul className="space-y-1">
                        {section.items.map((item, j) => (
                          <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-info mt-0.5">•</span>
                            <span>
                              {item.text}
                              <CitationLink id={item.citation} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Key Insight */}
              <div className="mt-6 p-4 bg-muted/50 rounded-xl">
                <p className="font-body text-sm text-foreground">
                  <strong>Key Insight:</strong> External research validates that organizational resistance stems from legitimate concerns (security, job displacement, risk). Leadership inertia and underinvestment in change management are the primary barriers.
                </p>
              </div>
            </div>

            {/* Strategic Recommendations */}
            <div className="mt-8">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Strategic Recommendations
              </h4>

              <div className={`space-y-3 ${spacing.indent}`}>
                <p className="font-body text-sm text-foreground">
                  <span className="font-bold">"Change Readiness Assessment" frameworks</span> help diagnose where resistance lives in an organization
                </p>
                <p className="font-body text-sm text-muted-foreground italic mb-3">
                  Is it leadership vision gap, middle management fear, frontline job anxiety, or IT security concerns? Different root causes require different interventions.
                </p>
                
                <ul className="space-y-2 pl-4">
                  <li className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-llpa-orange mt-0.5">•</span>
                    <span><strong className="text-foreground">Leadership vision gap →</strong> Executive education and strategic alignment workshops</span>
                  </li>
                  <li className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-llpa-green mt-0.5">•</span>
                    <span><strong className="text-foreground">Middle management resistance →</strong> ROI evidence and "what's in it for me" messaging</span>
                  </li>
                  <li className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-llpa-blue mt-0.5">•</span>
                    <span><strong className="text-foreground">Frontline anxiety →</strong> Hands-on skill building and job security reassurance</span>
                  </li>
                  <li className="font-body text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-llpa-yellow mt-0.5">•</span>
                    <span><strong className="text-foreground">IT security concerns →</strong> Governance frameworks and risk mitigation plans</span>
                  </li>
                </ul>

                <p className="font-body text-sm text-foreground italic mt-4">
                  <strong>Key Insight:</strong> Without accurate diagnosis, organizations waste resources addressing symptoms rather than causes—resulting in AI investments that fail to achieve adoption and value realization.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Barriers Covered Elsewhere */}
        <div className="mb-8">
          <h4 className="font-display text-xl font-semibold text-foreground mb-2">
            Additional Barriers Covered Elsewhere
          </h4>
          <p className="font-body text-sm text-muted-foreground mb-6">
            Several other barriers to AI adoption emerged from research and are analyzed in their respective sections:
          </p>

          <div className="space-y-4">
            {relatedAnalysis.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-card rounded-xl p-5 border border-border shadow-sm"
              >
                <h5 className="font-display text-sm font-semibold text-foreground mb-2">
                  {item.title}
                </h5>
                <p className="font-body text-xs text-muted-foreground mb-3">
                  {item.stat && (
                    <span className="font-bold text-foreground">{item.stat}</span>
                  )}{item.stat && ' '}{item.description}
                </p>
                <a 
                  href={item.href} 
                  className="font-body text-xs text-muted-foreground hover:text-foreground hover:underline inline-flex items-center gap-1"
                >
                  {item.linkText} →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default BarriersToAdoption;
