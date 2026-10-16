"use client";

import { useLanguage } from "../context/LanguageContext";

export default function WhatsAppButton() {
  const { lang } = useLanguage();
  const isId = lang === "id";

  // Ambil nomor WA dari env atau default ke nomor resmi Agilix
  const rawPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "0895324435347";
  // Normalisasi nomor ke format internasional (misal 08xx -> 628xx)
  const phone = rawPhone.replace(/\D/g, "").replace(/^0/, "62");

  const message = isId
    ? "Halo Agilix Tech, saya tertarik untuk konsultasi mengenai solusi IT / pembuatan sistem & website."
    : "Hello Agilix Tech, I am interested in consulting about IT solutions / web development.";

  const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <aside
      className="wa-floating"
      aria-label="WhatsApp Contact"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-floating__btn"
        aria-label={isId ? "Chat WhatsApp dengan Agilix" : "Chat on WhatsApp with Agilix"}
      >
        <span className="wa-floating__pulse" />
        <svg
          viewBox="0 0 24 24"
          className="wa-floating__icon"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.877-2.056-.977-.275-.1-.476-.15-.676.15-.201.3-.776.977-.951 1.178-.175.2-.351.226-.652.075-.301-.15-1.272-.468-2.423-1.494-.895-.798-1.5-1.784-1.675-2.085-.175-.3-.019-.463.132-.613.136-.134.301-.351.451-.527.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.677-1.631-.927-2.233-.244-.585-.492-.506-.677-.515-.175-.01-.376-.01-.576-.01-.201 0-.527.075-.803.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.229 3.109c.15.201 2.121 3.238 5.138 4.542.718.31 1.278.496 1.716.635.722.23 1.379.197 1.9.119.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.076-.126-.276-.201-.577-.351zM12.04 2C6.516 2 2.022 6.49 2.022 12.01c0 1.98.577 3.824 1.576 5.385L2 22l4.774-1.536A9.97 9.97 0 0 0 12.04 22c5.523 0 10.016-4.49 10.016-10.01C22.056 6.49 17.563 2 12.04 2zm0 18.23a8.19 8.19 0 0 1-4.225-1.168l-.303-.18-2.827.91.933-2.753-.198-.315A8.204 8.204 0 0 1 3.84 12.01c0-4.52 3.679-8.198 8.2-8.198 4.522 0 8.2 3.678 8.2 8.198 0 4.52-3.678 8.22-8.2 8.22z" />
        </svg>

        <span className="wa-floating__label">
          <span className="wa-floating__status-dot" />
          {isId ? "Chat via WhatsApp" : "Chat via WhatsApp"}
        </span>
      </a>
    </aside>
  );
}

