"use client";

import { useEffect, useRef, useState } from "react";

type OptimizedVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  preload?: "none" | "metadata" | "auto";
  controls?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  ariaLabel?: string;
  "aria-hidden"?: boolean | "true" | "false";
  playOnHover?: boolean;
  playOnClick?: boolean;
  onStarted?: () => void;
};

export default function OptimizedVideo({
  src,
  poster,
  className,
  autoPlay = false,
  loop = false,
  preload = "none",
  controls = false,
  muted = true,
  playsInline = true,
  ariaLabel,
  "aria-hidden": ariaHidden,
  playOnHover = false,
  playOnClick = false,
  onStarted,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(autoPlay || preload !== "none");
  const [shouldPlay, setShouldPlay] = useState(autoPlay);

  useEffect(() => {
    if (!shouldLoad || !shouldPlay || !videoRef.current) {
      return;
    }

    videoRef.current
      .play()
      .then(onStarted)
      .catch(() => {
        // Autoplay policies can reject play attempts; keep the poster visible.
      });
  }, [onStarted, shouldLoad, shouldPlay]);

  const play = () => {
    if (hasError) {
      return;
    }

    setShouldLoad(true);
    setShouldPlay(true);
  };

  if (hasError) {
    return (
      <div
        className={`bg-[#073B3A] bg-cover bg-center ${className ?? ""}`}
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        role={ariaLabel ? "img" : undefined}
      />
    );
  }

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={preload}
      controls={controls}
      onPointerEnter={(event) => {
        if (playOnHover && event.pointerType === "mouse") {
          play();
        }
      }}
      onClick={() => {
        if (playOnClick) {
          play();
        }
      }}
      onError={() => setHasError(true)}
      className={className}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    />
  );
}
