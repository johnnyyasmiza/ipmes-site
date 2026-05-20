import { notFound } from "next/navigation";
import FormationDetailContent from "@/components/FormationDetailContent";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { formations } from "@/data/formations";

const slugAliases: Record<string, string> = {
  chirurgie: "esthetique-non-chirurgicale",
  esthetique: "esthetique-non-chirurgicale",
};

export function generateStaticParams() {
  return [
    ...formations.map((formation) => ({
      slug: formation.slug,
    })),
    ...Object.keys(slugAliases).map((slug) => ({ slug })),
  ];
}

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resolvedSlug = slugAliases[slug] ?? slug;
  const formation = formations.find((item) => item.slug === resolvedSlug);

  if (!formation) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen overflow-x-hidden px-4 py-24 sm:px-6 lg:px-8">
        <FormationDetailContent formation={formation} />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </>
  );
}
