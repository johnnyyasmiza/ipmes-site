import path from "node:path";
import { fileURLToPath } from "node:url";
import fse from "fs-extra";
import { imageSize } from "image-size";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const rawPhotosDir = path.join(projectRoot, "raw-photos");
const outputRoot = path.join(projectRoot, "public", "images", "ipmes");
const dataDir = path.join(projectRoot, "public", "data");
const jsonOutputPath = path.join(dataDir, "ipmes-images.json");

const categories = [
  "hero",
  "gallery",
  "spaces",
  "trainings",
  "yoga",
  "offices",
  "kitchen",
  "rejected",
];

const validExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
]);

const sizeVariants = [
  { key: "large", width: 1600 },
  { key: "medium", width: 900 },
  { key: "thumb", width: 400 },
];

const MIN_ACCEPTED_WIDTH = 700;
const MIN_ACCEPTED_HEIGHT = 500;
const HERO_MIN_WIDTH = 1200;
const HERO_MIN_HEIGHT = 650;
const HERO_MIN_RATIO = 1.45;
const SQUARE_RATIO_TOLERANCE = 0.12;
const DARK_LUMA_THRESHOLD = 35;

async function ensureOutputFolders() {
  await fse.ensureDir(dataDir);

  for (const category of categories) {
    await fse.ensureDir(path.join(outputRoot, category));
  }
}

async function findImages(dir) {
  if (!(await fse.pathExists(dir))) {
    return [];
  }

  const entries = await fse.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return findImages(fullPath);
      }

      if (entry.isFile() && validExtensions.has(path.extname(entry.name).toLowerCase())) {
        return [fullPath];
      }

      return [];
    }),
  );

  return files.flat();
}

async function getDimensions(filePath) {
  try {
    const buffer = await fse.readFile(filePath);
    const dimensions = imageSize(buffer);

    if (dimensions.width && dimensions.height) {
      return {
        width: dimensions.width,
        height: dimensions.height,
      };
    }
  } catch {
    // Fall back to sharp metadata below. Some unusual images may not parse with image-size.
  }

  const metadata = await sharp(filePath).metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error("Dimensions introuvables");
  }

  return {
    width: metadata.width,
    height: metadata.height,
  };
}

async function isVeryDark(filePath) {
  try {
    const { data, info } = await sharp(filePath)
      .rotate()
      .resize(32, 32, { fit: "inside", withoutEnlargement: true })
      .removeAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    let totalLuma = 0;
    const pixelCount = info.width * info.height;

    for (let index = 0; index < data.length; index += info.channels) {
      const red = data[index] ?? 0;
      const green = data[index + 1] ?? red;
      const blue = data[index + 2] ?? red;
      totalLuma += 0.2126 * red + 0.7152 * green + 0.0722 * blue;
    }

    return totalLuma / pixelCount < DARK_LUMA_THRESHOLD;
  } catch {
    return false;
  }
}

function getOrientation(width, height) {
  const ratio = width / height;

  if (Math.abs(1 - ratio) <= SQUARE_RATIO_TOLERANCE) {
    return "square";
  }

  return width > height ? "landscape" : "portrait";
}

function classifyByFilename(originalName) {
  const normalizedName = originalName
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

  if (/\b(yoga|zen|bien-etre|bienetre|relax)/.test(normalizedName)) {
    return "yoga";
  }

  if (/\b(cuisine|kitchen|culinaire|chef)/.test(normalizedName)) {
    return "kitchen";
  }

  if (/\b(bureau|office|offices|cowork|prive)/.test(normalizedName)) {
    return "offices";
  }

  if (/\b(formation|training|cours|classe|hijama|massage|esthetique|secours)/.test(normalizedName)) {
    return "trainings";
  }

  if (/\b(salle|espace|space|atelier|event|evenement)/.test(normalizedName)) {
    return "spaces";
  }

  return null;
}

function classifyImage({ width, height, originalName }) {
  const orientation = getOrientation(width, height);
  const ratio = width / height;

  if (width < MIN_ACCEPTED_WIDTH || height < MIN_ACCEPTED_HEIGHT) {
    return {
      category: "rejected",
      orientation,
      reason: "dimensions trop petites",
    };
  }

  if (orientation === "landscape" && width >= HERO_MIN_WIDTH && height >= HERO_MIN_HEIGHT && ratio >= HERO_MIN_RATIO) {
    return {
      category: "hero",
      orientation,
      reason: null,
    };
  }

  if (orientation === "portrait" || orientation === "square") {
    return {
      category: "gallery",
      orientation,
      reason: null,
    };
  }

  return {
    category: classifyByFilename(originalName) ?? "gallery",
    orientation,
    reason: null,
  };
}

