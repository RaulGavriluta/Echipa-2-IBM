export interface Category {
  label: string;
  value: string;
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
