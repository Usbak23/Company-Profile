"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__brand">
          <img
            src="/agilix-logo.png"
            alt="Agilix Tech Logo"
            className="footer__brand-logo"
          />
          <span>Agilix Tech</span>
        </div>
        <p className="footer__desc">{t.footer.desc}</p>
        <p className="footer__copyright">{t.footer.copyright}</p>
      </div>
      <div className="footer__links">
        <div className="footer__col">
          <h4 className="footer__col-title">{t.footer.legal}</h4>
          <div className="footer__col-list">
            <Link href="/privacy" className="footer__col-link">{t.footer.privacy}</Link>
            <Link href="/terms" className="footer__col-link">{t.footer.terms}</Link>
            <Link href="/privacy" className="footer__col-link">{t.footer.cookies}</Link>
          </div>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">{t.footer.connect}</h4>
          <div className="footer__col-list">
            <Link href="/contact" className="footer__col-link">{t.footer.support}</Link>
            <Link href="/contact#milestones" className="footer__col-link">{t.footer.faq}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
