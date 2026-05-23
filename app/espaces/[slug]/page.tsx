import { notFound } from "next/navigation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SpaceDetailContent from "@/components/SpaceDetailContent";
import { spaces } from "@/data/spaces";

export function generateStaticParams() {
  return spaces.map((space) => ({
    slug: space.slug,
  }));
}

export default async function SpaceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const space = spaces.find((item) => item.slug === slug);

  if (!space) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden px-4 py-24 sm:px-6 lg:px-8">
        <SpaceDetailContent space={space} />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
