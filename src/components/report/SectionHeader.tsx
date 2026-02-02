import { motion } from "framer-motion";
import { typography, getSectionColorClasses } from "./styles";

interface SectionHeaderProps {
  sectionNumber: number;
  label: string;
  title: string;
  subtitle?: string;
  id?: string;
}

const SectionHeader = ({ sectionNumber, label, title, subtitle, id }: SectionHeaderProps) => {
  const colorClasses = getSectionColorClasses(sectionNumber);

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <span className={`${typography.sectionLabel} ${colorClasses.text}`}>
        {label}
      </span>
      <h2 className={typography.sectionTitle}>{title}</h2>
      {subtitle && (
        <p className={typography.sectionSubtitle}>{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
