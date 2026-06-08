"use client";

import { useState } from "react";
import { useLanguage } from "./i18n";

type VideoCardProps = {
  src: string;
  mobileSrc?: string;
  poster?: string;
  label: string;
  className?: string;
  objectPosition?: string;
};

export default function VideoCard({
  src,
  mobileSrc,
  poster,
  label,
  className = "",
  objectPosition = "center center",
}: VideoCardProps) {
  const { t } = useLanguage();
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`video-card flex h-full w-full items-end bg-gradient-to-br from-[#073B3A] via-[#0f6f68] to-[#E7F8F7] bg-cover bg-center p-5 ${className}`}
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
        role="img"
        aria-label={label}
      >
        <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#073B3A] shadow">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className={`video-card relative overflow-hidden ${className}`}>
      <video
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="block h-full w-full object-cover object-center"
        style={{ objectPosition }}
        aria-label={label}
        onError={() => setHasError(true)}
      >
        {mobileSrc ? <source src={mobileSrc} media="(max-width: 768px)" type="video/mp4" /> : null}
        <source src={src} type="video/mp4" />
        {t("video.unsupported")}
      </video>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-16"
      >
        <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#073B3A] shadow">
          {label}
        </span>
      </div>
    </div>
  );
}
