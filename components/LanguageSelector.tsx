"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { languages, useLanguage, type LanguageCode } from "./i18n";

const languageMeta: Record<LanguageCode, { flag: string; ariaLabel: string }> = {
  fr: { flag: "🇫🇷", ariaLabel: "Voir le site en français" },
  ar: { flag: "🇲🇦", ariaLabel: "عرض الموقع بالعربية" },
  en: { flag: "🇬🇧", ariaLabel: "View the site in English" },
  es: { flag: "🇪🇸", ariaLabel: "Ver el sitio en español" },
  de: { flag: "🇩🇪", ariaLabel: "Website auf Deutsch ansehen" },
  tr: { flag: "🇹🇷", ariaLabel: "Siteyi Türkçe görüntüle" },
};

export default function LanguageSelector({ onSelect }: { onSelect?: () => void }) {
  const { language, mounted, setLanguage } = useLanguage();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const activeLanguage = languages.find((item) => item.code === language) ?? languages[0];

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", onPointerDown);
    return () => window.removeEventListener("mousedown", onPointerDown);
  }, []);

  function chooseLanguage(code: LanguageCode) {
    setLanguage(code);
    setOpen(false);
    onSelect?.();
    const params = new URLSearchParams(window.location.search);
    params.set("lang", code);
    const query = params.toString();
    router.push(`${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white/80 px-4 text-sm font-black text-[#073B3A] shadow-sm ring-1 ring-[#00A6A6]/15 transition hover:-translate-y-0.5 hover:bg-[#F4FAF9]"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className="h-2 w-2 rounded-full bg-[#00A6A6]" />
        <span aria-hidden="true">{languageMeta[activeLanguage.code].flag}</span>
        {mounted ? activeLanguage.label : "Français"}
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 min-w-44 overflow-hidden rounded-2xl border border-[#00A6A6]/10 bg-white/96 p-1 shadow-2xl shadow-[#073B3A]/12 backdrop-blur"
        >
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              role="menuitem"
              onClick={() => chooseLanguage(item.code)}
              aria-label={languageMeta[item.code].ariaLabel}
              className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-bold transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:opacity-95 ${
                language === item.code
                  ? "bg-[#E7F8F7] text-[#00A6A6]"
                  : "text-[#073B3A] hover:bg-[#F4FAF9]"
              }`}
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true">{languageMeta[item.code].flag}</span>
                {item.label}
              </span>
              {language === item.code ? <span className="text-xs">✓</span> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
