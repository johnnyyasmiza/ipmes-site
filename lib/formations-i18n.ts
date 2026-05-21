import type { LanguageCode } from "@/components/i18n";
import type { Formation } from "@/data/formations";
import { isOnRequestPrice, priceOnRequestLabels } from "./price-copy";

type LocalizedFormation = {
  title: string;
  shortDescription: string;
  category: string;
  duration: string;
  price: string;
  diplomaLabel: string;
  diplomaCountry: string;
  details: string[];
};

export type FormationFilterKey = "all" | "health" | "aesthetic" | "education" | "social";

type LocalizedOverrides = Partial<Omit<LocalizedFormation, "price">>;

export const formationFilterLabels: Record<LanguageCode, Record<FormationFilterKey, string>> = {
  fr: {
    all: "Toutes",
    health: "Santé",
    aesthetic: "Esthétique",
    education: "Éducation",
    social: "Social",
  },
  ar: {
    all: "الكل",
    health: "الصحة",
    aesthetic: "التجميل",
    education: "التربية",
    social: "الاجتماعي",
  },
  en: {
    all: "All",
    health: "Health",
    aesthetic: "Aesthetics",
    education: "Education",
    social: "Social",
  },
  es: {
    all: "Todas",
    health: "Salud",
    aesthetic: "Estética",
    education: "Educación",
    social: "Social",
  },
  de: {
    all: "Alle",
    health: "Gesundheit",
    aesthetic: "Ästhetik",
    education: "Bildung",
    social: "Soziales",
  },
  tr: {
    all: "Tümü",
    health: "Sağlık",
    aesthetic: "Estetik",
    education: "Eğitim",
    social: "Sosyal",
  },
};

