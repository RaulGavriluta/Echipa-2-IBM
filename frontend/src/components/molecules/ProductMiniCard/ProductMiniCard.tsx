import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./ProductMiniCard.css";

export interface ProductMiniCardProps {
  title: string;
  imageSrc: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  isOffer?: boolean;
  variant?: "compact" | "detailed";
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const ProductMiniCard: React.FC<ProductMiniCardProps> = ({
  title,
  imageSrc,
  price,
  oldPrice,
  rating = 4.0,
  isOffer,
  variant = "compact",
  to,
  href,
  onClick,
  className = "",
}) => {
  const isDetailed = variant === "detailed";
  const Element: any = to ? Link : href ? "a" : "div";

  const renderStars = () =>
    isDetailed ? (
      [...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`product-mini-card__star-icon ${
            i < Math.round(rating)
              ? "product-mini-card__star-icon--active"
              : "product-mini-card__star-icon--inactive"
          }`}
        />
      ))
    ) : (
      <FaStar className="product-mini-card__star-icon product-mini-card__star-icon--active" />
    );

  const renderPrices = (isCompact = false) => (
    <div className="product-mini-card__price-wrapper">
      <span
        className={
          isCompact
            ? "product-mini-card__price-compact"
            : "product-mini-card__price"
        }
      >
        ${price.toFixed(2)}
      </span>
      {oldPrice && !isCompact && (
        <span className="product-mini-card__old-price">
          ${oldPrice.toFixed(2)}
        </span>
      )}
    </div>
  );

  const renderRating = () => (
    <div className="product-mini-card__rating">
      {isDetailed ? (
        <div className="product-mini-card__stars">{renderStars()}</div>
      ) : (
        renderStars()
      )}
      <span className="product-mini-card__rating-value">
        {isDetailed ? `(${rating.toFixed(1)})` : rating}
      </span>
    </div>
  );

  return (
    <Element
      to={to}
      href={href}
      onClick={onClick}
      role={!to && !href && onClick ? "button" : undefined}
      className={`product-mini-card product-mini-card--${variant} ${className}`.trim()}
    >
      <div className="product-mini-card__image-wrapper">
        <img src={imageSrc} alt={title} className="product-mini-card__image" />
      </div>

      <div className="product-mini-card__content">
        <h4 className="product-mini-card__title">
          {title}
          {isOffer && (
            <span className="product-mini-card__offer-badge">Offer</span>
          )}
        </h4>
        {isDetailed ? (
          <>
            {renderRating()}
            {renderPrices()}
          </>
        ) : (
          <>
            {renderPrices(true)}
            {renderRating()}
          </>
        )}
      </div>
    </Element>
  );
};

export default ProductMiniCard;
