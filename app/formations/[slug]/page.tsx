import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { formations } from "@/data/formations";

export function generateStaticParams() {
  return formations.map((formation) => ({
    slug: formation.slug,
  }));
}

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formation = formations.find((item) => item.slug === slug);

  if (!formation) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden px-4 py-24 sm:px-6 lg:px-8">
        <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-[1.5rem] bg-white shadow-2xl shadow-[#00A6A6]/10 ring-1 ring-[#00A6A6]/10 sm:rounded-[2rem]">
          <div className="relative h-[320px] overflow-hidden bg-[#073B3A] md:h-[420px]">
            {formation.videoUrl ? (
              <video
                src={formation.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls={false}
                className="h-full w-full object-cover"
                aria-label={formation.titleFr}
              />
            ) : (
              <Image
                src={formation.image}
                alt={formation.titleFr}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover"
              />
            )}

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,59,58,0.08),rgba(7,59,58,0.86))]" />

            <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-8 sm:left-8 sm:right-8">
              <span className="mb-4 inline-flex max-w-full rounded-full bg-white px-4 py-2 text-sm font-bold text-[#073B3A] shadow sm:px-5">
                {formation.category}
              </span>

              <h1 className="text-[32px] font-black leading-[1.12] md:text-5xl">{formation.titleFr}</h1>

              <p className="mt-3 text-lg font-bold text-white/90">
                {formation.durationFr} · {formation.price}
              </p>
            </div>
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-[1.5fr_1fr] md:p-8">
            <div>
              <h2 className="text-2xl font-black text-[#073B3A]">Détails de la formation</h2>

              <p className="mt-4 leading-8 text-[#102A2A]/70">
                {formation.shortDescriptionFr}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {formation.details.map((detail) => (
                  <div
                    key={detail}
                    className="rounded-2xl bg-[#F4FAF9] px-5 py-4 font-semibold text-[#073B3A]"
                  >
                    {detail}
                  </div>
                ))}
              </div>

              <Link
                href="/formations"
                className="mt-8 inline-flex max-w-full rounded-full border border-[#00A6A6]/20 bg-white px-5 py-3 text-center font-black text-[#073B3A] transition hover:-translate-y-0.5 hover:bg-[#F4FAF9] sm:px-6"
              >
                Retour aux formations
              </Link>
            </div>

            <aside className="rounded-[1.75rem] bg-[#F4FAF9] p-6">
              <h3 className="text-xl font-black text-[#073B3A]">Certification</h3>

              <div className="mt-4 rounded-2xl bg-white p-5 shadow-sm">
                {formation.diplomaFlagImage && (
                  <div className="relative h-20 w-28 overflow-hidden rounded-xl shadow-sm">
                    <Image
                      src={formation.diplomaFlagImage}
                      alt={formation.diplomaCountry || formation.titleFr}
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </div>
                )}

                <p className="mt-3 font-bold text-[#073B3A]">{formation.diplomaLabel}</p>
              </div>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#00A6A6] px-5 py-4 text-center font-black text-white shadow-lg shadow-[#00A6A6]/20 transition hover:-translate-y-0.5 hover:bg-[#008F8F] sm:px-6"
              >
                Réserver cette formation
              </Link>
            </aside>
          </div>
        </section>
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
