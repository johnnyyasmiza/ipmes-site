"use client";

import Image from "next/image";
import Link from "next/link";
import type { Formation } from "@/data/formations";
import { getLocalizedFormation } from "@/lib/formations-i18n";
import { isOnRequestPrice, priceOnRequestLabels, priceOnRequestNotes } from "@/lib/price-copy";
import OptimizedVideo from "./OptimizedVideo";
import type { LanguageCode } from "./i18n";
import { localizedPath, useLanguage } from "./i18n";

function getLocalizedContent(formation: Formation, language: LanguageCode) {
  const content = formation.detailContent;
  const localizedFormation = getLocalizedFormation(formation, language);

  if (!content) {
    return {
      title: localizedFormation.title,
      body: localizedFormation.shortDescription,
    };
  }

  return content[language] ?? content.fr;
}

function getLocalizedDuration(formation: Formation, language: LanguageCode) {
  return language === "ar" ? formation.durationAr : formation.durationFr;
}

function renderTextBlock(block: string, index: number) {
  const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
  const listItems = lines.filter((line) => line.startsWith("•"));

  if (listItems.length > 0) {
    const intro = lines.filter((line) => !line.startsWith("•")).join(" ");

    return (
      <div key={index} className="space-y-3">
        {intro ? <p>{intro}</p> : null}
        <ul className="space-y-2">
          {listItems.map((item) => (
            <li key={item} className="leading-8">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return <p key={index}>{block}</p>;
}

export default function FormationDetailContent({ formation }: { formation: Formation }) {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";
  const content = getLocalizedContent(formation, language);
  const localizedFormation = getLocalizedFormation(formation, language);
  const textBlocks = content.body.split(/\n\s*\n/).filter((block) => block.trim().length > 0);
  const videoSrc = formation.videoSrc;
  const displayedPrice = isArabic ? formation.priceAr : formation.price;
  const priceValue = isOnRequestPrice(displayedPrice) ? priceOnRequestLabels[language] : displayedPrice;
  const hasCustomPrice = isOnRequestPrice(priceValue);

  return (
    <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl shadow-[#00A6A6]/10 ring-1 ring-[#00A6A6]/10 sm:rounded-[2rem]">
      <div className="relative h-[320px] overflow-hidden bg-[#073B3A] md:h-[420px]">
        {videoSrc ? (
          <OptimizedVideo
            src={videoSrc}
            mobileSrc={formation.videoMobileSrc}
            poster={formation.image}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay={false}
            muted
            loop={false}
            playsInline
            preload="none"
            playOnClick
            aria-label={content.title}
          />
        ) : (
          <Image
            src={formation.image}
            alt={content.title}
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        )}

        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-emerald-950/70 via-emerald-950/30 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 z-10 text-white sm:bottom-8 sm:left-8 sm:right-8">
          <span className="mb-4 inline-flex max-w-full rounded-full bg-white px-4 py-2 text-sm font-bold text-[#073B3A] shadow sm:px-5">
            {localizedFormation.category}
          </span>

          <h1 className="text-[32px] font-black leading-[1.12] md:text-5xl">{content.title}</h1>
        </div>
      </div>

      <div className="grid gap-8 p-6 md:grid-cols-[1.5fr_1fr] md:p-8">
        <div dir={isArabic ? "rtl" : "ltr"} className={isArabic ? "text-right" : "text-left"}>
          <h2 className="text-2xl font-black text-[#073B3A]">{t("formationDetail.details")}</h2>

          <div className="mt-4 space-y-5 text-base leading-8 text-[#102A2A]/75">
            {textBlocks.map(renderTextBlock)}
          </div>

          <Link
            href={localizedPath("/formations", language)}
            className="mt-8 inline-flex max-w-full rounded-full border border-[#00A6A6]/20 bg-white px-5 py-3 text-center font-black text-[#073B3A] transition hover:-translate-y-0.5 hover:bg-[#F4FAF9] sm:px-6"
          >
            {t("formationDetail.back")}
          </Link>
        </div>

        <aside className="space-y-5 rounded-[1.75rem] bg-[#F4FAF9] p-6">
          <div className="rounded-[1.5rem] bg-white p-5 shadow-lg shadow-[#00A6A6]/10 ring-1 ring-[#00A6A6]/10">
            <h3 className="text-xl font-black text-[#073B3A]">{t("formationDetail.keyInfo")}</h3>

            <div className="mt-4 grid gap-3">
              {[
                [t("formationDetail.duration"), localizedFormation.duration || getLocalizedDuration(formation, language)],
                [t("formationDetail.frequency"), t("formationDetail.frequencyValue")],
                [t("formationDetail.price"), priceValue],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl bg-[#F4FAF9] px-4 py-3 ring-1 ring-[#00A6A6]/10"
                >
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-[#00A6A6]">
                    {label}
                  </p>
                  <p className="mt-1 text-lg font-black text-[#073B3A]">{value}</p>
                  {label === t("formationDetail.price") && hasCustomPrice ? (
                    <p className="mt-1 text-xs font-semibold leading-5 text-[#102A2A]/52">
                      {priceOnRequestNotes[language]}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black text-[#073B3A]">{t("formationDetail.certification")}</h3>

            <div className="mt-4 rounded-2xl bg-white p-5 shadow-sm">
              {formation.diplomaFlagImage && (
                <div className="relative h-20 w-28 overflow-hidden rounded-xl shadow-sm">
                  <Image
                    src={formation.diplomaFlagImage}
                    alt={localizedFormation.diplomaCountry || content.title}
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
              )}

              <p className="mt-3 font-bold text-[#073B3A]">
                {localizedFormation.diplomaLabel}
              </p>
            </div>
          </div>

          <Link
            href={localizedPath("/contact", language)}
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#00A6A6] px-5 py-4 text-center font-black text-white shadow-lg shadow-[#00A6A6]/20 transition hover:-translate-y-0.5 hover:bg-[#008F8F] sm:px-6"
          >
            {t("formationDetail.reserve")}
          </Link>
        </aside>
      </div>
    </section>
  );
}
