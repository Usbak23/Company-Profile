"use client";

import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useLanguage } from "./context/LanguageContext";

export default function NotFound() {
  const { lang } = useLanguage();
  const isId = lang === "id";

  return (
    <>
      <Header />
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--spacing-xxl) var(--spacing-xl)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <div className="page-header__badge">
            404 • {isId ? "Halaman Tidak Ditemukan" : "Page Not Found"}
          </div>

          <h1
            className="page-header__title"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              marginBottom: "var(--spacing-md)",
            }}
          >
            404{" "}
            <span className="page-header__title-highlight">
              {isId ? "Tersesat?" : "Lost in Cyberspace?"}
            </span>
          </h1>

          <p
            className="page-header__subtitle"
            style={{
              margin: "0 auto var(--spacing-xl)",
              lineHeight: 1.6,
            }}
          >
            {isId
              ? "Halaman yang Anda cari tidak tersedia, mungkin telah dipindahkan atau tautan yang dimasukkan salah."
              : "The page you are looking for doesn't exist or has been moved. Let's get you back on track."}
          </p>

          <div
            style={{
              display: "flex",
              gap: "var(--spacing-md)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" className="btn btn--primary">
              {isId ? "← Kembali ke Beranda" : "← Back to Home"}
            </Link>
            <Link href="/contact" className="btn btn--outline">
              {isId ? "Hubungi Kami" : "Contact Support"}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

