import type { Category } from "./types";

export const categoryIcons: Record<string, string> = {
  "dairy-eggs": "/assets/categories/dairyCategory.png",
  clothing: "/assets/categories/clothingCategory.png",
  "pet-foods": "/assets/categories/petfoodCategory.png",
  "baking-material": "/assets/categories/bakingCategory.png",
  "fresh-fruit": "/assets/categories/fruitCategory.png",
  beverages: "/assets/categories/winesAlcohol.png",
  snacks: "/assets/categories/packagedFastFood.png",
  "frozen-foods": "/assets/categories/freshFruit.png",
  bakery: "/assets/categories/bakedCategory.png",
  "meats-seafood": "/assets/categories/freshFruit.png",
};

const categories: Category[] = [
  {
    label: "All Categories",
    value: "all",
    iconSrc: "/assets/categories/fruitCategory.png",
  },
  {
    label: "Fruits & Vegetables",
    value: "fruits-vegetables",
    iconSrc: "/assets/categories/fruitCategory.png",
  },
  {
    label: "Meats & Seafood",
    value: "meats-seafood",
    iconSrc: "/assets/categories/freshFruit.png",
  },
  {
    label: "Dairy & Eggs",
    value: "dairy-eggs",
    iconSrc: "/assets/categories/dairyCategory.png",
  },
  {
    label: "Bakery",
    value: "bakery",
    iconSrc: "/assets/categories/bakedCategory.png",
  },
  {
    label: "Beverages",
    value: "beverages",
    iconSrc: "/assets/categories/winesAlcohol.png",
  },
  {
    label: "Snacks",
    value: "snacks",
    iconSrc: "/assets/categories/packagedFastFood.png",
  },
  {
    label: "Frozen Foods",
    value: "frozen-foods",
    iconSrc: "/assets/categories/freshFruit.png",
  },
  {
    label: "Pet Foods",
    value: "pet-foods",
    iconSrc: "/assets/categories/petfoodCategory.png",
  },
  {
    label: "Baking Material",
    value: "baking-material",
    iconSrc: "/assets/categories/bakingCategory.png",
  },
  {
    label: "Clothing & Beauty",
    value: "clothing",
    iconSrc: "/assets/categories/clothingCategory.png",
  },
];

export default categories;
