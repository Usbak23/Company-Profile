"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";
import { getProjects } from "../data/projects";

const STATUS_COLORS = {
  completed: { bg: "rgba(16,185,129,0.12)", border: "rgba(16,185,129,0.35)", text: "#10b981" },
  inProgress: { bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.35)", text: "#f59e0b" },
  planned: { bg: "rgba(99,102,241,0.12)", border: "rgba(99,102,241,0.35)", text: "#818cf8" },
};

const TECH_COLORS = {
  "Next.js": { bg: "rgba(255,255,255,0.07)", color: "#e2e8f0" },
  "TypeScript": { bg: "rgba(49,120,198,0.18)", color: "#60a5fa" },
  "Node.js": { bg: "rgba(104,211,145,0.15)", color: "#68d391" },
  "Express.js": { bg: "rgba(255,255,255,0.06)", color: "#94a3b8" },
  "React": { bg: "rgba(97,218,251,0.15)", color: "#61dafb" },
  "React Native": { bg: "rgba(97,218,251,0.12)", color: "#61dafb" },
  "Tailwind CSS": { bg: "rgba(56,189,248,0.13)", color: "#38bdf8" },
  "PostgreSQL": { bg: "rgba(51,153,255,0.15)", color: "#5b9bd5" },
  "Docker": { bg: "rgba(30,136,229,0.15)", color: "#2196f3" },
  "Redis": { bg: "rgba(220,50,47,0.15)", color: "#ff6b6b" },
  "Laravel": { bg: "rgba(255,69,0,0.13)", color: "#f97316" },
  "PHP": { bg: "rgba(119,123,180,0.18)", color: "#9b9dcc" },
  "MySQL": { bg: "rgba(255,152,0,0.13)", color: "#ff9800" },
  "Prisma": { bg: "rgba(45,212,191,0.13)", color: "#2dd4bf" },
  "GraphQL": { bg: "rgba(229,0,179,0.13)", color: "#e535ab" },
  "Stripe": { bg: "rgba(99,91,255,0.15)", color: "#635bff" },
  "AWS": { bg: "rgba(255,153,0,0.13)", color: "#ff9900" },
  "Livewire": { bg: "rgba(251,113,133,0.13)", color: "#fb7185" },
  "default": { bg: "rgba(255,255,255,0.05)", color: "#94a3b8" },
};

function getTechStyle(tech) {
  return TECH_COLORS[tech] || TECH_COLORS["default"];
}

const PROJECT_VISUALS = [
  {
    gradient: "linear-gradient(135deg,#0d1527 0%,#0a1628 100%)", radial: "rgba(79,209,197,0.18)",
    icon: <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
  },
  {
    gradient: "linear-gradient(135deg,#131c31 0%,#0f1a2e 100%)", radial: "rgba(90,79,207,0.2)",
    icon: <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#5A4FCF" strokeWidth="1.5"><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /></svg>
  },
  {
    gradient: "linear-gradient(135deg,#101a2e 0%,#152238 100%)", radial: "rgba(79,209,197,0.15)",
    icon: <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
  },
  {
    gradient: "linear-gradient(135deg,#0f172a 0%,#1e293b 100%)", radial: "rgba(167,139,250,0.18)",
    icon: <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
  },
  {
    gradient: "linear-gradient(135deg,#0e1a2e 0%,#152030 100%)", radial: "rgba(56,189,248,0.18)",
    icon: <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
  },
  {
    gradient: "linear-gradient(135deg,#16213e 0%,#0f3460 100%)", radial: "rgba(249,115,22,0.15)",
    icon: <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
  },
];

