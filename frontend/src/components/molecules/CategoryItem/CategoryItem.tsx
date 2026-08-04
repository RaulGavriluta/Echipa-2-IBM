import Badge from "../../atoms/Badge";
import Icon from "../../atoms/Icon"
import "./CategoryItem.css";

export interface CategoryItemProps {
  label: string;
  count: number;
  iconSrc: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryItem = ({
  label,
  count,
  iconSrc,
  isActive = false,
  onClick,
}: CategoryItemProps) => {
  return (
    <div
      className={`category-item ${isActive ? "category-item--active" : ""}`}
      onClick={onClick}
    >
      <div className="category-item__content">
        <Icon src={iconSrc} size="1.5rem" alt={label} />
        <span className="category-item__label">{label}</span>
      </div>
      
      <Badge variant="count">{count}</Badge>
    </div>
  );
};

export default CategoryItem;