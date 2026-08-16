import { type ContactServiceItem, type ContactLocationItem } from "./types";
import contactPhoto from "../assets/contact/contact-photo.png";
import contactAlt from "../assets/contact/alt.png";

export const contactIntroData = {
  badge: "How can help you ?",
  title: "Let us know how we can help you",
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  ],
};

export const contactServicesData: ContactServiceItem[] = [
  {
    id: "feedback",
    number: "01.",
    title: "Visit Feedback",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: "employer",
    number: "02.",
    title: "Employer Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
  {
    id: "billing",
    number: "03.",
    title: "Billing Inquiries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    highlighted: true,
  },
  {
    id: "general",
    number: "04.",
    title: "General Inquiries",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
  },
];

export const contactLocationsData: ContactLocationItem[] = [
  {
    id: "office",
    title: "Office",
    addressLine1: "205 North Michigan Avenue, Suite 810",
    addressLine2: "Chicago, 60601, USA",
    phone: "(123) 456-7890",
    email: "contact@Evara.com",
    mapLink: "#",
  },
  {
    id: "studio",
    title: "Studio",
    addressLine1: "205 North Michigan Avenue, Suite 810",
    addressLine2: "Chicago, 60601, USA",
    phone: "(123) 456-7890",
    email: "contact@Evara.com",
    mapLink: "#",
  },
  {
    id: "shop",
    title: "Shop",
    addressLine1: "205 North Michigan Avenue, Suite 810",
    addressLine2: "Chicago, 60601, USA",
    phone: "(123) 456-7890",
    email: "contact@Evara.com",
    mapLink: "#",
  },
];

export const contactFormData = {
  badge: "Contact form",
  title: "Drop Us a Line",
  note: "Your email address will not be published. Required fields are marked *",
  buttonText: "Send message",
  sideImage: contactPhoto,
  sideImageAlt: "Contact support representative",
};

export const contactBannerData = {
  title: "Stay home & get your daily needs from our shop",
  subtitlePrefix: "Start Your Daily Shopping with",
  subtitleHighlight: "Nest Mart",
  sideImage: contactAlt,
  sideImageAlt: "Fresh green cabbage and vegetables",
};