export default function PortfolioPage() {
  const { lang } = useLanguage();
  const t = translations[lang].portfolio;
  const [activeFilter, setActiveFilter] = useState("all");

  // Use centralized project data (for slug) but translation labels from translations
  const allProjects = getProjects(lang);
  const filtered = activeFilter === "all"
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  const filters = [
    { key: "all", label: t.filterAll },
    { key: "ecommerce", label: t.filterEcommerce },
    { key: "corporate", label: t.filterCorporate },
    { key: "startup", label: t.filterStartup },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="page-header pf-header">
          <div className="pf-header__inner">
            <h1 className="page-header__title">
              {t.title}{" "}
              <span className="page-header__title-highlight">{t.titleHighlight}</span>
            </h1>
            <p className="page-header__subtitle">{t.subtitle}</p>
          </div>
        </section>

        {/* Filter Pills */}
        <div className="portfolio-filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-tag${activeFilter === f.key ? " filter-tag--active" : ""}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <section className="pf-grid">
          {filtered.map((project, i) => {
            const visual = PROJECT_VISUALS[i % PROJECT_VISUALS.length];
            const statusStyle = STATUS_COLORS[project.status] || STATUS_COLORS.completed;

            return (
              <article key={project.id} className="pf-card">
                {/* Clickable preview → detail page */}
                <Link href={`/portfolio/${project.slug}`} className="pf-card__preview-link" aria-label={`View ${project.title} details`}>
                  <div className="pf-card__mockup-frame">
                    {/* Mini browser top bar */}
                    <div className="pf-card__mockup-bar">
                      <div className="pf-card__mockup-dots">
                        <span className="pf-mockup-dot pf-mockup-dot--red" />
                        <span className="pf-mockup-dot pf-mockup-dot--yellow" />
                        <span className="pf-mockup-dot pf-mockup-dot--green" />
                      </div>
                      <span className="pf-card__mockup-url">posagilix.com</span>
                    </div>

                    {/* Image / Canvas */}
                    <div
                      className="pf-card__preview"
                      style={project.coverImage ? {} : {
                        background: `radial-gradient(circle at 30% 40%, ${visual.radial}, transparent 65%), ${visual.gradient}`,
                      }}
                    >
                      {project.coverImage ? (
                        /* Real screenshot cover */
                        <Image
                          src={project.coverImage}
                          alt={project.title}
                          width={600}
                          height={340}
                          priority={i === 0}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="pf-card__cover-img"
                        />
                      ) : (
                        /* Gradient + icon fallback */
                        <div className="pf-card__preview-icon">{visual.icon}</div>
                      )}

                      {/* Status Badge */}
                      <div
                        className="pf-card__status"
                        style={{
                          background: statusStyle.bg,
                          border: `1px solid ${statusStyle.border}`,
                          color: statusStyle.text,
                        }}
                      >
                        <span className="pf-card__status-dot" style={{ background: statusStyle.dot || statusStyle.text }} />
                        {project.statusLabel}
                      </div>

                      {/* Hover Overlay */}
                      <div className="pf-card__hover-view">
                        <span className="pf-card__hover-text">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                          </svg>
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="pf-card__body">
                  <div className="pf-card__meta">
                    <span className="pf-card__category">{project.tag}</span>
                  </div>

                  <Link href={`/portfolio/${project.slug}`} className="pf-card__title-link">
                    <h2 className="pf-card__title">{project.title}</h2>
                  </Link>
                  <p className="pf-card__desc">{project.desc}</p>

                  {/* Tech Stack */}
                  <div className="pf-card__techs">
                    {project.techs.slice(0, 5).map((tech) => {
                      const s = getTechStyle(tech);
                      return (
                        <span key={tech} className="pf-tech-tag" style={{ background: s.bg, color: s.color }}>
                          {tech}
                        </span>
                      );
                    })}
                    {project.techs.length > 5 && (
                      <span className="pf-tech-tag pf-tech-tag--more">+{project.techs.length - 5}</span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="pf-card__links">
                    <Link href={`/portfolio/${project.slug}`} className="pf-card__link pf-card__link--detail">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                      </svg>
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* CTA Strip */}
        <div className="pf-cta">
          <div className="pf-cta__inner">
            <div>
              <h2 className="pf-cta__title">{t.ctaTitle}</h2>
              <p className="pf-cta__desc">{t.ctaDesc}</p>
            </div>
            <Link href="/contact" className="btn btn--primary pf-cta__btn">
              {t.ctaBtn}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
