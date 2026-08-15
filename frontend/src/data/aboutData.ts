import { type AboutHeroData, type FeatureItem } from "./types";

import icon1 from "../assets/about/icon1.png";
import icon2 from "../assets/about/icon2.png";
import icon3 from "../assets/about/icon3.png";
import icon4 from "../assets/about/icon4.png";
import icon5 from "../assets/about/icon5.png";
import icon6 from "../assets/about/icon6.png";

import heroMainImg from "../assets/about/heroMainImg.png";
import about1 from "../assets/about/about1.png";
import about2 from "../assets/about/about2.png";
import about3 from "../assets/about/about3.png";



export const aboutHeroData: AboutHeroData = {
  title: "Welcome to Nest",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.",
    "Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.",
  ],
  mainImage: heroMainImg,
  galleryImages: [about1, about2, about3],
};

export const aboutFeaturesData: FeatureItem[] = [
  {
    id: "best-prices",
    icon: icon1,
    title: "Best Prices & Offers",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    linkText: "Read more",
    linkHref: "#",
  },
  {
    id: "wide-assortment",
    icon: icon2,
    title: "Wide Assortment",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    linkText: "Read more",
    linkHref: "#",
  },
  {
    id: "free-delivery",
    icon: icon3,
    title: "Free Delivery",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    linkText: "Read more",
    linkHref: "#",
  },
  {
    id: "easy-returns",
    icon: icon4,
    title: "Easy Returns",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    linkText: "Read more",
    linkHref: "#",
  },
  {
    id: "satisfaction",
    icon: icon5,
    title: "100% Satisfaction",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    linkText: "Read more",
    linkHref: "#",
  },
  {
    id: "daily-deal",
    icon: icon6,
    title: "Great Daily Deal",
    description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    linkText: "Read more",
    linkHref: "#",
  },
];