import type { Product, Category } from "../data/types";

export interface ProductFilters {
  category?: string;
  search?: string;
  minPrice?: string | null;
  maxPrice?: string | null;
  colors?: string;
  conditions?: string;
  tag?: string;
}

export const filterProducts = (
  products: Product[],
  filters: ProductFilters
): Product[] => {
  const {
    category = "",
    search = "",
    minPrice: minPriceParam,
    maxPrice: maxPriceParam,
    colors = "",
    conditions = "",
    tag = "",
  } = filters;

  const categoryParam = category.toLowerCase().trim();
  const searchParam = search.toLowerCase().trim();
  const selectedColors = colors
    ? colors.split(",").map((c) => c.trim().toLowerCase())
    : [];
  const selectedConditions = conditions
    ? conditions.split(",").map((c) => c.trim().toLowerCase())
    : [];
  const minPrice = minPriceParam ? parseFloat(minPriceParam) : 0;
  const maxPrice = maxPriceParam ? parseFloat(maxPriceParam) : Infinity;

  return products.filter((product) => {
    if (categoryParam && categoryParam !== "all") {
      const catVal = product.category.value.toLowerCase();
      const catLabel = product.category.label.toLowerCase();
      const matchesCat =
        catVal === categoryParam ||
        catLabel === categoryParam ||
        catVal.includes(categoryParam) ||
        categoryParam.includes(catVal) ||
        (categoryParam === "fruits-vegetables" &&
          (catVal.includes("fruit") || catVal.includes("vegetable"))) ||
        (categoryParam === "dairy-eggs" &&
          (catVal.includes("dairy") || catVal.includes("milk"))) ||
        (categoryParam === "bakery" &&
          (catVal.includes("bak") || catVal.includes("baking")));
      if (!matchesCat) return false;
    }

    if (searchParam) {
      const inTitle = product.title.toLowerCase().includes(searchParam);
      const inDesc = product.description?.toLowerCase().includes(searchParam);
      const inShortDesc = product.shortDescription
        ?.toLowerCase()
        .includes(searchParam);
      const inCat = product.category.label.toLowerCase().includes(searchParam);
      const inSeller = product.seller?.toLowerCase().includes(searchParam);
      const inTags = product.tags?.some((t) =>
        t.toLowerCase().includes(searchParam)
      );

      if (!inTitle && !inDesc && !inShortDesc && !inCat && !inSeller && !inTags) {
        return false;
      }
    }

    if (product.currentPrice < minPrice || product.currentPrice > maxPrice) {
      return false;
    }

    if (selectedColors.length > 0) {
      if (
        !product.color ||
        !selectedColors.includes(product.color.toLowerCase())
      ) {
        return false;
      }
    }

    if (selectedConditions.length > 0) {
      if (
        !product.condition ||
        !selectedConditions.includes(product.condition.toLowerCase())
      ) {
        return false;
      }
    }

    if (tag) {
      const tagQuery = tag.toLowerCase().trim();
      const inTags = product.tags?.some((t) =>
        t.toLowerCase().includes(tagQuery)
      );
      const inTitle = product.title.toLowerCase().includes(tagQuery);
      if (!inTags && !inTitle) return false;
    }

    return true;
  });
};

export const sortProducts = (
  products: Product[],
  sortBy: string = "featured"
): Product[] => {
  const list = [...products];
  switch (sortBy) {
    case "price-low":
      return list.sort((a, b) => a.currentPrice - b.currentPrice);
    case "price-high":
      return list.sort((a, b) => b.currentPrice - a.currentPrice);
    case "rating":
      return list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case "newest":
      return list.sort(
        (a, b) =>
          new Date(b.createdAt || 0).getTime() -
          new Date(a.createdAt || 0).getTime()
      );
    case "featured":
    default:
      return list.sort((a, b) => {
        const popA = (a.salesCount || 0) + (a.viewsCount || 0);
        const popB = (b.salesCount || 0) + (b.viewsCount || 0);
        return popB - popA;
      });
  }
};

export const paginateProducts = (
  products: Product[],
  currentPage: number,
  itemsPerPage: number
): Product[] => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return products.slice(startIndex, startIndex + itemsPerPage);
};

export const calculateDiscountPercent = (
  currentPrice: number,
  oldPrice?: number
): number | null => {
  if (oldPrice && oldPrice > currentPrice) {
    return Math.round(((oldPrice - currentPrice) / oldPrice) * 100);
  }
  return null;
};

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

export const getCategoryLabel = (
  categoryParam: string,
  categoriesList: Category[]
): string => {
  if (!categoryParam || categoryParam === "all") return "";

  const matched = categoriesList.find(
    (c) =>
      c.value.toLowerCase() === categoryParam.toLowerCase() ||
      c.label.toLowerCase() === categoryParam.toLowerCase()
  );

  if (matched && matched.value !== "all") {
    return matched.label;
  }

  return categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
};

export const getHeroTitle = (
  categoryLabel: string,
  searchParam: string
): string => {
  if (searchParam && categoryLabel) return `${categoryLabel} (${searchParam})`;
  if (searchParam) return `Search: "${searchParam}"`;
  if (categoryLabel) return categoryLabel;
  return "Shop";
};
