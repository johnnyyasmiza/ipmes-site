"use client";

import { useEffect, useRef, useState } from "react";

type OptimizedVideoProps = {
  src: string;
  mobileSrc?: string;
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
  priority?: boolean;
  rootMargin?: string;
  onStarted?: () => void;
};

export default function OptimizedVideo({
  src,
  mobileSrc,
  poster,
  className,
  autoPlay = true,
  loop = true,
  preload = "metadata",
  controls = false,
  muted = true,
  playsInline = true,
  ariaLabel,
  "aria-hidden": ariaHidden,
  playOnHover = false,
  playOnClick = false,
  priority = false,
  rootMargin = "220px 0px",
  onStarted,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const [hasLoaded, setHasLoaded] = useState(priority);
  const canAutoplay = autoPlay && muted;
  const [shouldPlay, setShouldPlay] = useState(priority && canAutoplay);

  useEffect(() => {
    const target = wrapperRef.current;

    if (priority || !target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsVisible(visible);

        if (visible) {
          setHasLoaded(true);
          setShouldPlay(canAutoplay);
        }
      },
      { rootMargin, threshold: 0.12 },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [canAutoplay, priority, rootMargin]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || hasError) {
      return;
    }

    if (!isVisible) {
      video.pause();
      return;
    }

    if (!hasLoaded || !shouldPlay) {
      return;
    }

    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;

    if (!priority && connection?.saveData && muted) {
      return;
    }

    video
      .play()
      .then(onStarted)
      .catch(() => {
        // Autoplay policies can reject play attempts; keep the poster visible.
      });
  }, [hasError, hasLoaded, isVisible, muted, onStarted, priority, shouldPlay]);

  const play = () => {
    if (hasError) {
      return;
    }

    setHasLoaded(true);
    setIsVisible(true);
    setShouldPlay(true);
  };

  if (hasError) {
    return (
      <div
        className={`flex items-end bg-gradient-to-br from-[#073B3A] via-[#0f6f68] to-[#E7F8F7] bg-cover bg-center p-5 ${className ?? ""}`}
        style={poster ? { backgroundImage: `url(${poster})` } : undefined}
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
        role={ariaLabel ? "img" : undefined}
      >
        {ariaLabel && !poster ? (
          <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#073B3A] shadow">
            {ariaLabel}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <div ref={wrapperRef} className={className}>
      <video
        ref={videoRef}
        src={hasLoaded && !mobileSrc ? src : undefined}
        poster={poster}
        autoPlay={canAutoplay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        preload={hasLoaded ? preload : "metadata"}
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
        className="h-full w-full object-cover"
        aria-label={ariaLabel}
        aria-hidden={ariaHidden}
      >
        {hasLoaded && mobileSrc ? (
          <>
            <source src={mobileSrc} media="(max-width: 768px)" type="video/mp4" />
            <source src={src} type="video/mp4" />
          </>
        ) : null}
      </video>
    </div>
  );
}
