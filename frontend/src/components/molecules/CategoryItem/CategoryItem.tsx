import React from "react";
import Badge from "../../atoms/Badge/Badge";
import Icon from "../../atoms/Icon/Icon";
import "./CategoryItem.css";

export interface CategoryItemProps {
  id?: string;
  label: string;
  count: number;
  iconSrc: string;
  href?: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

const CategoryItem = ({
  id,
  label,
  count,
  iconSrc,
  href = "#",
  isActive = false,
  onClick,
  className = "",
}: CategoryItemProps) => {
  return (
    <a
      id={id}
      href={href}
      onClick={onClick}
      className={`category-item ${isActive ? "category-item--active" : ""} ${className}`.trim()}
    >
      <div className="category-item__content">
        <Icon src={iconSrc} size="1.875rem" alt={label} />
        <span className="category-item__label">{label}</span>
      </div>

      <Badge className="category-item__badge">{count}</Badge>
    </a>
  );
};

export default CategoryItem;
