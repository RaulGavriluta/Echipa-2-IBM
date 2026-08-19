import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
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
import CartHoverCard from "../../molecules/CartHoverCard/CartHoverCard";
import Icon from "../../atoms/Icon";
import Badge from "../../atoms/Badge";
import navbarData from "../../../data/navbar";
import categories from "../../../data/categories";
import { useCart } from "../../../context/CartContext";
import "./Navbar.css";

const iconMap: Record<string, IconType> = {
  FiRepeat,
  FiHeart,
  FiShoppingCart,
  FiUser,
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const browseRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { header, mainNav, bottomNav } = navbarData;
  const { totalItems } = useCart();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (browseRef.current && !browseRef.current.contains(e.target as Node)) {
        setIsBrowseOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCategoryClick = (categoryValue: string) => {
    setIsBrowseOpen(false);
    if (categoryValue === "all") {
      navigate("/shop");
    } else {
      navigate(`/shop?category=${categoryValue}`);
    }
  };

  const renderAction = (
    action: (typeof mainNav.actions)[number],
    opts?: { hideLabel?: boolean; size?: string },
  ) => {
    const isCart = action.icon === "FiShoppingCart";
    const count = isCart ? totalItems : action.count;

    if (isCart && !opts?.hideLabel) {
      return (
        <div key={action.label} className="cart-hover-wrapper">
          <HeaderAction
            icon={iconMap[action.icon]}
            label={opts?.hideLabel ? "" : action.label}
            count={count}
            to={action.href}
            size={opts?.size}
          />
          <CartHoverCard />
        </div>
      );
    }

    return (
      <HeaderAction
        key={action.label}
        icon={iconMap[action.icon]}
        label={opts?.hideLabel ? "" : action.label}
        count={count}
        href={isCart ? undefined : action.href}
        to={isCart ? action.href : undefined}
        size={opts?.size}
      />
    );
  };

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
              {header.phone.description} <strong>{header.phone.number}</strong>
            </span>
            <select
              className="navbar-top__select"
              defaultValue={header.languages[0]}
            >
              {header.languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <select
              className="navbar-top__select"
              defaultValue={header.currencies[0]}
            >
              {header.currencies.map((curr) => (
                <option key={curr} value={curr}>
                  {curr}
                </option>
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
            {mainNav.actions.map((action) => renderAction(action))}
          </div>

          <div className="navbar-main__actions-mobile">
            {mainNav.actions
              .filter(
                (a) => a.icon === "FiHeart" || a.icon === "FiShoppingCart",
              )
              .map((action) => {
                const isCart = action.icon === "FiShoppingCart";
                const count = isCart ? totalItems : action.count;
                return (
                  <Link
                    key={action.label}
                    to={isCart ? "/cart" : action.href}
                    className="header-action"
                  >
                    <div className="header-action__icon-wrapper">
                      <Icon icon={iconMap[action.icon]} size="1.4rem" />
                      {count !== undefined && count > 0 && (
                        <Badge variant="notification">{count}</Badge>
                      )}
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>

      <div className="navbar-bottom">
        <div className="navbar-bottom__inner">
          <div className="navbar-bottom__browse-container" ref={browseRef}>
            <Button
              variant="primary"
              size="sm"
              className="navbar-bottom__browse"
              onClick={() => setIsBrowseOpen((prev) => !prev)}
              type="button"
              aria-expanded={isBrowseOpen}
            >
              <Icon icon={FiMenu} size="1rem" color="var(--color-white)" />
              {bottomNav.browseLabel}
              <Icon
                icon={FiChevronDown}
                size="0.6rem"
                color="var(--color-white)"
                className={clsx(
                  "navbar-bottom__browse-arrow",
                  isBrowseOpen && "navbar-bottom__browse-arrow--open",
                )}
              />
            </Button>

            {isBrowseOpen && (
              <div className="navbar-browse__dropdown">
                <div className="navbar-browse__grid">
                  {categories.map((cat) => (
                    <button
                      key={`navbar-browse-cat-${cat.value}`}
                      type="button"
                      className="navbar-browse__item"
                      onClick={() => handleCategoryClick(cat.value)}
                    >
                      {cat.iconSrc && (
                        <img
                          src={cat.iconSrc}
                          alt={cat.label}
                          className="navbar-browse__item-icon"
                        />
                      )}
                      <span className="navbar-browse__item-label">
                        {cat.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

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
            <Icon
              icon={FiHeadphones}
              size="1.5rem"
              color="var(--color-green)"
            />
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

      <div
        className={`navbar-mobile-drawer ${isMobileMenuOpen ? "navbar-mobile-drawer--open" : ""}`}
      >
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
          {mainNav.actions.map((action) => {
            const isCart = action.icon === "FiShoppingCart";
            const count = isCart ? totalItems : action.count;
            return (
              <HeaderAction
                key={action.label}
                icon={iconMap[action.icon]}
                label={action.label}
                count={count}
                to={isCart ? "/cart" : undefined}
                href={isCart ? undefined : action.href}
                onClick={closeMobileMenu}
              />
            );
          })}
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
