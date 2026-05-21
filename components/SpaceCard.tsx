"use client";

import Image from "next/image";
import type { Space } from "@/data/spaces";
import ImageBadge from "./ImageBadge";
import { SpaceVideo } from "./SpaceVideo";
import WhatsAppButton from "./WhatsAppButton";
import { useLanguage } from "./i18n";

export default function SpaceCard({ space }: { space: Space }) {
  const { t } = useLanguage();
  const spaceTitle = t(`spaces.${space.type}`, space.title);
  const isGuidedVisit = space.type === "guided-tour" || space.title === "Visite guidée";

  return (
    <article
      id={isGuidedVisit ? "visite-guidee" : undefined}
      className={`glass-card group flex h-full flex-col overflow-hidden rounded-[24px] transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00A6A6]/12 sm:rounded-[28px] ${
        isGuidedVisit ? "col-span-full mx-auto w-full max-w-3xl scroll-mt-32" : "scroll-mt-28"
      }`}
    >
      <div
        className={`relative flex items-end overflow-hidden bg-[#073B3A] p-5 sm:p-6 ${
          isGuidedVisit ? "h-[420px] md:h-[520px]" : "h-64 md:h-72"
        }`}
      >
        {space.videoUrl ? (
          <div
            className={`absolute inset-0 transition duration-700 ${
              isGuidedVisit ? "" : "group-hover:scale-105"
            }`}
          >
            <SpaceVideo
              src={space.videoUrl}
              poster={space.image}
              title={spaceTitle}
              allowSoundOnClick={space.allowSoundOnClick}
              objectFitClassName={isGuidedVisit ? "object-contain bg-[#073f3a]" : "object-cover"}
              objectPositionClassName={isGuidedVisit ? "object-[center_20%]" : "object-center"}
            />
          </div>
        ) : (
          <Image
            src={space.image}
            alt={space.title}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,59,58,0.05),rgba(7,59,58,0.76))]" />
        <ImageBadge>{space.imageLabel}</ImageBadge>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-8">
        <div className="flex flex-wrap gap-2 text-xs font-black">
          <span className="rounded-full bg-[#E7F8F7] px-3 py-1 text-[#00A6A6]">{space.category}</span>
          <span className="rounded-full bg-[#D6B56D]/18 px-3 py-1 text-[#8B6B1F]">{space.price}</span>
        </div>
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
          <WhatsAppButton
            label={t("spaces.reserve")}
            message={`Bonjour IPMES, je souhaite réserver: ${spaceTitle}.`}
          />
        </div>
      </div>
    </article>
  );
}
