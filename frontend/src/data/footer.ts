import type { FooterData } from "./types";

export const footerData: FooterData = {
  brand: {
    name: "Nest",
    subtitle: "MART & GROCERY",
    description: "Awesome grocery store",
    logo: "/assets/logo.png",
  },
  contact: {
    address:
      "Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United States",
    phone: "Call Us: (+91) - 540-025-124553",
    email: "Email: sale@Nest.com",
    hours: "Hours: 10:00 - 18:00, Mon - Sat",
  },
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Delivery Information", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Contact Us", href: "/contact" },
        { label: "Support Center", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Account",
      links: [
        { label: "Sign In", href: "#" },
        { label: "View Cart", href: "/cart" },
        { label: "My Wishlist", href: "#" },
        { label: "Track My Order", href: "#" },
        { label: "Help Ticket", href: "#" },
        { label: "Shipping Details", href: "#" },
        { label: "Compare products", href: "#" },
      ],
    },
    {
      title: "Corporate",
      links: [
        { label: "Become a Vendor", href: "#" },
        { label: "Affiliate Program", href: "#" },
        { label: "Farm Business", href: "#" },
        { label: "Farm Careers", href: "#" },
        { label: "Our Suppliers", href: "#" },
        { label: "Accessibility", href: "#" },
        { label: "Promotions", href: "/deals" },
      ],
    },
    {
      title: "Popular",
      links: [
        { label: "Milk & Flavoured Milk", href: "#" },
        { label: "Butter and Margarine", href: "#" },
        { label: "Eggs Substitutes", href: "#" },
        { label: "Marmalades", href: "#" },
        { label: "Sour Cream and Dips", href: "#" },
        { label: "Tea & Kombucha", href: "#" },
        { label: "Cheese", href: "#" },
      ],
    },
  ],
  installApp: {
    appStoreUrl: "#",
    googlePlayUrl: "#",
  },
  bottomBar: {
    copyright: "© 2022, Nest - HTML Ecommerce Template. All rights reserved",
    phones: [
      { number: "1900 - 6666", description: "Working 8:00 - 22:00" },
      { number: "1900 - 8888", description: "24/7 Support Center" },
    ],
    socialLinks: [
      { name: "Facebook", href: "#", icon: "facebook" },
      { name: "Twitter", href: "#", icon: "twitter" },
      { name: "Instagram", href: "#", icon: "instagram" },
      { name: "Pinterest", href: "#", icon: "pinterest" },
      { name: "YouTube", href: "#", icon: "youtube" },
    ],
    promoText: "Up to 15% discount on your first subscribe",
  },
};
export default footerData;
