import type { LanguageCode } from "@/components/i18n";

const onRequestPrices = new Set([
  "Sur demande",
  "عند الطلب",
  "On request",
  "A solicitud",
  "Auf Anfrage",
  "Talep üzerine",
]);

export const priceOnRequestLabels: Record<LanguageCode, string> = {
  fr: "Sur demande",
  ar: "عند الطلب",
  en: "On request",
  es: "A solicitud",
  de: "Auf Anfrage",
  tr: "Talep üzerine",
};

export const priceOnRequestNotes: Record<LanguageCode, string> = {
  fr: "Tarif personnalisé selon la durée, l’espace et le besoin.",
  ar: "تسعير مخصص حسب المدة والفضاء والحاجة.",
  en: "Personalized pricing based on duration, space and need.",
  es: "Tarifa personalizada según la duración, el espacio y la necesidad.",
  de: "Individueller Preis je nach Dauer, Raum und Bedarf.",
  tr: "Süre, alan ve ihtiyaca göre kişiselleştirilmiş fiyat.",
};

export function isOnRequestPrice(price: string) {
  return onRequestPrices.has(price.trim());
}
