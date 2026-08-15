import React from "react";
import FeatureCard from "../../components/molecules/FeatureCard/FeatureCard";
import { aboutHeroData, aboutFeaturesData } from "../../data/aboutData";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-page__container">
        <section className="about-hero">
          <div className="about-hero__image-wrapper">
            <img
              src={aboutHeroData.mainImage}
              alt={aboutHeroData.title}
              className="about-hero__main-image"
            />
          </div>

          <div className="about-hero__content">
            <h2 className="about-hero__title">{aboutHeroData.title}</h2>

            <div className="about-hero__paragraphs">
              {aboutHeroData.paragraphs.map((text, idx) => (
                <p key={idx} className="about-hero__text">
                  {text}
                </p>
              ))}
            </div>

            <div className="about-hero__gallery">
              {aboutHeroData.galleryImages.map((img, idx) => (
                <div key={idx} className="about-hero__thumb-box">
                  <img
                    src={img}
                    alt={`About thumbnail ${idx + 1}`}
                    className="about-hero__thumb"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-features">
          <div className="about-features__header">
            <h3 className="about-features__title">What We Provide?</h3>
            <div className="about-features__decoration" />
          </div>

          <div className="about-features__grid">
            {aboutFeaturesData.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                linkText={feature.linkText}
                linkHref={feature.linkHref}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
