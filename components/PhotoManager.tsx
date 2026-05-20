"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { IpmesImage } from "@/lib/ipmes-images";

type AdminCategory =
  | "hero"
  | "yoga"
  | "training-room"
  | "offices"
  | "kitchen"
  | "trainings"
  | "team"
  | "gallery"
  | "rejected";

type PhotoConfig = {
  categories: Record<string, AdminCategory>;
  favorites: string[];
  mainHomeImageId: string;
};

const storageKey = "ipmes-photo-curation-v1";
const adminCategoryValues: AdminCategory[] = [
  "hero",
  "yoga",
  "training-room",
  "offices",
  "kitchen",
  "trainings",
  "team",
  "gallery",
  "rejected",
];
const adminCategorySet = new Set<string>(adminCategoryValues);

const categoryButtons: { label: string; value: AdminCategory }[] = [
  { label: "Hero", value: "hero" },
  { label: "Yoga", value: "yoga" },
  { label: "Salle formation", value: "training-room" },
  { label: "Bureau", value: "offices" },
  { label: "Cuisine", value: "kitchen" },
  { label: "Formation", value: "trainings" },
  { label: "Équipe", value: "team" },
  { label: "Photos", value: "gallery" },
  { label: "Rejetée", value: "rejected" },
];

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isAdminCategory(value: unknown): value is AdminCategory {
  return typeof value === "string" && adminCategorySet.has(value);
}

function getValidStoredConfig(value: unknown, imageIds: Set<string>): Partial<PhotoConfig> {
  if (!isRecord(value)) {
    return {};
  }

  const categories: Record<string, AdminCategory> = isRecord(value.categories)
    ? Object.fromEntries(
        Object.entries(value.categories).filter(([id, category]) => imageIds.has(id) && isAdminCategory(category)),
      ) as Record<string, AdminCategory>
    : {};
  const favorites = Array.isArray(value.favorites)
    ? value.favorites.filter((id): id is string => typeof id === "string" && imageIds.has(id))
    : [];
  const mainHomeImageId = typeof value.mainHomeImageId === "string" && imageIds.has(value.mainHomeImageId)
    ? value.mainHomeImageId
    : "";

  return { categories, favorites, mainHomeImageId };
}

function getInitialConfig(images: IpmesImage[]): PhotoConfig {
  const categories = Object.fromEntries(images.map((image) => [image.id, image.category as AdminCategory]));
  const imageIds = new Set(images.map((image) => image.id));

  if (typeof window === "undefined") {
    return { categories, favorites: [], mainHomeImageId: "" };
  }

  try {
    const saved = window.localStorage.getItem(storageKey);
    if (!saved) {
      return { categories, favorites: [], mainHomeImageId: "" };
    }

    const parsed = getValidStoredConfig(JSON.parse(saved), imageIds);

    return {
      categories: { ...categories, ...(parsed.categories ?? {}) },
      favorites: parsed.favorites ?? [],
      mainHomeImageId: parsed.mainHomeImageId ?? "",
    };
  } catch {
    return { categories, favorites: [], mainHomeImageId: "" };
  }
}

function buildExport(config: PhotoConfig) {
  const heroImageIds = Object.entries(config.categories)
    .filter(([, category]) => category === "hero")
    .map(([id]) => id);
  const categoryOverrides = Object.fromEntries(
    Object.entries(config.categories).filter(([, category]) => category !== "gallery"),
  );

  return {
    mainHomeImageId: config.mainHomeImageId,
    heroImageIds,
    favoriteImageIds: config.favorites,
    galleryPreviewImageIds: config.favorites.slice(0, 12),
    categoryOverrides,
    roleImageIds: {
      homeHero: [config.mainHomeImageId].filter(Boolean),
      siteFavorite: config.favorites,
      spaceYoga: Object.entries(config.categories).filter(([, c]) => c === "yoga").map(([id]) => id),
      spaceTraining: Object.entries(config.categories).filter(([, c]) => c === "training-room").map(([id]) => id),
      spaceOffice: Object.entries(config.categories).filter(([, c]) => c === "offices").map(([id]) => id),
      spaceKitchen: Object.entries(config.categories).filter(([, c]) => c === "kitchen").map(([id]) => id),
      formationWellness: Object.entries(config.categories).filter(([, c]) => c === "trainings").map(([id]) => id),
      galleryPreview: config.favorites.slice(0, 12),
    },
  };
}

