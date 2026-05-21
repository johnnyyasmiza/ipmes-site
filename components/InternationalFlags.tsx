import Image from "next/image";
import Link from "next/link";

const countries = [
  {
    name: "Maroc",
    subtitle: "Centre IPMES",
    flagImage: "/images/flags/maroc.jpeg",
    href: "/formations/educatrice",
    ariaLabel: "Voir la formation éducatrice",
  },
  {
    name: "Royaume-Uni",
    subtitle: "Certification UK",
    flagImage: "/images/flags/angleterre.jpeg",
    href: "/formations/secourisme",
    ariaLabel: "Voir la formation secourisme",
  },
  {
    name: "Allemagne",
    subtitle: "Standards allemands",
    flagImage: "/images/flags/allmagne.jpeg",
    href: "/formations/hijama",
    ariaLabel: "Voir la formation hijama",
  },
  {
    name: "Turquie",
    subtitle: "Formation esthétique",
    flagImage: "/images/flags/turkey.jpeg",
    href: "/formations/chirurgie",
    ariaLabel: "Voir la formation esthétique non chirurgicale",
  },
];

export function InternationalFlags() {
  return (
    <section className="mx-auto my-10 w-full max-w-7xl px-0 2xl:max-w-[1500px]">
      <div className="overflow-hidden rounded-[24px] border border-white/70 bg-white/75 p-5 shadow-lg backdrop-blur-xl sm:rounded-[28px] sm:p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex rounded-full bg-[#e9fbf8] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#00a99d]">
              International
            </span>

            <h2 className="mt-4 text-2xl font-black text-[#073f3a] md:text-3xl">
              Un centre ouvert sur l’international
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-slate-600">
              Des formations et certifications orientées vers des standards professionnels reconnus.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {countries.map((country) => (
              <Link
                key={country.name}
                href={country.href}
                aria-label={country.ariaLabel}
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
                    alt={country.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                <p className="relative z-10 mt-3 text-sm font-black text-[#073f3a]">
                  {country.name}
                </p>

                <p className="relative z-10 mt-1 text-[11px] font-bold text-slate-500">
                  {country.subtitle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
