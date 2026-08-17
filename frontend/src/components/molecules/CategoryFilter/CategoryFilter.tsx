import { useState } from "react";
import clsx from "clsx";
import CategoryItem from "../CategoryItem";
import categoryFilterData from "../../../data/categoryFilter";
import type { CategoryFilterItem } from "../../../data/types";
import "./CategoryFilter.css";

export interface CategoryFilterProps {
  title?: string;
  categories?: CategoryFilterItem[];
  activeCategory?: string | null;
  onSelectCategory?: (categoryLabel: string | null) => void;
  className?: string;
}

const CategoryFilter = ({
  title = "Category",
  categories = categoryFilterData,
  activeCategory: externalActiveCategory,
  onSelectCategory,
  className = "",
}: CategoryFilterProps) => {
  const [internalActiveCategory, setInternalActiveCategory] = useState<
    string | null
  >(null);

  const currentActiveCategory =
    externalActiveCategory !== undefined
      ? externalActiveCategory
      : internalActiveCategory;

  const handleCategoryClick = (categoryId: string) => {
    const nextCategory =
      currentActiveCategory === categoryId ? null : categoryId;

    if (externalActiveCategory === undefined) {
      setInternalActiveCategory(nextCategory);
    }

    onSelectCategory?.(nextCategory);
  };

  return (
    <div className={clsx("category-filter", className)}>
      <div className="category-filter-header">
        <h2 className="category-filter-title">{title}</h2>
      </div>

      <div className="category-filter-content">
        {categories.map((category) => {
          const categoryKey = category.id || category.label;
          return (
            <CategoryItem
              key={categoryKey}
              label={category.label}
              iconSrc={category.iconSrc}
              count={category.count}
              isActive={currentActiveCategory === categoryKey}
              onClick={() => handleCategoryClick(categoryKey)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;

