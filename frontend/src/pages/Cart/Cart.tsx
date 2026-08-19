import { Link } from "react-router-dom";
import {
  FiShoppingBag,
  FiMinus,
  FiPlus,
  FiTrash2,
  FiArrowLeft,
} from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import ProductMiniCard from "../../components/molecules/ProductMiniCard/ProductMiniCard";
import Button from "../../components/atoms/Button";
import Icon from "../../components/atoms/Icon";
import "./Cart.css";

const TAX_RATE = Number(import.meta.env.VITE_TAX_RATE) || 0.08;

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalPrice } =
    useCart();

  const taxAmount = totalPrice * TAX_RATE;
  const grandTotal = totalPrice + taxAmount;

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <div className="cart-empty__icon">
            <Icon
              icon={FiShoppingBag}
              size="3.5rem"
              color="var(--color-text-muted)"
            />
          </div>
          <h2 className="cart-empty__title">Your cart is empty</h2>
          <p className="cart-empty__text">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link to="/" className="cart-empty__link">
            <Button variant="primary" size="md">
              <Icon icon={FiArrowLeft} size="1rem" color="var(--color-white)" />
              Start Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="cart-page">
      <div className="cart-page__header">
        <Link to="/" className="cart-page__back">
          <Icon icon={FiArrowLeft} size="1rem" />
          Continue Shopping
        </Link>
        <h1 className="cart-page__title">Shopping Cart</h1>
      </div>

      <div className="cart-receipt">
        <div className="cart-receipt__edge cart-receipt__edge--top" />

        <div className="cart-receipt__body">
          <div className="cart-receipt__header">
            <Icon
              src="/assets/logo.png"
              size="10rem"
              color="var(--color-text-dark)"
              className="cart-receipt-logo"
            />
            <span className="cart-receipt__date">{currentDate}</span>
            <span className="cart-receipt__time">{currentTime}</span>
            <div className="cart-receipt__separator" />
          </div>

          <div className="cart-receipt__columns">
            <span className="cart-receipt__col-item">Item</span>
            <span className="cart-receipt__col-qty">Qty</span>
            <span className="cart-receipt__col-price">Price</span>
          </div>
          <div className="cart-receipt__separator" />

          <ul className="cart-receipt__items">
            {items.map((item, index) => (
              <li key={item.product.id} className="cart-receipt__item">
                <div className="cart-receipt__item-main">
                  <ProductMiniCard
                    title={item.product.title}
                    imageSrc={item.product.image}
                    price={item.product.currentPrice}
                    oldPrice={item.product.oldPrice}
                    rating={item.product.rating}
                    isOffer={item.product.isOffer}
                    variant="compact"
                  />
                </div>

                <div className="cart-receipt__item-controls">
                  <div className="cart-receipt__qty-control">
                    <button
                      className="cart-receipt__qty-btn"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity - 1)
                      }
                      aria-label="Decrease quantity"
                      type="button"
                    >
                      <Icon icon={FiMinus} size="0.75rem" />
                    </button>
                    <span className="cart-receipt__qty-value">
                      {item.quantity}
                    </span>
                    <button
                      className="cart-receipt__qty-btn"
                      onClick={() =>
                        updateQuantity(item.product.id, item.quantity + 1)
                      }
                      disabled={
                        item.product.offerLimit !== undefined &&
                        item.quantity >= item.product.offerLimit
                      }
                      aria-label="Increase quantity"
                      type="button"
                    >
                      <Icon icon={FiPlus} size="0.75rem" />
                    </button>
                  </div>

                  {item.product.offerLimit !== undefined && (
                    <span className="cart-receipt__limit-tag">
                      Max {item.product.offerLimit} per user
                    </span>
                  )}

                  <span className="cart-receipt__item-total">
                    ${(item.product.currentPrice * item.quantity).toFixed(2)}
                  </span>

                  <button
                    className="cart-receipt__remove-btn"
                    onClick={() => removeFromCart(item.product.id)}
                    aria-label={`Remove ${item.product.title}`}
                    type="button"
                  >
                    <Icon icon={FiTrash2} size="0.875rem" />
                  </button>
                </div>

                {index < items.length - 1 && (
                  <div className="cart-receipt__item-separator" />
                )}
              </li>
            ))}
          </ul>

          <div className="cart-receipt__separator cart-receipt__separator--thick" />

          <div className="cart-receipt__totals">
            <div className="cart-receipt__total-row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="cart-receipt__total-row">
              <span>Tax ({(TAX_RATE * 100).toFixed(0)}%)</span>
              <span>${taxAmount.toFixed(2)}</span>
            </div>
            <div className="cart-receipt__separator" />
            <div className="cart-receipt__total-row cart-receipt__total-row--grand">
              <span>TOTAL</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="cart-receipt__separator" />

          <div className="cart-receipt__footer">
            <span className="cart-receipt__thank-you">
              Thank you for shopping with us!
            </span>
          </div>
        </div>

        <div className="cart-receipt__edge cart-receipt__edge--bottom" />
      </div>

      <div className="cart-page__actions">
        <Button
          variant="ghost"
          size="sm"
          onClick={clearCart}
          className="cart-page__clear-btn"
        >
          <Icon icon={FiTrash2} size="0.875rem" />
          Clear Cart
        </Button>
        <Link to="/checkout" className="cart-page__checkout-link">
          <Button
            variant="primary"
            size="md"
            className="cart-page__checkout-btn"
          >
            Proceed to Checkout — ${grandTotal.toFixed(2)}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
