import type { IconType } from "react-icons";
import "./Icon.css";

export interface IconProps {
  icon?: IconType;
  src?: string;
  size?: string | number;
  color?: string;
  className?: string;
  ariaLabel?: string;
  alt?: string;
}

const Icon = ({
  icon: IconComponent,
  src,
  size = "1.25rem",
  color = "currentColor",
  className = "",
  ariaLabel,
  alt = "",
}: IconProps) => {
  return (
    <span
      className={`icon ${className}`.trim()}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
      style={{ width: size, height: size }}
    >
      {src ? (
        <img
          src={src}
          alt={alt || ariaLabel || "icon"}
          className="icon__image"
        />
      ) : IconComponent ? (
        <IconComponent size={size} color={color} />
      ) : null}
    </span>
  );
};

export default Icon;
