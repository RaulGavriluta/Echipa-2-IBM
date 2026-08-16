import React from "react";
import Button from "../../atoms/Button";
import "./ContactLocationCard.css";

export interface ContactLocationCardProps {
  title: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  email: string;
  mapLink: string;
}

const ContactLocationCard: React.FC<ContactLocationCardProps> = ({
  title,
  addressLine1,
  addressLine2,
  phone,
  email,
  mapLink,
}) => {
  return (
    <div className="contact-location-card">
      <h3 className="contact-location-card__title">{title}</h3>
      <div className="contact-location-card__info">
        <p className="contact-location-card__text">{addressLine1}</p>
        <p className="contact-location-card__text">{addressLine2}</p>
        <p className="contact-location-card__text">
          <abbr title="Phone">Phone:</abbr> {phone}
        </p>
        <p className="contact-location-card__text">
          <abbr title="Email">Email:</abbr> {email}
        </p>
      </div>
      <a href={mapLink} className="contact-location-card__btn-link">
        <Button variant="primary" size="sm">
          <svg
            className="contact-location-card__icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          View map
        </Button>
      </a>
    </div>
  );
};

export default ContactLocationCard;
