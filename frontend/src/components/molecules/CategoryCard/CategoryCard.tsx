import Icon from "../../atoms/Icon";
import "./CategoryCard.css";

export interface CategoryCardProps {
  label: string;
  iconSrc?: string;
  onClick?: () => void;
  className?: string;
}

const CategoryCard = ({
  label,
  iconSrc,
  onClick,
  className = "",
}: CategoryCardProps) => {
  return (
    <div
      className={`category-card ${className}`.trim()}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      <div className="category-card__icon-wrapper">
        {iconSrc && <Icon src={iconSrc} size="4.5rem" alt={label} />}
      </div>
      <h4 className="category-card__title">{label}</h4>
    </div>
  );
};

export default CategoryCard;
