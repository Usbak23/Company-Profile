"use client";

import { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../context/LanguageContext";
import { getProjectBySlug } from "../../data/projects";

export default function ProjectDetailPage({ params }) {
  const { slug } = use(params);
  const { lang } = useLanguage();

  // Lightbox Modal state
  const [activeImage, setActiveImage] = useState(null);

  const project = getProjectBySlug(slug, lang);
  if (!project) notFound();

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    if (activeImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeImage]);

  // Title split: "POSAgilix — SaaS POS Management Platform" -> mainTitle and subtitle
  const titleParts = project.title.split(" — ");
  const mainTitle = titleParts[0];
  const subTitle = titleParts.length > 1 ? `— ${titleParts.slice(1).join(" — ")}` : "";

  const allMedia = [
    ...(project.coverImage ? [{ src: project.coverImage, caption: `${project.title} — Login Portal & Authentication` }] : []),
    ...(project.screenshots || []),
  ];

  const handleNextMedia = (e) => {
    e.stopPropagation();
    if (!activeImage) return;
    const currentIndex = allMedia.findIndex((m) => m.src === activeImage.src);
    const nextIndex = (currentIndex + 1) % allMedia.length;
    setActiveImage(allMedia[nextIndex]);
  };

  const handlePrevMedia = (e) => {
    e.stopPropagation();
    if (!activeImage) return;
    const currentIndex = allMedia.findIndex((m) => m.src === activeImage.src);
    const prevIndex = (currentIndex - 1 + allMedia.length) % allMedia.length;
    setActiveImage(allMedia[prevIndex]);
  };

  return (
    <>
      <Header />
      <main className="pd-v2-page">
        <div className="pd-v2-wrap">

          {/* Back link */}
          <Link href="/portfolio" className="pd-v2-back">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Portfolio
          </Link>

          {/* Meta Row (Pills) */}
          <div className="pd-v2-meta-row">
            <span className="pd-v2-pill">{project.tag.toUpperCase()}</span>
            <span className="pd-v2-pill pd-v2-pill--status">{project.statusLabel}</span>
          </div>

          {/* Title */}
          <h1 className="pd-v2-title">
            {mainTitle} {subTitle && <span>{subTitle}</span>}
          </h1>

          {/* Timeframe */}
          <div className="pd-v2-timeframe">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {project.date}
          </div>


          {/* Browser Mockup Frame */}
          <div className="pd-v2-browser-frame">
            <div className="pd-v2-browser-topbar">
              <div className="pd-v2-dots">
                <span className="pd-v2-dot r" />
                <span className="pd-v2-dot y" />
                <span className="pd-v2-dot g" />
              </div>
              <div className="pd-v2-url-chip">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                https://invoice-manajemen.agilix.id/
              </div>
              <span className="pd-v2-view-tag">PRIMARY VIEW</span>
            </div>

            <div
              className="pd-v2-browser-body"
              onClick={() => project.coverImage && setActiveImage({ src: project.coverImage, caption: `${project.title} — Login Portal` })}
              style={{ cursor: project.coverImage ? "pointer" : "default" }}
              title={project.coverImage ? "Click to view full size" : ""}
            >
              {project.coverImage ? (
                <div className="pd-v2-screenshot-viewport">
                  <Image
                    src={project.coverImage}
                    alt={`${project.title} screenshot`}
                    width={1200}
                    height={675}
                    priority
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="pd-v2-preview-img"
                  />
                  <div className="pd-v2-preview-overlay">
                    <span className="pd-v2-zoom-badge">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        <line x1="11" y1="8" x2="11" y2="14" />
                        <line x1="8" y1="11" x2="14" y2="11" />
                      </svg>
                      Click to view full size
                    </span>
                  </div>
                </div>
              ) : (
                <div className="pd-v2-login-card">
                  <div className="pd-v2-login-brand">
                    <div className="pd-v2-login-logo">P</div>
                    <strong>POSAgilix</strong>
                  </div>
                  <p className="pd-v2-sub">Welcome back! Please enter your details.</p>

                  <div className="pd-v2-field">
                    <label>Email</label>
                    <div className="pd-v2-field-input">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>
                      Enter your email
                    </div>
                  </div>
                  <div className="pd-v2-field">
                    <label>Password</label>
                    <div className="pd-v2-field-input">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                      ••••••••••••
                    </div>
                  </div>
                  <div className="pd-v2-row-between">
                    <label><input type="checkbox" defaultChecked /> Remember me</label>
                    <a href="#">Forgot password?</a>
                  </div>
                  <button className="pd-v2-signin-btn">Sign In →</button>
                </div>
              )}
            </div>
          </div>

          {/* Content Grid (2 Columns: 1.6fr 1fr) */}
          <div className="pd-v2-grid">

            {/* Left Column: Project Overview & Tech Stack */}
            <div className="pd-v2-overview">
              <div className="pd-v2-section-label">
                Project Overview
              </div>
              <p>{project.overview}</p>

              {project.features && project.features.length > 0 && (
                <>
                  <div className="pd-v2-section-label" style={{ marginTop: "32px", fontSize: "17px" }}>
                    Key Features
                  </div>
                  <ul className="pd-v2-feature-list">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="pd-v2-feature-item">
                        <span className="pd-v2-feature-dot" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Tech Stack Chips */}
              <div className="pd-v2-stack-list">
                {project.techs.map((tech) => (
                  <span key={tech} className="pd-v2-stack-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Screenshots */}
            <div className="pd-v2-screens-col">
              <div className="pd-v2-screens-head">
                <div className="pd-v2-section-label" style={{ marginBottom: 0 }}>
                  Screenshots
                </div>
                <span className="pd-v2-count">
                  {project.screenshots?.length || 0} images
                </span>
              </div>

              {project.screenshots && project.screenshots.map((shot, idx) => (
                <div
                  key={idx}
                  className="pd-v2-thumb"
                  onClick={() => setActiveImage(shot)}
                  title="Click to enlarge"
                >
                  <div className="pd-v2-thumb-top">
                    <span /><span /><span />
                    <span className="pd-v2-thumb-idx">0{idx + 1}</span>
                  </div>
                  <div className="pd-v2-thumb-body">
                    <div className="pd-v2-thumb-img-wrap">
                      <Image
                        src={shot.src}
                        alt={shot.caption}
                        width={400}
                        height={225}
                        className="pd-v2-thumb-img"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="pd-v2-thumb-overlay">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                      </div>
                    </div>
                    <p className="pd-v2-thumb-caption">{shot.caption}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Lightbox Fullscreen Modal */}
        {activeImage && (
          <div className="pd-lightbox" onClick={() => setActiveImage(null)}>
            <div className="pd-lightbox__dialog" onClick={(e) => e.stopPropagation()}>
              <button
                className="pd-lightbox__close"
                onClick={() => setActiveImage(null)}
                aria-label="Close"
              >
                ✕
              </button>

              {allMedia.length > 1 && (
                <>
                  <button className="pd-lightbox__nav pd-lightbox__nav--prev" onClick={handlePrevMedia} aria-label="Previous">
                    ‹
                  </button>
                  <button className="pd-lightbox__nav pd-lightbox__nav--next" onClick={handleNextMedia} aria-label="Next">
                    ›
                  </button>
                </>
              )}

              <div className="pd-lightbox__topbar">
                <div className="pd-v2-dots">
                  <span className="pd-v2-dot r" />
                  <span className="pd-v2-dot y" />
                  <span className="pd-v2-dot g" />
                </div>
                <span className="pd-lightbox__title">{activeImage.caption || project.title}</span>
              </div>

              <div className="pd-lightbox__img-container">
                <img
                  src={activeImage.src}
                  alt={activeImage.caption || project.title}
                  className="pd-lightbox__img"
                />
              </div>

              {activeImage.caption && (
                <div className="pd-lightbox__caption">
                  <p>{activeImage.caption}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
