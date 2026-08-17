import ProductMiniCard from "../../molecules/ProductMiniCard";
import { products } from "../../../data/products";
import "./ProductListsSection.css";

const ProductListsSection = () => {
  const topSelling = [...products]
    .filter((p) => p.salesCount !== undefined)
    .sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0))
    .slice(0, 3);

  const trending = [...products]
    .filter((p) => p.viewsCount !== undefined)
    .sort((a, b) => (b.viewsCount || 0) - (a.viewsCount || 0))
    .slice(0, 3);

  const recentlyAdded = [...products]
    .filter((p) => p.createdAt !== undefined)
    .sort((a, b) => new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime())
    .slice(0, 3);

  const topRated = [...products]
    .filter((p) => p.rating !== undefined)
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 3);

  return (
    <section className="product-lists-section">
      <div className="product-lists-column">
        <h3 className="product-lists-column-title">Top Selling</h3>
        <div className="product-lists-column-divider" />
        <div className="product-lists-column-items">
          {topSelling.map((product) => (
            <ProductMiniCard
              key={`top-selling-${product.id}`}
              title={product.title}
              imageSrc={product.image}
              price={product.currentPrice}
              oldPrice={product.oldPrice}
              rating={product.rating}
              variant="detailed"
            />
          ))}
        </div>
      </div>

      <div className="product-lists-column">
        <h3 className="product-lists-column-title">Trending Products</h3>
        <div className="product-lists-column-divider" />
        <div className="product-lists-column-items">
          {trending.map((product) => (
            <ProductMiniCard
              key={`trending-${product.id}`}
              title={product.title}
              imageSrc={product.image}
              price={product.currentPrice}
              oldPrice={product.oldPrice}
              rating={product.rating}
              variant="detailed"
            />
          ))}
        </div>
      </div>

      <div className="product-lists-column">
        <h3 className="product-lists-column-title">Recently added</h3>
        <div className="product-lists-column-divider" />
        <div className="product-lists-column-items">
          {recentlyAdded.map((product) => (
            <ProductMiniCard
              key={`recent-${product.id}`}
              title={product.title}
              imageSrc={product.image}
              price={product.currentPrice}
              oldPrice={product.oldPrice}
              rating={product.rating}
              variant="detailed"
            />
          ))}
        </div>
      </div>

      <div className="product-lists-column">
        <h3 className="product-lists-column-title">Top Rated</h3>
        <div className="product-lists-column-divider" />
        <div className="product-lists-column-items">
          {topRated.map((product) => (
            <ProductMiniCard
              key={`rated-${product.id}`}
              title={product.title}
              imageSrc={product.image}
              price={product.currentPrice}
              oldPrice={product.oldPrice}
              rating={product.rating}
              variant="detailed"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListsSection;
