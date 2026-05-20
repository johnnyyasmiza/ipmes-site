import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "./WhatsAppButton";

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <rect width="16" height="16" x="4" y="4" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.7" cy="7.3" r="1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
      <path d="M12.04 3.5A8.43 8.43 0 0 0 4.8 16.27L3.75 20.1l3.92-1.03a8.42 8.42 0 0 0 4.37 1.21h.01A8.39 8.39 0 0 0 20.5 11.9a8.45 8.45 0 0 0-8.46-8.4Zm.01 15.36h-.01a6.98 6.98 0 0 1-3.56-.98l-.25-.15-2.33.61.62-2.27-.16-.26a6.96 6.96 0 1 1 5.69 3.05Zm3.82-5.2c-.21-.1-1.24-.61-1.43-.68-.19-.07-.33-.1-.47.1-.14.21-.54.68-.66.82-.12.14-.24.16-.45.05-.21-.1-.88-.32-1.67-1.03-.62-.55-1.04-1.23-1.16-1.44-.12-.21-.01-.32.09-.43.09-.09.21-.24.31-.36.1-.12.14-.21.21-.35.07-.14.03-.26-.02-.36-.05-.1-.47-1.13-.64-1.55-.17-.41-.34-.35-.47-.36h-.4c-.14 0-.36.05-.55.26-.19.21-.73.71-.73 1.73s.75 2.01.85 2.15c.1.14 1.47 2.24 3.56 3.14.5.21.89.34 1.19.44.5.16.96.14 1.32.09.4-.06 1.24-.51 1.41-1 .17-.49.17-.91.12-1-.05-.09-.19-.14-.4-.24Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#00A6A6]/10 bg-[#073B3A] text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(28,199,199,0.16),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(214,181,109,0.16),transparent_32%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8 2xl:max-w-[1500px]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white ring-1 ring-white/20">
              <Image
                src="/images/logo-ipmes.png"
                alt="Logo IPMES"
                width={50}
                height={50}
                className="h-full w-full object-contain p-1"
              />
            </span>
            <p className="text-3xl font-black">IPMES</p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/70">
            Centre moderne à Casablanca Maârif pour se former, réserver un espace professionnel et développer ses projets dans un cadre premium accessible.
          </p>
        </div>
        <div>
          <p className="font-bold">Navigation</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <Link href="/formations" className="hover:text-white">Formations</Link>
            <Link href="/espaces" className="hover:text-white">Espaces à louer</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-bold">Contact</p>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Adresse : 45 rue Atlas, Maârif, Casablanca<br />
            Réservations et informations par WhatsApp.
          </p>
          <div className="mt-5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-white/90 px-5 py-3 text-center text-sm font-black text-[#073B3A] ring-1 ring-[#00A6A6]/15 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-[#F4FAF9] sm:px-6"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <p className="font-bold">Suivez-nous</p>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <a
              href="https://www.instagram.com/ipmespro?igsh=cWJldzA5NzJjcmFz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10">
                <InstagramIcon />
              </span>
              Instagram
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10">
                <WhatsAppIcon />
              </span>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-4 py-5 text-center text-xs text-white/55 sm:px-6">
        © 2026 IPMES. Site public premium.
      </div>
    </footer>
  );
}
