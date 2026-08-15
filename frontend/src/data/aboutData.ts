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

import partner from "../assets/about/partner.png";

import team1 from "../assets/about/team1.png";
import team2 from "../assets/about/team2.png";

import alt from "../assets/about/alt.png";

export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

export interface AboutHeroData {
  title: string;
  paragraphs: string[];
  mainImage: string;
  galleryImages: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TeamMember {
  id: string;
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
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    linkText: "Read more",
    linkHref: "#",
  },
  {
    id: "wide-assortment",
    icon: icon2,
    title: "Wide Assortment",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    linkText: "Read more",
    linkHref: "#",
  },
  {
    id: "free-delivery",
    icon: icon3,
    title: "Free Delivery",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    linkText: "Read more",
    linkHref: "#",
  },
  {
    id: "easy-returns",
    icon: icon4,
    title: "Easy Returns",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    linkText: "Read more",
    linkHref: "#",
  },
  {
    id: "satisfaction",
    icon: icon5,
    title: "100% Satisfaction",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    linkText: "Read more",
    linkHref: "#",
  },
  {
    id: "daily-deal",
    icon: icon6,
    title: "Great Daily Deal",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    linkText: "Read more",
    linkHref: "#",
  },
];

export const aboutPartnerData = {
  subtitle: "Our performance",
  title: "Your Partner for e-commerce grocery solution",
  paragraphs: [
    "Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
    "Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
  ],
  pillars: [
    {
      title: "Who we are",
      description:
        "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in.",
    },
    {
      title: "Our history",
      description:
        "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in.",
    },
    {
      title: "Our mission",
      description:
        "Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in.",
    },
  ],
  image: partner,
};

export const aboutStatsData: StatItem[] = [
  { value: "0+", label: "Glorious years" },
  { value: "0+", label: "Happy clients" },
  { value: "0+", label: "Projects complete" },
  { value: "0+", label: "Team advisor" },
  { value: "0+", label: "Products Sale" },
];

export const aboutTeamSectionData = {
  sectionTitle: "Our Team",
  badgeText: "Our Team",
  title: "Meet Our Expert Team",
  descriptions: [
    "Proin ullamcorper pretium orci. Donec necscole risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.",
    "Proin ullamcorper pretium orci. Donec necscole risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.",
  ],
  buttonText: "View All Members",
  members: [
    {
      id: "1",
      name: "H. Merinda",
      role: "CEO & Co-Founder",
      image: team1,
      socials: { facebook: "#", twitter: "#", instagram: "#", youtube: "#" },
    },
    {
      id: "2",
      name: "Dilan Specter",
      role: "Head Engineer",
      image: team2,
      socials: { facebook: "#", twitter: "#", instagram: "#", youtube: "#" },
    },
  ] as TeamMember[],
};

export const aboutBannerData = {
  title: "Stay home & get your daily needs from our shop",
  subtitlePrefix: "Start Your Daily Shopping with",
  subtitleHighlight: "Nest Mart",
  sideImage: alt,
  sideImageAlt: "Delivery representative with fresh groceries",
};
