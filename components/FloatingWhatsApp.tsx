import { getWhatsAppUrl } from "./WhatsAppButton";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl("Bonjour IPMES, je souhaite avoir plus d'informations.")}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-pulse fixed bottom-4 right-4 z-50 inline-flex min-h-14 max-w-[calc(100vw-2rem)] items-center justify-center rounded-full bg-[#00A6A6] px-5 py-4 text-center text-sm font-black text-white shadow-2xl shadow-[#00A6A6]/35 transition hover:-translate-y-1 hover:bg-[#073B3A] md:bottom-6 md:right-6 md:px-7"
    >
      WhatsApp
    </a>
  );
}
