"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "./i18n";

type VoiceVideo = {
  name: string;
  specialty: string;
  fileName: string;
  featured?: boolean;
  links?: {
    label: string;
    url: string;
  }[];
};

const voiceVideos: VoiceVideo[] = [
  {
    name: "Mohamed Ait Hammadi",
    specialty: "Formateur en hijama et medecine alternative traditionnelle",
    fileName: "mohamed ait hammadi  formateur en hijama et en medecine alternative traditionnelle.mp4",
    featured: true,
  },
  {
    name: "Houda Chaaou",
    specialty: "Specialiste en travaux artistiques et e-commerce",
    fileName: "houda chaaou specialiste en traveaux artistiques et ecomerce.mp4",
  },
  {
    name: "Ahlam Mezgueldi",
    specialty: "Chifarome",
    fileName: "ahlam mezgueldi chifarome.mp4",
  },
  {
    name: "Mohamed Ouaddi",
    specialty: "Formateur et DG de LApps Academy",
    fileName: "mohamed ouaddi formateur et dg de lapps academy.mp4",
    featured: true,
  },
  {
    name: "Abdelhak Louchahi",
    specialty: "Formateur pedagogique",
    fileName: "abdelhak louchahi  formateur pedagogique.mp4",
  },
  {
    name: "Maitre Saliha",
    specialty: "Maitre enseignante Reiki",
    fileName: "maitre saliha maitre enseigante reiki.mp4",
  },
  {
    name: "Samira Sardi",
    specialty: "Formatrice educatrice specialisee dyslexie",
    fileName: "samira sardi formatrce educatrice specialise dyslexie.mp4",
  },
  {
    name: "Wafae Lajili",
    specialty: "Meta coach et formatrice",
    fileName: "wafae lajili meta coach et formatrice.mp4",
  },
  {
    name: "Najia Chafai",
    specialty: "Artiste",
    fileName: "najia chafai artiste.mp4",
  },
  {
    name: "Othmane Alaoui",
    specialty: "Formateur théâtre",
    fileName: "othmane alaoui formateur theatre.mp4",
  },
  {
    name: "Anas & Ayman",
    specialty: "Lead.FlowProduction",
    fileName: "anas & ayman leadflowproduction.mp4",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/lead.flowproduction/" },
      {
        label: "TikTok",
        url: "https://www.tiktok.com/@leadflowproductio?is_from_webapp=1&sender_device=pc",
      },
      { label: "Site web", url: "https://leadflowproduction.carrd.co/" },
    ],
  },
];

function getVideoSrc(fileName: string) {
  return encodeURI(`/videos/prof/${fileName}`);
}

const editorialCardClasses = [
  "lg:col-span-5 lg:h-[620px]",
  "lg:col-span-4 lg:mt-10",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-4 lg:mt-10",
  "lg:col-span-4",
  "lg:col-span-6 lg:h-[620px]",
  "lg:col-span-6 lg:mt-10 lg:h-[620px]",
  "lg:col-span-4",
  "lg:col-span-4 lg:mt-10",
  "lg:col-span-4",
];

