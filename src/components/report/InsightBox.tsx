import { motion } from "framer-motion";
import { Lightbulb, Target, Compass, AlertTriangle, CheckCircle } from "lucide-react";
import { spacing, typography, iconSizes, iconWrapperBase, getColorClasses } from "./styles";

type InsightType = "insight" | "strategic" | "interpretation" | "warning" | "success";

interface InsightBoxProps {
  type: InsightType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const typeConfig = {
  insight: {
    icon: Lightbulb,
    color: "llpa-orange",
    defaultTitle: "Key Insight",
  },
  strategic: {
    icon: Target,
    color: "llpa-blue",
    defaultTitle: "Strategic Implication",
  },
  interpretation: {
    icon: Compass,
    color: "llpa-yellow",
    defaultTitle: "Interpretation",
  },
  warning: {
    icon: AlertTriangle,
    color: "destructive",
    defaultTitle: "Warning",
  },
  success: {
    icon: CheckCircle,
    color: "llpa-green",
    defaultTitle: "Success",
  },
};

const InsightBox = ({ type, title, children, className = "" }: InsightBoxProps) => {
  const config = typeConfig[type];
  const Icon = config.icon;
  const colorClasses = getColorClasses(config.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`${spacing.compactPadding} rounded-xl border ${colorClasses.bgSubtle} ${colorClasses.borderLight} ${className}`}
    >
      <div className={`flex items-start ${spacing.contentGap}`}>
        <div className={`${iconWrapperBase} ${iconSizes.sm.wrapper} ${colorClasses.bgLight} mt-0.5`}>
          <Icon className={`${iconSizes.sm.icon} ${colorClasses.text}`} />
        </div>
        <div>
          <h5 className={`${typography.blockTitle} ${colorClasses.text} mb-1`}>
            {title || config.defaultTitle}
          </h5>
          <div className={typography.bodySmall}>{children}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightBox;
