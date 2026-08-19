import Breadcrumb, { type BreadcrumbItem } from "../Breadcrumb";
import { FiX } from "react-icons/fi";
import "./ShopHero.css";

export interface ActiveFilterItem {
  id: string;
  label: string;
  onRemove: () => void;
}

export interface ShopHeroProps {
  title: string;
  breadcrumbItems: BreadcrumbItem[];
  activeFilters?: ActiveFilterItem[];
  className?: string;
}

const ShopHero = ({
  title,
  breadcrumbItems,
  activeFilters = [],
  className = "",
}: ShopHeroProps) => {
  return (
    <header className={`shop-hero ${className}`.trim()}>
      <div className="shop-hero__content">
        <h1 className="shop-hero__title">{title}</h1>
        <Breadcrumb items={breadcrumbItems} className="shop-hero__breadcrumb" />
      </div>

      {activeFilters.length > 0 && (
        <div className="shop-hero__filters">
          {activeFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className="shop-hero__filter-pill"
              onClick={filter.onRemove}
              title={`Remove ${filter.label} filter`}
            >
              <FiX className="shop-hero__filter-icon" />
              {filter.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default ShopHero;
