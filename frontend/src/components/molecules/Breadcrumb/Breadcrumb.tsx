import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import "./Breadcrumb.css";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb = ({ items, className = "" }: BreadcrumbProps) => {
  return (
    <nav className={`breadcrumb ${className}`.trim()} aria-label="Breadcrumb">
      <ol className="breadcrumb__list">
        <li className="breadcrumb__item">
          <Link to="/" className="breadcrumb__link breadcrumb__link--home">
            <FiHome className="breadcrumb__home-icon" />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={`breadcrumb-item-${item.label}-${index}`}
              className="breadcrumb__item"
            >
              <FiChevronRight className="breadcrumb__separator" />
              {isLast || !item.href ? (
                <span className="breadcrumb__current">{item.label}</span>
              ) : (
                <Link to={item.href} className="breadcrumb__link">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
