import type { IconType } from "react-icons";
import { Link } from "react-router-dom";
import Icon from "../../atoms/Icon";
import Badge from "../../atoms/Badge";
import "./HeaderAction.css";

export interface HeaderActionProps {
  icon?: IconType;
  src?: string;
  label: string;
  count?: number;
  to?: string;
  href?: string;
  size?: string;
  color?: string;
  onClick?: () => void;
  className?: string;
}

const HeaderAction = ({
  icon,
  src,
  label,
  count,
  to,
  href,
  size = "1.5rem",
  color = "currentColor",
  onClick,
  className = "",
}: HeaderActionProps) => {
  const combinedClassName = `header-action ${className}`.trim();

  const content = (
    <>
      <div className="header-action__icon-wrapper">
        <Icon
          icon={icon}
          src={src}
          size={size}
          color={color}
          ariaLabel={label}
        />
        {count !== undefined && count > 0 && (
          <Badge variant="notification">{count}</Badge>
        )}
      </div>
      <span className="header-action__label">{label}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClassName} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <div
      className={combinedClassName}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {content}
    </div>
  );
};

export default HeaderAction;
