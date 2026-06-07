"use client";

import { createWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "./i18n";

type WhatsAppButtonProps = {
  label?: string;
  variant?: "primary" | "light" | "floating";
  message?: string;
};

const defaultMessage = "Bonjour IPMES, je souhaite avoir plus d'informations.";

export function getWhatsAppUrl(message = defaultMessage) {
  return createWhatsAppUrl(message);
}

export default function WhatsAppButton({
  label = "WhatsApp",
  variant = "primary",
  message,
}: WhatsAppButtonProps) {
  const { t } = useLanguage();
  const styles = {
    primary:
      "shine-button bg-[#00A6A6] text-white shadow-lg shadow-[#00A6A6]/25 hover:-translate-y-1 hover:bg-[#073B3A]",
    light:
      "bg-white/90 text-[#073B3A] ring-1 ring-[#00A6A6]/15 backdrop-blur hover:-translate-y-1 hover:bg-[#F4FAF9]",
    floating:
      "whatsapp-pulse fixed bottom-4 right-4 z-50 bg-[#00A6A6] text-white shadow-xl shadow-[#00A6A6]/30 hover:-translate-y-1 hover:bg-[#073B3A] md:bottom-6 md:right-6 md:px-7",
  };

  return (
    <a
      href={getWhatsAppUrl(message ?? t("hero.whatsappMessage"))}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 max-w-full items-center justify-center rounded-full px-5 py-3 text-center text-sm font-black transition duration-300 sm:px-6 ${styles[variant]}`}
    >
      {label}
    </a>
  );
}
