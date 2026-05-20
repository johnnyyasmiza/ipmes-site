"use client";

import CTASection from "@/components/CTASection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import FormationsFilter from "@/components/FormationsFilter";
import Header from "@/components/Header";
import { InternationalFlags } from "@/components/InternationalFlags";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/components/i18n";
import { formations } from "@/data/formations";

export default function FormationsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1500px]">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#00A6A6]">
              {t("pages.formationsEyebrow")}
            </p>
            <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="max-w-5xl text-[34px] font-black leading-[1.12] text-[#073B3A] sm:text-4xl md:text-5xl lg:text-6xl">
                {t("pages.formationsTitle")}
              </h1>
              <div className="w-full shrink-0 sm:w-auto">
                <WhatsAppButton label={t("pages.dates")} />
              </div>
            </div>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#102A2A]/70">
              {t("pages.formationsDescription")}
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl 2xl:max-w-[1500px]">
            <InternationalFlags />
            <FormationsFilter formations={formations} />
          </div>
        </section>

        <CTASection />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
