const experiences = [
  {
    label: "01",
    title: "Apprendre",
    text: "Des formations pratiques dans un cadre clair, équipé et pensé pour progresser vite.",
  },
  {
    label: "02",
    title: "Réserver",
    text: "Des espaces flexibles pour cours, rendez-vous, yoga, ateliers et événements.",
  },
  {
    label: "03",
    title: "Développer",
    text: "Un lieu professionnel pour lancer une activité, recevoir ses clients et créer du réseau.",
  },
];

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
            <article key={item.title} className="glass-card group rounded-[24px] p-5 transition duration-300 hover:-translate-y-2 sm:rounded-[28px] sm:p-6 md:p-8">
              <span className="text-sm font-black text-[#D6B56D]">{item.label}</span>
              <h3 className="mt-6 text-2xl font-black text-[#073B3A]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#102A2A]/68">{item.text}</p>
              <div className="mt-8 h-1.5 overflow-hidden rounded-full bg-[#E2F4F2]">
                <div className="h-full w-2/3 rounded-full bg-[#00A6A6] transition duration-500 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
