import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./TeamCard.css";

export interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, socials }) => {
  return (
    <div className="team-card">
      <div className="team-card__image-box">
        <img src={image} alt={name} className="team-card__image" />
      </div>
      <div className="team-card__info-box">
        <h4 className="team-card__name">{name}</h4>
        <p className="team-card__role">{role}</p>
        {socials && (
          <div className="team-card__socials">
            {socials.facebook && (
              <a
                href={socials.facebook}
                className="team-card__social-link"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                className="team-card__social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            )}
            {socials.instagram && (
              <a
                href={socials.instagram}
                className="team-card__social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            )}
            {socials.youtube && (
              <a
                href={socials.youtube}
                className="team-card__social-link"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
