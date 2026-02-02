import { MessageSquare } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { spacing, typography, containers } from "./styles";

interface InterpretationBlockProps {
  title?: string;
  children: React.ReactNode;
  color?: string;
}

const InterpretationBlock = ({
  title = "Interpretation",
  children,
  color = "llpa-yellow",
}: InterpretationBlockProps) => {
  return (
    <div className={`${containers.card} ${spacing.blockMargin}`}>
      <h5 className={`${typography.blockTitle} ${spacing.titleMargin} flex items-center ${spacing.contentGap}`}>
        <IconWrapper icon={MessageSquare} color={color} size="sm" />
        {title}
      </h5>
      <div className={typography.body}>
        {children}
      </div>
    </div>
  );
};

export default InterpretationBlock;
