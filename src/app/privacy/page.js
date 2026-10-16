"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export default function PrivacyPage() {
  const { lang } = useLanguage();
  const isId = lang === "id";

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="page-header" style={{ textAlign: "center" }}>
          <div className="page-header__badge">
            {isId ? "KEBIJAKAN & KEAMANAN" : "POLICY & SECURITY"}
          </div>
          <h1 className="page-header__title">
            {isId ? "Kebijakan" : "Privacy"}{" "}
            <span className="page-header__title-highlight">
              {isId ? "Privasi" : "Policy"}
            </span>
          </h1>
          <p className="page-header__subtitle" style={{ margin: "0 auto" }}>
            {isId
              ? "Transparansi dan komitmen Agilix IT Solutions dalam menjaga kerahasiaan data serta integritas keamanan sistem Anda."
              : "Our commitment at Agilix IT Solutions to data confidentiality, system security, and transparent client partnerships."}
          </p>
        </section>

        {/* Content Section */}
        <section
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "0 var(--spacing-xl) var(--spacing-xxl)",
          }}
        >
          <div
            style={{
              background: "rgba(18, 24, 38, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              padding: "clamp(1.5rem, 4vw, 3rem)",
              backdropFilter: "blur(12px)",
              color: "var(--color-text-secondary, #A0AEC0)",
              lineHeight: 1.8,
              fontSize: "15.5px",
            }}
          >
            <p style={{ marginBottom: "2rem" }}>
              <strong>{isId ? "Terakhir Diperbarui:" : "Last Updated:"}</strong>{" "}
              {isId ? "Oktober 2026" : "October 2026"}
            </p>

            <h2
              style={{
                color: "var(--color-text-primary, #FFFFFF)",
                fontSize: "1.35rem",
                marginTop: "2rem",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              1. {isId ? "Informasi yang Kami Kumpulkan" : "Information We Collect"}
            </h2>
            <p>
              {isId
                ? "Kami mengumpulkan informasi yang Anda berikan secara langsung saat menghubungi kami, meminta konsultasi teknis, atau bermitra dalam pengembangan perangkat lunak. Informasi ini meliputi nama, alamat email perusahaan, nomor telepon, serta spesifikasi kebutuhan teknis proyek Anda."
                : "We collect information you directly provide when contacting us for technical consultation, proposal requests, or development partnerships. This includes your name, business email, telephone number, and technical project requirements."}
            </p>

            <h2
              style={{
                color: "var(--color-text-primary, #FFFFFF)",
                fontSize: "1.35rem",
                marginTop: "2rem",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              2. {isId ? "Penggunaan Informasi & Kerahasiaan (NDA)" : "Use of Information & Confidentiality (NDA)"}
            </h2>
            <p>
              {isId
                ? "Seluruh data arsitektur, basis kode, dan model bisnis proyek klien diperlakukan sebagai informasi yang sangat rahasia. Kami menggunakan data tersebut semata-mata untuk merancang, mengimplementasikan, dan memelihara sistem digital Anda sesuai standar keamanan enterprise."
                : "All architecture diagrams, source codebases, and client business models are treated as strictly confidential. We utilize this information solely for designing, engineering, and maintaining your enterprise digital solutions."}
            </p>

            <h2
              style={{
                color: "var(--color-text-primary, #FFFFFF)",
                fontSize: "1.35rem",
                marginTop: "2rem",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              3. {isId ? "Keamanan Data & Infrastruktur" : "Data Security & Infrastructure"}
            </h2>
            <p>
              {isId
                ? "Agilix menerapkan praktik keamanan industri terbaik, termasuk enkripsi transit (TLS 1.3), Content Security Policy (CSP) ketat, dan isolasi lingkungan deployment untuk memastikan aset digital klien terlindungi dari kerentanan eksternal."
                : "Agilix enforces industry-standard security measures, including in-transit encryption (TLS 1.3), strict Content Security Policy (CSP), and isolated deployment environments to safeguard digital assets against vulnerabilities."}
            </p>

            <h2
              style={{
                color: "var(--color-text-primary, #FFFFFF)",
                fontSize: "1.35rem",
                marginTop: "2rem",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              4. {isId ? "Layanan Pihak Ketiga" : "Third-Party Services"}
            </h2>
            <p>
              {isId
                ? "Website kami menggunakan layanan pihak ketiga yang terpercaya untuk analitik performa (Vercel Analytics & Speed Insights) dan transmisi pesan kontak (EmailJS). Layanan-layanan ini tunduk pada kebijakan privasi dan kepatuhan privasi global masing-masing."
                : "Our website utilizes reputable infrastructure services for performance telemetry (Vercel Analytics & Speed Insights) and contact messaging (EmailJS). These providers operate under their respective strict global privacy compliance standards."}
            </p>

            <h2
              style={{
                color: "var(--color-text-primary, #FFFFFF)",
                fontSize: "1.35rem",
                marginTop: "2rem",
                marginBottom: "0.75rem",
                letterSpacing: "-0.01em",
              }}
            >
              5. {isId ? "Hubungi Tim Keamanan Kami" : "Contact Our Security Team"}
            </h2>
            <p>
              {isId
                ? "Jika Anda memiliki pertanyaan terkait kebijakan privasi atau kepatuhan keamanan data pada sistem kami, hubungi kami melalui email: "
                : "If you have questions regarding our privacy practices or data compliance in our software architectures, reach out to us at: "}
              <a
                href="mailto:agilixsan@gmail.com"
                style={{ color: "var(--color-brand-accent, #4FD1C5)", textDecoration: "underline" }}
              >
                agilixsan@gmail.com
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
