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
export interface Newsletter {
  placeholder: string
  buttonText: string
  errors: {
    empty: string
    invalid: string
  }
}

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface HeaderActionItem {
  label: string;
  href: string;
  icon: string;
  count?: number;
}

export interface NavbarData {
  header: {
    links: FooterLink[];
    promoText: string;
    phone: PhoneNumber;
    languages: string[];
    currencies: string[];
  };
  mainNav: {
    logo: string;
    searchPlaceholder: string;
    locationLabel: string;
    actions: HeaderActionItem[];
  };
  bottomNav: {
    browseLabel: string;
    links: NavLink[];
    phone: PhoneNumber;
  };
}