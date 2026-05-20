import Link from "next/link";
import { getWhatsAppUrl } from "./WhatsAppButton";

const experiences = [
  {
    title: "Apprendre",
    text: "Des formations pratiques dans un cadre clair, équipé et pensé pour progresser vite.",
    href: "/formations",
    ariaLabel: "Voir les formations",
    kind: "internal",
  },
  {
    title: "Réserver",
    text: "Des espaces flexibles pour cours, rendez-vous, yoga, ateliers et événements.",
    href: getWhatsAppUrl("Bonjour IPMES, je souhaite réserver ou avoir plus d'informations."),
    ariaLabel: "Réserver sur WhatsApp",
    kind: "external",
  },
  {
    title: "Développer",
    text: "Un lieu professionnel pour lancer une activité, recevoir ses clients et créer du réseau.",
    href: "/espaces",
    ariaLabel: "Voir les espaces",
    kind: "internal",
  },
];

const cardClassName =
  "glass-card group block cursor-pointer rounded-[24px] p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#00A6A6]/12 sm:rounded-[28px] sm:p-6 md:p-8";

function ExperienceCard({ item }: { item: (typeof experiences)[number] }) {
  const content = (
    <>
      <h3 className="text-2xl font-black text-[#073B3A]">{item.title}</h3>
      <p className="mt-4 text-sm leading-7 text-[#102A2A]/68">{item.text}</p>
      <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-[#E2F4F2]">
        <div className="h-full w-2/3 rounded-full bg-[#00A6A6] transition duration-500 group-hover:w-full" />
      </div>
    </>
  );

  if (item.kind === "external") {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClassName}
        aria-label={item.ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className={cardClassName} aria-label={item.ariaLabel}>
      {content}
    </Link>
  );
}

export default function ExperienceSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1500px]">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
            Expérience IPMES
          </p>
          <h2 className="mt-4 text-3xl font-black text-[#073B3A] sm:text-4xl">
            Un parcours simple, fluide et professionnel.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {experiences.map((item) => (
            <ExperienceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
