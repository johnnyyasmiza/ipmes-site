"use client";

import { useMemo, useState } from "react";
import type { Formation } from "@/data/formations";
import {
  formationFilterLabels,
  getLocalizedFormation,
  type FormationFilterKey,
} from "@/lib/formations-i18n";
import FormationCard from "./FormationCard";
import { useLanguage } from "./i18n";

type CountryFilter = "maroc" | "uk" | "allemagne" | "turquie";

const filters: { key: FormationFilterKey; match?: string[] }[] = [
  { key: "all" },
  { key: "health", match: ["sante", "bien-etre", "securite", "social / sante"] },
  { key: "aesthetic", match: ["esthetique"] },
  { key: "education", match: ["education"] },
  { key: "social", match: ["social"] },
];

function normalize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function isCountryFilter(value: string | null): value is CountryFilter {
  return value === "maroc" || value === "uk" || value === "allemagne" || value === "turquie";
}

function matchesCountry(formation: Formation, country: CountryFilter) {
  const diplomaCountry = normalize(formation.diplomaCountry);
  const searchable = normalize(`${formation.category} ${formation.titleFr} ${formation.diplomaLabel}`);

  if (country === "maroc") {
    return diplomaCountry.includes("maroc");
  }

  if (country === "uk") {
    return diplomaCountry.includes("royaume-uni") || searchable.includes("uk") || searchable.includes("brit");
  }

  if (country === "allemagne") {
    return diplomaCountry.includes("allemagne") || searchable.includes("allemand");
  }

  return diplomaCountry.includes("turquie") || searchable.includes("turquie") || searchable.includes("esthetique");
}

export default function FormationsFilter({
  formations,
  limit,
}: {
  formations: Formation[];
  limit?: number;
}) {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const [active, setActive] = useState<FormationFilterKey>("all");
  const [country] = useState(() =>
    typeof window === "undefined" ? null : new URLSearchParams(window.location.search).get("country"),
  );

  const filteredFormations = useMemo(() => {
    const countryFilteredFormations = isCountryFilter(country)
      ? formations.filter((formation) => matchesCountry(formation, country))
      : formations;
    const filter = filters.find((item) => item.key === active);
    const filterMatch = filter?.match;
    const source = !filterMatch
      ? countryFilteredFormations
      : countryFilteredFormations.filter((formation) => {
          const localizedFormation = getLocalizedFormation(formation, language);
          const match = filterMatch.map(normalize);
          const searchable = normalize(
            `${formation.category} ${formation.titleFr} ${formation.titleAr} ${localizedFormation.category} ${localizedFormation.title}`,
          );

          return match.some((term) => searchable.includes(term));
        });

    return typeof limit === "number" ? source.slice(0, limit) : source;
  }, [active, country, formations, language, limit]);

  return (
    <div dir={isArabic ? "rtl" : "ltr"}>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActive(filter.key)}
            className={`rounded-full px-4 py-2 text-sm font-black transition ${
              active === filter.key
                ? "bg-[#00A6A6] text-white shadow-lg shadow-[#00A6A6]/20"
                : "bg-white/82 text-[#073B3A] ring-1 ring-[#00A6A6]/10 backdrop-blur hover:-translate-y-0.5 hover:bg-[#F4FAF9]"
            }`}
          >
            {formationFilterLabels[language][filter.key]}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredFormations.map((formation) => (
          <FormationCard key={formation.id} formation={formation} />
        ))}
      </div>
    </div>
  );
}
