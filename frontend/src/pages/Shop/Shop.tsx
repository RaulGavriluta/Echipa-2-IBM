import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../../data/products";
import categories from "../../data/categories";
import { dealsOfTheDay, getDealProduct } from "../../data/deals";
import OfferCard from "../../components/molecules/OfferCard/OfferCard";
import {
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_SORT_BY,
  SHOP_TEXTS,
} from "../../data/shopData";
import {
  filterProducts,
  sortProducts,
  paginateProducts,
  getCategoryLabel,
  getHeroTitle,
} from "../../utils/productUtils";
import { buildActiveFilters } from "../../utils/filterUtils";
import { useCart } from "../../context/CartContext";
import ProductCard from "../../components/molecules/ProductCard";
import ShopHero from "../../components/molecules/ShopHero";
import ShopToolbar from "../../components/molecules/ShopToolbar";
import Pagination from "../../components/molecules/Pagination";
import type { BreadcrumbItem } from "../../components/molecules/Breadcrumb";
import "./Shop.css";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const categoryParam = searchParams.get("category")?.toLowerCase() || "";
  const searchParam = searchParams.get("search")?.toLowerCase() || "";
  const minPriceParam = searchParams.get("minPrice");
  const maxPriceParam = searchParams.get("maxPrice");
  const colorsParam = searchParams.get("colors")?.toLowerCase() || "";
  const conditionsParam = searchParams.get("conditions")?.toLowerCase() || "";
  const tagParam = searchParams.get("tag")?.toLowerCase() || "";

  const [sortBy, setSortBy] = useState<string>(DEFAULT_SORT_BY);
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    DEFAULT_ITEMS_PER_PAGE,
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categoryLabel = useMemo(
    () => getCategoryLabel(categoryParam, categories),
    [categoryParam],
  );

  const heroTitle = useMemo(
    () => getHeroTitle(categoryLabel, searchParam),
    [categoryLabel, searchParam],
  );

  const breadcrumbItems: BreadcrumbItem[] = useMemo(() => {
    const items: BreadcrumbItem[] = [
      { label: SHOP_TEXTS.breadcrumbRoot, href: "/shop" },
    ];
    if (heroTitle && heroTitle !== SHOP_TEXTS.breadcrumbRoot) {
      items.push({ label: heroTitle });
    }
    return items;
  }, [heroTitle]);

  const updateQuery = (updater: (params: URLSearchParams) => void) => {
    const newParams = new URLSearchParams(searchParams);
    updater(newParams);
    setSearchParams(newParams);
    setCurrentPage(1);
  };

  const activeFilters = useMemo(
    () =>
      buildActiveFilters({
        categoryParam,
        categoryLabel,
        searchParam,
        minPriceParam,
        maxPriceParam,
        colorsParam,
        conditionsParam,
        tagParam,
        onUpdateQuery: updateQuery,
      }),
    [
      categoryParam,
      categoryLabel,
      searchParam,
      minPriceParam,
      maxPriceParam,
      colorsParam,
      conditionsParam,
      tagParam,
      searchParams,
    ],
  );

  const filteredProducts = useMemo(
    () =>
      filterProducts(products, {
        category: categoryParam,
        search: searchParam,
        minPrice: minPriceParam,
        maxPrice: maxPriceParam,
        colors: colorsParam,
        conditions: conditionsParam,
        tag: tagParam,
      }),
    [
      categoryParam,
      searchParam,
      minPriceParam,
      maxPriceParam,
      colorsParam,
      conditionsParam,
      tagParam,
    ],
  );

  const sortedProducts = useMemo(
    () => sortProducts(filteredProducts, sortBy),
    [filteredProducts, sortBy],
  );

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage) || 1;
  const paginatedProducts = useMemo(
    () => paginateProducts(sortedProducts, currentPage, itemsPerPage),
    [sortedProducts, currentPage, itemsPerPage],
  );

  return (
    <div className="shop-page">
      <div className="shop-page__container">
        <ShopHero
          title={heroTitle}
          breadcrumbItems={breadcrumbItems}
          activeFilters={activeFilters}
        />

        <ShopToolbar
          totalItems={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(count) => {
            setItemsPerPage(count);
            setCurrentPage(1);
          }}
          sortBy={sortBy}
          onSortByChange={(sort) => {
            setSortBy(sort);
            setCurrentPage(1);
          }}
        />

        {paginatedProducts.length > 0 ? (
          <div className="shop-grid">
            {paginatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                title={product.title}
                category={product.category.label}
                currentPrice={product.currentPrice}
                oldPrice={product.oldPrice}
                rating={product.rating}
                seller={product.seller}
                badgeText={product.badgeText}
                badgeVariant={product.badgeVariant}
                onAdd={() => addToCart(product)}
              />
            ))}
          </div>
        ) : (
          <div className="shop-empty">
            <h3 className="shop-empty__title">{SHOP_TEXTS.emptyTitle}</h3>
            <p className="shop-empty__desc">{SHOP_TEXTS.emptyDescription}</p>
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
        <div className="shop-deals">
          <div className="shop-deals-header">
            <h2 className="shop-deals-title">Deals Of The Day</h2>
            <a href="#" className="shop-deals-link">
              All Deals &rsaquo;
            </a>
          </div>
          <div className="home-deals-grid">
            {dealsOfTheDay.map((deal) => {
              const dealProduct = getDealProduct(deal);
              return (
                <OfferCard
                  key={deal.id}
                  image={dealProduct.image}
                  title={dealProduct.title}
                  currentPrice={dealProduct.currentPrice}
                  oldPrice={dealProduct.oldPrice}
                  rating={dealProduct.rating}
                  seller={dealProduct.seller ?? ""}
                  deadline={new Date(deal.deadline)}
                  onAdd={() => addToCart(dealProduct)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
