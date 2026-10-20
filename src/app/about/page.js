"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="page-header" style={{ textAlign: "center" }}>
          <div className="page-header__badge">{t.badge}</div>
          <h1 className="page-header__title">
            {t.title}{" "}
            <span className="page-header__title-highlight">
              {t.titleHighlight}
            </span>{" "}
            {t.titleSuffix}
          </h1>
          <p className="page-header__subtitle" style={{ margin: "0 auto" }}>
            {t.subtitle}
          </p>
        </section>

        {/* Mission & Vision Grid */}
        <section className="service-details">
          <div className="service-block service-block--featured">
            <h2 className="service-block__title">{t.missionTitle}</h2>
            <p className="service-block__desc">{t.missionDesc}</p>
          </div>

          <div className="service-block">
            <h2 className="service-block__title">{t.visionTitle}</h2>
            <p className="service-block__desc">{t.visionDesc}</p>
          </div>
        </section>

        {/* Core Values */}
        <section className="milestones-section">
          <div className="milestones-header">
            <h2 className="page-header__title">
              Core <span className="page-header__title-highlight">Principles</span>
            </h2>
          </div>

          <div className="milestones__grid milestones__grid--3col">
            <div className="milestone-card">
              <div className="milestone-card__top">
                <span className="milestone-card__step">01</span>
              </div>
              <h3 className="milestone-card__title">{t.value1Title}</h3>
              <p className="milestone-card__desc">{t.value1Desc}</p>
            </div>

            <div className="milestone-card">
              <div className="milestone-card__top">
                <span className="milestone-card__step">02</span>
              </div>
              <h3 className="milestone-card__title">{t.value2Title}</h3>
              <p className="milestone-card__desc">{t.value2Desc}</p>
            </div>

            <div className="milestone-card">
              <div className="milestone-card__top">
                <span className="milestone-card__step">03</span>
              </div>
              <h3 className="milestone-card__title">{t.value3Title}</h3>
              <p className="milestone-card__desc">{t.value3Desc}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
