import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./ProductGallery.css";

export interface ProductGalleryProps {
  mainImage: string;
  images: string[];
  productTitle: string;
  className?: string;
}

const ProductGallery = ({
  mainImage,
  images,
  productTitle,
  className = "",
}: ProductGalleryProps) => {
  const allImages = images.length > 0 ? images : [mainImage];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const currentImage = allImages[selectedIndex] || mainImage;

  return (
    <div className={`product-gallery ${className}`.trim()}>
      <div className="product-gallery__main">
        <button
          className="product-gallery__zoom-btn"
          onClick={() => setIsZoomed(true)}
          aria-label="Zoom image"
        >
          <FiSearch />
        </button>
        <img
          src={currentImage}
          alt={productTitle}
          className="product-gallery__main-image"
        />
      </div>

      {allImages.length > 1 && (
        <div className="product-gallery__thumbnails">
          {allImages.map((img, index) => (
            <button
              key={`gallery-thumb-${productTitle}-${index}`}
              className={`product-gallery__thumb ${
                index === selectedIndex
                  ? "product-gallery__thumb--active"
                  : ""
              }`}
              onClick={() => setSelectedIndex(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={img}
                alt={`${productTitle} - ${index + 1}`}
                className="product-gallery__thumb-image"
              />
            </button>
          ))}
        </div>
      )}

      {isZoomed && (
        <div
          className="product-gallery__lightbox"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="product-gallery__lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="product-gallery__lightbox-close"
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoom"
            >
              ✕
            </button>
            <img
              src={currentImage}
              alt={productTitle}
              className="product-gallery__lightbox-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
