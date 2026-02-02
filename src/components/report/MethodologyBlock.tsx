import { motion } from "framer-motion";
import { FlaskConical, Target } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { spacing, typography, containers } from "./styles";

interface MethodologyBlockProps {
  methodology?: string;
  objective?: string;
  note?: string;
  className?: string;
}

const MethodologyBlock = ({ methodology, objective, note, className = "" }: MethodologyBlockProps) => {
  if (!methodology && !objective && !note) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`${className} ${spacing.blockMargin} space-y-4`}
    >
      {methodology && (
        <div className={`flex items-start ${spacing.contentGap}`}>
          <IconWrapper icon={FlaskConical} color="llpa-green" size="sm" className="mt-0.5" />
          <p className={`${typography.body} flex-1`}>
            <strong className="text-foreground">Methodology:</strong> {methodology}
          </p>
        </div>
      )}
      {objective && (
        <div className={`flex items-start ${spacing.contentGap}`}>
          <IconWrapper icon={Target} color="llpa-blue" size="sm" className="mt-0.5" />
          <p className={`${typography.body} flex-1`}>
            <strong className="text-foreground">Objective:</strong> {objective}
          </p>
        </div>
      )}
      {note && (
        <p className={`${typography.note} ${containers.note}`}>
          <strong>Note:</strong> {note}
        </p>
      )}
    </motion.div>
  );
};

export default MethodologyBlock;
