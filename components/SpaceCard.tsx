"use client";

import Link from "next/link";
import type { Space } from "@/data/spaces";
import { isOnRequestPrice, priceOnRequestNotes } from "@/lib/price-copy";
import GuidedTourVideo from "./GuidedTourVideo";
import ImageBadge from "./ImageBadge";
import VideoCard from "./VideoCard";
import { useLanguage } from "./i18n";

export default function SpaceCard({ space }: { space: Space }) {
  const { language, t } = useLanguage();
  const spaceTitle = t(`spaces.${space.type}`, space.title);
  const isGuidedVisit = space.type === "guided-tour";
  const hasCustomPrice = isOnRequestPrice(space.price);

  const videoSrc = space.video.fallback ?? space.video.desktop;

  if (isGuidedVisit) {
    return (
      <article
        id="visite-guidee"
        aria-label={`Voir les dÃ©tails de ${spaceTitle}`}
        className="space-card glass-card col-span-full mx-auto flex h-full w-full max-w-3xl scroll-mt-32 flex-col overflow-hidden rounded-[24px] sm:rounded-[28px]"
      >
        <GuidedTourVideo />

        <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
          <div className="flex flex-wrap gap-2 text-xs font-black">
            <span className="rounded-full bg-[#E7F8F7] px-3 py-1 text-[#00A6A6]">
              {space.category}
            </span>
            <span className="rounded-full bg-[#D6B56D]/18 px-3 py-1 text-[#8B6B1F]">
              {space.price}
            </span>
          </div>
          {hasCustomPrice ? (
            <p className="mt-2 text-xs font-semibold leading-5 text-[#102A2A]/52">
              {priceOnRequestNotes[language]}
            </p>
          ) : null}
          <h3 className="mt-4 text-2xl font-black text-[#073B3A]">{spaceTitle}</h3>
          <p className="mt-3 text-sm leading-7 text-[#102A2A]/68">{space.description}</p>
          <div className="mt-auto pt-6">
            <Link
              href={`/espaces/${space.slug}?lang=${language}`}
              className="inline-flex min-h-12 max-w-full items-center justify-center rounded-full border border-[#00A6A6]/20 bg-white px-5 py-3 text-center text-sm font-black text-[#073B3A] transition hover:bg-[#00A6A6] hover:text-white sm:px-6"
            >
              Voir les dÃ©tails
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <Link
      href={`/espaces/${space.slug}?lang=${language}`}
      id={isGuidedVisit ? "visite-guidee" : undefined}
      aria-label={`Voir les détails de ${spaceTitle}`}
      className={`space-card glass-card group flex h-full flex-col overflow-hidden rounded-[24px] outline-none transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00A6A6]/12 focus-visible:ring-4 focus-visible:ring-[#00A6A6]/35 sm:rounded-[28px] ${
        isGuidedVisit ? "col-span-full mx-auto w-full max-w-3xl scroll-mt-32" : "scroll-mt-28"
      }`}
    >
      <div
        className="relative flex h-[210px] items-end overflow-hidden bg-[#073B3A] p-5 sm:p-6 md:h-[220px]"
      >
        <div className="absolute inset-0 transition duration-700 group-hover:scale-105">
          <VideoCard
            src={videoSrc}
            mobileSrc={space.video.mobile}
            poster={space.poster}
            label={spaceTitle}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,59,58,0.05),rgba(7,59,58,0.76))]" />
        <ImageBadge>{space.imageLabel}</ImageBadge>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
        <div className="flex flex-wrap gap-2 text-xs font-black">
          <span className="rounded-full bg-[#E7F8F7] px-3 py-1 text-[#00A6A6]">
            {space.category}
          </span>
          <span className="rounded-full bg-[#D6B56D]/18 px-3 py-1 text-[#8B6B1F]">
            {space.price}
          </span>
        </div>
        {hasCustomPrice ? (
          <p className="mt-2 text-xs font-semibold leading-5 text-[#102A2A]/52">
            {priceOnRequestNotes[language]}
          </p>
        ) : null}
        <h3 className="mt-4 text-2xl font-black text-[#073B3A]">{spaceTitle}</h3>
        <p className="mt-3 text-sm leading-7 text-[#102A2A]/68">{space.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {space.tags.map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-[#102A2A]/70 ring-1 ring-[#00A6A6]/10"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-6">
          <span className="inline-flex min-h-12 max-w-full items-center justify-center rounded-full border border-[#00A6A6]/20 bg-white px-5 py-3 text-center text-sm font-black text-[#073B3A] transition group-hover:bg-[#00A6A6] group-hover:text-white sm:px-6">
            Voir les détails
          </span>
        </div>
      </div>
    </Link>
  );
}
