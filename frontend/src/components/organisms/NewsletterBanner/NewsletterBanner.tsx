import React from "react";
import NewsletterForm from "../../molecules/NewsletterForm";
import "./NewsletterBanner.css";

export interface NewsletterBannerProps {
  title?: string;
  subtitlePrefix?: string;
  subtitleHighlight?: string;
  backgroundImage?: string;
  sideImage?: string;
  sideImageAlt?: string;
  className?: string;
}

const NewsletterBanner: React.FC<NewsletterBannerProps> = ({
  title = "Stay home & get your daily needs from our shop",
  subtitlePrefix = "Start Your Daily Shopping with",
  subtitleHighlight = "Nest Mart",
  backgroundImage,
  sideImage,
  sideImageAlt = "Promotional banner illustration",
  className = "",
}) => {
  const containerStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : undefined;

  return (
    <section
      className={`newsletter-banner ${className}`.trim()}
      style={containerStyle}
    >
      <div className="newsletter-banner__content">
        <h2 className="newsletter-banner__title">{title}</h2>
        <p className="newsletter-banner__subtitle">
          {subtitlePrefix} <span>{subtitleHighlight}</span>
        </p>
        <div className="newsletter-banner__form-box">
          <NewsletterForm />
        </div>
      </div>

      {sideImage && (
        <div className="newsletter-banner__image-box">
          <img
            src={sideImage}
            alt={sideImageAlt}
            className="newsletter-banner__image"
          />
        </div>
      )}
    </section>
  );
};

export default NewsletterBanner;
