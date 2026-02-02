import { Lightbulb } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { spacing, typography, containers } from "./styles";

interface FindingBlockProps {
  title?: string;
  children: React.ReactNode;
  color?: string;
  variant?: "default" | "card";
}

const FindingBlock = ({
  title = "Key Finding",
  children,
  color = "llpa-orange",
  variant = "default",
}: FindingBlockProps) => {
  const containerClass = variant === "card"
    ? `${containers.card} ${spacing.blockMargin}`
    : spacing.blockMargin;

  return (
    <div className={containerClass}>
      <h5 className={`${typography.blockTitle} ${spacing.titleMargin} flex items-center ${spacing.contentGap}`}>
        <IconWrapper icon={Lightbulb} color={color} size="sm" />
        {title}
      </h5>
      <div className={typography.body}>
        {children}
      </div>
    </div>
  );
};

export default FindingBlock;
