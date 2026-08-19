import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiMapPin,
  FiCreditCard,
  FiCheck,
  FiLock,
  FiTruck,
  FiPackage,
  FiShoppingBag,
} from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import Seo from "../../components/atoms/Seo/Seo";
import ProductMiniCard from "../../components/molecules/ProductMiniCard/ProductMiniCard";
import Button from "../../components/atoms/Button";
import Icon from "../../components/atoms/Icon";
import "./Checkout.css";

type CheckoutStep = "shipping" | "payment" | "confirmation";

interface ShippingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface PaymentForm {
  cardNumber: string;
  cardName: string;
  expiry: string;
  cvv: string;
}

const TAX_RATE = Number(import.meta.env.VITE_TAX_RATE) || 0.08;
const SHIPPING_COST = Number(import.meta.env.VITE_SHIPPING_COST) || 5.99;
const FREE_SHIPPING_THRESHOLD =
  Number(import.meta.env.VITE_FREE_SHIPPING_THRESHOLD) || 50;

const generateOrderNumber = () => {
  return `ECO-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
};

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>("shipping");
  const [orderNumber, setOrderNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const [shipping, setShipping] = useState<ShippingForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const [payment, setPayment] = useState<PaymentForm>({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const shippingCost =
    totalPrice >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const taxAmount = totalPrice * TAX_RATE;
  const grandTotal = totalPrice + taxAmount + shippingCost;

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 16);
    return digits.replace(/(.{4})/g, "$1 ").trim();
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    if (digits.length >= 3) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    return digits;
  };

  const isShippingValid = () => {
    return (
      shipping.firstName.trim() !== "" &&
      shipping.lastName.trim() !== "" &&
      shipping.email.trim() !== "" &&
      shipping.address.trim() !== "" &&
      shipping.city.trim() !== "" &&
      shipping.zip.trim() !== ""
    );
  };

  const isPaymentValid = () => {
    return (
      payment.cardNumber.replace(/\s/g, "").length === 16 &&
      payment.cardName.trim() !== "" &&
      payment.expiry.length === 5 &&
      payment.cvv.length >= 3
    );
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setStep("confirmation");
    clearCart();
    setIsProcessing(false);
  };

  // Redirect to cart if no items and not on confirmation
  if (items.length === 0 && step !== "confirmation") {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <div className="checkout-empty__icon">
            <Icon
              icon={FiShoppingBag}
              size="3.5rem"
              color="var(--color-text-muted)"
            />
          </div>
          <h2 className="checkout-empty__title">Nothing to checkout</h2>
          <p className="checkout-empty__text">
            Add some items to your cart first.
          </p>
          <Link to="/" className="checkout-empty__link">
            <Button variant="primary" size="md">
              <Icon icon={FiArrowLeft} size="1rem" color="var(--color-white)" />
              Go Shopping
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const steps: { key: CheckoutStep; label: string; icon: typeof FiMapPin }[] = [
    { key: "shipping", label: "Shipping", icon: FiTruck },
    { key: "payment", label: "Payment", icon: FiCreditCard },
    { key: "confirmation", label: "Confirmed", icon: FiCheck },
  ];

  const currentStepIndex = steps.findIndex((s) => s.key === step);

  return (
    <div className="checkout-page">
      <Seo title="Checkout" noIndex />
      <div className="checkout-steps">
        {steps.map((s, i) => (
          <div
            key={s.key}
            className={`checkout-step ${i <= currentStepIndex ? "checkout-step--active" : ""} ${i < currentStepIndex ? "checkout-step--completed" : ""}`}
          >
            <div className="checkout-step__circle">
              {i < currentStepIndex ? (
                <Icon
                  icon={FiCheck}
                  size="0.875rem"
                  color="var(--color-white)"
                />
              ) : (
                <Icon
                  icon={s.icon}
                  size="0.875rem"
                  color={
                    i <= currentStepIndex
                      ? "var(--color-white)"
                      : "var(--color-text-muted)"
                  }
                />
              )}
            </div>
            <span className="checkout-step__label">{s.label}</span>
            {i < steps.length - 1 && <div className="checkout-step__line" />}
          </div>
        ))}
      </div>

      {step !== "confirmation" && (
        <div className="checkout-layout">
          <div className="checkout-form-area">
            {step === "shipping" && (
              <div className="checkout-card">
                <div className="checkout-card__header">
                  <Icon
                    icon={FiMapPin}
                    size="1.25rem"
                    color="var(--color-green)"
                  />
                  <h2 className="checkout-card__title">Shipping Information</h2>
                </div>

                <div className="checkout-form">
                  <div className="checkout-form__row">
                    <div className="checkout-form__group">
                      <label className="checkout-form__label">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="checkout-form__input"
                        placeholder="John"
                        value={shipping.firstName}
                        onChange={(e) =>
                          setShipping({
                            ...shipping,
                            firstName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="checkout-form__group">
                      <label className="checkout-form__label">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="checkout-form__input"
                        placeholder="Doe"
                        value={shipping.lastName}
                        onChange={(e) =>
                          setShipping({ ...shipping, lastName: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="checkout-form__row">
                    <div className="checkout-form__group">
                      <label className="checkout-form__label">Email *</label>
                      <input
                        type="email"
                        className="checkout-form__input"
                        placeholder="john@example.com"
                        value={shipping.email}
                        onChange={(e) =>
                          setShipping({ ...shipping, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="checkout-form__group">
                      <label className="checkout-form__label">Phone</label>
                      <input
                        type="tel"
                        className="checkout-form__input"
                        placeholder="+1 (555) 000-0000"
                        value={shipping.phone}
                        onChange={(e) =>
                          setShipping({ ...shipping, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="checkout-form__group">
                    <label className="checkout-form__label">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      className="checkout-form__input"
                      placeholder="123 Main Street, Apt 4B"
                      value={shipping.address}
                      onChange={(e) =>
                        setShipping({ ...shipping, address: e.target.value })
                      }
                    />
                  </div>

                  <div className="checkout-form__row checkout-form__row--three">
                    <div className="checkout-form__group">
                      <label className="checkout-form__label">City *</label>
                      <input
                        type="text"
                        className="checkout-form__input"
                        placeholder="New York"
                        value={shipping.city}
                        onChange={(e) =>
                          setShipping({ ...shipping, city: e.target.value })
                        }
                      />
                    </div>
                    <div className="checkout-form__group">
                      <label className="checkout-form__label">State</label>
                      <input
                        type="text"
                        className="checkout-form__input"
                        placeholder="NY"
                        value={shipping.state}
                        onChange={(e) =>
                          setShipping({ ...shipping, state: e.target.value })
                        }
                      />
                    </div>
                    <div className="checkout-form__group">
                      <label className="checkout-form__label">ZIP Code *</label>
                      <input
                        type="text"
                        className="checkout-form__input"
                        placeholder="10001"
                        value={shipping.zip}
                        onChange={(e) =>
                          setShipping({ ...shipping, zip: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="checkout-form__group">
                    <label className="checkout-form__label">Country</label>
                    <select
                      className="checkout-form__input checkout-form__select"
                      value={shipping.country}
                      onChange={(e) =>
                        setShipping({ ...shipping, country: e.target.value })
                      }
                    >
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Romania">Romania</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                    </select>
                  </div>
                </div>

                <div className="checkout-card__actions">
                  <Link to="/cart" className="checkout-card__back-link">
                    <Icon icon={FiArrowLeft} size="0.875rem" />
                    Back to Cart
                  </Link>
                  <Button
                    variant="primary"
                    size="md"
                    disabled={!isShippingValid()}
                    onClick={() => setStep("payment")}
                    className="checkout-card__next-btn"
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="checkout-card">
                <div className="checkout-card__header">
                  <Icon
                    icon={FiCreditCard}
                    size="1.25rem"
                    color="var(--color-green)"
                  />
                  <h2 className="checkout-card__title">Payment Method</h2>
                </div>

                <div className="checkout-payment-badge">
                  <Icon
                    icon={FiLock}
                    size="0.75rem"
                    color="var(--color-green)"
                  />
                  <span>Secure SSL Encrypted Payment (Simulated)</span>
                </div>

                <div className="checkout-form">
                  <div className="checkout-form__group">
                    <label className="checkout-form__label">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      className="checkout-form__input checkout-form__input--card"
                      placeholder="0000 0000 0000 0000"
                      value={payment.cardNumber}
                      onChange={(e) =>
                        setPayment({
                          ...payment,
                          cardNumber: formatCardNumber(e.target.value),
                        })
                      }
                      maxLength={19}
                    />
                  </div>

                  <div className="checkout-form__group">
                    <label className="checkout-form__label">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      className="checkout-form__input"
                      placeholder="JOHN DOE"
                      value={payment.cardName}
                      onChange={(e) =>
                        setPayment({ ...payment, cardName: e.target.value })
                      }
                    />
                  </div>

                  <div className="checkout-form__row">
                    <div className="checkout-form__group">
                      <label className="checkout-form__label">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        className="checkout-form__input"
                        placeholder="MM/YY"
                        value={payment.expiry}
                        onChange={(e) =>
                          setPayment({
                            ...payment,
                            expiry: formatExpiry(e.target.value),
                          })
                        }
                        maxLength={5}
                      />
                    </div>
                    <div className="checkout-form__group">
                      <label className="checkout-form__label">CVV *</label>
                      <input
                        type="text"
                        className="checkout-form__input"
                        placeholder="•••"
                        value={payment.cvv}
                        onChange={(e) =>
                          setPayment({
                            ...payment,
                            cvv: e.target.value.replace(/\D/g, "").slice(0, 4),
                          })
                        }
                        maxLength={4}
                      />
                    </div>
                  </div>
                </div>

                <div className="checkout-card__actions">
                  <button
                    className="checkout-card__back-link"
                    onClick={() => setStep("shipping")}
                    type="button"
                  >
                    <Icon icon={FiArrowLeft} size="0.875rem" />
                    Back to Shipping
                  </button>
                  <Button
                    variant="primary"
                    size="md"
                    disabled={!isPaymentValid() || isProcessing}
                    onClick={handlePlaceOrder}
                    className="checkout-card__next-btn checkout-card__pay-btn"
                  >
                    {isProcessing ? (
                      <span className="checkout-spinner" />
                    ) : (
                      <Icon
                        icon={FiLock}
                        size="0.875rem"
                        color="var(--color-white)"
                      />
                    )}
                    {isProcessing
                      ? "Processing..."
                      : `Pay $${grandTotal.toFixed(2)}`}
                  </Button>
                </div>
              </div>
            )}
          </div>

          <aside className="checkout-summary">
            <div className="checkout-card">
              <div className="checkout-card__header">
                <Icon
                  icon={FiPackage}
                  size="1.25rem"
                  color="var(--color-green)"
                />
                <h3 className="checkout-card__title">Order Summary</h3>
              </div>

              <ul className="checkout-summary__items">
                {items.map((item) => (
                  <li key={item.product.id} className="checkout-summary__item">
                    <ProductMiniCard
                      title={item.product.title}
                      imageSrc={item.product.image}
                      price={item.product.currentPrice}
                      isOffer={item.product.isOffer}
                      variant="compact"
                    />
                    <span className="checkout-summary__qty">
                      ×{item.quantity}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="checkout-summary__separator" />

              <div className="checkout-summary__totals">
                <div className="checkout-summary__row">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="checkout-summary__row">
                  <span>Shipping</span>
                  <span
                    className={
                      shippingCost === 0 ? "checkout-summary__free" : ""
                    }
                  >
                    {shippingCost === 0
                      ? "FREE"
                      : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="checkout-summary__row">
                  <span>Tax ({(TAX_RATE * 100).toFixed(0)}%)</span>
                  <span>${taxAmount.toFixed(2)}</span>
                </div>
                <div className="checkout-summary__separator" />
                <div className="checkout-summary__row checkout-summary__row--total">
                  <span>Total</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {totalPrice < FREE_SHIPPING_THRESHOLD && (
                <div className="checkout-summary__shipping-note">
                  <Icon
                    icon={FiTruck}
                    size="0.875rem"
                    color="var(--color-green)"
                  />
                  <span>
                    Add{" "}
                    <strong>
                      ${(FREE_SHIPPING_THRESHOLD - totalPrice).toFixed(2)}
                    </strong>{" "}
                    more for free shipping!
                  </span>
                </div>
              )}
            </div>
          </aside>
        </div>
      )}

      {step === "confirmation" && (
        <div className="checkout-confirmation">
          <div className="checkout-confirmation__icon">
            <Icon icon={FiCheck} size="3rem" color="var(--color-white)" />
          </div>
          <h2 className="checkout-confirmation__title">Order Confirmed!</h2>
          <p className="checkout-confirmation__text">
            Thank you for your purchase. Your order has been placed
            successfully.
          </p>

          <div className="checkout-confirmation__details">
            <div className="checkout-confirmation__detail">
              <span className="checkout-confirmation__label">Order Number</span>
              <span className="checkout-confirmation__value">
                {orderNumber}
              </span>
            </div>
            <div className="checkout-confirmation__detail">
              <span className="checkout-confirmation__label">Total Paid</span>
              <span className="checkout-confirmation__value checkout-confirmation__value--green">
                ${grandTotal.toFixed(2)}
              </span>
            </div>
            <div className="checkout-confirmation__detail">
              <span className="checkout-confirmation__label">Shipping To</span>
              <span className="checkout-confirmation__value">
                {shipping.firstName} {shipping.lastName}, {shipping.city}
              </span>
            </div>
            <div className="checkout-confirmation__detail">
              <span className="checkout-confirmation__label">
                Estimated Delivery
              </span>
              <span className="checkout-confirmation__value">
                {new Date(
                  Date.now() + 5 * 24 * 60 * 60 * 1000,
                ).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <div className="checkout-confirmation__actions">
            <Button variant="primary" size="md" onClick={() => navigate("/")}>
              Continue Shopping
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
