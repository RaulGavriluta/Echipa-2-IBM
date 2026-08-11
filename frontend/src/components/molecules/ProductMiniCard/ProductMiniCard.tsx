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
  rating,
  to,
  href,
  onClick,
  className = "",
}) => {
  const combinedClassName = `product-mini-card ${className}`.trim();

  const cardContent = (
    <>
      <div className="product-mini-card__image-wrapper">
        <img src={imageSrc} alt={title} className="product-mini-card__image" />
      </div>

      <div className="product-mini-card__content">
        <h4 className="product-mini-card__title">{title}</h4>

        <div className="product-mini-card__price-wrapper">
          <span className="product-mini-card__price">${price.toFixed(2)}</span>
          {oldPrice && (
            <span className="product-mini-card__old-price">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {rating !== undefined && (
          <div className="product-mini-card__rating">
            <FaStar className="product-mini-card__star-icon" />
            <span className="product-mini-card__rating-value">{rating}</span>
          </div>
        )}
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClassName} onClick={onClick}>
        {cardContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClassName} onClick={onClick}>
        {cardContent}
      </a>
    );
  }

  return (
    <div
      className={combinedClassName}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {cardContent}
    </div>
  );
};

export default ProductMiniCard;
