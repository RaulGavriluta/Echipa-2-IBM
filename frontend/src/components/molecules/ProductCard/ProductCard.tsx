import { FiShoppingCart } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import Badge from '../../atoms/Badge';
import type { BadgeVariant } from '../../atoms/Badge';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import "./ProductCard.css";

export interface ProductCardProps {
    image: string;
    title: string;
    category: string;
    oldPrice?: number;
    currentPrice: number;
    rating?: number;
    seller?: string;
    badgeText?: string;
    badgeVariant?: BadgeVariant;
    onAdd?: () => void;
    className?: string;
}

const ProductCard = ({
    image,
    title,
    category,
    currentPrice,
    oldPrice,
    rating,
    seller,
    badgeText,
    badgeVariant = 'hot',
    onAdd,
    className = '',
}: ProductCardProps) => {
    return (
        <article className={`product-card ${className}`.trim()}>
            {badgeText && (
                <div className="product-card-badge">
                    <Badge variant={badgeVariant}>{badgeText}</Badge>
                </div>
            )}
            <div className="product-card-image-wrapper">
                <img 
                className="product-card-image"
                src={image}
                alt={title}
                loading="lazy"
                />
            </div>
            <div className="product-card-body">
                <span className="product-card-category"> {category} </span>
                <h3 className="product-card-title"> {title} </h3>

                {rating !== undefined && (
                    <div className="product-card-rating">
                        <Icon icon={FaStar} size="0.875rem" color="gold" />
                        <span className="product-card-rating-value"> ({rating}) </span>
                    </div>
                )}

                {seller && (
                    <span className="product-card-seller"> 
                        By{" "} 
                        <span className="product-card-seller-name"> {seller} </span>
                    </span>
                )}
            </div>

            <div className="product-card-footer">
                <div className="product-card-prices">
                    <span className="product-card-current-price">
                        ${currentPrice.toFixed(2)}
                    </span>
                    {oldPrice !== undefined && (
                        <span className="product-card-old-price">
                            ${oldPrice.toFixed(2)}
                        </span>
                    )}
                </div>
                
                <Button 
                    variant="primary"
                    size="sm"
                    className="product-card-add-button"
                    onClick={onAdd}
                >
                    <Icon icon={FiShoppingCart} size="0.875rem" />
                    Add
                </Button>
            </div>
        </article>
    );
};

export default ProductCard;