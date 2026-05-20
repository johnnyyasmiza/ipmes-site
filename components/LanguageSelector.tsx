"use client";

import { useEffect, useRef, useState } from "react";
import { languages, useLanguage, type LanguageCode } from "./i18n";

export default function LanguageSelector({ onSelect }: { onSelect?: () => void }) {
  const { language, mounted, setLanguage } = useLanguage();
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
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-bold transition ${
                language === item.code
                  ? "bg-[#E7F8F7] text-[#00A6A6]"
                  : "text-[#073B3A] hover:bg-[#F4FAF9]"
              }`}
            >
              {item.label}
              {language === item.code ? <span className="text-xs">✓</span> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
