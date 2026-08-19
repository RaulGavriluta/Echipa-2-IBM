import React from "react";
import Seo from "../../components/atoms/Seo/Seo";
import ContactLocationCard from "../../components/molecules/ContactLocationCard";
import ContactForm from "../../components/organisms/ContactForm";
import NewsletterBanner from "../../components/organisms/NewsletterBanner";
import {
  contactIntroData,
  contactServicesData,
  contactLocationsData,
  contactFormData,
  contactBannerData,
} from "../../data/contactData";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <Seo
        title="Contact Us"
        description="Get in touch with Nest. Find our locations, phone numbers and send us a message."
        canonical="/contact"
      />
      <div className="contact-page__container">
        <section className="contact-top">
          <div className="contact-top__intro">
            <span className="contact-top__badge">{contactIntroData.badge}</span>
            <h1 className="contact-top__title">{contactIntroData.title}</h1>
            <div className="contact-top__paragraphs">
              {contactIntroData.paragraphs.map((p, idx) => (
                <p key={idx} className="contact-top__desc">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="contact-top__services">
            {contactServicesData.map((service) => (
              <div
                key={service.id}
                className={
                  service.highlighted
                    ? "contact-service-item contact-service-item--highlighted"
                    : "contact-service-item"
                }
              >
                <h3 className="contact-service-item__title">
                  <span>{service.number}</span> {service.title}
                </h3>
                <p className="contact-service-item__desc">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-map">
          <iframe
            title="Location Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-10.0%2C35.0%2C45.0%2C60.0&amp;layer=mapnik"
            className="contact-map__iframe"
            loading="lazy"
          />
        </section>

        <section className="contact-locations">
          <div className="contact-locations__grid">
            {contactLocationsData.map((loc) => (
              <ContactLocationCard
                key={loc.id}
                title={loc.title}
                addressLine1={loc.addressLine1}
                addressLine2={loc.addressLine2}
                phone={loc.phone}
                email={loc.email}
                mapLink={loc.mapLink}
              />
            ))}
          </div>
        </section>

        <section className="contact-bottom">
          <div className="contact-bottom__main">
            <span className="contact-bottom__badge">
              {contactFormData.badge}
            </span>
            <h2 className="contact-bottom__title">{contactFormData.title}</h2>
            <p className="contact-bottom__note">{contactFormData.note}</p>
            <div className="contact-bottom__form-wrapper">
              <ContactForm buttonText={contactFormData.buttonText} />
            </div>
          </div>

          <div className="contact-bottom__side">
            <img
              src={contactFormData.sideImage}
              alt={contactFormData.sideImageAlt}
              className="contact-bottom__photo"
            />
          </div>
        </section>

        <NewsletterBanner
          title={contactBannerData.title}
          subtitlePrefix={contactBannerData.subtitlePrefix}
          subtitleHighlight={contactBannerData.subtitleHighlight}
          sideImage={contactBannerData.sideImage}
          sideImageAlt={contactBannerData.sideImageAlt}
        />
      </div>
    </div>
  );
};

export default Contact;
