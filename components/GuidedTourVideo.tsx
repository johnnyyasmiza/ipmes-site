"use client";

const guidedTourSrc = "/videos/grdvisite.mp4";
const guidedTourPoster = "/images/ipmes/hero/ipmes-gallery-076-large.webp";

export default function GuidedTourVideo() {
  return (
    <section className="guided-tour-video flex w-full justify-center px-4 py-10">
      <div className="w-full max-w-[520px] rounded-[28px] bg-white/78 p-3 shadow-[0_20px_60px_rgba(0,45,38,0.12)] ring-1 ring-[#00A6A6]/12">
        <video
          src={guidedTourSrc}
          poster={guidedTourPoster}
          controls
          playsInline
          preload="metadata"
          className="aspect-[9/16] w-full rounded-[24px] bg-[#002b24] object-contain"
          aria-label="Visite guidee IPMES"
        >
          Votre navigateur ne supporte pas la lecture video.
        </video>
      </div>
    </section>
  );
}
