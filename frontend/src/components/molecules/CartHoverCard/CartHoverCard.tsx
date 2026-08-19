import { Link } from "react-router-dom";
import { FiX, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../../context/CartContext";
import ProductMiniCard from "../ProductMiniCard/ProductMiniCard";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import "./CartHoverCard.css";

const CartHoverCard = () => {
  const { items, removeFromCart, totalItems, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-hover-card">
        <div className="cart-hover-card__empty">
          <Icon icon={FiShoppingBag} size="2rem" color="var(--color-text-muted)" />
          <p className="cart-hover-card__empty-text">Your cart is empty</p>
          <Link to="/" className="cart-hover-card__empty-link">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-hover-card">
      <div className="cart-hover-card__header">
        <span className="cart-hover-card__title">
          Your Cart ({totalItems} {totalItems === 1 ? "item" : "items"})
        </span>
      </div>

      <ul className="cart-hover-card__list">
        {items.slice(0, 5).map((item) => (
          <li key={item.product.id} className="cart-hover-card__item">
            <ProductMiniCard
              title={item.product.title}
              imageSrc={item.product.image}
              price={item.product.currentPrice}
              oldPrice={item.product.oldPrice}
              rating={item.product.rating}
              isOffer={item.product.isOffer}
              variant="compact"
            />
            <div className="cart-hover-card__item-meta">
              <span className="cart-hover-card__qty">×{item.quantity}</span>
              <button
                className="cart-hover-card__remove"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  removeFromCart(item.product.id);
                }}
                aria-label={`Remove ${item.product.title}`}
                type="button"
              >
                <Icon icon={FiX} size="0.875rem" />
              </button>
            </div>
          </li>
        ))}
        {items.length > 5 && (
          <li className="cart-hover-card__more">
            +{items.length - 5} more {items.length - 5 === 1 ? "item" : "items"}
          </li>
        )}
      </ul>

      <div className="cart-hover-card__footer">
        <div className="cart-hover-card__subtotal">
          <span>Subtotal:</span>
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
        <div className="cart-hover-card__actions">
          <Link to="/cart" className="cart-hover-card__view-btn">
            <Button variant="outline" size="sm" fullWidth>
              View Cart
            </Button>
          </Link>
          <Link to="/checkout" className="cart-hover-card__view-btn">
            <Button variant="primary" size="sm" fullWidth>
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartHoverCard;
