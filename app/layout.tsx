import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AnimatedBackground from "@/components/AnimatedBackground";
import { LanguageProvider } from "@/components/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IPMES | Formations et espaces à louer à Casablanca Maârif",
  description:
    "IPMES est un centre moderne à Casablanca Maârif pour formations professionnelles, location de salles, ateliers et événements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[#F4FAF9] text-[#102A2A]">
        <LanguageProvider>
          <AnimatedBackground />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
