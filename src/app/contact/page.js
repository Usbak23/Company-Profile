"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

// ─── EmailJS credentials ─────────────────────────────────────────────────────
// Nilai dibaca dari .env.local (NEXT_PUBLIC_EMAILJS_*)
const EMAILJS_SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ;
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ;
// ─────────────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrorMsg(err?.text || "Gagal mengirim pesan. Coba lagi.");
      setStatus("error");
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="page-header" style={{ textAlign: 'center' }}>
          <div className="page-header__badge">{t.badge}</div>
          <h1 className="page-header__title">
            {t.title} <span className="page-header__title-highlight">{t.titleHighlight}</span> {t.titleSuffix}
          </h1>
          <p className="page-header__subtitle" style={{ margin: '0 auto' }}>
            {t.subtitle}
          </p>
        </section>

        {/* Contact Form & Info Grid */}
        <section className="contact-layout">
          {/* Left: Contact Form */}
          <div className="contact-card">
            <h2 className="contact-card__title">{t.formTitle}</h2>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">{t.labelName}</label>
                  <input
                    id="fullName"
                    name="name"
                    className="form-input"
                    type="text"
                    placeholder={t.placeholderName}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="corporateEmail">{t.labelEmail}</label>
                  <input
                    id="corporateEmail"
                    name="email"
                    className="form-input"
                    type="email"
                    placeholder={t.placeholderEmail}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">{t.labelSubject}</label>
                <input
                  id="subject"
                  name="subject"
                  className="form-input"
                  type="text"
                  placeholder={t.placeholderSubject}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="messagePayload">{t.labelMessage}</label>
                <textarea
                  id="messagePayload"
                  name="message"
                  className="form-textarea"
                  placeholder={t.placeholderMessage}
                  required
                />
              </div>

              {/* Status feedback */}
              {status === "success" && (
                <div className="form-feedback form-feedback--success">
                  ✓ Pesan berhasil dikirim ke agilixsan@gmail.com!
                </div>
              )}
              {status === "error" && (
                <div className="form-feedback form-feedback--error">
                  ✗ {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="btn btn--primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
                disabled={status === "sending"}
              >
                {status === "sending" ? "SENDING..." : t.submitBtn}
              </button>
            </form>
          </div>

          {/* Right: Info & Map */}
          <div className="contact-card">
            <h2 className="contact-card__title">{t.infoTitle}</h2>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contact-info__label">{t.locationLabel}</div>
                <div className="contact-info__value">
                  {t.locationValue.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < t.locationValue.split('\n').length - 1 && <br />}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-info__label">{t.emailLabel}</div>
                <div className="contact-info__value">{t.emailValue}</div>
              </div>
            </div>

            <div className="contact-info__item">
              <div className="contact-info__icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="contact-info__label">{t.phoneLabel}</div>
                <div className="contact-info__value">{t.phoneValue}</div>
              </div>
            </div>

            <div className="contact-map" aria-label="Location Map">
              <iframe
                title="Agilix Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.6!2d106.74547!3d-6.45428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMTUuNFMgMTA2wrA0NCc0My43RSI!5e0!3m2!1sen!2sid!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* Project Milestones & Payment Schedule Section */}
        <section className="milestones-section" id="milestones">
          <div className="milestones-header">
            <div className="page-header__badge">{t.milestoneBadge}</div>
            <h2 className="page-header__title">
              {t.milestoneTitle} <span className="page-header__title-highlight">{t.milestoneHighlight}</span>
            </h2>
            <p className="page-header__subtitle" style={{ margin: '0 auto' }}>
              {t.milestoneSubtitle}
            </p>
          </div>

          <div className="milestones__grid">
            {t.milestones.map((item, index) => (
              <div
                className={`milestone-card ${item.payment ? 'milestone-card--payment' : ''}`}
                key={index}
              >
                <div className="milestone-card__top">
                  <span className="milestone-card__step">{item.step}</span>
                  {item.payment ? (
                    <span className="milestone-card__payment-badge">
                      {item.payment}
                    </span>
                  ) : (
                    <span className="milestone-card__status-badge">Phase {item.step}</span>
                  )}
                </div>
                <h3 className="milestone-card__title">{item.title}</h3>
                <p className="milestone-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
