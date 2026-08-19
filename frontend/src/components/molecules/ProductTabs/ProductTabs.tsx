import { useState } from "react";
import { FaStar } from "react-icons/fa";
import type { Product } from "../../../data/types";
import { PRODUCT_PAGE_TEXTS } from "../../../data/productData";
import "./ProductTabs.css";

export interface ProductTabsProps {
  product: Product;
  className?: string;
}

type TabKey = "description" | "additional" | "reviews";

const ProductTabs = ({ product, className = "" }: ProductTabsProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>("description");

  const reviewCount = product.reviews?.length || 0;

  const tabs: { key: TabKey; label: string }[] = [
    { key: "description", label: PRODUCT_PAGE_TEXTS.tabDescription },
    { key: "additional", label: PRODUCT_PAGE_TEXTS.tabAdditional },
    {
      key: "reviews",
      label: `${PRODUCT_PAGE_TEXTS.tabReviews} (${reviewCount})`,
    },
  ];

  const renderDescription = () => (
    <div className="product-tabs__description">
      {product.description && (
        <div
          className="product-tabs__desc-text"
          dangerouslySetInnerHTML={{
            __html: product.description.replace(/\n/g, "<br/>"),
          }}
        />
      )}
    </div>
  );

  const renderAdditionalInfo = () => (
    <div className="product-tabs__additional">
      {product.additionalInfo &&
      Object.keys(product.additionalInfo).length > 0 ? (
        <table className="product-tabs__info-table">
          <tbody>
            {Object.entries(product.additionalInfo).map(([infoKey, value]) => (
              <tr
                key={`additional-info-${product.id}-${infoKey}`}
                className="product-tabs__info-row"
              >
                <td className="product-tabs__info-key">{infoKey}</td>
                <td className="product-tabs__info-value">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="product-tabs__empty">
          No additional information available.
        </p>
      )}
    </div>
  );

  const renderReviews = () => (
    <div className="product-tabs__reviews">
      {product.reviews && product.reviews.length > 0 ? (
        <div className="product-tabs__reviews-list">
          {product.reviews.map((review) => (
            <div
              key={`review-${product.id}-${review.id}`}
              className="product-tabs__review"
            >
              <div className="product-tabs__review-header">
                <div className="product-tabs__review-avatar">
                  {review.author.charAt(0).toUpperCase()}
                </div>
                <div className="product-tabs__review-meta">
                  <span className="product-tabs__review-author">
                    {review.author}
                  </span>
                  <div className="product-tabs__review-stars">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar
                        key={`star-${review.id}-${starIndex}`}
                        className={`product-tabs__review-star ${
                          starIndex < review.rating
                            ? "product-tabs__review-star--active"
                            : "product-tabs__review-star--inactive"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <span className="product-tabs__review-date">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <p className="product-tabs__review-text">{review.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="product-tabs__empty">{PRODUCT_PAGE_TEXTS.emptyReviewsText}</p>
      )}
    </div>
  );

  return (
    <div className={`product-tabs ${className}`.trim()}>
      <div className="product-tabs__nav">
        {tabs.map((tab) => (
          <button
            key={`product-tab-btn-${tab.key}`}
            className={`product-tabs__tab ${
              activeTab === tab.key ? "product-tabs__tab--active" : ""
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="product-tabs__content">
        {activeTab === "description" && renderDescription()}
        {activeTab === "additional" && renderAdditionalInfo()}
        {activeTab === "reviews" && renderReviews()}
      </div>
    </div>
  );
};

export default ProductTabs;
