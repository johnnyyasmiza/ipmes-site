"use client";

import CTASection from "@/components/CTASection";
import ExperienceSection from "@/components/ExperienceSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import FormationsFilter from "@/components/FormationsFilter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SpacesTabs from "@/components/SpacesTabs";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import { useLanguage } from "@/components/i18n";
import { formations } from "@/data/formations";
import { spaces } from "@/data/spaces";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />

        <ExperienceSection />

        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1500px]">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
                  {t("home.formationsEyebrow")}
                </p>
                <h2 className="mt-4 text-3xl font-black text-[#073B3A] sm:text-4xl">
                  {t("home.formationsTitle")}
                </h2>
              </div>
              <div className="w-full sm:w-auto">
                <WhatsAppButton label={t("home.formationCta")} variant="light" />
              </div>
            </div>
            <FormationsFilter formations={formations} limit={3} />
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 2xl:max-w-[1500px]">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
                {t("home.spacesEyebrow")}
              </p>
              <h2 className="mt-4 text-3xl font-black text-[#073B3A] sm:text-4xl">
                {t("home.spacesTitle")}
              </h2>
            </div>
            <SpacesTabs spaces={spaces} />
          </div>
        </section>

        <WhyChooseUs />
        <CTASection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
