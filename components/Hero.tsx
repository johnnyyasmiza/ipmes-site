"use client";

import Link from "next/link";
import { getWhatsAppUrl } from "./WhatsAppButton";
import { useLanguage } from "./i18n";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate flex min-h-svh w-full overflow-hidden bg-black px-4 pb-20 pt-28 sm:px-6 md:pt-36 lg:px-8">
      <video
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-90 brightness-85 contrast-105 saturate-110"
        src="/videos/hero-background.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/25 to-black/10" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/25 via-transparent to-black/45" />
      <div className="absolute inset-0 z-[3] bg-emerald-950/10" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center 2xl:max-w-[1500px]">
        <div className="animate-rise relative z-10 w-full max-w-4xl rounded-[1.5rem] border border-white/10 bg-black/20 p-5 shadow-2xl backdrop-blur-[2px] sm:rounded-[2rem] sm:p-8 md:p-10">
          <h1 className="max-w-4xl text-[32px] font-black leading-[1.08] text-white/95 drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 drop-shadow-lg md:text-lg lg:text-xl">
            {t("hero.description")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              className="inline-flex max-w-full items-center justify-center rounded-full bg-[#00b8b0] px-5 py-3 text-center text-sm font-bold text-white shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-[#00c9c0] sm:px-6 sm:py-4"
              href="/formations"
            >
              {t("hero.formations")}
            </Link>
            <Link
              className="inline-flex max-w-full items-center justify-center rounded-full border border-white/25 bg-white/12 px-5 py-3 text-center text-sm font-bold text-white/90 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20 sm:px-6 sm:py-4"
              href="/espaces"
            >
              {t("hero.spaces")}
            </Link>
            <a
              href={getWhatsAppUrl(t("hero.whatsappMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex max-w-full items-center justify-center rounded-full bg-white/90 px-5 py-3 text-center text-sm font-bold text-emerald-950 shadow-xl transition hover:-translate-y-0.5 hover:bg-white sm:px-6 sm:py-4"
            >
              {t("nav.whatsapp", "WhatsApp")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
