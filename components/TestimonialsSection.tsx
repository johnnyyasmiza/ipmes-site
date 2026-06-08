"use client";

import { useLanguage } from "./i18n";

export default function TestimonialsSection() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";

  return (
    <section
      id="temoignages"
      className="testimonials-section scroll-mt-32"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1500px]">
        <div className="section-header mx-auto mb-8 max-w-2xl text-center">
          <span className="eyebrow text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
            {t("testimonials.eyebrow")}
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#073B3A] sm:text-4xl">
            {t("testimonials.title")}
          </h2>
          <p className="mt-4 text-base leading-8 text-[#102A2A]/70">
            {t("testimonials.description")}
          </p>
        </div>

        <div className="testimonial-video-card">
          <video
            controls
            playsInline
            preload="metadata"
            className="aspect-[9/16] w-full rounded-[24px] bg-[#002b24] object-contain"
            aria-label={t("testimonials.videoLabel")}
          >
            <source
              src="/videos/optimized/temoignage-mobile.mp4"
              media="(max-width: 768px)"
              type="video/mp4"
            />
            <source src="/videos/temoignage.mp4" type="video/mp4" />
            {t("video.unsupported")}
          </video>
        </div>
      </div>
    </section>
  );
}
