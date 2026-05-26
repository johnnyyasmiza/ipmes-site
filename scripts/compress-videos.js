/* eslint-disable @typescript-eslint/no-require-imports */

const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const ffmpegPath = require("ffmpeg-static");

const projectRoot = path.resolve(__dirname, "..");
const sourceDir = path.join(projectRoot, "public", "videos");
const outputDir = path.join(sourceDir, "optimized");

const videoExtensions = new Set([".mp4", ".mov", ".m4v", ".webm"]);
const canonicalVideos = new Map([
  ["aide-personnes-agees", "aide-personnes-agees.mp4"],
  ["bureau", "bureau.mp4"],
  ["cuisine", "cuisine.mp4"],
  ["formation-educatrice", "formation-educatrice.mp4"],
  ["formation-esthetique", "formation-esthetique.mp4"],
  ["gdrvisite", "gdrvisite.mp4"],
  ["hero-background", "hero-background.mp4"],
  ["hero-educatrice", "hero-educatrice.mp4"],
  ["hijam", "hijam.mp4"],
  ["salle-chirurgie", "salle-chirurgie.mp4"],
  ["salle-formation", "salle-formation.mp4"],
  ["salle-yoga", "salle-yoga.mp4"],
  ["salledetherapiepodcast", "salledetherapiepodcast.mp4"],
  ["secourisme", "secourisme.mp4"],
  ["temoignage", "temoignage.mp4"],
]);

const aliases = new Map([
  ["grdvisite", "gdrvisite"],
  ["grdvisite-mp4", "gdrvisite"],
  ["gdrvisite", "gdrvisite"],
  ["gdrvisite-mp4", "gdrvisite"],
  ["visite", "gdrvisite"],
  ["visite1", "gdrvisite"],
  ["visite1-mp4", "gdrvisite"],
  ["hijama", "hijam"],
  ["sallechurgie", "salle-chirurgie"],
  ["salle-chirurgie-mp4", "salle-chirurgie"],
  ["salleformation", "salle-formation"],
  ["salle-formation-mp4", "salle-formation"],
  ["salleyoga", "salle-yoga"],
  ["salle-yoga-mp4", "salle-yoga"],
  ["salletherapyepodcast", "salledetherapiepodcast"],
  ["salle-therapie-podcast", "salledetherapiepodcast"],
  ["salledetherapiepodcast-mp4", "salledetherapiepodcast"],
  ["bureau-mp4", "bureau"],
  ["cuisine-mp4", "cuisine"],
  ["formation-esthetique-mp4", "formation-esthetique"],
  ["temoignage", "temoignage"],
]);

function formatBytes(bytes) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function isVideo(fileName) {
  return videoExtensions.has(path.extname(fileName).toLowerCase());
}

function normalizeName(fileName) {
  return fileName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/'/g, "")
    .replace(/\.(mp4|mov|m4v|webm)$/g, "")
    .replace(/\.(mp4|mov|m4v|webm)$/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getCanonicalKey(fileName) {
  const normalized = normalizeName(fileName);
  return aliases.get(normalized) ?? normalized;
}

function collectInputs() {
  const selected = new Map();

  for (const dirent of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    if (!dirent.isFile() || !isVideo(dirent.name)) {
      continue;
    }

    const key = getCanonicalKey(dirent.name);

    if (!canonicalVideos.has(key)) {
      console.warn(`Skipping unexpected video name: ${dirent.name}`);
      continue;
    }

    const inputPath = path.join(sourceDir, dirent.name);
    const extension = path.extname(dirent.name).toLowerCase();
    const current = selected.get(key);

    if (!current || (extension === ".mp4" && current.extension !== ".mp4")) {
      selected.set(key, { inputPath, sourceName: dirent.name, extension });
    }
  }

  return selected;
}

function runFfmpeg(inputPath, outputPath, maxHeight) {
  return new Promise((resolve) => {
    const scale = `scale='if(gt(iw,ih),min(1920,iw),-2)':'if(gt(iw,ih),-2,min(${maxHeight},ih))'`;
    const args = [
      "-y",
      "-i",
      inputPath,
      "-map",
      "0:v:0",
      "-map",
      "0:a?",
      "-dn",
      "-vf",
      scale,
      "-c:v",
      "libx264",
      "-preset",
      "medium",
      "-crf",
      "28",
      "-c:a",
      "aac",
      "-b:a",
      "128k",
      "-movflags",
      "+faststart",
      outputPath,
    ];

    const child = spawn(ffmpegPath, args, { stdio: ["ignore", "pipe", "pipe"] });
    let errorOutput = "";

    child.stderr.on("data", (chunk) => {
      errorOutput += chunk.toString();
    });

    child.on("error", (error) => {
      resolve({ ok: false, error: error.message });
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolve({ ok: true });
        return;
      }

      resolve({
        ok: false,
        error: errorOutput.trim() || `ffmpeg exited with code ${code}`,
      });
    });
  });
}

async function compressVariant(input, outputName, suffix, maxHeight) {
  const outputPath = path.join(outputDir, outputName.replace(/\.mp4$/, `${suffix}.mp4`));
  const tempPath = path.join(outputDir, `.${path.basename(outputPath)}.tmp.mp4`);
  const before = fs.statSync(input.inputPath).size;

  if (fs.existsSync(outputPath)) {
    return {
      ok: true,
      skipped: true,
      outputPath,
      before,
      after: fs.statSync(outputPath).size,
    };
  }

  const result = await runFfmpeg(input.inputPath, tempPath, maxHeight);

  if (!result.ok) {
    if (fs.existsSync(tempPath)) {
      fs.rmSync(tempPath, { force: true });
    }

    return { ok: false, error: result.error };
  }

  fs.renameSync(tempPath, outputPath);

  return {
    ok: true,
    outputPath,
    before,
    after: fs.statSync(outputPath).size,
  };
}

async function main() {
  if (!ffmpegPath || !fs.existsSync(ffmpegPath)) {
    console.error("FFmpeg introuvable. Lancez npm install pour installer ffmpeg-static.");
    process.exitCode = 1;
    return;
  }

  if (!fs.existsSync(sourceDir)) {
    console.error(`Missing source directory: ${sourceDir}`);
    process.exitCode = 1;
    return;
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const inputs = collectInputs();
  let successCount = 0;
  let failureCount = 0;

  for (const [key, input] of inputs) {
    const outputName = canonicalVideos.get(key);
    console.log(`Compressing ${input.sourceName} -> optimized/${outputName}`);

    for (const variant of [
      { suffix: "", maxHeight: 1080 },
      { suffix: "-mobile", maxHeight: 720 },
    ]) {
      const result = await compressVariant(input, outputName, variant.suffix, variant.maxHeight);

      if (!result.ok) {
        failureCount += 1;
        console.error(`Failed: ${input.sourceName}${variant.suffix}`);
        console.error(result.error);
        continue;
      }

      if (result.skipped) {
        console.log(`Skipped: ${path.basename(result.outputPath)} already exists`);
        continue;
      }

      const saved = result.before > 0 ? ((1 - result.after / result.before) * 100).toFixed(1) : "0.0";
      console.log(
        `Done: ${path.basename(result.outputPath)} ${formatBytes(result.before)} -> ${formatBytes(result.after)} (${saved}% smaller)`,
      );
      successCount += 1;
    }
  }

  const missing = Array.from(canonicalVideos.keys()).filter((key) => !inputs.has(key));

  if (missing.length > 0) {
    console.warn(`Missing source videos: ${missing.join(", ")}`);
  }

  console.log(`Compression finished: ${successCount} succeeded, ${failureCount} failed.`);

  if (failureCount > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
