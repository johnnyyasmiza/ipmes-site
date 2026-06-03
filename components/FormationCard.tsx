"use client";

import Image from "next/image";
import Link from "next/link";
import type { Formation } from "@/data/formations";
import { getLocalizedFormation } from "@/lib/formations-i18n";
import { isOnRequestPrice, priceOnRequestNotes } from "@/lib/price-copy";
import ImageBadge from "./ImageBadge";
import VideoCard from "./VideoCard";
import { useLanguage } from "./i18n";

const detailsLabel = {
  fr: "Plus de détails",
  ar: "المزيد من التفاصيل",
  en: "More details",
  es: "Más detalles",
  de: "Mehr Details",
  tr: "Daha fazla detay",
};

export function FormationCard({ formation }: { formation: Formation }) {
  const { language } = useLanguage();
  const localizedFormation = getLocalizedFormation(formation, language);
  const isArabic = language === "ar";
  const hasCustomPrice = isOnRequestPrice(localizedFormation.price);

  return (
    <Link
      href={`/formations/${formation.slug}?lang=${language}`}
      className="training-card group block overflow-hidden rounded-[24px] bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-[28px]"
    >
      <div className="relative h-[210px] overflow-hidden rounded-t-[inherit] bg-emerald-950 md:h-[220px]">
        {formation.videoSrc ? (
          <VideoCard
            src={formation.videoSrc}
            mobileSrc={formation.videoMobileSrc}
            poster={formation.image}
            label={localizedFormation.title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            objectPosition={formation.videoObjectPosition}
          />
        ) : (
          <Image
            src={formation.image}
            alt={localizedFormation.title}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        )}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-emerald-950/55 via-emerald-950/20 to-transparent" />
        <div className="absolute bottom-5 left-5 z-10">
          <ImageBadge>{localizedFormation.category}</ImageBadge>
        </div>
      </div>

      <div
        className={`relative overflow-hidden bg-white p-5 sm:p-6 md:p-8 ${
          isArabic ? "text-right" : "text-left"
        }`}
        dir={isArabic ? "rtl" : "ltr"}
      >
        {formation.diplomaFlagImage && (
          <div className="pointer-events-none absolute -right-8 top-10 z-[1] h-32 w-44 opacity-25 transition-all duration-700 ease-out md:opacity-0 md:group-hover:-translate-y-12 md:group-hover:rotate-[-6deg] md:group-hover:scale-110 md:group-hover:opacity-35">
            <Image
              src={formation.diplomaFlagImage}
              alt={localizedFormation.diplomaCountry || localizedFormation.title}
              fill
              sizes="176px"
              className="rounded-xl object-cover shadow-sm"
            />
          </div>
        )}

        <div className="relative z-10">
          <div className="mb-4 flex flex-wrap gap-2 text-xs font-bold">
            <span className="rounded-full bg-[#e9fbf8] px-4 py-1 text-[#00a99d]">
              {localizedFormation.category}
            </span>
            <span className="rounded-full bg-[#f4eed8] px-4 py-1 text-[#8a6a16]">
              {localizedFormation.duration}
            </span>
            <span className="rounded-full bg-white px-4 py-1 text-[#073f3a] ring-1 ring-slate-200">
              {localizedFormation.price}
            </span>
          </div>
          {hasCustomPrice ? (
            <p className="-mt-2 mb-4 text-xs font-semibold leading-5 text-[#102A2A]/52">
              {priceOnRequestNotes[language]}
            </p>
          ) : null}
          <h3 className="text-xl font-black text-[#073f3a] sm:text-2xl">
            {localizedFormation.title}
          </h3>
          <p className="mt-4 leading-7 text-slate-600">{localizedFormation.shortDescription}</p>
          <p className="mt-5 font-black text-[#073f3a]">{localizedFormation.diplomaLabel}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {localizedFormation.details.slice(0, 3).map((detail) => (
              <span
                key={detail}
                className="rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600"
              >
                {detail}
              </span>
            ))}
          </div>
          <span className="mt-6 inline-flex max-w-full rounded-full border border-[#00a99d]/20 bg-white px-5 py-3 text-center text-sm font-black text-[#073f3a] transition group-hover:bg-[#00a99d] group-hover:text-white">
            {detailsLabel[language]}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default FormationCard;
