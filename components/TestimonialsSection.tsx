"use client";

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="testimonials-section scroll-mt-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1500px]">
        <div className="section-header mx-auto mb-8 max-w-2xl text-center">
          <span className="eyebrow text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
            Témoignages
          </span>
          <h2 className="mt-4 text-3xl font-black text-[#073B3A] sm:text-4xl">
            Ils ont vécu l’expérience IPMES
          </h2>
          <p className="mt-4 text-base leading-8 text-[#102A2A]/70">
            Des témoignages authentiques de nos apprenants et visiteurs.
          </p>
        </div>

        <div className="testimonial-video-card">
          <video
            src="/videos/temoignage.mp4"
            controls
            playsInline
            preload="metadata"
            className="aspect-[9/16] w-full rounded-[24px] bg-[#002b24] object-contain"
            aria-label="Témoignage IPMES"
          >
            Votre navigateur ne supporte pas la lecture video.
          </video>
        </div>
      </div>
    </section>
  );
}
