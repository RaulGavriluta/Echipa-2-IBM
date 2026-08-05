import footerData from "../../../data/footer";
import "./Footer.css";
import Icon from "../../atoms/Icon";
import type { IconType } from "react-icons";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiPhoneCall,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const socialIconMap: Record<string, IconType> = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
  pinterest: FaPinterestP,
  youtube: FaYoutube,
};

export default function Footer() {
  const { brand, contact, columns, installApp, bottomBar } = footerData;

  const contactList = [
    { icon: FiMapPin, text: contact.address },
    { icon: FiPhone, text: contact.phone },
    { icon: FiMail, text: contact.email },
    { icon: FiClock, text: contact.hours },
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img
            className="footer-brand-logo"
            src={brand.logo}
            alt={brand.name}
          />
          <p className="footer-brand-description">{brand.description}</p>
          <ul className="footer-brand-contact">
            {contactList.map((item, i) => (
              <li key={i} className="footer-brand-contact-item">
                <Icon
                  icon={item.icon}
                  size="var(--font-size-sm)"
                  color="var(--color-green)"
                />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {columns.map((col) => (
          <div className="footer-column" key={col.title}>
            <h4 className="footer-column-title">{col.title}</h4>
            <ul className="footer-column-list">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-column-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-install">
          <h4 className="footer-column-title">Install App</h4>
          <div className="footer-install-badges">
            <a href={installApp.appStoreUrl} className="footer-install-badge">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
              />
            </a>
            <a href={installApp.googlePlayUrl} className="footer-install-badge">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
              />
            </a>
          </div>
          <p className="footer-install-secured">Secured Payment Gateways</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-bottom-copyright">{bottomBar.copyright}</p>

        <div className="footer-bottom-phones">
          {bottomBar.phones.map((phone) => (
            <div className="footer-bottom-phone" key={phone.number}>
              <Icon
                icon={FiPhoneCall}
                size="1.6rem"
                color="var(--color-green)"
              />
              <div className="footer-bottom-phone-text">
                <strong>{phone.number}</strong>
                <span>{phone.description}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-bottom-social-wrapper">
          <div className="footer-bottom-social">
            <span className="footer-bottom-follow-label">Follow Us</span>
            <div className="footer-bottom-social-icons">
              {bottomBar.socialLinks.map((s) => {
                const SocialIcon =
                  socialIconMap[s.icon] || socialIconMap[s.name.toLowerCase()];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    className="footer-bottom-social-link"
                    aria-label={s.name}
                  >
                    {SocialIcon && (
                      <Icon
                        icon={SocialIcon}
                        size="var(--font-size-sm)"
                        color="var(--color-white)"
                      />
                    )}
                  </a>
                );
              })}
            </div>
          </div>
          <span className="footer-bottom-promo">{bottomBar.promoText}</span>
        </div>
      </div>
    </footer>
  );
}
