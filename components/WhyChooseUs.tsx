import Link from "next/link";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import FounderCard from "./FounderCard";
import { localizedPath, useLanguage } from "./i18n";

const whyItems = [
  {
    titleKey: "why.location",
    href: "https://www.google.com/maps/search/?api=1&query=45%20rue%20Atlas%20Maarif%20Casablanca",
    external: true,
  },
  {
    titleKey: "why.team",
    href: "/a-propos#fondatrice",
  },
  {
    titleKey: "why.spaces",
    href: "/espaces#visite-guidee",
  },
  {
    titleKey: "why.booking",
    href: "whatsapp",
    external: true,
  },
];

function WhyCard({
  item,
}: {
  item: {
    titleKey: string;
    href: string;
    external?: boolean;
  };
}) {
  const { language, t } = useLanguage();
  const className =
    "glass-card block cursor-pointer rounded-[24px] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[28px] sm:p-6";
  const href =
    item.href === "whatsapp"
      ? createWhatsAppUrl(t("why.whatsappMessage"))
      : localizedPath(item.href, language);

  const content = (
    <>
      <p className="font-bold leading-7 text-[#102A2A]">{t(item.titleKey)}</p>
    </>
  );

  if (item.external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}

export default function WhyChooseUs() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";

  return (
    <section className="py-20" dir={isArabic ? "rtl" : "ltr"}>
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 2xl:max-w-[1500px]">
        <div className={isArabic ? "text-right" : "text-left"}>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
            {t("why.eyebrow")}
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#073B3A] sm:text-4xl">
            {t("why.title")}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyItems.map((item) => (
            <WhyCard key={item.titleKey} item={item} />
          ))}
        </div>
        <div className="lg:col-span-2">
          <FounderCard />
        </div>
      </div>
    </section>
  );
}
