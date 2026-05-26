"use client";

import { useEffect, useRef, useState } from "react";

const guidedTourSrc = "/videos/optimized/gdrvisite.mp4";
const guidedTourPoster = "/images/ipmes/hero/ipmes-gallery-076-large.webp";

export default function GuidedTourVideo() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const target = wrapperRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "220px 0px", threshold: 0.12 },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  const startVideo = () => {
    if (hasError) {
      return;
    }

    setHasStarted(true);

    window.requestAnimationFrame(() => {
      const video = videoRef.current;

      if (!video) {
        return;
      }

      video.muted = false;
      video.controls = true;
      video.play().catch(() => undefined);
    });
  };

  return (
    <section className="flex w-full justify-center px-4 py-10">
      <div
        ref={wrapperRef}
        className="relative aspect-[9/16] w-full max-w-[420px] overflow-hidden rounded-[24px] bg-black shadow-xl sm:rounded-[28px]"
      >
        {hasError ? (
          <div
            className="flex h-full w-full items-end bg-cover bg-center p-5"
            style={{ backgroundImage: `url(${guidedTourPoster})` }}
            role="img"
            aria-label="Visite guidée IPMES"
          >
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#073B3A] shadow">
              Visite guidée IPMES
            </span>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              src={isVisible || hasStarted ? guidedTourSrc : undefined}
              poster={guidedTourPoster}
              muted={!hasStarted}
              playsInline
              preload={isVisible ? "metadata" : "none"}
              controls={hasStarted}
              className="h-full w-full object-contain"
              aria-label="Visite guidée du centre IPMES"
              onError={() => setHasError(true)}
            >
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>

            {!hasStarted ? (
              <button
                type="button"
                className="absolute inset-0 z-10 flex items-center justify-center bg-black/18 px-4 text-center"
                onClick={startVideo}
                aria-label="Lancer la visite guidée avec le son"
              >
                <span className="rounded-full bg-white/92 px-5 py-3 text-sm font-black text-[#073B3A] shadow-lg">
                  Cliquer pour lancer la visite avec le son
                </span>
              </button>
            ) : null}
          </>
        )}
      </div>
    </section>
  );
}
