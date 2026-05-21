"use client";

import { useEffect, useRef, useState } from "react";

export function SpaceVideo({
  src,
  poster,
  title,
  allowSoundOnClick = false,
  objectFitClassName = "object-cover",
  objectPositionClassName = "object-center",
}: {
  src: string;
  poster?: string;
  title: string;
  allowSoundOnClick?: boolean;
  objectFitClassName?: string;
  objectPositionClassName?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    if (!shouldLoad || !shouldPlay || !videoRef.current) {
      return;
    }

    videoRef.current.play().catch((error) => {
      console.error("Impossible de lancer la video :", error);
    });
  }, [shouldLoad, shouldPlay]);

  const loadAndPlay = () => {
    setShouldLoad(true);
    setShouldPlay(true);
  };

  const handleClick = () => {
    if (!allowSoundOnClick || soundEnabled) {
      return;
    }

    setShouldLoad(true);
    setSoundEnabled(true);

    window.requestAnimationFrame(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.currentTime = 0;
      }

      setShouldPlay(true);
    });
  };

  if (hasError) {
    return (
      <div
        className="h-full w-full bg-gradient-to-br from-teal-100 via-white to-emerald-100 bg-cover bg-center"
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
      />
    );
  }

  return (
    <div
      className={
        allowSoundOnClick
          ? "relative h-full w-full cursor-pointer overflow-hidden"
          : "relative h-full w-full overflow-hidden"
      }
      onClick={handleClick}
      onPointerEnter={(event) => {
        if (!allowSoundOnClick && event.pointerType === "mouse") {
          loadAndPlay();
        }
      }}
    >
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        poster={poster}
        muted={!soundEnabled}
        loop={!allowSoundOnClick}
        playsInline
        preload="none"
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