const localizedFormations: Record<string, Partial<Record<LanguageCode, LocalizedOverrides>>> = {
  "formation-hijama": {
    en: {
      title: "Hijama Training",
      shortDescription:
        "Practical supervised training to learn the foundations of hijama, hygiene rules and safe client support.",
      category: "Health / wellness",
      duration: "1 month",
      diplomaLabel: "German-certified diploma",
      diplomaCountry: "Germany",
      details: ["Hygiene and safety", "Practical protocol", "Theory basics", "Client support", "Supervised practice"],
    },
    es: {
      title: "Formación Hijama",
      shortDescription:
        "Formación práctica y supervisada para aprender las bases de la hijama, la higiene y el acompañamiento seguro del cliente.",
      category: "Salud / bienestar",
      duration: "1 mes",
      diplomaLabel: "Diploma certificado Alemania",
      diplomaCountry: "Alemania",
      details: ["Higiene y seguridad", "Protocolo práctico", "Bases teóricas", "Acompañamiento del cliente", "Práctica supervisada"],
    },
    de: {
      title: "Hijama-Kurs",
      shortDescription:
        "Praxisorientierter betreuter Kurs zu den Grundlagen der Hijama, Hygiene und sicherer Kundenbegleitung.",
      category: "Gesundheit / Wohlbefinden",
      duration: "1 Monat",
      diplomaLabel: "Zertifiziertes Diplom Deutschland",
      diplomaCountry: "Deutschland",
      details: ["Hygiene und Sicherheit", "Praktisches Protokoll", "Theoretische Grundlagen", "Kundenbegleitung", "Betreute Praxis"],
    },
    tr: {
      title: "Hicama Eğitimi",
      shortDescription:
        "Hicamanın temellerini, hijyen kurallarını ve güvenli danışan desteğini öğrenmek için uygulamalı ve rehberli eğitim.",
      category: "Sağlık / iyi yaşam",
      duration: "1 ay",
      diplomaLabel: "Almanya sertifikalı diploma",
      diplomaCountry: "Almanya",
      details: ["Hijyen ve güvenlik", "Uygulamalı protokol", "Teorik temeller", "Danışan desteği", "Rehberli uygulama"],
    },
  },
  "formation-secourisme": {
    en: {
      title: "First Aid Training",
      shortDescription:
        "Essential training to learn first aid actions and respond calmly in emergency situations.",
      category: "Health / safety",
      duration: "1 month",
      diplomaLabel: "Diploma + UK professional first aider card",
      diplomaCountry: "United Kingdom",
      details: ["Emergency actions", "Practical scenarios", "First aid", "Professional card"],
    },
    es: {
      title: "Formación Primeros Auxilios",
      shortDescription:
        "Programa esencial para aprender gestos de primeros auxilios e intervenir con calma ante situaciones de emergencia.",
      category: "Salud / seguridad",
      duration: "1 mes",
      diplomaLabel: "Diploma + tarjeta profesional de socorrista UK",
      diplomaCountry: "Reino Unido",
      details: ["Gestos de emergencia", "Situaciones prácticas", "Primeros auxilios", "Tarjeta profesional"],
    },
    de: {
      title: "Erste-Hilfe-Kurs",
      shortDescription:
        "Wesentlicher Kurs, um Erste-Hilfe-Maßnahmen zu lernen und in Notfällen ruhig zu handeln.",
      category: "Gesundheit / Sicherheit",
      duration: "1 Monat",
      diplomaLabel: "Diplom + UK-Berufskarte für Ersthelfer",
      diplomaCountry: "Vereinigtes Königreich",
      details: ["Notfallmaßnahmen", "Praxis-Szenarien", "Erste Hilfe", "Berufskarte"],
    },
    tr: {
      title: "İlk Yardım Eğitimi",
      shortDescription:
        "İlk yardım uygulamalarını öğrenmek ve acil durumlarda sakin müdahale etmek için temel program.",
      category: "Sağlık / güvenlik",
      duration: "1 ay",
      diplomaLabel: "Diploma + UK profesyonel ilk yardımcı kartı",
      diplomaCountry: "Birleşik Krallık",
      details: ["Acil müdahale", "Uygulamalı senaryolar", "İlk yardım", "Profesyonel kart"],
    },
  },
  "formation-aide-personnes-agees": {
    en: {
      title: "Elderly Care Training",
      shortDescription:
        "Professional training to support elderly people with dignity, safety and practical care skills.",
      category: "Social / health",
      duration: "1 month",
      diplomaLabel: "Internationally recognized UK-certified diploma",
      diplomaCountry: "United Kingdom",
      details: ["Daily support", "Hygiene and safety", "Listening skills", "First aid"],
    },
    es: {
      title: "Formación Cuidado de Mayores",
      shortDescription:
        "Formación profesional para acompañar a personas mayores con dignidad, seguridad y habilidades prácticas de cuidado.",
      category: "Social / salud",
      duration: "1 mes",
      diplomaLabel: "Diploma internacional reconocido certificado UK",
      diplomaCountry: "Reino Unido",
      details: ["Acompañamiento diario", "Higiene y seguridad", "Escucha activa", "Primeros auxilios"],
    },
    de: {
      title: "Kurs Altenpflege",
      shortDescription:
        "Professioneller Kurs zur würdevollen, sicheren und praktischen Begleitung älterer Menschen.",
      category: "Soziales / Gesundheit",
      duration: "1 Monat",
      diplomaLabel: "International anerkanntes, UK-zertifiziertes Diplom",
      diplomaCountry: "Vereinigtes Königreich",
      details: ["Alltagsbegleitung", "Hygiene und Sicherheit", "Aktives Zuhören", "Erste Hilfe"],
    },
    tr: {
      title: "Yaşlı Bakımı Eğitimi",
      shortDescription:
        "Yaşlı bireyleri saygılı, güvenli ve uygulamalı bakım becerileriyle desteklemek için profesyonel eğitim.",
      category: "Sosyal / sağlık",
      duration: "1 ay",
      diplomaLabel: "UK sertifikalı uluslararası tanınan diploma",
      diplomaCountry: "Birleşik Krallık",
      details: ["Günlük destek", "Hijyen ve güvenlik", "Aktif dinleme", "İlk yardım"],
    },
  },
  "formation-esthetique-non-chirurgicale": {
    en: {
      title: "Non-Surgical Aesthetics Training",
      shortDescription:
        "Specialized training to discover the foundations of non-surgical aesthetic care in a professional setting.",
      category: "Aesthetics",
      duration: "1 month",
      diplomaLabel: "Aesthetics certification Turkey",
      diplomaCountry: "Turkey",
      details: ["Theory basics", "Mannequin demonstration", "Professional hygiene", "Safe techniques"],
    },
    es: {
      title: "Formación Estética No Quirúrgica",
      shortDescription:
        "Formación especializada para descubrir las bases de los cuidados estéticos no quirúrgicos en un entorno profesional.",
      category: "Estética",
      duration: "1 mes",
      diplomaLabel: "Certificación estética Turquía",
      diplomaCountry: "Turquía",
      details: ["Bases teóricas", "Demostración en maniquí", "Higiene profesional", "Seguridad del gesto"],
    },
    de: {
      title: "Kurs Nicht-chirurgische Ästhetik",
      shortDescription:
        "Spezialisierter Kurs zu den Grundlagen nicht-chirurgischer ästhetischer Behandlungen in einem professionellen Rahmen.",
      category: "Ästhetik",
      duration: "1 Monat",
      diplomaLabel: "Ästhetik-Zertifizierung Türkei",
      diplomaCountry: "Türkei",
      details: ["Theoretische Grundlagen", "Demonstration am Modell", "Professionelle Hygiene", "Sichere Technik"],
    },
    tr: {
      title: "Cerrahi Olmayan Estetik Eğitimi",
      shortDescription:
        "Profesyonel bir ortamda cerrahi olmayan estetik bakımın temellerini keşfetmek için uzmanlaşmış eğitim.",
      category: "Estetik",
      duration: "1 ay",
      diplomaLabel: "Türkiye estetik sertifikası",
      diplomaCountry: "Türkiye",
      details: ["Teorik temeller", "Manken üzerinde gösterim", "Profesyonel hijyen", "Güvenli uygulama"],
    },
  },
  "formation-educatrice": {
    en: {
      title: "Educator Training",
      shortDescription:
        "A pathway to learn educational support, activity planning and professional relationships with children.",
      category: "Education",
      duration: "On request",
      diplomaLabel: "IPMES certificate",
      diplomaCountry: "Morocco",
      details: ["Educational support", "Adapted activities", "Relationship with children", "Teaching organization"],
    },
    es: {
      title: "Formación Educadora",
      shortDescription:
        "Un recorrido para adquirir bases de acompañamiento educativo, organización de actividades y relación con el niño.",
      category: "Educación",
      duration: "A solicitud",
      diplomaLabel: "Certificado IPMES",
      diplomaCountry: "Marruecos",
      details: ["Acompañamiento educativo", "Actividades adaptadas", "Relación con el niño", "Organización pedagógica"],
    },
    de: {
      title: "Erzieherinnen-Kurs",
      shortDescription:
        "Ein Kurs zu pädagogischer Begleitung, Aktivitätsplanung und professioneller Beziehung zum Kind.",
      category: "Bildung",
      duration: "Auf Anfrage",
      diplomaLabel: "IPMES-Zertifikat",
      diplomaCountry: "Marokko",
      details: ["Pädagogische Begleitung", "Angepasste Aktivitäten", "Beziehung zum Kind", "Pädagogische Organisation"],
    },
    tr: {
      title: "Eğitmenlik Eğitimi",
      shortDescription:
        "Eğitsel destek, etkinlik organizasyonu ve çocukla profesyonel ilişki kurmanın temelleri için bir program.",
      category: "Eğitim",
      duration: "Talep üzerine",
      diplomaLabel: "IPMES sertifikası",
      diplomaCountry: "Fas",
      details: ["Eğitsel destek", "Uyarlanmış aktiviteler", "Çocukla ilişki", "Pedagojik organizasyon"],
    },
  },
  "formation-educatrice-specialisee": {
    en: {
      title: "Specialized Educator Training",
      shortDescription:
        "Advanced training to develop educational practices adapted to specific needs and support situations.",
      category: "Specialized education",
      duration: "On request",
      diplomaLabel: "IPMES certificate",
      diplomaCountry: "Morocco",
      details: ["Specific needs", "Educational posture", "Individualized support", "Adapted activities"],
    },
    es: {
      title: "Formación Educadora Especializada",
      shortDescription:
        "Formación avanzada para desarrollar una postura educativa adaptada a necesidades específicas y situaciones de acompañamiento.",
      category: "Educación especializada",
      duration: "A solicitud",
      diplomaLabel: "Certificado IPMES",
      diplomaCountry: "Marruecos",
      details: ["Necesidades específicas", "Postura educativa", "Acompañamiento individualizado", "Actividades adaptadas"],
    },
    de: {
      title: "Kurs Spezialisierte Erziehung",
      shortDescription:
        "Vertiefender Kurs für pädagogische Praxis, angepasst an besondere Bedürfnisse und Begleitsituationen.",
      category: "Spezialisierte Bildung",
      duration: "Auf Anfrage",
      diplomaLabel: "IPMES-Zertifikat",
      diplomaCountry: "Marokko",
      details: ["Besondere Bedürfnisse", "Pädagogische Haltung", "Individuelle Begleitung", "Angepasste Aktivitäten"],
    },
    tr: {
      title: "Uzman Eğitmenlik Eğitimi",
      shortDescription:
        "Özel ihtiyaçlara ve destek durumlarına uygun eğitsel yaklaşım geliştirmek için ileri düzey eğitim.",
      category: "Uzman eğitim",
      duration: "Talep üzerine",
      diplomaLabel: "IPMES sertifikası",
      diplomaCountry: "Fas",
      details: ["Özel ihtiyaçlar", "Eğitsel duruş", "Bireysel destek", "Uyarlanmış aktiviteler"],
    },
  },
};

