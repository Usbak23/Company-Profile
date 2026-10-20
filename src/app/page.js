"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { useLanguage } from "./context/LanguageContext";
import translations from "./translations";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang].home;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero__content">
            <div className="hero__badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              {t.heroBadge}
            </div>
            <h1 className="hero__title">
              {t.heroTitle} <span className="hero__title-highlight">{t.heroTitleHighlight}</span>
            </h1>
            <p className="hero__desc">{t.heroDesc}</p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">
                {t.heroStart}
              </Link>
              <Link href="/portfolio" className="btn btn--outline">
                {t.heroPortfolio}
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__image-wrapper">
              <svg
                viewBox="0 0 100 100"
                width="100%"
                height="100%"
                role="img"
                aria-label="Abstract technology framework visualization"
                style={{ width: '80%', height: '80%', margin: 'auto' }}
              >
                <path d="M20 50 L50 20 L80 50 L50 80 Z" fill="none" stroke="#4FD1C5" strokeWidth="2" opacity="0.5" />
                <circle cx="50" cy="50" r="10" fill="#5A4FCF" opacity="0.8" />
              </svg>
            </div>
          </div>
        </section>

        {/* Engineering the Future */}
        <section className="engineering">
          <svg className="engineering__icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          <h2 className="engineering__title">{t.engineeringTitle}</h2>
          <p className="engineering__desc">{t.engineeringDesc}</p>
        </section>

        {/* Featured Services */}
        <section className="services" id="services">
          <div className="services__header">
            <div className="services__title-wrapper">
              <h2 className="services__title">{t.featuredServicesTitle}</h2>
              <p className="services__subtitle">{t.featuredServicesSubtitle}</p>
            </div>
            <Link href="/services" className="services__link">{t.allServices}</Link>
          </div>

          <div className="services__grid">
            <article className="service-card">
              <div className="service-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <h3 className="service-card__title">{t.service1Title}</h3>
              <p className="service-card__desc">{t.service1Desc}</p>
              <ul className="service-card__features">
                <li className="service-card__feature">{t.service1f1}</li>
                <li className="service-card__feature">{t.service1f2}</li>
              </ul>
            </article>

            <article className="service-card">
              <div className="service-card__icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="service-card__title">{t.service2Title}</h3>
              <p className="service-card__desc">{t.service2Desc}</p>
              <ul className="service-card__features">
                <li className="service-card__feature">{t.service2f1}</li>
                <li className="service-card__feature">{t.service2f2}</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
