import React from "react";
import FeatureCard from "../../components/molecules/FeatureCard";
import TeamCard from "../../components/molecules/TeamCard";
import Button from "../../components/atoms/Button";
import NewsletterBanner from "../../components/organisms/NewsletterBanner";
import {
  aboutHeroData,
  aboutFeaturesData,
  aboutPartnerData,
  aboutStatsData,
  aboutTeamSectionData,
  aboutBannerData,
} from "../../data/aboutData";
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

        <section className="about-partner">
          <div className="about-partner__top">
            <div className="about-partner__image-wrapper">
              <img
                src={aboutPartnerData.image}
                alt={aboutPartnerData.title}
                className="about-partner__main-image"
              />
            </div>
            <div className="about-partner__content">
              <span className="about-partner__subtitle">{aboutPartnerData.subtitle}</span>
              <h2 className="about-partner__title">{aboutPartnerData.title}</h2>
              {aboutPartnerData.paragraphs.map((p, idx) => (
                <p key={idx} className="about-partner__text">{p}</p>
              ))}
            </div>
          </div>

          <div className="about-partner__pillars">
            {aboutPartnerData.pillars.map((pillar, idx) => (
              <div key={idx} className="about-partner__pillar">
                <h4 className="about-partner__pillar-title">{pillar.title}</h4>
                <p className="about-partner__pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-stats">
          <div className="about-stats__overlay" />
          <div className="about-stats__grid">
            {aboutStatsData.map((stat, idx) => (
              <div key={idx} className="about-stats__item">
                <span className="about-stats__value">{stat.value}</span>
                <span className="about-stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about-team">
          <div className="about-team__header">
            <h3 className="about-team__section-title">{aboutTeamSectionData.sectionTitle}</h3>
            <div className="about-features__decoration" />
          </div>

          <div className="about-team__grid">
            <div className="about-team__intro">
              <span className="about-team__intro-subtitle">{aboutTeamSectionData.badgeText}</span>
              <h2 className="about-team__intro-title">{aboutTeamSectionData.title}</h2>
              {aboutTeamSectionData.descriptions.map((desc, idx) => (
                <p key={idx} className="about-team__intro-desc">
                  {desc}
                </p>
              ))}
              <div className="about-team__intro-btn">
                <Button variant="primary" size="md">
                  {aboutTeamSectionData.buttonText}
                </Button>
              </div>
            </div>

            {aboutTeamSectionData.members.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                socials={member.socials}
              />
            ))}
          </div>
        </section>

        <NewsletterBanner
          title={aboutBannerData.title}
          subtitlePrefix={aboutBannerData.subtitlePrefix}
          subtitleHighlight={aboutBannerData.subtitleHighlight}
          sideImage={aboutBannerData.sideImage}
          sideImageAlt={aboutBannerData.sideImageAlt}
        />
      </div>
    </div>
  );
};

export default About;