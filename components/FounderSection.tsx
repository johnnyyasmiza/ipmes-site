import Image from "next/image";

const linkedInUrl = "https://www.linkedin.com/in/kawtar-chaabi-341039212/";

const experiences = [
  {
    title: "Directrice d’institut de formation",
    company: "IPMES · Temps plein",
    period: "sept. 2020 – aujourd’hui",
    duration: "5 ans 9 mois",
    location: "Préfecture de Casablanca, Casablanca-Settat, Maroc",
    items: [
      "Direction des missions pédagogiques",
      "Management des équipes projets",
      "Responsabilité vis-à-vis du client",
      "Participation au développement commercial",
      "Élaboration des offres commerciales et pédagogiques",
    ],
  },
  {
    title: "Auteur de manuels scolaires",
    company: "Hachette Livre · Freelance",
    period: "janv. 2004 – aujourd’hui",
    duration: "22 ans 5 mois",
    location: "France",
    items: [
      "Réalisation de recherches documentaires",
      "Contribution à la production de contenus pédagogiques",
      "Écriture et structuration de supports scolaires",
    ],
  },
  {
    title: "Directrice pédagogique",
    company: "Institution L’Excellence",
    period: "sept. 2005 – juil. 2020",
    duration: "14 ans 11 mois",
    location: "Préfecture de Casablanca, Casablanca-Settat, Maroc",
    items: [
      "Mise en place de nouvelles stratégies managériales",
      "Renforcement de la cohésion de l'équipe pédagogique et administrative",
      "Organisation et suivi pédagogique",
      "Coordination des équipes éducatives",
    ],
  },
  {
    title: "Institutrice de français",
    company: "Institution L’Excellence",
    period: "sept. 1998 – août 2005",
    duration: "7 ans",
    location: "Casablanca",
    items: [
      "Animation des cours",
      "Transmission des savoirs",
      "Mise en place d’un cadre de travail agréable",
      "Utilisation de techniques pédagogiques favorisant l’apprentissage",
    ],
  },
  {
    title: "Responsable administration commerciale",
    company: "Bil Consulting",
    period: "sept. 1996 – juin 1998",
    duration: "1 an 10 mois",
    location: "Casablanca",
    items: [
      "Sélection des profils recherchés par le client",
      "Utilisation de tests de connaissances",
      "Vérification du niveau professionnel des candidats",
      "Suivi administratif et commercial",
    ],
  },
];

const education = [
  {
    school: "Faculté des Sciences Juridiques, Économiques et Sociales de Mohammedia",
    degree: "Doctorat de droit, Droit Public",
    period: "2021 – aujourd’hui",
  },
  {
    school: "Faculté des Sciences Juridiques, Économiques et Sociales de Casablanca",
    degree: "DESA, International Law and Legal Studies",
    period: "2012",
  },
  {
    school: "Faculté des Sciences Juridiques, Économiques et Sociales de Tanger",
    degree: "Licence de droit, Public Administration",
    period: "1999 – 2003",
  },
  {
    school: "HEM - Business & Engineering School",
    degree: "Licence, Marketing",
    period: "1992 – 1996",
  },
  {
    school: "Institut Français de Casablanca",
    degree: "Certificat de formation pédagogique, Elementary Education and Teaching",
    period: "",
  },
];

export function FounderSection() {
  return (
    <section id="fondatrice" className="mx-auto w-full max-w-7xl scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8 2xl:max-w-[1500px]">
      <div className="overflow-hidden rounded-[24px] border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur-xl sm:rounded-[28px] sm:p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="overflow-hidden rounded-[24px] bg-[#e9fbf8] shadow-lg sm:rounded-[28px]">
              <Image
                src="/images/chaabikawtar.jpeg"
                alt="Kawtar Chaabi, fondatrice IPMES"
                width={520}
                height={680}
                className="h-[380px] w-full object-cover sm:h-[460px] md:h-[560px]"
              />
            </div>

            <div className="mt-5 rounded-[24px] bg-[#f2fbf8] p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#00a99d]">
                Fondatrice
              </p>

              <h3 className="mt-2 text-2xl font-black text-[#073f3a]">
                Kawtar Chaabi
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Fondatrice IPMES · Responsable pédagogique · Formatrice
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["Formation", "Pédagogie", "Management", "Accompagnement"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#073f3a] shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#0A66C2] px-5 py-3 text-sm font-black text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                Voir le profil LinkedIn
              </a>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-[#e9fbf8] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#00a99d]">
              Équipe professionnelle
            </span>

            <h2 className="mt-4 text-[30px] font-black leading-[1.12] text-[#073f3a] sm:text-3xl md:text-4xl">
              Une direction pédagogique expérimentée au service de la formation.
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              IPMES s’appuie sur une direction pédagogique expérimentée, portée par Kawtar Chaabi,
              fondatrice et responsable pédagogique, avec un parcours solide dans la formation,
              la coordination d’équipes, la production de contenus pédagogiques et l’accompagnement professionnel.
            </p>

            <div className="mt-8 grid gap-5">
              <div className="rounded-[24px] bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-xl font-black text-[#073f3a]">
                  Expérience
                </h3>

                <div className="mt-5 space-y-5">
                  {experiences.map((exp) => (
                    <div key={exp.title} className="relative border-l-2 border-[#00a99d]/20 pl-5">
                      <div className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#00a99d]" />

                      <h4 className="font-black text-[#073f3a]">
                        {exp.title}
                      </h4>

                      <p className="mt-1 text-sm font-bold text-slate-600">
                        {exp.company}
                      </p>

                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        {exp.period}
                        {exp.duration ? ` · ${exp.duration}` : ""}
                      </p>

                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        {exp.location}
                      </p>

                      <ul className="mt-3 space-y-1 text-sm leading-6 text-slate-600">
                        {exp.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-xl font-black text-[#073f3a]">
                  Formation
                </h3>

                <div className="mt-5 grid gap-3">
                  {education.map((item) => (
                    <div
                      key={`${item.school}-${item.degree}`}
                      className="rounded-2xl bg-[#f2fbf8] p-4"
                    >
                      <p className="font-black text-[#073f3a]">
                        {item.school}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        {item.degree}
                      </p>

                      {item.period && (
                        <p className="mt-1 text-xs font-bold text-slate-500">
                          {item.period}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] bg-[#073f3a] p-5 text-white shadow-sm sm:p-6">
                <p className="text-sm font-semibold text-white/80">
                  Parcours vérifiable
                </p>

                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-[#073f3a] transition hover:-translate-y-1 hover:shadow-xl"
                >
                  Consulter le profil LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
