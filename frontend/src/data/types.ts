export interface Category {
  label: string;
  value: string;
}

export interface ProductCategory {
  label: string;
  value: string;
}

export type BadgeVariant = "hot" | "sale" | "new" | "discount";

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  image: string;
  currentPrice: number;
  oldPrice?: number;
  rating?: number;
  seller?: string;
  badgeText?: string;
  badgeVariant?: BadgeVariant;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface PhoneNumber {
  number: string;
  description: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface FooterData {
  brand: {
    name: string;
    subtitle: string;
    description: string;
    logo: string;
  };
  contact: ContactInfo;
  columns: FooterColumn[];
  installApp: {
    appStoreUrl: string;
    googlePlayUrl: string;
  };
  bottomBar: {
    copyright: string;
    phones: PhoneNumber[];
    socialLinks: SocialLink[];
    promoText: string;
  };
}
export interface Newsletter {
  placeholder: string;
  buttonText: string;
  errors: {
    empty: string
    invalid: string
  }
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  backgroundImage?: string;
}
export interface CategoryFilterItem {
  id: string;
  label: string;
  count: number;
  iconSrc: string;
}
