import { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import Icon from "../../../components/atoms/Icon";
import { FaMagnifyingGlass, FaChevronDown } from "react-icons/fa6";
import categories from "../../../data/categories";
import "./SearchBar.css";

interface SearchBarProps {
  onSearch?: (query: string, category: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({
  onSearch,
  placeholder = "Search for items...",
  className,
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    onSearch?.(query, selectedCategory.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className={clsx("search-bar", className)}>
      <div className="search-bar-category" ref={dropdownRef}>
        <button
          className="search-bar-category-button"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {selectedCategory.label}
          <Icon
            icon={FaChevronDown}
            size="0.625rem"
            className={clsx("search-bar-chevron", isOpen && "search-bar-chevron-open")}
          />
        </button>

        {isOpen && (
          <ul className="search-bar-dropdown">
            {categories.map((cat) => (
              <li key={cat.value}>
                <button
                  className={clsx("search-bar-dropdown-item", cat.value === selectedCategory.value && "search-bar-dropdown-item-active")}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsOpen(false);
                  }}
                  type="button"
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <span className="search-bar-divider" />

      <input
        className="search-bar-input"
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        className="search-bar-search-button"
        onClick={handleSearch}
        type="button"
        aria-label="Search"
      >
        <Icon icon={FaMagnifyingGlass} size="0.875rem" color="var(--color-text-muted)" />
      </button>
    </div>
  );
};

export default SearchBar;
