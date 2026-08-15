import React from "react";
import "./FeatureCard.css";

export interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  linkText = "Read more",
  linkHref = "#",
}) => {
  return (
    <div className="feature-card">
      <div className="feature-card__icon-wrapper">
        <img src={icon} alt={title} className="feature-card__icon" />
      </div>
      <h4 className="feature-card__title">{title}</h4>
      <p className="feature-card__description">{description}</p>
      {linkText && (
        <a href={linkHref} className="feature-card__link">
          {linkText}
        </a>
      )}
    </div>
  );
};

export default FeatureCard;
