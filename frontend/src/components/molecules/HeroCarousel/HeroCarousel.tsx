import { useState, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";
import type { HeroSlide } from "../../../data/types";
import defaultSlides from "../../../data/heroCarousel";
import NewsletterForm from "../NewsletterForm";
import "./HeroCarousel.css";

interface HeroCarouselProps {
  slides?: HeroSlide[];
  autoPlayInterval?: number;
  className?: string;
  onSubscribe?: (email: string) => void;
}

const HeroCarousel = ({
  slides = defaultSlides,
  autoPlayInterval = 5000,
  className,
  onSubscribe,
}: HeroCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = slides.length;

  const goToNext = useCallback(() => {
    if (totalSlides === 0) return;
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const goToPrev = useCallback(() => {
    if (totalSlides === 0) return;
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (autoPlayInterval <= 0 || isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, isPaused, totalSlides, goToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    } else if (distance < -minSwipeDistance) {
      goToPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div
      className={clsx("hero-carousel", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hero-carousel-slides">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const slideStyle = slide.backgroundImage
            ? { backgroundImage: `url(${slide.backgroundImage})` }
            : undefined;

          return (
            <div
              key={slide.id}
              className={clsx(
                "hero-carousel-slide",
                isActive && "hero-carousel-slide-active",
              )}
              style={slideStyle}
              aria-hidden={!isActive}
            >
              <div className="hero-carousel-content">
                <h1 className="hero-carousel-title">{slide.title}</h1>
                <p className="hero-carousel-subtitle">{slide.subtitle}</p>
                <div className="hero-carousel-newsletter-wrapper">
                  <NewsletterForm
                    onSubscribe={onSubscribe}
                    className="hero-carousel-newsletter-form"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {totalSlides > 1 && (
        <div className="hero-carousel-dots">
          {slides.map((slide, index) => (
            <button
              key={`dot-${slide.id}`}
              type="button"
              className={clsx(
                "hero-carousel-dot",
                index === activeIndex && "hero-carousel-dot-active",
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroCarousel;
