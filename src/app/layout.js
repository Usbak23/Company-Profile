import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import WhatsAppButton from "./components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.agilix.id";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Agilix IT Solutions — Premium Web Solutions & Enterprise IT Architecture",
    template: "%s | Agilix IT Solutions",
  },
  description: "Premium web solutions and enterprise IT architecture for the modern digital landscape.",
  keywords: [
    "IT Solutions",
    "Web Development",
    "Enterprise Architecture",
    "SaaS Platform",
    "Agilix",
    "Point of Sale",
    "Software House Indonesia",
  ],
  authors: [{ name: "Agilix IT Solutions" }],
  creator: "Agilix IT Solutions",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: baseUrl,
    siteName: "Agilix IT Solutions",
    title: "Agilix IT Solutions — Premium Web Solutions & Enterprise IT Architecture",
    description: "Premium web solutions and enterprise IT architecture for the modern digital landscape.",
    images: [
      {
        url: "/agilix-logo.png",
        width: 1024,
        height: 1024,
        alt: "Agilix IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agilix IT Solutions",
    description: "Premium web solutions and enterprise IT architecture for the modern digital landscape.",
    images: ["/agilix-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Agilix IT Solutions",
      alternateName: ["Agilix", "Agilix Tech", "PT Agilix Tech"],
      description: "Premium web solutions and enterprise IT architecture for the modern digital landscape.",
      publisher: {
        "@id": `${baseUrl}/#organization`,
      },
      inLanguage: ["id-ID", "en-US"],
    },
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Agilix IT Solutions",
      alternateName: ["Agilix", "Agilix Tech"],
      url: baseUrl,
      logo: `${baseUrl}/agilix-logo.png`,
      description: "Premium web solutions and enterprise IT architecture for the modern digital landscape.",
      telephone: "+62-895-3244-35347",
      email: "agilixsan@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Komp. Inkopad, Kec. Tajurhalang",
        addressLocality: "Bogor",
        postalCode: "16320",
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-895-3244-35347",
        contactType: "customer service",
        areaServed: "ID",
        availableLanguage: ["Indonesian", "English"],
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <WhatsAppButton />
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
