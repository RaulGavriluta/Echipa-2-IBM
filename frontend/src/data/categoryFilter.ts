import dairyIcon from "/assets/categories/dairyCategory.png";
import clothingIcon from "/assets/categories/clothingCategory.png";
import petfoodIcon from "/assets/categories/petfoodCategory.png";
import bakingIcon from "/assets/categories/bakingCategory.png";
import fruitIcon from "/assets/categories/fruitCategory.png";
import type { CategoryFilterItem } from "./types";

export const categoryFilterData: CategoryFilterItem[] = [
  {
    id: "milks-dairies",
    label: "Milks & Dairies",
    count: 3,
    iconSrc: dairyIcon,
  },
  {
    id: "clothing",
    label: "Clothing",
    count: 4,
    iconSrc: clothingIcon,
  },
  {
    id: "pet-foods",
    label: "Pet Foods",
    count: 5,
    iconSrc: petfoodIcon,
  },
  {
    id: "baking-material",
    label: "Baking material",
    count: 8,
    iconSrc: bakingIcon,
  },
  {
    id: "fresh-fruit",
    label: "Fresh Fruit",
    count: 10,
    iconSrc: fruitIcon,
  },
];

export default categoryFilterData;
