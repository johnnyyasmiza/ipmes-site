import Link from "next/link";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const whyItems = [
  {
    number: "01",
    title: "Emplacement pratique à Casablanca Maârif",
    href: "https://www.google.com/maps/search/?api=1&query=45%20rue%20Atlas%20Maarif%20Casablanca",
    external: true,
  },
  {
    number: "02",
    title: "Équipe pédagogique expérimentée",
    href: "/a-propos#fondatrice",
  },
  {
    number: "03",
    title: "Espaces modulables pour formation, bien-être et business",
    href: "/espaces#visite-guidee",
  },
  {
    number: "04",
    title: "Réservation simple et rapide par WhatsApp",
    href: createWhatsAppUrl(
      "Bonjour IPMES, je souhaite réserver ou avoir plus d’informations sur vos formations et espaces.",
    ),
    external: true,
  },
];

function WhyCard({
  item,
}: {
  item: {
    number: string;
    title: string;
    href: string;
    external?: boolean;
  };
}) {
  const className =
    "glass-card block cursor-pointer rounded-[24px] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-[28px] sm:p-6";

  const content = (
    <>
      <span className="text-sm font-black text-[#D6B56D]">
        {item.number}
      </span>
      <p className="mt-3 font-bold leading-7 text-[#102A2A]">
        {item.title}
      </p>
    </>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {content}
    </Link>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 2xl:max-w-[1500px]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
            Pourquoi IPMES
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#073B3A] sm:text-4xl">
            Un centre pensé pour les professionnels, les formateurs et les porteurs de projets.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyItems.map((item) => (
            <WhyCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
