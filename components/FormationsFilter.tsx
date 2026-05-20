"use client";

import { useMemo, useState } from "react";
import type { Formation } from "@/data/formations";
import FormationCard from "./FormationCard";

type FormationFilter = "all" | "health" | "aesthetic" | "education" | "social";

const filters: { key: FormationFilter; label: string; match?: string[] }[] = [
  { key: "all", label: "Toutes" },
  { key: "health", label: "Santé", match: ["sante", "bien-etre", "securite"] },
  { key: "aesthetic", label: "Esthétique", match: ["esthetique"] },
  { key: "education", label: "Éducation", match: ["education"] },
  { key: "social", label: "Social", match: ["social"] },
];

function normalize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

export default function FormationsFilter({
  formations,
  limit,
}: {
  formations: Formation[];
  limit?: number;
}) {
  const [active, setActive] = useState<FormationFilter>("all");

  const filteredFormations = useMemo(() => {
    const filter = filters.find((item) => item.key === active);
    const filterMatch = filter?.match;
    const source = !filterMatch
      ? formations
      : formations.filter((formation) => {
          const match = filterMatch.map(normalize);
          const searchable = normalize(`${formation.category} ${formation.titleFr} ${formation.titleAr}`);
          return match.some((term) => searchable.includes(term));
        });

    return typeof limit === "number" ? source.slice(0, limit) : source;
  }, [active, formations, limit]);

  return (
    <div>
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
            {filter.label}
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
