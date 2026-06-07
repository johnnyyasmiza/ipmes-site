"use client";

import Image from "next/image";
import Link from "next/link";
import type { LanguageCode } from "./i18n";
import { useLanguage } from "./i18n";

const sectionText: Record<LanguageCode, { eyebrow: string; title: string; description: string }> = {
  fr: {
    eyebrow: "International",
    title: "Un centre ouvert sur l'international",
    description: "Des formations et certifications orientées vers des standards professionnels reconnus.",
  },
  ar: {
    eyebrow: "دولي",
    title: "مركز منفتح على المستوى الدولي",
    description: "تكوينات وشهادات موجهة نحو معايير مهنية معترف بها.",
  },
  en: {
    eyebrow: "International",
    title: "A center open to international standards",
    description: "Training programs and certifications aligned with recognized professional standards.",
  },
  es: {
    eyebrow: "Internacional",
    title: "Un centro abierto al ámbito internacional",
    description: "Formaciones y certificaciones orientadas a estándares profesionales reconocidos.",
  },
  de: {
    eyebrow: "International",
    title: "Ein Zentrum mit internationaler Ausrichtung",
    description: "Kurse und Zertifizierungen nach anerkannten beruflichen Standards.",
  },
  tr: {
    eyebrow: "Uluslararası",
    title: "Uluslararası standartlara açık bir merkez",
    description: "Tanınan mesleki standartlara yönelik eğitimler ve sertifikalar.",
  },
};

const countries = [
  { key: "morocco", flagImage: "/images/flags/maroc.jpeg", slug: "educatrice" },
  { key: "uk", flagImage: "/images/flags/angleterre.jpeg", slug: "secourisme" },
  { key: "germany", flagImage: "/images/flags/allmagne.jpeg", slug: "hijama" },
  { key: "turkey", flagImage: "/images/flags/turkey.jpeg", slug: "esthetique-non-chirurgicale" },
] as const;

const countryText: Record<
  (typeof countries)[number]["key"],
  Record<LanguageCode, { name: string; subtitle: string; ariaLabel: string }>
> = {
  morocco: {
    fr: { name: "Maroc", subtitle: "Centre IPMES", ariaLabel: "Voir la formation éducatrice" },
    ar: { name: "المغرب", subtitle: "مركز IPMES", ariaLabel: "عرض تكوين المربية" },
    en: { name: "Morocco", subtitle: "IPMES center", ariaLabel: "View educator training" },
    es: { name: "Marruecos", subtitle: "Centro IPMES", ariaLabel: "Ver formación educadora" },
    de: { name: "Marokko", subtitle: "IPMES-Zentrum", ariaLabel: "Erzieherinnen-Kurs ansehen" },
    tr: { name: "Fas", subtitle: "IPMES merkezi", ariaLabel: "Eğitmenlik eğitimini gör" },
  },
  uk: {
    fr: { name: "Royaume-Uni", subtitle: "Certification UK", ariaLabel: "Voir la formation secourisme" },
    ar: { name: "المملكة المتحدة", subtitle: "شهادة UK", ariaLabel: "عرض تكوين الإسعافات الأولية" },
    en: { name: "United Kingdom", subtitle: "UK certification", ariaLabel: "View first aid training" },
    es: { name: "Reino Unido", subtitle: "Certificación UK", ariaLabel: "Ver formación primeros auxilios" },
    de: { name: "Vereinigtes Königreich", subtitle: "UK-Zertifizierung", ariaLabel: "Erste-Hilfe-Kurs ansehen" },
    tr: { name: "Birleşik Krallık", subtitle: "UK sertifikası", ariaLabel: "İlk yardım eğitimini gör" },
  },
  germany: {
    fr: { name: "Allemagne", subtitle: "Standards allemands", ariaLabel: "Voir la formation hijama" },
    ar: { name: "ألمانيا", subtitle: "معايير ألمانية", ariaLabel: "عرض تكوين الحجامة" },
    en: { name: "Germany", subtitle: "German standards", ariaLabel: "View hijama training" },
    es: { name: "Alemania", subtitle: "Estándares alemanes", ariaLabel: "Ver formación hijama" },
    de: { name: "Deutschland", subtitle: "Deutsche Standards", ariaLabel: "Hijama-Kurs ansehen" },
    tr: { name: "Almanya", subtitle: "Alman standartları", ariaLabel: "Hicama eğitimini gör" },
  },
  turkey: {
    fr: {
      name: "Turquie",
      subtitle: "Formation esthétique",
      ariaLabel: "Voir la formation esthétique non chirurgicale",
    },
    ar: { name: "تركيا", subtitle: "تكوين تجميلي", ariaLabel: "عرض تكوين التجميل غير الجراحي" },
    en: {
      name: "Turkey",
      subtitle: "Aesthetics training",
      ariaLabel: "View non-surgical aesthetics training",
    },
    es: {
      name: "Turquía",
      subtitle: "Formación estética",
      ariaLabel: "Ver formación estética no quirúrgica",
    },
    de: {
      name: "Türkei",
      subtitle: "Ästhetik-Kurs",
      ariaLabel: "Kurs nicht-chirurgische Ästhetik ansehen",
    },
    tr: {
      name: "Türkiye",
      subtitle: "Estetik eğitimi",
      ariaLabel: "Cerrahi olmayan estetik eğitimini gör",
    },
  },
};

export function InternationalFlags() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const text = sectionText[language];

  return (
    <section className="mx-auto my-10 w-full max-w-7xl px-0 2xl:max-w-[1500px]" dir={isArabic ? "rtl" : "ltr"}>
      <div className="overflow-hidden rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-lg backdrop-blur-xl sm:rounded-[28px] sm:p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className={isArabic ? "text-right" : "text-left"}>
            <span className="inline-flex rounded-full bg-[#e9fbf8] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#00a99d]">
              {text.eyebrow}
            </span>
            <h2 className="mt-4 text-2xl font-black text-[#073f3a] md:text-3xl">{text.title}</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-600">{text.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {countries.map((country) => {
              const localizedCountry = countryText[country.key][language];

              return (
                <Link
                  key={country.key}
                  href={`/formations/${country.slug}?lang=${language}`}
                  aria-label={localizedCountry.ariaLabel}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-transparent bg-white px-4 py-5 text-center shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:border-[#00A6A6] hover:shadow-2xl hover:shadow-[#00A6A6]/20 hover:ring-[#00A6A6]/25"
                >
                  <Image
                    src={country.flagImage}
                    alt=""
                    fill
                    sizes="180px"
                    className="pointer-events-none object-cover opacity-5 blur-[1px] saturate-125 transition-all duration-300 md:opacity-0 md:group-hover:scale-125 md:group-hover:opacity-10"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#e9fbf8]/70 via-white/40 to-transparent opacity-100 transition duration-300 md:opacity-0 md:group-hover:opacity-100" />
                  <div className="relative z-10 mx-auto h-14 w-20 overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-100 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-xl group-hover:ring-[#00A6A6]/30 sm:h-16 sm:w-24">
                    <Image
                      src={country.flagImage}
                      alt={localizedCountry.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  <p className="relative z-10 mt-3 text-sm font-black text-[#073f3a]">
                    {localizedCountry.name}
                  </p>
                  <p className="relative z-10 mt-1 text-[11px] font-bold text-slate-500">
                    {localizedCountry.subtitle}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
