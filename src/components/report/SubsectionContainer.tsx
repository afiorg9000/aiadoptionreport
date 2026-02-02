import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { subsectionStyles, getSectionColorClasses, iconSizes } from "./styles";

interface SubsectionContainerProps {
  id?: string;
  sectionNumber: number;
  subsectionNumber: string;
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
}

const SubsectionContainer = ({
  id,
  sectionNumber,
  subsectionNumber,
  title,
  icon: Icon,
  children,
}: SubsectionContainerProps) => {
  const colorClasses = getSectionColorClasses(sectionNumber);

  return (
    <div id={id} className={subsectionStyles.container}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <div className={`${subsectionStyles.numberBadge} ${colorClasses.bg}`}>
            {subsectionNumber}
          </div>
          <h3 className={`${subsectionStyles.title} flex items-center gap-3`}>
            {Icon && (
              <IconWrapper icon={Icon} color={colorClasses.text.replace('text-', '')} size="md" />
            )}
            {title}
          </h3>
        </div>

        <div className={subsectionStyles.innerContent}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default SubsectionContainer;
