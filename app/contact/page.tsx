"use client";

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";
import { useLanguage } from "@/components/i18n";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1500px]">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
              {t("pages.contactEyebrow")}
            </p>
            <h1 className="mt-4 max-w-5xl text-[34px] font-black leading-[1.12] text-[#073B3A] sm:text-4xl md:text-5xl lg:text-6xl">
              {t("pages.contactTitle")}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#102A2A]/70">
              {t("pages.contactDescription")}
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-3 2xl:max-w-[1500px]">
            <div className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-6 md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#00A6A6]">Adresse</p>
              <h2 className="mt-3 text-2xl font-black text-[#073B3A]">45 rue Atlas, Maârif, Casablanca</h2>
              <p className="mt-3 text-sm leading-7 text-[#102A2A]/68">
                Centre accessible pour formations, rendez-vous et réservations d&apos;espaces.
              </p>
            </div>
            <div className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-6 md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#00A6A6]">WhatsApp</p>
              <h2 className="mt-3 text-2xl font-black text-[#073B3A]">Réponse rapide</h2>
              <p className="mt-3 text-sm leading-7 text-[#102A2A]/68">
                Indiquez le service souhaité, la date, le nombre de personnes et vos coordonnées.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#00A6A6]/10 bg-[#073B3A] p-5 text-white shadow-2xl shadow-[#073B3A]/15 sm:rounded-[28px] sm:p-6 md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#1CC7C7]">Action</p>
              <h2 className="mt-3 text-2xl font-black">{t("cta.button")}</h2>
              <a
                href={getWhatsAppUrl(t("hero.whatsappMessage"))}
                target="_blank"
                rel="noopener noreferrer"
                className="shine-button mt-6 inline-flex min-h-12 max-w-full items-center justify-center rounded-full bg-white px-5 py-3 text-center text-sm font-black text-[#073B3A] transition hover:-translate-y-1 hover:bg-[#F4FAF9] sm:px-6"
              >
                {t("nav.whatsapp", "WhatsApp")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
