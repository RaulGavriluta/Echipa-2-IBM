import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { HiOutlineArrowsRightLeft } from "react-icons/hi2";
import Badge from "../../atoms/Badge";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import type { Product } from "../../../data/types";
import { PRODUCT_PAGE_TEXTS } from "../../../data/productData";
import { calculateDiscountPercent, formatPrice } from "../../../utils/productUtils";
import { useCart } from "../../../context/CartContext";
import "./ProductInfo.css";

export interface ProductInfoProps {
  product: Product;
  className?: string;
}

const ProductInfo = ({ product, className = "" }: ProductInfoProps) => {
  const [selectedSize, setSelectedSize] = useState(
    product.sizeVariants?.[0]?.value || ""
  );
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const discountPercent = calculateDiscountPercent(
    product.currentPrice,
    product.oldPrice
  );

  const reviewCount = product.reviews?.length || 0;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className={`product-info ${className}`.trim()}>
      {product.badgeText && (
        <div className="product-info__badge">
          <Badge variant={product.badgeVariant || "sale"}>
            {product.badgeText}
          </Badge>
        </div>
      )}

      <h1 className="product-info__title">{product.title}</h1>

      <div className="product-info__rating">
        <Icon icon={FaStar} size="0.9rem" color="var(--color-star-active)" />
        <span className="product-info__reviews-count">
          ({reviewCount} {PRODUCT_PAGE_TEXTS.reviewsCountSuffix})
        </span>
      </div>

      <div className="product-info__price-row">
        <span className="product-info__current-price">
          {formatPrice(product.currentPrice)}
        </span>
        {discountPercent !== null && (
          <span className="product-info__discount">
            {discountPercent}{PRODUCT_PAGE_TEXTS.discountSuffix}
          </span>
        )}
        {product.oldPrice !== undefined && (
          <span className="product-info__old-price">
            {formatPrice(product.oldPrice)}
          </span>
        )}
      </div>

      {product.shortDescription && (
        <p className="product-info__short-desc">{product.shortDescription}</p>
      )}

      {product.sizeVariants && product.sizeVariants.length > 0 && (
        <div className="product-info__sizes">
          <span className="product-info__sizes-label">
            {PRODUCT_PAGE_TEXTS.sizeWeightLabel}
          </span>
          <div className="product-info__sizes-options">
            {product.sizeVariants.map((variant) => (
              <button
                key={`size-variant-${product.id}-${variant.value}`}
                className={`product-info__size-btn ${
                  selectedSize === variant.value
                    ? "product-info__size-btn--active"
                    : ""
                }`}
                onClick={() => setSelectedSize(variant.value)}
              >
                {variant.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="product-info__actions">
        <div className="product-info__quantity">
          <button
            className="product-info__qty-btn"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label={PRODUCT_PAGE_TEXTS.decreaseQtyAria}
          >
            −
          </button>
          <span className="product-info__qty-value">{quantity}</span>
          <button
            className="product-info__qty-btn"
            onClick={() => setQuantity(quantity + 1)}
            aria-label={PRODUCT_PAGE_TEXTS.increaseQtyAria}
          >
            +
          </button>
        </div>

        <Button
          variant="primary"
          size="md"
          className="product-info__add-btn"
          onClick={handleAddToCart}
        >
          <Icon icon={FiShoppingCart} size="1rem" />
          {PRODUCT_PAGE_TEXTS.addToCartBtn}
        </Button>

        <button
          className="product-info__icon-btn"
          aria-label={PRODUCT_PAGE_TEXTS.addToWishlistAria}
        >
          <FiHeart />
        </button>
        <button
          className="product-info__icon-btn"
          aria-label={PRODUCT_PAGE_TEXTS.compareAria}
        >
          <HiOutlineArrowsRightLeft />
        </button>
      </div>

      <div className="product-info__meta">
        {product.productType && (
          <div className="product-info__meta-item">
            <span className="product-info__meta-label">
              {PRODUCT_PAGE_TEXTS.typeLabel}
            </span>
            <span className="product-info__meta-value product-info__meta-value--green">
              {product.productType}
            </span>
          </div>
        )}
        {product.sku && (
          <div className="product-info__meta-item">
            <span className="product-info__meta-label">
              {PRODUCT_PAGE_TEXTS.skuLabel}
            </span>
            <span className="product-info__meta-value">{product.sku}</span>
          </div>
        )}
        {product.mfgDate && (
          <div className="product-info__meta-item">
            <span className="product-info__meta-label">
              {PRODUCT_PAGE_TEXTS.mfgLabel}
            </span>
            <span className="product-info__meta-value product-info__meta-value--green">
              {product.mfgDate}
            </span>
          </div>
        )}
        {product.tags && product.tags.length > 0 && (
          <div className="product-info__meta-item">
            <span className="product-info__meta-label">
              {PRODUCT_PAGE_TEXTS.tagsLabel}
            </span>
            <span className="product-info__meta-value product-info__meta-value--green">
              {product.tags.join(", ")}
            </span>
          </div>
        )}
        {product.lifespan && (
          <div className="product-info__meta-item">
            <span className="product-info__meta-label">
              {PRODUCT_PAGE_TEXTS.lifeLabel}
            </span>
            <span className="product-info__meta-value product-info__meta-value--green">
              {product.lifespan}
            </span>
          </div>
        )}
        {product.stock !== undefined && (
          <div className="product-info__meta-item">
            <span className="product-info__meta-label">
              {PRODUCT_PAGE_TEXTS.stockLabel}
            </span>
            <span className="product-info__meta-value product-info__meta-value--green">
              {product.stock} {PRODUCT_PAGE_TEXTS.inStockSuffix}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
