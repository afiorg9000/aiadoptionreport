import { LucideIcon } from "lucide-react";
import { iconSizes, iconWrapperBase } from "./styles";

type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

interface IconWrapperProps {
  icon: LucideIcon;
  color?: string;
  size?: IconSize;
  className?: string;
}

const IconWrapper = ({
  icon: Icon,
  color = "llpa-orange",
  size = "sm",
  className = "",
}: IconWrapperProps) => {
  const sizeConfig = iconSizes[size];

  return (
    <div className={`${iconWrapperBase} ${sizeConfig.wrapper} bg-${color}/15 ${className}`}>
      <Icon className={`${sizeConfig.icon} text-${color}`} />
    </div>
  );
};

export default IconWrapper;