const arabicFormationMeta: Record<string, Pick<LocalizedOverrides, "category" | "diplomaCountry">> = {
  "formation-hijama": { category: "الصحة / العافية", diplomaCountry: "ألمانيا" },
  "formation-secourisme": { category: "الصحة / السلامة", diplomaCountry: "المملكة المتحدة" },
  "formation-aide-personnes-agees": { category: "اجتماعي / صحة", diplomaCountry: "المملكة المتحدة" },
  "formation-esthetique-non-chirurgicale": { category: "التجميل", diplomaCountry: "تركيا" },
  "formation-educatrice": { category: "التربية", diplomaCountry: "المغرب" },
  "formation-educatrice-specialisee": { category: "التربية المتخصصة", diplomaCountry: "المغرب" },
};

export function getLocalizedFormation(
  formation: Formation,
  language: LanguageCode,
): LocalizedFormation {
  const arabicMeta = arabicFormationMeta[formation.id];
  const french: LocalizedFormation = {
    title: formation.titleFr,
    shortDescription: formation.shortDescriptionFr,
    category: formation.category,
    duration: formation.durationFr,
    price: formation.price,
    diplomaLabel: formation.diplomaLabel,
    diplomaCountry: formation.diplomaCountry,
    details: formation.details,
  };

  const arabic: LocalizedFormation = {
    ...french,
    title: formation.titleAr,
    shortDescription: formation.shortDescriptionAr,
    category: arabicMeta?.category ?? french.category,
    duration: formation.durationAr,
    price: formation.priceAr,
    diplomaLabel: formation.diplomaAr,
    diplomaCountry: arabicMeta?.diplomaCountry ?? french.diplomaCountry,
    details: formation.highlightsAr.length ? formation.highlightsAr : formation.details,
  };

  if (language === "fr") {
    return french;
  }

  if (language === "ar") {
    return arabic;
  }

  return {
    ...french,
    ...localizedFormations[formation.id]?.[language],
    price: isOnRequestPrice(french.price) ? priceOnRequestLabels[language] : french.price,
  };
}
