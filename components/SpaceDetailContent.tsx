"use client";

import Link from "next/link";
import type { Space } from "@/data/spaces";
import { getLocalizedSpace } from "@/lib/spaces-i18n";
import GuidedTourVideo from "./GuidedTourVideo";
import ResponsiveVideo from "./ResponsiveVideo";
import WhatsAppButton from "./WhatsAppButton";
import { localizedPath, useLanguage } from "./i18n";

export default function SpaceDetailContent({ space }: { space: Space }) {
  const { language, t } = useLanguage();
  const localizedSpace = getLocalizedSpace(space, language);
  const title = localizedSpace.title;
  const isGuidedVisit = space.type === "guided-tour";
  const isArabic = language === "ar";
  const whatsappMessage = t("spaceDetail.whatsappMessage").replace("{title}", title);

  return (
    <section
      className="mx-auto w-full max-w-6xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl shadow-[#00A6A6]/10 ring-1 ring-[#00A6A6]/10 sm:rounded-[2rem]"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="relative bg-[#073B3A]">
        {isGuidedVisit ? (
          <GuidedTourVideo />
        ) : (
          <>
            <ResponsiveVideo
              sources={space.video}
              poster={space.poster}
              alt={`${title} - IPMES Casablanca`}
              priority
              allowSoundOnClick={space.allowSoundOnClick}
              imageSizes="(min-width: 1024px) 1152px, 100vw"
              className="h-[280px] rounded-none sm:h-[380px] md:h-[460px]"
            />

            <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-emerald-950/75 via-emerald-950/28 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 z-10 text-white sm:bottom-8 sm:left-8 sm:right-8">
              <span className="mb-4 inline-flex max-w-full rounded-full bg-white px-4 py-2 text-sm font-bold text-[#073B3A] shadow sm:px-5">
                {localizedSpace.category}
              </span>
              <h1 className="text-[32px] font-black leading-[1.12] md:text-5xl">{title}</h1>
              <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-white/88 sm:text-base">
                {localizedSpace.description}
              </p>
            </div>
          </>
        )}
      </div>

      <div className="grid gap-8 p-5 sm:p-6 md:grid-cols-[1.45fr_1fr] md:p-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
            {t("spaceDetail.details")}
          </p>
          <h2 className="mt-3 text-2xl font-black text-[#073B3A] sm:text-3xl">
            {t("spaceDetail.readyTitle")}
          </h2>
          <p className="mt-4 text-base leading-8 text-[#102A2A]/75">
            {localizedSpace.detailedDescription}
          </p>

          <h3 className="mt-8 text-xl font-black text-[#073B3A]">{t("spaceDetail.usage")}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {localizedSpace.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#E7F8F7] px-4 py-2 text-sm font-black text-[#007F7F] ring-1 ring-[#00A6A6]/10"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <InfoGroup title={t("spaceDetail.equipment")} items={localizedSpace.equipment} />
            <InfoGroup title={t("spaceDetail.benefits")} items={localizedSpace.benefits} />
          </div>
        </div>

        <aside className="space-y-5 rounded-[1.75rem] bg-[#F4FAF9] p-5 sm:p-6">
          <div className="rounded-[1.5rem] bg-white p-5 shadow-lg shadow-[#00A6A6]/10 ring-1 ring-[#00A6A6]/10">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#00A6A6]">
              {t("spaceDetail.category")}
            </p>
            <h2 className="mt-2 text-2xl font-black text-[#073B3A]">{localizedSpace.category}</h2>
            <p className="mt-4 text-sm leading-7 text-[#102A2A]/68">
              {t("spaceDetail.note")}
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-[#00A6A6]/10">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#00A6A6]">
              {t("spaceDetail.price")}
            </p>
            <p className="mt-2 text-2xl font-black text-[#073B3A]">{localizedSpace.price}</p>
          </div>

          <WhatsAppButton
            label={localizedSpace.ctaLabel}
            message={whatsappMessage}
          />

          <Link
            href={localizedPath("/espaces", language)}
            className="inline-flex w-full items-center justify-center rounded-full border border-[#00A6A6]/20 bg-white px-5 py-4 text-center font-black text-[#073B3A] transition hover:-translate-y-0.5 hover:bg-[#F4FAF9] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00A6A6]/30"
          >
            {t("spaceDetail.back")}
          </Link>
        </aside>
      </div>
    </section>
  );
}

function InfoGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-[1.5rem] bg-[#F4FAF9] p-5 ring-1 ring-[#00A6A6]/10">
      <h3 className="text-xl font-black text-[#073B3A]">{title}</h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-white px-4 py-3 text-sm font-bold leading-6 text-[#102A2A]/72 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
