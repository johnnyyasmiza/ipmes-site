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
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    const target = wrapperRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);

        if (visible && !allowSoundOnClick) {
          setShouldLoad(true);
          setShouldPlay(true);
        }
      },
      { rootMargin: "180px 0px", threshold: 0.18 },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [allowSoundOnClick]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !isVisible) {
      video?.pause();
      return;
    }

    if (!shouldLoad || !shouldPlay) {
      return;
    }

    video.play().catch(() => undefined);
  }, [isVisible, shouldLoad, shouldPlay]);

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
        className="flex h-full w-full items-end bg-gradient-to-br from-teal-100 via-white to-emerald-100 bg-cover bg-center p-5"
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
      >
        {!poster ? (
          <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#073B3A] shadow">
            {title}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
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
      <div
        className="absolute inset-0 bg-gradient-to-br from-teal-100 via-white to-emerald-100 bg-cover bg-center"
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
      />
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        poster={poster}
        muted={!soundEnabled}
        loop={!allowSoundOnClick}
        playsInline
        preload={shouldLoad ? "metadata" : "none"}
        controls={soundEnabled}
        onError={() => setHasError(true)}
        className={`relative h-full w-full ${objectFitClassName} ${objectPositionClassName}`}
        aria-label={title}
      >
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>

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
