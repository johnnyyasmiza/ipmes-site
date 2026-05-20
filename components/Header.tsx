"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LanguageSelector from "./LanguageSelector";
import WhatsAppButton from "./WhatsAppButton";
import { useLanguage } from "./i18n";

const navItems = [
  { href: "/", labelKey: "nav.home" },
  { href: "/formations", labelKey: "nav.formations" },
  { href: "/espaces", labelKey: "nav.spaces" },
  { href: "/a-propos", labelKey: "nav.about" },
  { href: "/contact", labelKey: "nav.contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4">
      <div
        className={`relative mx-auto w-full max-w-7xl rounded-[1.7rem] border transition duration-300 2xl:max-w-[1500px] ${
          scrolled
            ? "border-white/60 bg-white/78 shadow-2xl shadow-[#073B3A]/10 backdrop-blur-2xl"
            : "border-white/50 bg-white/58 shadow-lg shadow-[#073B3A]/5 backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg shadow-[#073B3A]/10 ring-1 ring-[#00A6A6]/10">
              <Image
                src="/images/logo-ipmes.png"
                alt="Logo IPMES"
                width={52}
                height={52}
                className="h-full w-full object-contain p-1"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block text-lg font-black text-[#073B3A]">IPMES</span>
              <span className="block truncate text-xs font-medium text-[#7BAEAE]">
                {t("nav.tagline", "Formation, espaces et événements")}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 text-sm font-semibold text-[#102A2A]/75 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 transition hover:-translate-y-0.5 hover:bg-[#F4FAF9] hover:text-[#00A6A6]"
              >
                {t(item.labelKey)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSelector />
            <WhatsAppButton label={t("nav.reserve", "Réserver")} />
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F4FAF9] text-lg font-black text-[#073B3A] ring-1 ring-[#00A6A6]/10 lg:hidden"
            aria-label={t("nav.menu", "Ouvrir le menu")}
          >
            {open ? "×" : "≡"}
          </button>
        </div>

        {open ? (
          <div className="absolute left-0 right-0 top-full mt-3 grid gap-2 rounded-[24px] border border-[#00A6A6]/10 bg-white p-4 shadow-2xl shadow-[#073B3A]/12 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-black text-[#073B3A] transition hover:bg-[#F4FAF9]"
              >
                {t(item.labelKey)}
              </Link>
            ))}
            <div className="flex flex-col gap-2 sm:flex-row">
              <LanguageSelector onSelect={() => setOpen(false)} />
              <WhatsAppButton label={t("nav.whatsapp", "WhatsApp")} />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