function getRecommendedUse(category, orientation) {
  const uses = {
    hero: "Image principale de page ou bannière large",
    gallery: "Galerie, aperçu visuel ou carte image",
    spaces: "Page espaces à louer ou section salle",
    trainings: "Page formations ou carte formation",
    yoga: "Salle de yoga, bien-être ou section détente",
    offices: "Bureaux privés ou espace business",
    kitchen: "Cuisine professionnelle ou atelier culinaire",
    rejected: "Image à revoir avant publication",
  };

  if (category === "gallery" && orientation === "portrait") {
    return "Galerie verticale ou mosaïque photo";
  }

  return uses[category] ?? uses.gallery;
}

function toPublicPath(absolutePath) {
  return `/${path.relative(path.join(projectRoot, "public"), absolutePath).replaceAll(path.sep, "/")}`;
}

async function createWebpVariants({ filePath, category, sequence }) {
  const outputPaths = {};

  for (const variant of sizeVariants) {
    const fileName = `ipmes-${category}-${String(sequence).padStart(3, "0")}-${variant.key}.webp`;
    const outputPath = path.join(outputRoot, category, fileName);

    await sharp(filePath)
      .rotate()
      .resize({
        width: variant.width,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: variant.key === "thumb" ? 76 : 82 })
      .toFile(outputPath);

    outputPaths[variant.key] = toPublicPath(outputPath);
  }

  return outputPaths;
}

async function copyRejectedOriginal({ filePath, originalName, sequence, reason }) {
  const parsed = path.parse(originalName);
  const safeBaseName = parsed.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60) || "image";
  const targetName = `ipmes-rejected-${String(sequence).padStart(3, "0")}-${safeBaseName}${parsed.ext.toLowerCase()}`;
  const targetPath = path.join(outputRoot, "rejected", targetName);

  await fse.copy(filePath, targetPath, { overwrite: true });

  return {
    targetPath: toPublicPath(targetPath),
    reason,
  };
}

async function main() {
  await ensureOutputFolders();

  const images = await findImages(rawPhotosDir);
  const counters = Object.fromEntries(categories.map((category) => [category, 0]));
  const acceptedImages = [];
  const rejectedImages = [];

  for (const filePath of images) {
    const originalName = path.basename(filePath);

    try {
      const { width, height } = await getDimensions(filePath);
      let classification = classifyImage({ width, height, originalName });

      if (classification.category !== "rejected" && (await isVeryDark(filePath))) {
        classification = {
          ...classification,
          category: "rejected",
          reason: "image trop sombre",
        };
      }

      counters[classification.category] += 1;
      const sequence = counters[classification.category];

      if (classification.category === "rejected") {
        const rejected = await copyRejectedOriginal({
          filePath,
          originalName,
          sequence,
          reason: classification.reason,
        });

        rejectedImages.push({
          originalName,
          width,
          height,
          orientation: classification.orientation,
          reason: rejected.reason,
          rejectedCopy: rejected.targetPath,
        });
        continue;
      }

      const variants = await createWebpVariants({
        filePath,
        category: classification.category,
        sequence,
      });

      acceptedImages.push({
        id: `ipmes-${classification.category}-${String(sequence).padStart(3, "0")}`,
        originalName,
        category: classification.category,
        orientation: classification.orientation,
        width,
        height,
        large: variants.large,
        medium: variants.medium,
        thumb: variants.thumb,
        recommendedUse: getRecommendedUse(classification.category, classification.orientation),
      });
    } catch (error) {
      counters.rejected += 1;
      const rejected = await copyRejectedOriginal({
        filePath,
        originalName,
        sequence: counters.rejected,
        reason: error instanceof Error ? error.message : "erreur inconnue",
      });

      rejectedImages.push({
        originalName,
        width: null,
        height: null,
        orientation: "unknown",
        reason: rejected.reason,
        rejectedCopy: rejected.targetPath,
      });
    }
  }

  await fse.writeJson(jsonOutputPath, acceptedImages, { spaces: 2 });

  const summary = {
    totalFound: images.length,
    processed: acceptedImages.length,
    rejected: rejectedImages.length,
    hero: acceptedImages.filter((image) => image.category === "hero").length,
    gallery: acceptedImages.filter((image) => image.category === "gallery").length,
  };

  console.log("");
  console.log("Résumé tri images IPMES");
  console.log("-----------------------");
  console.log(`Total images trouvées : ${summary.totalFound}`);
  console.log(`Images traitées       : ${summary.processed}`);
  console.log(`Images rejetées       : ${summary.rejected}`);
  console.log(`Nombre hero           : ${summary.hero}`);
  console.log(`Nombre gallery        : ${summary.gallery}`);
  console.log(`JSON généré           : ${path.relative(projectRoot, jsonOutputPath)}`);

  if (!images.length) {
    console.log("");
    console.log(`Aucune image trouvée. Ajoutez vos photos dans : ${path.relative(projectRoot, rawPhotosDir)}`);
  }
}

main().catch((error) => {
  console.error("Erreur pendant le tri des images IPMES :");
  console.error(error);
  process.exitCode = 1;
});
