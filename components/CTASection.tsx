"use client";

import Image from "next/image";
import { getHeroImage } from "@/lib/ipmes-images";
import WhatsAppButton from "./WhatsAppButton";
import { useLanguage } from "./i18n";

export default function CTASection() {
  const image = getHeroImage(5);
  const { t } = useLanguage();

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[24px] bg-[#073B3A] p-5 text-center shadow-2xl shadow-[#073B3A]/15 sm:rounded-[28px] sm:p-8 md:p-12">
        {image ? (
          <Image
            src={image.large}
            alt="IPMES espace professionnel"
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover opacity-[0.28]"
          />
        ) : null}
        <div className="absolute inset-0 bg-[#073B3A]/76" />
        <div className="relative">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1CC7C7]">
            {t("cta.eyebrow")}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black text-white sm:text-4xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/72">
            {t("cta.description")}
          </p>
          <div className="mt-8">
            <WhatsAppButton label={t("cta.button")} variant="light" />
          </div>
        </div>
      </div>
    </section>
  );
}
