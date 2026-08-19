import { useSearchParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import { colorOptions, conditionOptions } from "../../data/filterData";
import Breadcrumb from "../../components/molecules/Breadcrumb";
import ProductGallery from "../../components/molecules/ProductGallery";
import ProductInfo from "../../components/molecules/ProductInfo";
import ProductTabs from "../../components/molecules/ProductTabs";
import CategoryFilter from "../../components/molecules/CategoryFilter";
import PriceFilter from "../../components/organisms/PriceFilter";
import NewProducts from "../../components/molecules/NewProducts";
import "./Product.css";

const Product = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productId = searchParams.get("id");

  const product =
    products.find((p) => p.id === productId) || products[0];

  const galleryImages =
    product.galleryImages && product.galleryImages.length > 0
      ? product.galleryImages
      : [product.image];

  const newProductsList = products.slice(0, 3);

  const handleSelectCategory = (categoryKey: string | null) => {
    if (categoryKey) {
      navigate(`/shop?category=${categoryKey}`);
    }
  };

  const handlePriceFilterSubmit = (data: {
    minPrice: number;
    maxPrice: number;
    selectedColors: string[];
    selectedConditions: string[];
  }) => {
    const params = new URLSearchParams();
    params.set("minPrice", data.minPrice.toString());
    params.set("maxPrice", data.maxPrice.toString());
    if (data.selectedColors.length > 0) {
      params.set("colors", data.selectedColors.join(","));
    }
    if (data.selectedConditions.length > 0) {
      params.set("conditions", data.selectedConditions.join(","));
    }
    navigate(`/shop?${params.toString()}`);
  };

  return (
    <div className="product-page-container">
      <div className="product-page-wrapper">
        <Breadcrumb
          items={[
            {
              label: product.category.label,
              href: `/shop?category=${product.category.value}`,
            },
            {
              label: product.title,
            },
          ]}
        />

        <div className="product-page-layout">
          <div className="product-page-main">
            <div className="product-page-hero">
              <div className="product-page-gallery-col">
                <ProductGallery
                  mainImage={product.image}
                  images={galleryImages}
                  productTitle={product.title}
                />
              </div>
              <div className="product-page-info-col">
                <ProductInfo product={product} />
              </div>
            </div>

            <div className="product-page-tabs-section">
              <ProductTabs product={product} />
            </div>
          </div>

          <aside className="product-page-sidebar">
            <CategoryFilter onSelectCategory={handleSelectCategory} />
            <PriceFilter
              minPrice={0}
              maxPrice={150}
              colors={colorOptions}
              conditions={conditionOptions}
              onFilterSubmit={handlePriceFilterSubmit}
            />
            <NewProducts products={newProductsList} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Product;
