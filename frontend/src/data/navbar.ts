import type { NavbarData } from "./types";

const navbarData: NavbarData = {
  header: {
    links: [
      { label: "About Us", href: "#" },
      { label: "My Account", href: "#" },
      { label: "Wishlist", href: "#" },
      { label: "Order Tracking", href: "#" },
    ],
    promoText: "100% Secure delivery without contacting the courier",
    phone: {
      number: "1800 900",
      description: "Need help? Call Us:",
    },
    languages: ["English", "Română", "Français"],
    currencies: ["USD", "EUR", "RON"],
  },
  mainNav: {
    logo: "/assets/logo.png",
    searchPlaceholder: "Search for items...",
    locationLabel: "Your Location",
    actions: [
      { label: "Compare", href: "#", icon: "FiRepeat" },
      { label: "Wishlist", href: "#", icon: "FiHeart", count: 4 },
      { label: "Cart", href: "#", icon: "FiShoppingCart", count: 2 },
      { label: "Account", href: "#", icon: "FiUser" },
    ],
  },
  bottomNav: {
    browseLabel: "Browse All Categories",
    links: [
      { label: "Deals", href: "#" },
      { label: "Home", href: "/", hasDropdown: true },
      { label: "About", href: "#" },
      { label: "Shop", href: "#", hasDropdown: true },
      { label: "Vendors", href: "#", hasDropdown: true },
      { label: "Mega menu", href: "#", hasDropdown: true },
      { label: "Blog", href: "#", hasDropdown: true },
      { label: "Pages", href: "#", hasDropdown: true },
      { label: "Contact", href: "#" },
    ],
    phone: {
      number: "1900 - 888",
      description: "24/7 Support Center",
    },
  },
};

export default navbarData;
