"use client";

import Image from "next/image";
import { useState } from "react";

const founderImage = "/images/chaabikawtar.jpeg";

export default function FounderCard() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      id="fondatrice"
      className="scroll-mt-28 rounded-[24px] border border-white/70 bg-white/82 p-5 shadow-lg shadow-[#00A6A6]/10 ring-1 ring-[#00A6A6]/10 backdrop-blur-xl sm:rounded-[28px] sm:p-6"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#073B3A] via-[#0f6f6b] to-[#00A6A6] shadow-lg shadow-[#073B3A]/15 ring-1 ring-white/70 sm:h-24 sm:w-24">
          {!imageFailed ? (
            <Image
              src={founderImage}
              alt="Kawtar Chaabi, fondatrice et directrice pédagogique IPMES"
              fill
              sizes="96px"
              className="object-cover"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-2xl font-black text-white">
              KC
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#00A6A6]">
            Fondatrice
          </p>
          <h3 className="mt-1 text-2xl font-black text-[#073B3A]">Kawtar Chaabi</h3>
          <p className="mt-1 text-sm font-bold text-[#102A2A]/72">
            Fondatrice & Directrice pédagogique
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#102A2A]/68">
            Une vision centrée sur la pratique, l’accompagnement et la qualité des parcours.
            IPMES accompagne les apprenants, les formateurs et les porteurs de projets dans un
            cadre sérieux, équipé et humain.
          </p>
        </div>

        <div className="shrink-0">
          <a
            href="https://www.linkedin.com/in/kawtar-chaabi-341039212/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-[#00A6A6]/20 bg-white px-5 py-3 text-sm font-black text-[#073B3A] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#F4FAF9] sm:w-auto"
          >
            Voir le profil LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
