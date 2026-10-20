"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Header() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const { lang } = useLanguage();
  const t = translations[lang] || translations.en;

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  const closeMenu = () => setIsExpanded(false);

  return (
    <header className="header">
      <Link href="/" className="header__brand" onClick={closeMenu}>
        <Image
          src="/agilix-logo.png"
          alt="Agilix Tech Logo"
          width={36}
          height={36}
          priority
          className="header__brand-logo"
        />
        <span>Agilix</span>
      </Link>

      <nav className={`nav ${isExpanded ? "is-open" : ""}`} id="nav-container">
        <ul className="nav__list">
          <li className="nav__item">
            <Link
              href="/"
              className={`nav__link ${isActive("/") ? "nav__link--active" : ""}`}
              onClick={closeMenu}
            >
              {t.nav.home}
            </Link>
          </li>
          <li className="nav__item">
            <Link
              href="/services"
              className={`nav__link ${isActive("/services") ? "nav__link--active" : ""}`}
              onClick={closeMenu}
            >
              {t.nav.services}
            </Link>
          </li>
          <li className="nav__item">
            <Link
              href="/portfolio"
              className={`nav__link ${isActive("/portfolio") ? "nav__link--active" : ""}`}
              onClick={closeMenu}
            >
              {t.nav.portfolio}
            </Link>
          </li>
          <li className="nav__item">
            <Link
              href="/about"
              className={`nav__link ${isActive("/about") ? "nav__link--active" : ""}`}
              onClick={closeMenu}
            >
              {t.nav.about}
            </Link>
          </li>
          <li className="nav__item nav__item--mobile-action">
            <Link
              href="/contact"
              className="btn btn--primary"
              onClick={closeMenu}
            >
              {t.nav.contact}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="header__actions">
        <Link href="/contact" className="btn btn--primary">{t.nav.contact}</Link>
      </div>

      <button
        className="header__toggle"
        id="navbar-toggle"
        aria-expanded={isExpanded}
        aria-label={t.nav.toggleMenu}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </header>
  );
}
