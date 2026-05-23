import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ffmpegPath from "ffmpeg-static";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const posterDir = path.join(root, "public", "images", "posters", "spaces");
const videoDir = path.join(root, "public", "videos", "spaces");

const spaces = [
  {
    poster: "salle-formation.jpg",
    posterSource: "public/images/ipmes/spaces/ipmes-gallery-021-large.webp",
    videoSource: "public/videos/salle-formation.mp4",
    desktop: "salle-formation-desktop.mp4",
    mobile: "salle-formation-mobile.mp4",
  },
  {
    poster: "salle-yoga.jpg",
    posterSource: "public/images/ipmes/yoga/ipmes-gallery-029-large.webp",
    videoSource: "public/videos/salle-yoga.mp4",
    desktop: "salle-yoga-desktop.mp4",
    mobile: "salle-yoga-mobile.mp4",
  },
  {
    poster: "bureau-accueil.jpg",
    posterSource: "public/images/bureau-equipe.jpg",
    videoSource: "public/videos/bureau.mp4",
    desktop: "bureau-accueil-desktop.mp4",
    mobile: "bureau-accueil-mobile.mp4",
  },
  {
    poster: "cuisine.jpg",
    posterSource: "public/images/cuisine.jpg",
    videoSource: "public/videos/cuisine.mp4",
    desktop: "cuisine-desktop.mp4",
    mobile: "cuisine-mobile.mp4",
  },
  {
    poster: "salle-therapie-podcast.jpg",
    posterSource: "public/images/ipmes/hero/ipmes-gallery-076-large.webp",
    videoSource: "public/videos/salledetherapiepodcast.mp4",
    desktop: "salle-therapie-podcast-desktop.mp4",
    mobile: "salle-therapie-podcast-mobile.mp4",
  },
  {
    poster: "esthetique.jpg",
    posterSource: "public/images/salle-esthetique.jpg",
    videoSource: "public/videos/salle-chirurgie.mp4",
    desktop: "esthetique-desktop.mp4",
    mobile: "esthetique-mobile.mp4",
  },
];

function runFfmpeg(input, output, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(ffmpegPath, ["-y", "-i", input, ...args, output], {
      stdio: ["ignore", "pipe", "pipe"],
    });
    let stderr = "";

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(stderr.trim() || `ffmpeg exited with code ${code}`));
    });
  });
}

async function buildPosters() {
  fs.mkdirSync(posterDir, { recursive: true });

  for (const space of spaces) {
    const input = path.join(root, space.posterSource);
    const output = path.join(posterDir, space.poster);

    await sharp(input)
      .resize({ width: 1280, height: 720, fit: "cover", position: "centre" })
      .jpeg({ quality: 78, progressive: true })
      .toFile(output);

    console.log(`Poster: ${path.relative(root, output)}`);
  }
}

async function buildVideos() {
  if (!ffmpegPath || !fs.existsSync(ffmpegPath)) {
    throw new Error("FFmpeg introuvable. Lance npm install si besoin.");
  }

  fs.mkdirSync(videoDir, { recursive: true });

  for (const space of spaces) {
    const input = path.join(root, space.videoSource);
    const desktopOutput = path.join(videoDir, space.desktop);
    const mobileOutput = path.join(videoDir, space.mobile);

    await runFfmpeg(input, desktopOutput, [
      "-an",
      "-vf",
      "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720",
      "-c:v",
      "libx264",
      "-preset",
      "veryfast",
      "-crf",
      "30",
      "-movflags",
      "+faststart",
    ]);
    console.log(`Video desktop: ${path.relative(root, desktopOutput)}`);

    await runFfmpeg(input, mobileOutput, [
      "-an",
      "-vf",
      "scale=720:1280:force_original_aspect_ratio=increase,crop=720:1280",
      "-c:v",
      "libx264",
      "-preset",
      "veryfast",
      "-crf",
      "34",
      "-movflags",
      "+faststart",
    ]);
    console.log(`Video mobile: ${path.relative(root, mobileOutput)}`);
  }
}

async function main() {
  await buildPosters();
  await buildVideos();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
