import type { IpmesImageCategory } from "@/lib/ipmes-images";

export type CuratedImageRole =
  | "homeHero"
  | "siteFavorite"
  | "galleryPreview"
  | "spaceYoga"
  | "spaceTraining"
  | "spaceOffice"
  | "spaceKitchen"
  | "formationWellness"
  | "formationProfessional"
  | "formationKitchen";

export type CuratedImageConfig = {
  mainHomeImageId?: string;
  heroImageIds: string[];
  favoriteImageIds: string[];
  galleryPreviewImageIds: string[];
  categoryOverrides: Record<string, IpmesImageCategory | "rejected" | "team" | "training-room">;
  roleImageIds: Partial<Record<CuratedImageRole, string[]>>;
};

export const ipmesCuratedImages: CuratedImageConfig = {
  mainHomeImageId: "",
  heroImageIds: [],
  favoriteImageIds: [],
  galleryPreviewImageIds: [],
  categoryOverrides: {},
  roleImageIds: {},
};
