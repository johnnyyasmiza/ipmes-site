"use client";

import Image from "next/image";
import type { IpmesImage } from "@/lib/ipmes-images";

export default function Lightbox({
  image,
  onClose,
  onNext,
  onPrevious,
}: {
  image: IpmesImage | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  if (!image) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[80] bg-[#031F1E]/90 p-4 backdrop-blur" role="dialog" aria-modal="true">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-white px-4 py-2 text-sm font-black text-[#073B3A]"
      >
        Fermer
      </button>
      <button
        type="button"
        onClick={onPrevious}
        className="absolute left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/92 px-4 py-3 text-sm font-black text-[#073B3A] sm:block"
      >
        Précédent
      </button>
      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/92 px-4 py-3 text-sm font-black text-[#073B3A] sm:block"
      >
        Suivant
      </button>
      <button type="button" onClick={onClose} className="absolute inset-0" aria-label="Fermer la lightbox" />
      <div className="relative mx-auto flex h-full max-w-6xl items-center justify-center">
        <div className="relative h-[80vh] w-full overflow-hidden rounded-[2rem] bg-[#073B3A] shadow-2xl shadow-black/30">
          <Image
            src={image.large}
            alt={image.originalName}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}
