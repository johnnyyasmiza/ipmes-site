"use client";

import Image from "next/image";
import Link from "next/link";
import type { Formation } from "@/data/formations";
import ImageBadge from "./ImageBadge";
import OptimizedVideo from "./OptimizedVideo";
import { useLanguage } from "./i18n";

export function FormationCard({ formation }: { formation: Formation }) {
  const { t } = useLanguage();
  const formationTitle = t(`formations.${formation.id}`, formation.titleFr);
  const videoSrc = formation.videoSrc;

  return (
    <Link
      href={`/formations/${formation.slug}`}
      className="group block overflow-hidden rounded-[24px] bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-[28px]"
    >
      <div className="relative flex h-64 items-end overflow-hidden bg-gradient-to-br from-[#073B3A] via-[#0f6f68] to-[#E7F8F7] p-5 md:h-72">
        {videoSrc ? (
          <>
            <Image
              src={formation.image}
              alt={formationTitle}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <OptimizedVideo
              src={videoSrc}
              poster={formation.image}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              playOnHover
              className="absolute inset-0 h-full w-full object-cover"
              ariaLabel={formationTitle}
            />
          </>
        ) : (
          <Image
            src={formation.image}
            alt={formationTitle}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        )}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-emerald-950/45 via-emerald-950/20 to-transparent" />
        <ImageBadge>{formation.category}</ImageBadge>
      </div>

      <div className="relative overflow-hidden bg-white p-5 sm:p-6 md:p-8">
        {formation.diplomaFlagImage && (
          <div className="pointer-events-none absolute -right-8 top-10 z-[1] h-32 w-44 opacity-0 transition-all duration-700 ease-out group-hover:-translate-y-12 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:opacity-35">
            <Image
              src={formation.diplomaFlagImage}
              alt={formation.diplomaCountry || formationTitle}
              fill
              sizes="176px"
              className="rounded-xl object-cover shadow-sm"
            />
          </div>
        )}

        <div className="relative z-10">
          <div className="mb-4 flex flex-wrap gap-2 text-xs font-bold">
            <span className="rounded-full bg-[#e9fbf8] px-4 py-1 text-[#00a99d]">
              {formation.category}
            </span>
            <span className="rounded-full bg-[#f4eed8] px-4 py-1 text-[#8a6a16]">
              {formation.durationFr}
            </span>
            <span className="rounded-full bg-white px-4 py-1 text-[#073f3a] ring-1 ring-slate-200">
              {formation.price}
            </span>
          </div>
          <h3 className="text-xl font-black text-[#073f3a] sm:text-2xl">{formationTitle}</h3>
          <p className="mt-4 leading-7 text-slate-600">{formation.shortDescriptionFr}</p>
          <p className="mt-5 font-black text-[#073f3a]">{formation.diplomaLabel}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {formation.details.slice(0, 3).map((detail) => (
              <span
                key={detail}
                className="rounded-full bg-slate-50 px-4 py-2 text-xs font-bold text-slate-600"
              >
                {detail}
              </span>
            ))}
          </div>
          <span className="mt-6 inline-flex max-w-full rounded-full border border-[#00a99d]/20 bg-white px-5 py-3 text-center text-sm font-black text-[#073f3a] transition group-hover:bg-[#00a99d] group-hover:text-white">
            Plus de détails
          </span>
        </div>
      </div>
    </Link>
  );
}

export default FormationCard;
