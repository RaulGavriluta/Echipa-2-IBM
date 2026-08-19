import ProductMiniCard from "../ProductMiniCard";
import "./NewProducts.css";

export interface NewProductsProps {
  title?: string;
  products?: any[];
  className?: string;
}

const NewProducts = ({
  title = "New products",
  products,
  className = "",
}: NewProductsProps) => {
  return (
    <div className={`new-products ${className}`.trim()}>
      <div className="new-products-header">
        <h3 className="new-products-title">{title}</h3>
      </div>
      <div className="new-products-list">
        {products.map((product) => {
          const id = product.id;
          const title = product.title;
          const img = product.imageSrc || product.image;
          const val = product.price !== undefined ? product.price : product.currentPrice;

          return (
            <ProductMiniCard
              key={id}
              title={title}
              imageSrc={img}
              price={val}
              to={`/product?id=${id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewProducts;
