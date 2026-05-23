/* eslint-disable @typescript-eslint/no-require-imports */

const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const ffmpegPath = require("ffmpeg-static");

const projectRoot = path.resolve(__dirname, "..");
const sourceDir = path.join(projectRoot, "public", "videos-original");
const outputDir = path.join(projectRoot, "public", "videos");

const videoExtensions = new Set([".mp4", ".mov", ".m4v", ".webm"]);
const expectedNames = new Set([
  "aide-personnes-agees.mp4",
  "bureau.mp4",
  "cuisine.mp4",
  "formation-educatrice.mp4",
  "formation-esthetique.mp4",
  "hero-background.mp4",
  "hero-educatrice.mp4",
  "hijam.mp4",
  "secourisme.mp4",
  "salle-yoga.mp4",
  "salle-chirurgie.mp4",
  "salle-formation.mp4",
  "salledetherapiepodcast.mp4",
  "visite1.mp4",
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

function getOutputName(fileName) {
  const normalized = fileName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-mp4$/, "")
    .replace(/^-+|-+$/g, "");

  const aliases = new Map([
    ["hijama", "hijam"],
    ["sallechurgie", "salle-chirurgie"],
    ["sallechurgie", "salle-chirurgie"],
    ["salleformation", "salle-formation"],
    ["salleyoga", "salle-yoga"],
    ["salle-yoga-mp4", "salle-yoga"],
    ["salletherapyepodcast", "salledetherapiepodcast"],
    ["salledetherapiepodcast-mp4", "salledetherapiepodcast"],
    ["visite-mp4", "visite1"],
    ["visite1-mp4-mov", "visite1"],
    ["visite1-mp4", "visite1"],
    ["visite1", "visite1"],
    ["bureau-mp4", "bureau"],
    ["cuisine-mp", "cuisine"],
  ]);

  return `${aliases.get(normalized) ?? normalized}.mp4`;
}

function runFfmpeg(inputPath, outputPath) {
  return new Promise((resolve) => {
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
      "scale='if(gt(iw,ih),min(1280,iw),-2)':'if(gt(iw,ih),-2,min(1280,ih))'",
      "-c:v",
      "libx264",
      "-preset",
      "medium",
      "-crf",
      "28",
      "-c:a",
      "aac",
      "-b:a",
      "96k",
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

async function main() {
  if (!ffmpegPath || !fs.existsSync(ffmpegPath)) {
    console.error("FFmpeg introuvable. Lance npm install ffmpeg-static --save-dev");
    process.exitCode = 1;
    return;
  }

  if (!fs.existsSync(sourceDir)) {
    console.error(`Missing source directory: ${sourceDir}`);
    process.exitCode = 1;
    return;
  }

  fs.mkdirSync(outputDir, { recursive: true });

  const files = fs.readdirSync(sourceDir).filter(isVideo);

  if (files.length === 0) {
    console.log("No video files found in public/videos-original.");
    return;
  }

  let successCount = 0;
  let failureCount = 0;

  for (const fileName of files) {
    const outputName = getOutputName(fileName);
    const inputPath = path.join(sourceDir, fileName);
    const outputPath = path.join(outputDir, outputName);
    const before = fs.statSync(inputPath).size;

    if (!expectedNames.has(outputName)) {
      console.warn(`Skipping unexpected video name: ${fileName} -> ${outputName}`);
      continue;
    }

    console.log(`Compressing ${fileName} -> ${outputName}`);

    const tempPath = path.join(outputDir, `.${outputName}.tmp.mp4`);
    const result = await runFfmpeg(inputPath, tempPath);

    if (!result.ok) {
      failureCount += 1;
      if (fs.existsSync(tempPath)) {
        fs.rmSync(tempPath, { force: true });
      }
      console.error(`Failed: ${fileName}`);
      console.error(result.error);
      continue;
    }

    fs.renameSync(tempPath, outputPath);

    const after = fs.statSync(outputPath).size;
    const saved = before > 0 ? ((1 - after / before) * 100).toFixed(1) : "0.0";
    console.log(`Done: ${formatBytes(before)} -> ${formatBytes(after)} (${saved}% smaller)`);
    successCount += 1;
  }

  console.log(`Compression finished: ${successCount} succeeded, ${failureCount} failed.`);

  if (failureCount > 0) {
    console.warn("Some videos failed. See the errors above.");
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
