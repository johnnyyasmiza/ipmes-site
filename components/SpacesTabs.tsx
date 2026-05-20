"use client";

import { useMemo, useState } from "react";
import type { Space } from "@/data/spaces";
import SpaceCard from "./SpaceCard";
import { useLanguage } from "./i18n";

type SpaceFilter = "all" | string;

export default function SpacesTabs({ spaces }: { spaces: Space[] }) {
  const [active, setActive] = useState<SpaceFilter>("all");
  const { t } = useLanguage();

  const filters = useMemo(
    () => [
      { key: "all", label: t("common.all", "Tous") },
      ...spaces.map((space) => ({ key: space.filter, label: space.filter })),
    ],
    [spaces, t],
  );

  const filteredSpaces = useMemo(() => {
    if (active === "all") {
      return spaces;
    }

    return spaces.filter((space) => space.filter === active);
  }, [active, spaces]);

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
                : "bg-[#F4FAF9]/86 text-[#073B3A] ring-1 ring-[#00A6A6]/10 backdrop-blur hover:-translate-y-0.5 hover:bg-white"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredSpaces.map((space) => (
          <SpaceCard key={space.title} space={space} />
        ))}
      </div>
    </div>
  );
}
