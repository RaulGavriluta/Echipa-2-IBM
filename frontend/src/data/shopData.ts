export interface SortOption {
  value: string;
  label: string;
}

export const SHOW_OPTIONS: number[] = [10, 20, 30, 50];

export const DEFAULT_ITEMS_PER_PAGE = 10;

export const DEFAULT_SORT_BY = "featured";

export const SORT_OPTIONS: SortOption[] = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Avg. Rating" },
  { value: "newest", label: "Release Date" },
];

export const SHOP_TEXTS = {
  pageTitle: "Shop",
  breadcrumbRoot: "Shop",
  itemsFoundPrefix: "We found",
  itemsFoundSuffix: "items for you!",
  showLabel: "Show:",
  sortByLabel: "Sort by:",
  emptyTitle: "No products found",
  emptyDescription:
    "Try adjusting your filters or search keywords to find what you're looking for.",
};
