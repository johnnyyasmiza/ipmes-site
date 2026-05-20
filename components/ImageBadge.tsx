import type { ReactNode } from "react";

type ImageBadgeProps = {
  children: ReactNode;
};

export default function ImageBadge({ children }: ImageBadgeProps) {
  return (
    <span className="pointer-events-none relative z-10 rounded-full bg-white/92 px-4 py-2 text-sm font-black text-[#073B3A] shadow-sm backdrop-blur">
      {children}
    </span>
  );
}
