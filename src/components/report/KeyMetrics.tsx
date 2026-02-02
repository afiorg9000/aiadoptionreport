import { motion } from "framer-motion";
import { TrendingUp, Target, AlertTriangle, Users, Zap, PieChart } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { typography, spacing, containers } from "./styles";

const metrics = [
  {
    icon: TrendingUp,
    label: "Enterprise AI Adoption",
    value: "88%",
    description: "of organizations using AI (up from 78% in 2024)",
    color: "llpa-blue",
  },
  {
    icon: AlertTriangle,
    label: "Value Realization Gap",
    value: "6%",
    description: "are 'high performers'; only 39% report EBIT impact",
    color: "llpa-yellow",
  },
  {
    icon: Users,
    label: "Skills Gap Persistence",
    value: "45%",
    description: "of providers report knowledge gaps as a key barrier",
    color: "llpa-orange",
  },
  {
    icon: Target,
    label: "Strategic Planning Gap",
    value: "64%",
    description: "of providers report clients lack strategic clarity on AI goals",
    color: "llpa-blue",
  },
  {
    icon: Zap,
    label: "Post-Purchase Failure",
    value: "60%",
    description: "of Copilot licenses unused within 90 days",
    color: "destructive",
  },
  {
    icon: PieChart,
    label: "Foundational Demand",
    value: "86%",
    description: "of providers report this as top client request",
    color: "llpa-green",
  },
];

const KeyMetrics = () => {
  return (
    <section className={`${spacing.section} bg-muted/30`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className={`${typography.sectionLabel} text-llpa-yellow`}>Key Metrics</p>
          <h2 className={typography.sectionTitle}>The Numbers That Matter</h2>
          <p className={`${typography.body} max-w-2xl mx-auto`}>
            Critical metrics revealing the current state of enterprise AI adoption and training
            market dynamics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={containers.card}
            >
              <IconWrapper icon={metric.icon} color={metric.color} size="lg" className="mb-3" />
              <p className={`${typography.bodySmall} mb-1`}>{metric.label}</p>
              <p className="text-3xl font-bold text-foreground mb-1">{metric.value}</p>
              <p className={typography.bodySmall}>{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
