import { useRef, useState, useEffect } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Icon from "../../atoms/Icon";
import CategoryCard from "../../molecules/CategoryCard";
import { shopCategories } from "../../../data/homePageData";
import "./ShopByCategories.css";

const ShopByCategories = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollState = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const isAtStart = container.scrollLeft <= 2;
    const isAtEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 2;

    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScrollState();

    container.addEventListener("scroll", checkScrollState, { passive: true });
    window.addEventListener("resize", checkScrollState);

    return () => {
      container.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const gap = parseFloat(getComputedStyle(container).gap) || 20;
    const firstSlide = container.querySelector(".shop-categories-slide");
    if (!firstSlide) return;

    const slideWidth = firstSlide.getBoundingClientRect().width;
    const scrollAmount = (slideWidth + gap) * 3;

    const targetScroll =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section className="shop-categories-section">
      <div className="shop-categories-header">
        <div className="shop-categories-header__left">
          <h2 className="shop-categories-title">Shop by Categories</h2>
          <a href="/shop" className="shop-categories-all-link">
            All Categories &rsaquo;
          </a>
        </div>
        <div className="shop-categories-nav">
          <button
            className={`shop-categories-nav-btn ${!canScrollLeft ? "shop-categories-nav-btn--disabled" : ""}`}
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous categories"
          >
            <Icon
              icon={FiArrowLeft}
              size="1rem"
              color={
                canScrollLeft
                  ? "var(--color-text-dark)"
                  : "var(--color-text-muted)"
              }
            />
          </button>
          <button
            className={`shop-categories-nav-btn ${!canScrollRight ? "shop-categories-nav-btn--disabled" : ""}`}
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next categories"
          >
            <Icon
              icon={FiArrowRight}
              size="1rem"
              color={
                canScrollRight
                  ? "var(--color-text-dark)"
                  : "var(--color-text-muted)"
              }
            />
          </button>
        </div>
      </div>

      <div className="shop-categories-slider" ref={scrollContainerRef}>
        {shopCategories.map((category) => (
          <div className="shop-categories-slide" key={category.id}>
            <CategoryCard
              label={category.label}
              iconSrc={category.iconSrc}
              href={category.href}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategories;
