import { useState, useRef, useEffect } from "react";
import { FiGrid, FiChevronDown, FiCheck } from "react-icons/fi";
import { BsSortDown } from "react-icons/bs";
import {
  SHOW_OPTIONS,
  SORT_OPTIONS,
} from "../../../data/shopData";
import "./ShopToolbar.css";

export interface ShopToolbarProps {
  totalItems: number;
  itemsPerPage: number;
  onItemsPerPageChange: (value: number) => void;
  sortBy: string;
  onSortByChange: (value: string) => void;
  className?: string;
}

const ShopToolbar = ({
  totalItems,
  itemsPerPage,
  onItemsPerPageChange,
  sortBy,
  onSortByChange,
  className = "",
}: ShopToolbarProps) => {
  const [showOpen, setShowOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const showRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (showRef.current && !showRef.current.contains(target)) {
        setShowOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(target)) {
        setSortOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentSortLabel =
    SORT_OPTIONS.find((opt) => opt.value === sortBy)?.label || "Featured";

  return (
    <div className={`shop-toolbar ${className}`.trim()}>
      <p className="shop-toolbar__count">
        We found <span className="shop-toolbar__highlight">{totalItems}</span> items for you!
      </p>

      <div className="shop-toolbar__controls">
        <div className="shop-toolbar__dropdown-container" ref={showRef}>
          <button
            type="button"
            className={`shop-toolbar__trigger ${showOpen ? "shop-toolbar__trigger--open" : ""}`}
            onClick={() => {
              setShowOpen((prev) => !prev);
              setSortOpen(false);
            }}
            aria-expanded={showOpen}
            aria-haspopup="listbox"
          >
            <FiGrid className="shop-toolbar__trigger-icon" />
            <span className="shop-toolbar__trigger-label">Show:</span>
            <span className="shop-toolbar__trigger-value">{itemsPerPage}</span>
            <FiChevronDown
              className={`shop-toolbar__trigger-arrow ${
                showOpen ? "shop-toolbar__trigger-arrow--open" : ""
              }`}
            />
          </button>

          {showOpen && (
            <ul className="shop-toolbar__menu" role="listbox">
              {SHOW_OPTIONS.map((num) => (
                <li
                  key={`show-option-${num}`}
                  role="option"
                  aria-selected={itemsPerPage === num}
                >
                  <button
                    type="button"
                    className={`shop-toolbar__menu-item ${
                      itemsPerPage === num ? "shop-toolbar__menu-item--active" : ""
                    }`}
                    onClick={() => {
                      onItemsPerPageChange(num);
                      setShowOpen(false);
                    }}
                  >
                    <span>{num}</span>
                    {itemsPerPage === num && <FiCheck className="shop-toolbar__check-icon" />}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="shop-toolbar__dropdown-container" ref={sortRef}>
          <button
            type="button"
            className={`shop-toolbar__trigger ${sortOpen ? "shop-toolbar__trigger--open" : ""}`}
            onClick={() => {
              setSortOpen((prev) => !prev);
              setShowOpen(false);
            }}
            aria-expanded={sortOpen}
            aria-haspopup="listbox"
          >
            <BsSortDown className="shop-toolbar__trigger-icon" />
            <span className="shop-toolbar__trigger-label">Sort by:</span>
            <span className="shop-toolbar__trigger-value">{currentSortLabel}</span>
            <FiChevronDown
              className={`shop-toolbar__trigger-arrow ${
                sortOpen ? "shop-toolbar__trigger-arrow--open" : ""
              }`}
            />
          </button>

          {sortOpen && (
            <ul className="shop-toolbar__menu shop-toolbar__menu--wide" role="listbox">
              {SORT_OPTIONS.map((opt) => (
                <li
                  key={`sort-option-${opt.value}`}
                  role="option"
                  aria-selected={sortBy === opt.value}
                >
                  <button
                    type="button"
                    className={`shop-toolbar__menu-item ${
                      sortBy === opt.value ? "shop-toolbar__menu-item--active" : ""
                    }`}
                    onClick={() => {
                      onSortByChange(opt.value);
                      setSortOpen(false);
                    }}
                  >
                    <span>{opt.label}</span>
                    {sortBy === opt.value && <FiCheck className="shop-toolbar__check-icon" />}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopToolbar;
