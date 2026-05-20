"use client";

import CTASection from "@/components/CTASection";
import ExperienceSection from "@/components/ExperienceSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import { FounderSection } from "@/components/FounderSection";
import Header from "@/components/Header";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useLanguage } from "@/components/i18n";

export default function AProposPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center 2xl:max-w-[1500px]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
                {t("pages.aboutEyebrow")}
              </p>
              <h1 className="mt-4 max-w-5xl text-[34px] font-black leading-[1.12] text-[#073B3A] sm:text-4xl md:text-5xl lg:text-6xl">
                {t("pages.aboutTitle")}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#102A2A]/70">
                {t("pages.aboutDescription")}
              </p>
            </div>
            <div className="glass-card rounded-[24px] p-5 sm:rounded-[28px] sm:p-6 md:p-8">
              <div className="rounded-[24px] bg-[#073B3A] p-5 text-white sm:p-6">
                <p className="text-sm font-bold text-[#1CC7C7]">Vision</p>
                <p className="mt-3 text-xl font-black leading-snug sm:text-2xl">
                  Créer un environnement fiable où apprendre, pratiquer, recevoir et organiser devient simple.
                </p>
              </div>
            </div>
          </div>
        </section>
        <FounderSection />
        <ExperienceSection />
        <WhyChooseUs />
        <CTASection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
