import type {
  CtaCardData,
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

export { dealsOfTheDay, deals } from "./deals";
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