export default function PhotoManager({ images }: { images: IpmesImage[] }) {
  const [config, setConfig] = useState<PhotoConfig>(() => getInitialConfig(images));
  const [activeFilter, setActiveFilter] = useState<AdminCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  function persist(nextConfig: PhotoConfig) {
    setConfig(nextConfig);
    window.localStorage.setItem(storageKey, JSON.stringify(nextConfig));
  }

  function setCategory(id: string, category: AdminCategory) {
    persist({
      ...config,
      categories: {
        ...config.categories,
        [id]: category,
      },
    });
  }

  function toggleFavorite(id: string) {
    const favorites = config.favorites.includes(id)
      ? config.favorites.filter((favoriteId) => favoriteId !== id)
      : [...config.favorites, id];

    persist({ ...config, favorites });
  }

  function setMainHomeImage(id: string) {
    persist({ ...config, mainHomeImageId: config.mainHomeImageId === id ? "" : id });
  }

  const filteredImages = useMemo(() => {
    return images.filter((image) => {
      const category = config.categories[image.id] ?? image.category;
      const matchesFilter = activeFilter === "all" || category === activeFilter;
      const matchesQuery = `${image.originalName} ${image.id}`.toLowerCase().includes(query.toLowerCase());

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, config.categories, images, query]);

  const exportConfig = JSON.stringify(buildExport(config), null, 2);

  async function copyExport() {
    await navigator.clipboard.writeText(exportConfig);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="min-h-screen bg-[#F4FAF9] px-5 py-8 text-[#102A2A] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] bg-white p-6 shadow-xl shadow-[#073B3A]/8 ring-1 ring-[#00A6A6]/10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">Admin local</p>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-black text-[#073B3A] sm:text-4xl">Tri artistique des photos IPMES</h1>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[#102A2A]/68">
                La sélection est sauvegardée dans le localStorage de ce navigateur. Copiez l&apos;export JSON pour le reporter ensuite dans la configuration curatée.
              </p>
            </div>
            <button
              type="button"
              onClick={copyExport}
              className="min-h-12 rounded-full bg-[#073B3A] px-5 text-sm font-black text-white shadow-lg shadow-[#073B3A]/18 transition hover:bg-[#00A6A6]"
            >
              {copied ? "Configuration copiée" : "Copier configuration"}
            </button>
          </div>
        </div>

        <div className="sticky top-0 z-20 mt-6 rounded-3xl bg-white/92 p-4 shadow-lg shadow-[#073B3A]/8 ring-1 ring-[#00A6A6]/10 backdrop-blur">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher par nom original..."
              className="min-h-12 rounded-full border border-[#00A6A6]/15 bg-[#F4FAF9] px-5 text-sm font-semibold outline-none transition focus:border-[#00A6A6] focus:bg-white lg:w-80"
            />
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`rounded-full px-3 py-2 text-xs font-black transition ${activeFilter === "all" ? "bg-[#00A6A6] text-white" : "bg-[#F4FAF9] text-[#073B3A]"}`}
              >
                Tous
              </button>
              {categoryButtons.map((category) => (
                <button
                  key={category.value}
                  type="button"
                  onClick={() => setActiveFilter(category.value)}
                  className={`rounded-full px-3 py-2 text-xs font-black transition ${activeFilter === category.value ? "bg-[#00A6A6] text-white" : "bg-[#F4FAF9] text-[#073B3A]"}`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredImages.map((image) => {
            const category = config.categories[image.id] ?? image.category;
            const isFavorite = config.favorites.includes(image.id);
            const isMain = config.mainHomeImageId === image.id;

            return (
              <article key={image.id} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#00A6A6]/10">
                <div className="relative aspect-[4/3] bg-[#073B3A]">
                  <Image
                    src={image.thumb}
                    alt={image.originalName}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-[#073B3A] backdrop-blur">
                    {category}
                  </div>
                </div>
                <div className="p-4">
                  <p className="line-clamp-1 text-sm font-black text-[#073B3A]">{image.originalName}</p>
                  <p className="mt-1 text-xs font-semibold text-[#102A2A]/55">
                    {image.width}x{image.height} · {image.orientation}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {categoryButtons.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setCategory(image.id, item.value)}
                        className={`rounded-full px-3 py-1.5 text-xs font-black transition ${
                          category === item.value
                            ? "bg-[#00A6A6] text-white"
                            : "bg-[#F4FAF9] text-[#073B3A] hover:bg-[#E5F5F4]"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => toggleFavorite(image.id)}
                      className={`min-h-10 rounded-full text-xs font-black transition ${
                        isFavorite ? "bg-[#D6B56D] text-[#073B3A]" : "bg-[#F4FAF9] text-[#073B3A]"
                      }`}
                    >
                      Favori site
                    </button>
                    <button
                      type="button"
                      onClick={() => setMainHomeImage(image.id)}
                      className={`min-h-10 rounded-full text-xs font-black transition ${
                        isMain ? "bg-[#073B3A] text-white" : "bg-[#F4FAF9] text-[#073B3A]"
                      }`}
                    >
                      Image principale accueil
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl bg-[#073B3A] p-5 shadow-xl shadow-[#073B3A]/15">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-black text-white">Export JSON</p>
            <button
              type="button"
              onClick={copyExport}
              className="rounded-full bg-white px-4 py-2 text-xs font-black text-[#073B3A]"
            >
              Copier
            </button>
          </div>
          <textarea
            readOnly
            value={exportConfig}
            className="min-h-80 w-full rounded-2xl border border-white/10 bg-[#052E2D] p-4 font-mono text-xs leading-6 text-[#C9F3F0] outline-none"
          />
        </div>
      </div>
    </div>
  );
}
