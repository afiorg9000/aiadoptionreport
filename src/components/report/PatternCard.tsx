import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { spacing, typography, containers } from "./styles";

interface PatternCardProps {
  id?: string;
  patternNumber: number;
  title: string;
  icon: LucideIcon;
  description: string;
  color?: string;
  children: React.ReactNode;
}

const PatternCard = ({
  id,
  patternNumber,
  title,
  icon,
  description,
  color = "llpa-orange",
  children,
}: PatternCardProps) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${containers.card} mb-10`}
    >
      <h4 className={`${typography.cardTitle} ${spacing.titleMargin} flex items-center ${spacing.contentGap}`}>
        <IconWrapper icon={icon} color={color} size="md" />
        Pattern {patternNumber}: {title}
      </h4>

      <p className={`${typography.body} mb-6 font-medium text-foreground`}>
        {description}
      </p>

      {children}
    </motion.div>
  );
};

export default PatternCard;
