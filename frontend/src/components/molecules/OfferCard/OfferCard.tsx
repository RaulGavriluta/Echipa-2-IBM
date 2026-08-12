import { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";
import "./OfferCard.css";

export interface OfferCardProps {
  image: string;
  title: string;
  rating?: number;
  oldPrice?: number;
  currentPrice: number;
  seller: string;
  deadline: Date;
  onAdd?: () => void;
  className?: string;
}

const getTimeLeft = (deadline: Date) => {
  const diff = Math.max(deadline.getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    sec: Math.floor((diff / 1000) % 60),
  };
};

const pad = (n: number) => String(n).padStart(2, "0");

const OfferCard = ({
  image,
  title,
  rating,
  oldPrice,
  currentPrice,
  seller,
  deadline,
  onAdd,
  className = "",
}: OfferCardProps) => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(deadline));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(deadline)), 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <article className={`offer-card ${className}`.trim()}>
      <img
        src={image}
        alt={title}
        className="offer-card-image"
        loading="lazy"
      />
      <div className="offer-countdown">
        <div className="offer-countdown-item">
          <span className="offer-countdown-value">{timeLeft.days}</span>
          <span className="offer-countdown-label">Days</span>
        </div>
        <div className="offer-countdown-item">
          <span className="offer-countdown-value">{pad(timeLeft.hours)}</span>
          <span className="offer-countdown-label">Hours</span>
        </div>
        <div className="offer-countdown-item">
          <span className="offer-countdown-value">{pad(timeLeft.mins)}</span>
          <span className="offer-countdown-label">Mins</span>
        </div>
        <div className="offer-countdown-item">
          <span className="offer-countdown-value">{pad(timeLeft.sec)}</span>
          <span className="offer-countdown-label">Sec</span>
        </div>
      </div>

      <div className="offer-card-content">
        <div className="offer-card-body">
          <h3 className="offer-card-title">{title}</h3>

          {rating !== undefined && (
            <div className="offer-card-rating">
              <Icon icon={FaStar} size="0.875rem" color="#f5a623" />
              <span className="offer-card-rating-value">({rating})</span>
            </div>
          )}

          {seller && (
            <span className="offer-card-seller">
              By <span className="offer-card-seller-name">{seller}</span>
            </span>
          )}
        </div>

        <div className="offer-card-footer">
          <div className="offer-card-prices">
            <span className="offer-card-current-price">
              ${currentPrice.toFixed(2)}
            </span>
            {oldPrice !== undefined && (
              <span className="offer-card-old-price">
                ${oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="offer-card-add-button"
            onClick={onAdd}
          >
            <Icon
              icon={FiShoppingCart}
              size="0.875rem"
              color="var(--color-green)"
            />
            Add
          </Button>
        </div>
      </div>
    </article>
  );
};

export default OfferCard;