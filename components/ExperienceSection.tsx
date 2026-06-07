import Link from "next/link";
import { getWhatsAppUrl } from "./WhatsAppButton";
import { localizedPath, useLanguage } from "./i18n";

const experiences = [
  {
    titleKey: "experience.learnTitle",
    textKey: "experience.learnText",
    href: "/formations",
    ariaKey: "experience.learnAria",
    kind: "internal",
  },
  {
    titleKey: "experience.bookTitle",
    textKey: "experience.bookText",
    href: "whatsapp",
    ariaKey: "experience.bookAria",
    kind: "external",
  },
  {
    titleKey: "experience.growTitle",
    textKey: "experience.growText",
    href: "/espaces",
    ariaKey: "experience.growAria",
    kind: "internal",
  },
];

const cardClassName =
  "glass-card group block cursor-pointer rounded-[24px] p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00A6A6]/12 sm:rounded-[28px] sm:p-6 md:p-8";

function ExperienceCard({ item }: { item: (typeof experiences)[number] }) {
  const { language, t } = useLanguage();
  const href =
    item.href === "whatsapp"
      ? getWhatsAppUrl(t("experience.whatsappMessage"))
      : localizedPath(item.href, language);

  const content = (
    <>
      <h3 className="text-2xl font-black text-[#073B3A]">{t(item.titleKey)}</h3>
      <p className="mt-4 text-sm leading-7 text-[#102A2A]/68">{t(item.textKey)}</p>
      <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-[#E2F4F2]">
        <div className="h-full w-2/3 rounded-full bg-[#00A6A6] transition duration-500 group-hover:w-full" />
      </div>
    </>
  );

  if (item.kind === "external") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
        aria-label={t(item.ariaKey)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cardClassName} aria-label={t(item.ariaKey)}>
      {content}
    </Link>
  );
}

export default function ExperienceSection() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";

  return (
    <section className="relative overflow-hidden py-20" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1500px]">
        <div className={`max-w-3xl ${isArabic ? "text-right" : "text-left"}`}>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
            {t("experience.eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#073B3A] sm:text-4xl">
            {t("experience.title")}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {experiences.map((item) => (
            <ExperienceCard key={item.titleKey} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
