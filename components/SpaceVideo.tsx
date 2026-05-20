"use client";

import { useRef, useState } from "react";

export function SpaceVideo({
  src,
  title,
  allowSoundOnClick = false,
  objectFitClassName = "object-cover",
  objectPositionClassName = "object-center",
}: {
  src: string;
  title: string;
  allowSoundOnClick?: boolean;
  objectFitClassName?: string;
  objectPositionClassName?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleClick = async () => {
    if (!allowSoundOnClick || soundEnabled || !videoRef.current) {
      return;
    }

    videoRef.current.muted = false;
    videoRef.current.currentTime = 0;
    setSoundEnabled(true);

    try {
      await videoRef.current.play();
    } catch (error) {
      console.error("Impossible de lancer la vidéo avec son :", error);
    }
  };

  if (hasError) {
    return <div className="h-full w-full bg-gradient-to-br from-teal-100 via-white to-emerald-100" />;
  }

  return (
    <div
      className={
        allowSoundOnClick
          ? "relative h-full w-full cursor-pointer overflow-hidden"
          : "relative h-full w-full overflow-hidden"
      }
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted={!soundEnabled}
        loop
        playsInline
        preload="metadata"
        controls={soundEnabled}
        onError={() => setHasError(true)}
        className={`h-full w-full ${objectFitClassName} ${objectPositionClassName}`}
        aria-label={title}
      />

      {allowSoundOnClick && !soundEnabled && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20">
          <div className="rounded-full bg-white/90 px-5 py-3 text-center text-sm font-bold text-[#073B3A] shadow-lg">
            Cliquer pour lancer la visite avec le son
          </div>
        </div>
      )}
    </div>
  );
}
