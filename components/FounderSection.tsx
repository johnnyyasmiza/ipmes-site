"use client";

import Image from "next/image";
import { founderContent } from "@/lib/founder-i18n";
import { useLanguage } from "./i18n";

const linkedInUrl = "https://www.linkedin.com/in/kawtar-chaabi-341039212/";

export function FounderSection() {
  const { language, t } = useLanguage();
  const isArabic = language === "ar";
  const content = founderContent[language];
  const tags = t("founder.tags").split("|");

  return (
    <section
      id="fondatrice"
      className="mx-auto w-full max-w-7xl scroll-mt-32 px-4 py-16 sm:px-6 lg:px-8 2xl:max-w-[1500px]"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="overflow-hidden rounded-[24px] border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur-xl sm:rounded-[28px] sm:p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="overflow-hidden rounded-[24px] bg-[#e9fbf8] shadow-lg sm:rounded-[28px]">
              <Image
                src="/images/chaabikawtar.jpeg"
                alt="Kawtar Chaabi, IPMES"
                width={520}
                height={680}
                className="h-[380px] w-full object-cover sm:h-[460px] md:h-[560px]"
              />
            </div>

            <div className="mt-5 rounded-[24px] bg-[#f2fbf8] p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#00a99d]">
                {t("founder.role")}
              </p>

              <h3 className="mt-2 text-2xl font-black text-[#073f3a]">Kawtar Chaabi</h3>

              <p className="mt-2 leading-7 text-slate-600">{t("founder.subtitle")}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-4 py-2 text-xs font-bold text-[#073f3a] shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#0A66C2] px-5 py-3 text-sm font-black text-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                {t("founder.profile")}
              </a>
            </div>
          </div>

          <div className={isArabic ? "text-right" : "text-left"}>
            <span className="inline-flex rounded-full bg-[#e9fbf8] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#00a99d]">
              {t("founder.eyebrow")}
            </span>

            <h2 className="mt-4 text-[30px] font-black leading-[1.12] text-[#073f3a] sm:text-3xl md:text-4xl">
              {t("founder.title")}
            </h2>

            <p className="mt-4 leading-8 text-slate-600">{t("founder.description")}</p>

            <div className="mt-8 grid gap-5">
              <div className="rounded-[24px] bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-xl font-black text-[#073f3a]">{t("founder.experience")}</h3>

                <div className="mt-5 space-y-5">
                  {content.experiences.map((exp) => (
                    <div
                      key={`${exp.title}-${exp.period}`}
                      className={`relative border-[#00a99d]/20 ${
                        isArabic ? "border-r-2 pr-5" : "border-l-2 pl-5"
                      }`}
                    >
                      <div
                        className={`absolute top-1 h-3 w-3 rounded-full bg-[#00a99d] ${
                          isArabic ? "-right-[7px]" : "-left-[7px]"
                        }`}
                      />

                      <h4 className="font-black text-[#073f3a]">{exp.title}</h4>

                      <p className="mt-1 text-sm font-bold text-slate-600">{exp.company}</p>

                      <p className="mt-1 text-xs font-semibold text-slate-500">
                        {exp.period}
                        {exp.duration ? ` · ${exp.duration}` : ""}
                      </p>

                      {exp.location ? (
                        <p className="mt-1 text-xs font-semibold text-slate-500">{exp.location}</p>
                      ) : null}

                      <ul className="mt-3 space-y-1 text-sm leading-6 text-slate-600">
                        {exp.items.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-xl font-black text-[#073f3a]">{t("founder.education")}</h3>

                <div className="mt-5 grid gap-3">
                  {content.education.map((item) => (
                    <div key={`${item.school}-${item.degree}`} className="rounded-2xl bg-[#f2fbf8] p-4">
                      <p className="font-black text-[#073f3a]">{item.school}</p>

                      <p className="mt-1 text-sm font-semibold text-slate-600">{item.degree}</p>

                      {item.period ? (
                        <p className="mt-1 text-xs font-bold text-slate-500">{item.period}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] bg-[#073f3a] p-5 text-white shadow-sm sm:p-6">
                <p className="text-sm font-semibold text-white/80">{t("founder.verified")}</p>

                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-[#073f3a] transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {t("founder.consult")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
