import Image from "next/image";

const flags = [
  {
    country: "Maroc",
    flagImage: "/images/flags/maroc.jpeg",
    label: "Centre IPMES",
  },
  {
    country: "Royaume-Uni",
    flagImage: "/images/flags/angleterre.jpeg",
    label: "Certifications UK",
  },
  {
    country: "Allemagne",
    flagImage: "/images/flags/allmagne.jpeg",
    label: "Standards allemands",
  },
  {
    country: "Turquie",
    flagImage: "/images/flags/turkey.jpeg",
    label: "Formation esthétique",
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
            {flags.map((item) => (
              <div
                key={item.country}
                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white px-4 py-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#e9fbf8]/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="relative z-10 mx-auto h-12 w-16 overflow-hidden rounded-md shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-125">
                  <Image
                    src={item.flagImage}
                    alt={item.country}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <p className="relative z-10 mt-3 text-sm font-black text-[#073f3a]">
                  {item.country}
                </p>

                <p className="relative z-10 mt-1 text-[11px] font-bold text-slate-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
