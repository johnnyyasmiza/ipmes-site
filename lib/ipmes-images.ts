import rawImages from "@/public/data/ipmes-images.json";
import { ipmesCuratedImages } from "@/data/ipmes-curated-images";

export type IpmesImageCategory =
  | "hero"
  | "gallery"
  | "spaces"
  | "trainings"
  | "yoga"
  | "offices"
  | "kitchen";

export type PublicImageCategory = IpmesImageCategory | "team" | "training-room" | "rejected";

export type IpmesImage = {
  id: string;
  originalName: string;
  category: IpmesImageCategory;
  orientation: "landscape" | "portrait" | "square" | string;
  width: number;
  height: number;
  large: string;
  medium: string;
  thumb: string;
  recommendedUse: string;
};

export const ipmesImages = rawImages as IpmesImage[];

export const heroImages = getImagesByCategory("hero");

const imageById = new Map(ipmesImages.map((image) => [image.id, image]));

export function getCuratedCategory(image: IpmesImage): PublicImageCategory {
  return ipmesCuratedImages.categoryOverrides[image.id] ?? image.category;
}

export function getImageById(id?: string) {
  return id ? imageById.get(id) : undefined;
}

export function getImagesByIds(ids: string[]) {
  return ids.map((id) => imageById.get(id)).filter((image): image is IpmesImage => Boolean(image));
}

export function getImagesByCategory(category: PublicImageCategory) {
  return ipmesImages.filter((image) => getCuratedCategory(image) === category);
}

export function getPublicImages() {
  return ipmesImages.filter((image) => getCuratedCategory(image) !== "rejected");
}

export function getHeroImage(index = 0) {
  const curatedMain = getImageById(ipmesCuratedImages.mainHomeImageId);
  const curatedHeroes = getImagesByIds(ipmesCuratedImages.heroImageIds);
  const fallbackHeroes = getImagesByCategory("hero");
  const fallbackImages = getImagesByCategory("gallery");
  const pool = [...curatedHeroes, ...fallbackHeroes, ...fallbackImages, ...getPublicImages()];

  if (index === 0 && curatedMain) {
    return curatedMain;
  }

  return pool[index % Math.max(pool.length, 1)];
}

export function getHeroSlides(limit = 5) {
  const curatedMain = getImageById(ipmesCuratedImages.mainHomeImageId);
  const curatedHeroes = getImagesByIds(ipmesCuratedImages.heroImageIds);
  const favorites = getImagesByIds(ipmesCuratedImages.favoriteImageIds);
  const fallback = [...getImagesByCategory("hero"), ...getImagesByCategory("gallery"), ...getPublicImages()];
  const mixed = [curatedMain, ...curatedHeroes, ...favorites, ...fallback].filter(
    (image): image is IpmesImage => Boolean(image),
  );

  return Array.from(new Map(mixed.map((image) => [image.id, image])).values()).slice(0, limit);
}

export function getImagesForCards(category: PublicImageCategory, count: number, offset = 0) {
  const exact = getImagesByCategory(category);
  const favorites = getImagesByIds(ipmesCuratedImages.favoriteImageIds);
  const fallback = [...exact, ...favorites, ...getImagesByCategory("gallery"), ...getImagesByCategory("hero"), ...getPublicImages()];
  const unique = Array.from(new Map(fallback.map((image) => [image.id, image])).values());

  if (!unique.length) {
    return [];
  }

  return Array.from({ length: count }, (_, index) => unique[(index + offset) % unique.length]);
}

export function getRoleImages(role: keyof typeof ipmesCuratedImages.roleImageIds, fallbackCategory: PublicImageCategory, count: number) {
  const curated = getImagesByIds(ipmesCuratedImages.roleImageIds[role] ?? []);

  if (curated.length) {
    return Array.from({ length: count }, (_, index) => curated[index % curated.length]);
  }

  return getImagesForCards(fallbackCategory, count);
}
