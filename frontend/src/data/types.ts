import NewsletterBanner from "../components/organisms/NewsletterBanner";

export interface Category {
  label: string;
  value: string;
  iconSrc?: string;
}

export interface ProductCategory {
  label: string;
  value: string;
}

export type BadgeVariant = "hot" | "sale" | "new" | "discount";

export interface SizeVariant {
  label: string;
  value: string;
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  date: string;
  text: string;
}

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
  salesCount?: number;
  viewsCount?: number;
  createdAt?: string;
  description?: string;
  shortDescription?: string;
  sku?: string;
  sizeVariants?: SizeVariant[];
  tags?: string[];
  stock?: number;
  additionalInfo?: Record<string, string>;
  reviews?: Review[];
  galleryImages?: string[];
  productType?: string;
  mfgDate?: string;
  lifespan?: string;
  color?: string;
  condition?: string;
  isOffer?: boolean;
  offerLimit?: number;
  dealId?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
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
    empty: string;
    invalid: string;
  };
}

export interface FilterOption {
  id: string;
  label: string;
  count?: number;
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

export interface ContactServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface ContactLocationItem {
  id: string;
  title: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  email: string;
  mapLink: string;
}

export interface DealProduct {
  id: string;
  product: Product;
  discountPrice: number;
  deadline: string;
  limit: number;
}

export interface CtaCardData {
  id: string;
  title: string;
  imageUrl: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface NewProduct {
  id: string;
  title: string;
  imageSrc: string;
  price: number;
}

export interface ShopCategory {
  id: string;
  label: string;
  iconSrc: string;
  href?: string;
}
export interface NewsletterBanner {
  title: string;
  description: string;
  imageUrl: string;
  sideImage: string;
}
