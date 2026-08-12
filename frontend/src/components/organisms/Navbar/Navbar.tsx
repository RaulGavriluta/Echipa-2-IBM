import { useState } from "react";
import {
  FiRepeat,
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiMapPin,
  FiMenu,
  FiX,
  FiChevronDown,
  FiHeadphones,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import Logo from "../../atoms/Logo";
import SearchBar from "../../atoms/SearchBar";
import Button from "../../atoms/Button";
import HeaderAction from "../../molecules/HeaderAction/HeaderAction";
import Icon from "../../atoms/Icon";
import navbarData from "../../../data/navbar";
import "./Navbar.css";

const iconMap: Record<string, IconType> = {
  FiRepeat,
  FiHeart,
  FiShoppingCart,
  FiUser,
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { header, mainNav, bottomNav } = navbarData;

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="navbar-top__inner">
          <ul className="navbar-top__links">
            {header.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="navbar-top__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <span className="navbar-top__promo">{header.promoText}</span>

          <div className="navbar-top__right">
            <span className="navbar-top__phone">
              {header.phone.description}{" "}
              <strong>{header.phone.number}</strong>
            </span>
            <select className="navbar-top__select" defaultValue={header.languages[0]}>
              {header.languages.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
            <select className="navbar-top__select" defaultValue={header.currencies[0]}>
              {header.currencies.map((cur) => (
                <option key={cur} value={cur}>{cur}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

  
      <div className="navbar-main">
        <div className="navbar-main__inner">
          <button
            className="navbar-hamburger"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            type="button"
          >
            <Icon icon={isMobileMenuOpen ? FiX : FiMenu} size="1.5rem" />
          </button>

          <Logo src={mainNav.logo} />

          <div className="navbar-main__search">
            <SearchBar placeholder={mainNav.searchPlaceholder} />
          </div>

          <Button variant="outline" size="sm" className="navbar-main__location">
            <Icon icon={FiMapPin} size="1rem" color="var(--color-green)" />
            {mainNav.locationLabel}
            <Icon icon={FiChevronDown} size="0.6rem" />
          </Button>

          <div className="navbar-main__actions">
            {mainNav.actions.map((action) => (
              <HeaderAction
                key={action.label}
                icon={iconMap[action.icon]}
                label={action.label}
                count={action.count}
                href={action.href}
              />
            ))}
          </div>

       
          <div className="navbar-main__actions-mobile">
            {mainNav.actions
              .filter((a) => a.icon === "FiHeart" || a.icon === "FiShoppingCart")
              .map((action) => (
                <HeaderAction
                  key={action.label}
                  icon={iconMap[action.icon]}
                  count={action.count}
                  label=""
                  href={action.href}
                  size="1.4rem"
                />
              ))}
          </div>
        </div>
      </div>


      <div className="navbar-bottom">
        <div className="navbar-bottom__inner">
          <Button variant="primary" size="sm" className="navbar-bottom__browse">
            <Icon icon={FiMenu} size="1rem" color="var(--color-white)" />
            {bottomNav.browseLabel}
            <Icon icon={FiChevronDown} size="0.6rem" color="var(--color-white)" />
          </Button>

          <ul className="navbar-bottom__links">
            {bottomNav.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="navbar-bottom__link">
                  {link.label}
                  {link.hasDropdown && (
                    <Icon icon={FiChevronDown} size="0.6rem" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-bottom__phone">
            <Icon icon={FiHeadphones} size="1.5rem" color="var(--color-green)" />
            <div className="navbar-bottom__phone-text">
              <strong>{bottomNav.phone.number}</strong>
              <span>{bottomNav.phone.description}</span>
            </div>
          </div>
        </div>
      </div>


      {isMobileMenuOpen && (
        <div className="navbar-mobile-overlay" onClick={closeMobileMenu} />
      )}

      <div className={`navbar-mobile-drawer ${isMobileMenuOpen ? "navbar-mobile-drawer--open" : ""}`}>
        <div className="navbar-mobile-drawer__header">
          <Logo size="sm" />
          <button
            className="navbar-mobile-drawer__close"
            onClick={closeMobileMenu}
            aria-label="Close menu"
            type="button"
          >
            <Icon icon={FiX} size="1.25rem" />
          </button>
        </div>

        <div className="navbar-mobile-drawer__search">
          <SearchBar placeholder={mainNav.searchPlaceholder} />
        </div>

        <ul className="navbar-mobile-drawer__links">
          {bottomNav.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar-mobile-drawer__link"
                onClick={closeMobileMenu}
              >
                {link.label}
                {link.hasDropdown && (
                  <Icon icon={FiChevronDown} size="0.6rem" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-mobile-drawer__actions">
          {mainNav.actions.map((action) => (
            <HeaderAction
              key={action.label}
              icon={iconMap[action.icon]}
              label={action.label}
              count={action.count}
              href={action.href}
            />
          ))}
        </div>

        <div className="navbar-mobile-drawer__footer">
          <ul className="navbar-mobile-drawer__top-links">
            {header.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={closeMobileMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
