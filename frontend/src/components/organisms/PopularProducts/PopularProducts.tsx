import { useState } from "react";
import ProductCard from "../../molecules/ProductCard";
import { products } from "../../../data/products";
import { useCart } from "../../../context/CartContext";
import "./PopularProducts.css";

const PopularProducts = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { addToCart } = useCart();

  const categories = [
    { label: "All", value: "all" },
    ...Array.from(
      new Map(products.map((product) => [product.category.value, product.category]))
        .values(),
    ),
  ];

  const categoryFiltered =
    activeCategory === "all"
      ? products
      : products.filter(
          (product) => product.category.value === activeCategory,
        );

  const filteredProducts = [...categoryFiltered]
    .sort((a, b) => {
      const popularityA = (a.viewsCount || 0) + (a.salesCount || 0);
      const popularityB = (b.viewsCount || 0) + (b.salesCount || 0);
      return popularityB - popularityA;
    })
    .slice(0, 8);

  return (
    <section className="popular-products">
      <div className="popular-products-header">
        <h2 className="popular-products-title">Popular Products</h2>
        <div className="popular-products-tabs">
          {categories.map((category) => (
            <p
              key={category.value}
              className={`popular-products-tab ${
                activeCategory === category.value
                  ? "popular-products-tab--active"
                  : ""
              }`}
              onClick={() => setActiveCategory(category.value)}
            >
              {category.label}
            </p>
          ))}
        </div>
      </div>

      <div className="popular-products-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
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
    </section>
  );
};

export default PopularProducts;

