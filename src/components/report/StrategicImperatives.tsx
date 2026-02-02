import { motion } from "framer-motion";
import { Layers, BarChart3, Shuffle, Building2 } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { typography, spacing, iconSizes, iconWrapperBase } from "./styles";

const imperatives = [
  {
    icon: Layers,
    number: "1",
    title: "Expand from Training Provider to Offer Strategic Advisory and Implementation Consulting",
    description:
      "training providers should support members in developing AI implementation consulting services, readiness assessment tools, and strategic advisory capabilities that position them upstream of tool deployment.",
    priority: "Critical",
    color: "llpa-orange",
  },
  {
    icon: BarChart3,
    number: "2",
    title: "Rebalance Portfolio for Advanced Markets",
    description:
      "Target portfolio shift from 10% to 25% advanced/expert content within 18 months. Prioritize production RAG, agentic AI, LLMOps, and multi-model orchestration curriculum.",
    priority: "High",
    color: "llpa-green",
  },
  {
    icon: Shuffle,
    number: "3",
    title: "Diversify Beyond Microsoft",
    description:
      "Develop comprehensive training tracks for Anthropic Claude, OpenAI ChatGPT Enterprise, Google Gemini, and open-source AI ecosystem to align with enterprise multi-vendor reality.",
    priority: "High",
    color: "llpa-blue",
  },
  {
    icon: Building2,
    number: "4",
    title: "Build Industry Vertical Depth",
    description:
      "Launch financial services, manufacturing, legal, and public sector curriculum to capture premium pricing (30-50% above generic) and address the 55% of providers reporting industry-specific demand.",
    priority: "Medium",
    color: "llpa-yellow",
  },
];

const priorityColors: Record<string, string> = {
  Critical: "bg-llpa-orange text-white",
  High: "bg-llpa-green text-white",
  Medium: "bg-llpa-blue text-white",
};

const StrategicImperatives = () => {
  return (
    <section className={`${spacing.section} gradient-navy text-primary-foreground`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className={`${typography.sectionLabel} text-llpa-yellow`}>Strategic Imperatives</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">Roadmap for 2025-2027</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Four strategic priorities to capture the AI training transformation opportunity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {imperatives.map((imperative, index) => (
            <motion.div
              key={imperative.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6"
            >
              {/* Priority badge */}
              <div className="absolute top-5 right-5">
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[imperative.priority]}`}
                >
                  {imperative.priority}
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className={`${iconWrapperBase} ${iconSizes.xl.wrapper} bg-${imperative.color}/20`}
                >
                  <imperative.icon className={`${iconSizes.xl.icon} text-${imperative.color}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-sm text-${imperative.color}`}>
                      Imperative {imperative.number}
                    </span>
                  </div>
                  <h3 className={`${typography.smallTitle} mb-2`}>{imperative.title}</h3>
                  <p className="text-sm text-primary-foreground/70 leading-relaxed">
                    {imperative.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicImperatives;
