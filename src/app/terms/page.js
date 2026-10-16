"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

export default function TermsPage() {
  const { lang } = useLanguage();
  const isId = lang === "id";

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="page-header" style={{ textAlign: "center" }}>
          <div className="page-header__badge">
            {isId ? "PERJANJIAN & KETENTUAN" : "AGREEMENT & CONDITIONS"}
          </div>
          <h1 className="page-header__title">
            {isId ? "Syarat &" : "Terms of"}{" "}
            <span className="page-header__title-highlight">
              {isId ? "Ketentuan" : "Service"}
            </span>
          </h1>
          <p className="page-header__subtitle" style={{ margin: "0 auto" }}>
            {isId
              ? "Prinsip transparansi kerja sama, ruang lingkup pengerjaan teknis, dan standar kepatuhan layanan rekayasa perangkat lunak Agilix."
              : "Standard engineering agreements, project delivery lifecycle, IP rights, and service conditions at Agilix IT Solutions."}
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
              1. {isId ? "Ruang Lingkup Layanan" : "Scope of Services"}
            </h2>
            <p>
              {isId
                ? "Agilix IT Solutions menyediakan jasa rekayasa perangkat lunak, pengembangan aplikasi berbasis web, sistem Point of Sale (POS), dan arsitektur cloud enterprise. Setiap proyek diatur berdasarkan dokumen Spesifikasi Kebutuhan Proyek (SRS) yang disepakati bersama sebelum tahap pengembangan dimulai."
                : "Agilix IT Solutions provides custom software engineering, web application development, Point of Sale (POS) platforms, and enterprise cloud architectures. All deliverables conform to agreed-upon Software Requirements Specifications (SRS) formalized prior to development phases."}
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
              2. {isId ? "Siklus Milestone & Pembayaran" : "Project Milestones & Billing"}
            </h2>
            <p>
              {isId
                ? "Pengembangan sistem kami mengikuti 8 tahapan terstruktur (mulai dari Requirement Gathering, UI/UX, Development, UAT, PAT, hingga Go-Live). Pembayaran dilakukan secara bertahap berbasis pencapaian milestone resmi untuk memastikan akuntabilitas hasil kerja."
                : "Our development lifecycle adheres to 8 structured delivery milestones (from Requirement Gathering, UI/UX prototyping, sprint development, UAT, PAT, to Go-Live). Invoicing follows clear milestone sign-offs ensuring mutual accountability."}
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
              3. {isId ? "Hak Kekayaan Intelektual (IP)" : "Intellectual Property Rights"}
            </h2>
            <p>
              {isId
                ? "Setelah penyelesaian pembayaran penuh, seluruh hak kepemilikan kode sumber khusus, aset desain, dan hak cipta aplikasi diserahkan sepenuhnya kepada klien, kecuali modul perangkat lunak open-source dan pustaka pihak ketiga yang terikat lisensinya masing-masing."
                : "Upon full settlement of milestone payments, all proprietary source code, design assets, and tailored intellectual property are fully transferred to the client, excluding licensed open-source libraries and underlying public frameworks."}
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
              4. {isId ? "Garansi & Pemeliharaan Sistem" : "Warranty & Maintenance"}
            </h2>
            <p>
              {isId
                ? "Agilix memberikan masa garansi perbaikan bug dan stabilitas sistem setelah tanggal Go-Live resmi sesuai kesepakatan kontrak. Pemeliharaan berkala, penambahan fitur di luar ruang lingkup awal, atau optimasi infrastruktur lanjutan dapat diakomodasi melalui Perjanjian Tingkat Layanan (SLA) terpisah."
                : "Agilix provides warranty coverage for defect remediation and stability following official production Go-Live. Ongoing infrastructure monitoring, scope expansion, and support SLAs are governed through separate maintenance agreements."}
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
              5. {isId ? "Kontak & Konsultasi Kontrak" : "Contact & Contract Inquiries"}
            </h2>
            <p>
              {isId
                ? "Untuk pertanyaan atau penyesuaian klausul kerja sama resmi (PKS/MOU), silakan hubungi tim legal dan bisnis kami melalui email: "
                : "For legal inquiries, NDA execution, or commercial contract consultations, please reach out to our business team at: "}
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
