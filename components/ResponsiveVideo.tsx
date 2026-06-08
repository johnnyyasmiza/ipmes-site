"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { SpaceVideoSources } from "@/data/spaces";
import { useLanguage } from "./i18n";

type ResponsiveVideoProps = {
  sources: SpaceVideoSources;
  poster: string;
  alt: string;
  className?: string;
  videoClassName?: string;
  imageSizes?: string;
  priority?: boolean;
  allowSoundOnClick?: boolean;
  deferUntilInteraction?: boolean;
};

export default function ResponsiveVideo({
  sources,
  poster,
  alt,
  className = "",
  videoClassName = "object-cover object-center",
  imageSizes = "100vw",
  priority = false,
  allowSoundOnClick = false,
  deferUntilInteraction = true,
}: ResponsiveVideoProps) {
  const { t } = useLanguage();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const needsInteraction = allowSoundOnClick || deferUntilInteraction;
  const shouldLoadVideo = isVisible && !hasError && (!needsInteraction || soundEnabled);

  const sourceList = useMemo(() => {
    const items = [
      sources.mobile ? { src: sources.mobile, media: "(max-width: 768px)" } : null,
      { src: sources.desktop, media: "(min-width: 769px)" },
      sources.fallback ? { src: sources.fallback } : null,
    ].filter(Boolean) as Array<{ src: string; media?: string }>;

    return Array.from(new Map(items.map((source) => [source.src + source.media, source])).values());
  }, [sources]);

  useEffect(() => {
    const target = wrapperRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "180px 0px", threshold: 0.18 },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !isVisible || hasError) {
      video?.pause();
      return;
    }

    if (needsInteraction && !soundEnabled) {
      video.pause();
      return;
    }

    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;

    if (!priority && connection?.saveData && !soundEnabled) {
      return;
    }

    video.play().catch(() => {
      setIsReady(false);
    });
  }, [hasError, isVisible, needsInteraction, priority, soundEnabled]);

  const enableSound = useCallback(() => {
    if ((!allowSoundOnClick && !deferUntilInteraction) || soundEnabled) {
      return;
    }

    const video = videoRef.current;
    setSoundEnabled(true);

    if (video) {
      video.muted = false;
      video.currentTime = 0;
      video.play().catch(() => undefined);
    }
  }, [allowSoundOnClick, deferUntilInteraction, soundEnabled]);

  return (
    <div
      ref={wrapperRef}
      className={`video-wrapper relative overflow-hidden bg-[#003b35] ${className}`}
      onClick={enableSound}
    >
      <Image
        src={poster}
        alt={alt}
        fill
        priority={priority}
        sizes={imageSizes}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          isReady && !hasError ? "opacity-0" : "opacity-100"
        }`}
      />

      {shouldLoadVideo ? (
        <video
          ref={videoRef}
          className={`relative h-full w-full ${videoClassName}`}
          poster={poster}
          autoPlay={false}
          muted={!soundEnabled}
          playsInline
          loop={false}
          preload="none"
          controls={soundEnabled}
          aria-label={alt}
          onCanPlay={() => setIsReady(true)}
          onPlaying={() => setIsReady(true)}
          onError={() => setHasError(true)}
        >
          {sourceList.map((source) => (
            <source key={`${source.src}-${source.media ?? "default"}`} src={source.src} media={source.media} type="video/mp4" />
          ))}
          {t("video.unsupported")}
        </video>
      ) : null}

      {allowSoundOnClick && !soundEnabled ? (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 px-4">
          <span className="rounded-full bg-white/92 px-5 py-3 text-center text-sm font-black text-[#073B3A] shadow-lg">
            {t("video.soundPrompt")}
          </span>
        </div>
      ) : null}
    </div>
  );
}
