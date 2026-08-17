import type {
  DealProduct,
  CtaCardData,
  NewProduct,
  ShopCategory,
  NewsletterBanner,
} from "./types";

export const shopCategories: ShopCategory[] = [
  {
    id: "cat-milks",
    label: "Milks and Dairies",
    iconSrc: "/assets/categories/milksDairy.png",
    href: "/shop?category=milks-dairies",
  },
  {
    id: "cat-wines",
    label: "Wines & Alcohol",
    iconSrc: "/assets/categories/winesAlcohol.png",
    href: "/shop?category=wines-alcohol",
  },
  {
    id: "cat-clothing",
    label: "Clothing & Beauty",
    iconSrc: "/assets/categories/clothingCategory.png",
    href: "/shop?category=clothing",
  },
  {
    id: "cat-pet",
    label: "Pet Foods & Toy",
    iconSrc: "/assets/categories/petfoodCategory.png",
    href: "/shop?category=pet-foods",
  },
  {
    id: "cat-packaged",
    label: "Packaged fast food",
    iconSrc: "/assets/categories/packagedFastFood.png",
    href: "/shop?category=packaged",
  },
  {
    id: "cat-baking",
    label: "Baking material",
    iconSrc: "/assets/categories/bakedCategory.png",
    href: "/shop?category=baking",
  },
  {
    id: "cat-vegetables",
    label: "Vegetables & tubers",
    iconSrc: "/assets/categories/vegetablesTubers.png",
    href: "/shop?category=vegetables",
  },
  {
    id: "cat-fruit",
    label: "Fresh Seafood",
    iconSrc: "/assets/categories/freshFruit.png",
    href: "/shop?category=seafood",
  },
];

export const newProducts: NewProduct[] = [
  {
    id: "new-1",
    title: "Chen Cardigan",
    imageSrc: "/assets/products/chen-cardigan.png",
    price: 99.5,
  },
  {
    id: "new-2",
    title: "Chen Sweater",
    imageSrc: "/assets/products/chen-sweater.png",
    price: 89.5,
  },
  {
    id: "new-3",
    title: "Colorful Jacket",
    imageSrc: "/assets/products/colorful-jacket.png",
    price: 25,
  },
];

export const dealsOfTheDay: DealProduct[] = [
  {
    id: "deal-1",
    title: "Seeds of Change Organic Quinoa, Brown",
    image: "/assets/offers/offer1.png",
    currentPrice: 32.85,
    oldPrice: 33.8,
    rating: 4.0,
    seller: "NestFood",
    deadline: "2027-01-15T00:00:00",
  },
  {
    id: "deal-2",
    title: "Perdue Simply Smart Organics Gluten",
    image: "/assets/offers/offer2.png",
    currentPrice: 24.85,
    oldPrice: 26.8,
    rating: 4.0,
    seller: "Old El Paso",
    deadline: "2027-04-20T00:00:00",
  },
  {
    id: "deal-3",
    title: "Signature Wood-Fired Mushroom",
    image: "/assets/offers/offer3.png",
    currentPrice: 12.85,
    oldPrice: 15.8,
    rating: 3.0,
    seller: "Progresso",
    deadline: "2027-10-10T00:00:00",
  },
  {
    id: "deal-4",
    title: "Simply Lemonade with Raspberry Juice",
    image: "/assets/offers/offer4.png",
    currentPrice: 15.85,
    oldPrice: 16.8,
    rating: 3.0,
    seller: "Yoplait",
    deadline: "2027-06-01T00:00:00",
  },
];

export const ctaCards: CtaCardData[] = [
  {
    id: "cta-1",
    title: "Everyday Fresh & Clean with Our Products",
    imageUrl: "/assets/banners/banner_1.png",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: "cta-2",
    title: "Make your Breakfast Healthy and Easy",
    imageUrl: "/assets/banners/banner_2.png",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    id: "cta-3",
    title: "The best Organic Products Online",
    imageUrl: "/assets/banners/banner_3.png",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
];
export const newsletterBanner: NewsletterBanner = {
  title: "Subscribe to our newsletter",
  description: "Get the latest updates on new products and discounts",
  imageUrl: "/assets/banners/banner_image.png",
  sideImage: "/assets/banners/banner_side_image.png",
};
