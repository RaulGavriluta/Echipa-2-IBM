import type { IconType } from "react-icons";
import "./Icon.css";

export interface IconProps {
  icon: IconType;
  size?: string | number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

const Icon = ({
  icon: IconComponent,
  size = "1.25rem",
  color = "currentColor",
  className = "",
  ariaLabel,
}: IconProps) => {
  return (
    <span
      className={`icon ${className}`.trim()}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    >
      <IconComponent size={size} color={color} />
    </span>
  );
};

export default Icon;