function VoiceVideoCard({
  voice,
  layoutClassName,
  onOpen,
}: {
  voice: VoiceVideo;
  layoutClassName: string;
  onOpen: (voice: VoiceVideo) => void;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <article
        className={`relative h-[520px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#031312] via-[#073B3A] to-[#071f1d] text-left shadow-2xl ${layoutClassName}`}
        aria-label={voice.name}
      >
        <div className="absolute bottom-0 left-0 z-10 w-full p-5">
          <div className="mb-3 h-px w-16 bg-[#1cc7c7]" />
          <h3 className="text-2xl font-black leading-tight text-white">{voice.name}</h3>
          <p className="mt-2 max-w-[18rem] text-sm font-medium leading-relaxed text-white/72">
            {voice.specialty}
          </p>
        </div>
      </article>
    );
  }

  return (
    <article
      role="button"
      tabIndex={0}
      className={`group relative h-[520px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#031312] text-left shadow-2xl outline-none transition duration-500 hover:scale-[1.015] hover:border-[#1cc7c7]/50 hover:shadow-[0_24px_95px_rgba(0,166,166,0.28)] focus-visible:ring-2 focus-visible:ring-[#1cc7c7] ${layoutClassName}`}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) {
          return;
        }

        onOpen(voice);
      }}
      onKeyDown={(event) => {
        if ((event.target as HTMLElement).closest("a")) {
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(voice);
        }
      }}
      aria-label={`Voir la video de ${voice.name}`}
    >
      <video
        ref={videoRef}
        src={getVideoSrc(voice.fileName)}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onError={() => setHasError(true)}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
        aria-label={`${voice.name}, ${voice.specialty}`}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-4 top-4 z-10 flex items-center justify-between">
        <span className="rounded-full border border-white/15 bg-black/35 px-3 py-1 text-[11px] font-black uppercase tracking-[0.24em] text-[#dffbf8] backdrop-blur">
          IPMES
        </span>
      </div>
      <div className="absolute bottom-0 left-0 z-10 w-full translate-y-2 p-5 transition duration-500 group-hover:translate-y-0">
        <div className="mb-3 h-px w-16 bg-[#1cc7c7]" />
        <h3 className="text-2xl font-black leading-tight text-white">{voice.name}</h3>
        <p className="mt-2 max-w-[18rem] text-sm font-medium leading-relaxed text-white/72">
          {voice.specialty}
        </p>
        {voice.links ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {voice.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/12 px-3 py-1.5 text-xs font-black text-white backdrop-blur transition hover:border-[#1cc7c7]/60 hover:bg-[#1cc7c7] hover:text-[#031312] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1cc7c7]"
                onClick={(event) => event.stopPropagation()}
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default function VoicesOfIpmes() {
  const { language } = useLanguage();
  const [activeVoice, setActiveVoice] = useState<VoiceVideo | null>(null);

  const copy = useMemo(() => {
    if (language === "en") {
      return {
        eyebrow: "Experts & Partners",
        title: "Experts & Partners",
        subtitle:
          "Professionals, artists and specialists collaborating with IPMES.",
        close: "Close",
      };
    }

    return {
      eyebrow: "Experts & partenaires",
      title: "Experts & partenaires",
      subtitle:
        "Professionnels, artistes et spécialistes collaborant avec IPMES.",
      close: "Fermer",
    };
  }, [language]);

  useEffect(() => {
    if (!activeVoice) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveVoice(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVoice]);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#031312_0%,#071f1d_58%,#031312_100%)] py-20 text-white sm:py-24">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#00a6a6]/12 blur-[120px]" />
        <div className="absolute bottom-[-160px] right-[-80px] h-[360px] w-[360px] rounded-full bg-[#1cc7c7]/10 blur-[95px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-[#1cc7c7]">
            {copy.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {copy.title}
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-white/68 sm:text-lg">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {voiceVideos.map((voice, index) => (
            <VoiceVideoCard
              key={voice.fileName}
              voice={voice}
              layoutClassName={editorialCardClasses[index % editorialCardClasses.length]}
              onOpen={setActiveVoice}
            />
          ))}
        </div>
      </div>

      {activeVoice ? (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-[#031312]/88 px-4 py-6 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={`Video ${activeVoice.name}`}
          onClick={() => setActiveVoice(null)}
        >
          <div
            className="relative w-full max-w-[min(92vw,540px)] overflow-hidden rounded-3xl border border-white/12 bg-[#071f1d] shadow-[0_30px_120px_rgba(0,0,0,0.65)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/45 text-2xl leading-none text-white backdrop-blur transition hover:bg-white hover:text-[#031312] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1cc7c7]"
              onClick={() => setActiveVoice(null)}
              aria-label={copy.close}
            >
              x
            </button>
            <video
              key={activeVoice.fileName}
              src={getVideoSrc(activeVoice.fileName)}
              controls
              playsInline
              preload="metadata"
              className="aspect-[9/16] max-h-[82vh] w-full bg-black object-contain"
              aria-label={`${activeVoice.name}, ${activeVoice.specialty}`}
            />
            <div className="border-t border-white/10 bg-[#071f1d]/95 p-5">
              <div className="mb-3 inline-flex rounded-full border border-[#1cc7c7]/35 bg-[#1cc7c7]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.24em] text-[#9df4ec]">
                IPMES
              </div>
              <h3 className="text-2xl font-black text-white">{activeVoice.name}</h3>
              <p className="mt-2 text-sm font-medium leading-6 text-white/68">
                {activeVoice.specialty}
              </p>
              {activeVoice.links ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {activeVoice.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/15 bg-white/12 px-3 py-1.5 text-xs font-black text-white backdrop-blur transition hover:border-[#1cc7c7]/60 hover:bg-[#1cc7c7] hover:text-[#031312] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1cc7c7]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
