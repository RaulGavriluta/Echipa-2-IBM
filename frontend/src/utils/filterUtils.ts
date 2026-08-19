import type { ActiveFilterItem } from "../components/molecules/ShopHero";

export interface ActiveFiltersParams {
  categoryParam: string;
  categoryLabel: string;
  searchParam: string;
  minPriceParam: string | null;
  maxPriceParam: string | null;
  colorsParam: string;
  conditionsParam: string;
  tagParam: string;
  onUpdateQuery: (updater: (params: URLSearchParams) => void) => void;
}

export const buildActiveFilters = ({
  categoryParam,
  categoryLabel,
  searchParam,
  minPriceParam,
  maxPriceParam,
  colorsParam,
  conditionsParam,
  tagParam,
  onUpdateQuery,
}: ActiveFiltersParams): ActiveFilterItem[] => {
  const list: ActiveFilterItem[] = [];

  if (categoryParam && categoryParam !== "all" && categoryLabel) {
    list.push({
      id: `cat-${categoryParam}`,
      label: categoryLabel,
      onRemove: () => onUpdateQuery((p) => p.delete("category")),
    });
  }

  if (searchParam) {
    list.push({
      id: `search-${searchParam}`,
      label: `"${searchParam}"`,
      onRemove: () => onUpdateQuery((p) => p.delete("search")),
    });
  }

  if (minPriceParam || maxPriceParam) {
    list.push({
      id: "price-range",
      label: `$${minPriceParam || 0} - $${maxPriceParam || 150}`,
      onRemove: () =>
        onUpdateQuery((p) => {
          p.delete("minPrice");
          p.delete("maxPrice");
        }),
    });
  }

  if (colorsParam) {
    colorsParam.split(",").forEach((c) => {
      const trimmed = c.trim();
      if (trimmed) {
        list.push({
          id: `color-${trimmed}`,
          label: trimmed.charAt(0).toUpperCase() + trimmed.slice(1),
          onRemove: () =>
            onUpdateQuery((p) => {
              const remaining = colorsParam
                .split(",")
                .map((item) => item.trim())
                .filter((item) => item !== trimmed);
              if (remaining.length > 0) {
                p.set("colors", remaining.join(","));
              } else {
                p.delete("colors");
              }
            }),
        });
      }
    });
  }

  if (conditionsParam) {
    conditionsParam.split(",").forEach((cond) => {
      const trimmed = cond.trim();
      if (trimmed) {
        list.push({
          id: `cond-${trimmed}`,
          label: trimmed.charAt(0).toUpperCase() + trimmed.slice(1),
          onRemove: () =>
            onUpdateQuery((p) => {
              const remaining = conditionsParam
                .split(",")
                .map((item) => item.trim())
                .filter((item) => item !== trimmed);
              if (remaining.length > 0) {
                p.set("conditions", remaining.join(","));
              } else {
                p.delete("conditions");
              }
            }),
        });
      }
    });
  }

  if (tagParam) {
    list.push({
      id: `tag-${tagParam}`,
      label: tagParam,
      onRemove: () => onUpdateQuery((p) => p.delete("tag")),
    });
  }

  return list;
};
