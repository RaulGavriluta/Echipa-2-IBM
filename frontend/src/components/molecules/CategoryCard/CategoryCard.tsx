import { Link } from "react-router-dom";
import Icon from "../../atoms/Icon";
import "./CategoryCard.css";

export interface CategoryCardProps {
  label: string;
  iconSrc?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const CategoryCard = ({
  label,
  iconSrc,
  to,
  href,
  onClick,
  className = "",
}: CategoryCardProps) => {
  const combinedClassName = `category-card ${className}`.trim();

  const content = (
    <>
      <div className="category-card__icon-wrapper">
        {iconSrc && <Icon src={iconSrc} size="4.5rem" alt={label} />}
      </div>
      <h4 className="category-card__title">{label}</h4>
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

export default CategoryCard;
