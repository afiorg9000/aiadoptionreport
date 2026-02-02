import { ArrowRight } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { spacing, typography, containers } from "./styles";

interface RecommendationBlockProps {
  title?: string;
  children: React.ReactNode;
  color?: string;
  variant?: "default" | "highlighted";
}

const RecommendationBlock = ({
  title = "Strategic Recommendations",
  children,
  color = "llpa-green",
  variant = "default",
}: RecommendationBlockProps) => {
  const containerClass = variant === "highlighted"
    ? `${containers.cardHighlighted} ${spacing.blockMargin}`
    : spacing.blockMargin;

  return (
    <div className={containerClass}>
      <h5 className={`${typography.blockTitle} ${spacing.titleMargin} flex items-center ${spacing.contentGap}`}>
        <IconWrapper icon={ArrowRight} color={color} size="sm" />
        {title}
      </h5>
      <div className={typography.body}>
        {children}
      </div>
    </div>
  );
};

export default RecommendationBlock;
