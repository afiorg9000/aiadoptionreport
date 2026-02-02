import React from "react";
import { FileText } from "lucide-react";
import IconWrapper from "./IconWrapper";
import { spacing, typography, containers } from "./styles";

interface EvidenceBlockProps {
  title?: string;
  note?: string;
  children: React.ReactNode;
  color?: string;
}

const EvidenceBlock = ({
  title = "Evidence",
  note,
  children,
  color = "llpa-blue",
}: EvidenceBlockProps) => {
  return (
    <div className={spacing.blockMargin}>
      <h5 className={`${typography.blockTitle} ${spacing.titleMargin} flex items-center ${spacing.contentGap}`}>
        <IconWrapper icon={FileText} color={color} size="sm" />
        {title}
      </h5>
      {note && (
        <p className={`${typography.note} ${containers.note} ${spacing.titleMargin}`}>
          {note}
        </p>
      )}
      {children}
    </div>
  );
};

export default EvidenceBlock;
