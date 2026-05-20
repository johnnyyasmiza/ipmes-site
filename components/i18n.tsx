"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type React from "react";

export type LanguageCode = "fr" | "ar" | "en" | "es" | "de" | "tr";

interface TranslationMap {
  [key: string]: string | TranslationMap;
}

type TranslationValue = string | TranslationMap;

const storageKey = "ipmes-language";

export const languages: { code: LanguageCode; label: string }[] = [
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "tr", label: "Türkçe" },
];

export const translations: Record<LanguageCode, TranslationMap> = {
  fr: {
    common: { all: "Tous" },
    nav: {
      home: "Accueil",
      formations: "Formations",
      spaces: "Espaces",
      about: "À propos",
      contact: "Contact",
      reserve: "Réserver",
      whatsapp: "WhatsApp",
      menu: "Ouvrir le menu",
      tagline: "Formation, espaces et événements",
    },
    hero: {
      title: "IPMES — Formez-vous, réservez votre espace, développez vos projets.",
      description:
        "Formations certifiantes, espaces professionnels, salle de yoga, esthétique non chirurgicale et accompagnement pratique à Casablanca.",
      formations: "Voir les formations",
      spaces: "Réserver un espace",
      whatsappMessage: "Bonjour IPMES, je souhaite avoir plus d'informations sur vos formations et vos espaces.",
    },
    home: {
      servicesEyebrow: "Services",
      servicesTitle: "Tout ce qu'il faut pour apprendre, recevoir et développer.",
      formationsEyebrow: "Formations populaires",
      formationsTitle: "Des formations orientées pratique.",
      formationCta: "Demander une session",
      spacesEyebrow: "Espaces à louer",
      spacesTitle: "Des lieux flexibles pour vos activités.",
    },
    pages: {
      formationsEyebrow: "Formations",
      formationsTitle: "Formations professionnelles à Casablanca Maârif.",
      formationsDescription:
        "Des programmes orientés pratique pour apprendre, se perfectionner et lancer une activité avec un accompagnement clair.",
      dates: "Recevoir les dates",
      spacesEyebrow: "Espaces à louer",
      spacesTitle: "Salle de formation, salle de yoga, bureau, cuisine, thérapie, podcast et visite guidée pour vos projets.",
      spacesDescription:
        "Réservez un espace adapté à votre formation, consultation, atelier pratique ou événement professionnel.",
      reserveSlot: "Réserver un créneau",
      aboutEyebrow: "À propos",
      aboutTitle: "Un centre moderne pour la formation, le bien-être et les projets professionnels.",
      aboutDescription:
        "IPMES réunit des espaces polyvalents et des formations pratiques dans un lieu accessible à Casablanca Maârif. Le site présente l'offre publique et facilite le premier contact par WhatsApp.",
      contactEyebrow: "Contact",
      contactTitle: "Parlons de votre formation, réservation ou événement.",
      contactDescription:
        "Envoyez votre besoin par WhatsApp pour recevoir les disponibilités, tarifs et prochaines étapes.",
    },
    cta: {
      eyebrow: "Réservation rapide",
      title: "Vous voulez une formation, une salle ou un espace pour votre prochain atelier ?",
      description:
        "Envoyez-nous un message avec votre besoin, la date souhaitée et le nombre de participants. L'équipe IPMES vous répond directement.",
      button: "Contacter sur WhatsApp",
    },
    formations: {
      "formation-hijama": "Formation Hijama",
      "formation-secourisme": "Formation Secourisme",
      "formation-aide-personnes-agees": "Formation Aide aux personnes âgées",
      "formation-esthetique-non-chirurgicale": "Formation Esthétique non chirurgicale",
      "formation-educatrice": "Formation Éducatrice",
      "formation-educatrice-specialisee": "Formation Éducatrice spécialisée",
      details: "Voir détails",
    },
    spaces: {
      "training-room": "Salle de formation équipée",
      "yoga-room": "Salle de yoga",
      office: "Bureau / accueil",
      kitchen: "Cuisine équipée",
      "therapy-podcast": "Salle thérapie / podcast",
      "non-surgical-room": "Salle de chirurgie non chirurgicale",
      "guided-tour": "Visite guidée",
      reserve: "Réserver cet espace",
    },
  },
  ar: {
    common: { all: "الكل" },
    nav: {
      home: "الرئيسية",
      formations: "التكوينات",
      spaces: "الفضاءات",
      about: "من نحن",
      contact: "اتصل بنا",
      reserve: "احجز",
      whatsapp: "واتساب",
      menu: "فتح القائمة",
      tagline: "تكوينات، فضاءات وفعاليات",
    },
    hero: {
      title: "IPMES — تكوّن، احجز فضاءك، وطوّر مشاريعك.",
      description: "تكوينات معتمدة، فضاءات مهنية، قاعة يوغا، تجميل غير جراحي ومواكبة عملية في الدار البيضاء.",
      formations: "عرض التكوينات",
      spaces: "حجز فضاء",
      whatsappMessage: "مرحبا IPMES، أريد معلومات أكثر حول التكوينات والفضاءات.",
    },
    home: {
      servicesEyebrow: "الخدمات",
      servicesTitle: "كل ما تحتاجه للتعلم والاستقبال وتطوير مشاريعك.",
      formationsEyebrow: "تكوينات مميزة",
      formationsTitle: "تكوينات عملية ومهنية.",
      formationCta: "طلب دورة",
      spacesEyebrow: "فضاءات للكراء",
      spacesTitle: "أماكن مرنة لأنشطتك.",
    },
    pages: {
      formationsEyebrow: "التكوينات",
      formationsTitle: "تكوينات مهنية في الدار البيضاء المعاريف.",
      formationsDescription: "برامج عملية للتعلم والتطوير وإطلاق نشاطك بمواكبة واضحة.",
      dates: "استلام المواعيد",
      spacesEyebrow: "فضاءات للكراء",
      spacesTitle: "قاعة تكوين، قاعة يوغا، مكتب، مطبخ، علاج، بودكاست وزيارة موجهة لمشاريعك.",
      spacesDescription: "احجز فضاء مناسبا للتكوين أو الاستشارة أو الورشة أو الفعالية المهنية.",
      reserveSlot: "حجز موعد",
      aboutEyebrow: "من نحن",
      aboutTitle: "مركز حديث للتكوين والرفاه والمشاريع المهنية.",
      aboutDescription: "يجمع IPMES فضاءات متعددة وتكوينات عملية في مكان سهل الوصول بالدار البيضاء المعاريف.",
      contactEyebrow: "اتصل بنا",
      contactTitle: "لنتحدث عن تكوينك أو حجزك أو فعاليتك.",
      contactDescription: "أرسل حاجتك عبر واتساب للحصول على التوفر والأسعار والخطوات التالية.",
    },
    cta: {
      eyebrow: "حجز سريع",
      title: "هل تريد تكوينا أو قاعة أو فضاء لورشتك القادمة؟",
      description: "أرسل لنا حاجتك والتاريخ وعدد المشاركين وسيرد عليك فريق IPMES مباشرة.",
      button: "تواصل عبر واتساب",
    },
    formations: {
      "formation-hijama": "تكوين الحجامة",
      "formation-secourisme": "تكوين الإسعافات الأولية",
      "formation-aide-personnes-agees": "تكوين مساعدة الأشخاص المسنين",
      "formation-esthetique-non-chirurgicale": "تكوين التجميل غير الجراحي",
      "formation-educatrice": "تكوين المربية",
      "formation-educatrice-specialisee": "تكوين المربية المتخصصة",
      details: "عرض التفاصيل",
    },
    spaces: {
      "training-room": "قاعة تكوين مجهزة",
      "yoga-room": "قاعة اليوغا",
      office: "مكتب / استقبال",
      kitchen: "مطبخ مجهز",
      "therapy-podcast": "قاعة علاج / بودكاست",
      "non-surgical-room": "قاعة التجميل غير الجراحي",
      "guided-tour": "زيارة موجهة",
      reserve: "احجز هذا الفضاء",
    },
  },
  en: {
    common: { all: "All" },
    nav: {
      home: "Home",
      formations: "Training",
      spaces: "Spaces",
      about: "About",
      contact: "Contact",
      reserve: "Reserve",
      whatsapp: "WhatsApp",
      menu: "Open menu",
      tagline: "Training, spaces and events",
    },
    hero: {
      title: "IPMES — Learn, book your space, grow your projects.",
      description:
        "Certified training, professional spaces, yoga room, non-surgical aesthetics and practical support in Casablanca.",
      formations: "View training",
      spaces: "Book a space",
      whatsappMessage: "Hello IPMES, I would like more information about your training and spaces.",
    },
    home: {
      servicesEyebrow: "Services",
      servicesTitle: "Everything you need to learn, host and grow.",
      formationsEyebrow: "Popular training",
      formationsTitle: "Practice-focused training.",
      formationCta: "Request a session",
      spacesEyebrow: "Spaces for rent",
      spacesTitle: "Flexible places for your activities.",
    },
    pages: {
      formationsEyebrow: "Training",
      formationsTitle: "Professional training in Casablanca Maârif.",
      formationsDescription: "Practical programs to learn, improve and launch an activity with clear support.",
      dates: "Get dates",
      spacesEyebrow: "Spaces for rent",
      spacesTitle: "Training room, yoga room, office, kitchen, therapy, podcast and guided tour for your projects.",
      spacesDescription: "Book a space suited to your training, consultation, workshop or professional event.",
      reserveSlot: "Book a slot",
      aboutEyebrow: "About",
      aboutTitle: "A modern center for training, wellness and professional projects.",
      aboutDescription: "IPMES brings together versatile spaces and practical training in an accessible place in Casablanca Maârif.",
      contactEyebrow: "Contact",
      contactTitle: "Let's talk about your training, booking or event.",
      contactDescription: "Send your request via WhatsApp to receive availability, pricing and next steps.",
    },
    cta: {
      eyebrow: "Quick booking",
      title: "Need training, a room or a space for your next workshop?",
      description: "Send your need, preferred date and number of participants. The IPMES team will reply directly.",
      button: "Contact on WhatsApp",
    },
    formations: {
      "formation-hijama": "Hijama Training",
      "formation-secourisme": "First Aid Training",
      "formation-aide-personnes-agees": "Elderly Care Training",
      "formation-esthetique-non-chirurgicale": "Non-Surgical Aesthetics Training",
      "formation-educatrice": "Educator Training",
      "formation-educatrice-specialisee": "Specialized Educator Training",
      details: "View details",
    },
    spaces: {
      "training-room": "Equipped training room",
      "yoga-room": "Yoga room",
      office: "Office / reception",
      kitchen: "Equipped kitchen",
      "therapy-podcast": "Therapy / podcast room",
      "non-surgical-room": "Non-surgical aesthetics room",
      "guided-tour": "Guided tour",
      reserve: "Reserve this space",
    },
  },
  es: {
    common: { all: "Todo" },
    nav: {
      home: "Inicio",
      formations: "Formaciones",
      spaces: "Espacios",
      about: "Nosotros",
      contact: "Contacto",
      reserve: "Reservar",
      whatsapp: "WhatsApp",
      menu: "Abrir menú",
      tagline: "Formaciones, espacios y eventos",
    },
    hero: {
      title: "IPMES — Fórmate, reserva tu espacio, desarrolla tus proyectos.",
      description: "Formaciones certificadas, espacios profesionales, sala de yoga, estética no quirúrgica y apoyo práctico en Casablanca.",
      formations: "Ver formaciones",
      spaces: "Reservar un espacio",
      whatsappMessage: "Hola IPMES, quiero más información sobre sus formaciones y espacios.",
    },
    home: {
      servicesEyebrow: "Servicios",
      servicesTitle: "Todo lo necesario para aprender, recibir y crecer.",
      formationsEyebrow: "Formaciones populares",
      formationsTitle: "Formaciones orientadas a la práctica.",
      formationCta: "Solicitar una sesión",
      spacesEyebrow: "Espacios en alquiler",
      spacesTitle: "Lugares flexibles para tus actividades.",
    },
    pages: {
      formationsEyebrow: "Formaciones",
      formationsTitle: "Formaciones profesionales en Casablanca Maârif.",
      formationsDescription: "Programas prácticos para aprender, mejorar y lanzar una actividad con acompañamiento claro.",
      dates: "Recibir fechas",
      spacesEyebrow: "Espacios en alquiler",
      spacesTitle: "Sala de formación, yoga, oficina, cocina, terapia, podcast y visita guiada para tus proyectos.",
      spacesDescription: "Reserva un espacio adaptado a tu formación, consulta, taller o evento profesional.",
      reserveSlot: "Reservar horario",
      aboutEyebrow: "Nosotros",
      aboutTitle: "Un centro moderno para formación, bienestar y proyectos profesionales.",
      aboutDescription: "IPMES reúne espacios versátiles y formaciones prácticas en Casablanca Maârif.",
      contactEyebrow: "Contacto",
      contactTitle: "Hablemos de tu formación, reserva o evento.",
      contactDescription: "Envía tu necesidad por WhatsApp para recibir disponibilidad, tarifas y próximos pasos.",
    },
    cta: {
      eyebrow: "Reserva rápida",
      title: "¿Quieres una formación, sala o espacio para tu próximo taller?",
      description: "Envíanos tu necesidad, la fecha deseada y el número de participantes. El equipo IPMES responderá directamente.",
      button: "Contactar por WhatsApp",
    },
    formations: {
      "formation-hijama": "Formación Hijama",
      "formation-secourisme": "Formación Primeros Auxilios",
      "formation-aide-personnes-agees": "Formación Cuidado de Mayores",
      "formation-esthetique-non-chirurgicale": "Formación Estética No Quirúrgica",
      "formation-educatrice": "Formación Educadora",
      "formation-educatrice-specialisee": "Formación Educadora Especializada",
      details: "Ver detalles",
    },
    spaces: {
      "training-room": "Sala de formación equipada",
      "yoga-room": "Sala de yoga",
      office: "Oficina / recepción",
      kitchen: "Cocina equipada",
      "therapy-podcast": "Sala terapia / podcast",
      "non-surgical-room": "Sala de estética no quirúrgica",
      "guided-tour": "Visita guiada",
      reserve: "Reservar este espacio",
    },
  },
  de: {
    common: { all: "Alle" },
    nav: {
      home: "Start",
      formations: "Kurse",
      spaces: "Räume",
      about: "Über uns",
      contact: "Kontakt",
      reserve: "Reservieren",
      whatsapp: "WhatsApp",
      menu: "Menü öffnen",
      tagline: "Kurse, Räume und Events",
    },
    hero: {
      title: "IPMES — Lernen, Raum buchen, Projekte entwickeln.",
      description: "Zertifizierte Kurse, professionelle Räume, Yogaraum, nicht-chirurgische Ästhetik und praktische Begleitung in Casablanca.",
      formations: "Kurse ansehen",
      spaces: "Raum buchen",
      whatsappMessage: "Hallo IPMES, ich möchte mehr Informationen zu Ihren Kursen und Räumen.",
    },
    home: {
      servicesEyebrow: "Services",
      servicesTitle: "Alles, um zu lernen, zu empfangen und zu wachsen.",
      formationsEyebrow: "Beliebte Kurse",
      formationsTitle: "Praxisorientierte Kurse.",
      formationCta: "Session anfragen",
      spacesEyebrow: "Räume mieten",
      spacesTitle: "Flexible Orte für Ihre Aktivitäten.",
    },
    pages: {
      formationsEyebrow: "Kurse",
      formationsTitle: "Professionelle Kurse in Casablanca Maârif.",
      formationsDescription: "Praktische Programme zum Lernen, Vertiefen und Starten einer Aktivität mit klarer Begleitung.",
      dates: "Termine erhalten",
      spacesEyebrow: "Räume mieten",
      spacesTitle: "Schulungsraum, Yogaraum, Büro, Küche, Therapie, Podcast und Führung für Ihre Projekte.",
      spacesDescription: "Buchen Sie einen Raum für Kurs, Beratung, Workshop oder professionelles Event.",
      reserveSlot: "Zeitfenster buchen",
      aboutEyebrow: "Über uns",
      aboutTitle: "Ein modernes Zentrum für Kurse, Wohlbefinden und professionelle Projekte.",
      aboutDescription: "IPMES vereint vielseitige Räume und praktische Kurse in Casablanca Maârif.",
      contactEyebrow: "Kontakt",
      contactTitle: "Sprechen wir über Ihren Kurs, Ihre Buchung oder Ihr Event.",
      contactDescription: "Senden Sie Ihre Anfrage per WhatsApp, um Verfügbarkeit, Preise und nächste Schritte zu erhalten.",
    },
    cta: {
      eyebrow: "Schnelle Buchung",
      title: "Benötigen Sie einen Kurs, Raum oder Platz für Ihren nächsten Workshop?",
      description: "Senden Sie Bedarf, Wunschdatum und Teilnehmerzahl. Das IPMES-Team antwortet direkt.",
      button: "Über WhatsApp kontaktieren",
    },
    formations: {
      "formation-hijama": "Hijama-Kurs",
      "formation-secourisme": "Erste-Hilfe-Kurs",
      "formation-aide-personnes-agees": "Kurs Altenpflege",
      "formation-esthetique-non-chirurgicale": "Kurs Nicht-chirurgische Ästhetik",
      "formation-educatrice": "Erzieherinnen-Kurs",
      "formation-educatrice-specialisee": "Spezialisierter Erzieherinnen-Kurs",
      details: "Details ansehen",
    },
    spaces: {
      "training-room": "Ausgestatteter Schulungsraum",
      "yoga-room": "Yogaraum",
      office: "Büro / Empfang",
      kitchen: "Ausgestattete Küche",
      "therapy-podcast": "Therapie- / Podcast-Raum",
      "non-surgical-room": "Raum für nicht-chirurgische Ästhetik",
      "guided-tour": "Geführte Tour",
      reserve: "Diesen Raum reservieren",
    },
  },
  tr: {
    common: { all: "Tümü" },
    nav: {
      home: "Ana sayfa",
      formations: "Eğitimler",
      spaces: "Alanlar",
      about: "Hakkımızda",
      contact: "İletişim",
      reserve: "Rezervasyon",
      whatsapp: "WhatsApp",
      menu: "Menüyü aç",
      tagline: "Eğitimler, alanlar ve etkinlikler",
    },
    hero: {
      title: "IPMES — Eğitim alın, alanınızı ayırtın, projelerinizi büyütün.",
      description: "Sertifikalı eğitimler, profesyonel alanlar, yoga salonu, cerrahi olmayan estetik ve Kazablanka'da pratik destek.",
      formations: "Eğitimleri gör",
      spaces: "Alan rezerve et",
      whatsappMessage: "Merhaba IPMES, eğitimleriniz ve alanlarınız hakkında daha fazla bilgi istiyorum.",
    },
    home: {
      servicesEyebrow: "Hizmetler",
      servicesTitle: "Öğrenmek, ağırlamak ve gelişmek için gereken her şey.",
      formationsEyebrow: "Popüler eğitimler",
      formationsTitle: "Pratiğe odaklı eğitimler.",
      formationCta: "Oturum iste",
      spacesEyebrow: "Kiralık alanlar",
      spacesTitle: "Aktiviteleriniz için esnek alanlar.",
    },
    pages: {
      formationsEyebrow: "Eğitimler",
      formationsTitle: "Casablanca Maârif'te profesyonel eğitimler.",
      formationsDescription: "Öğrenmek, gelişmek ve net destekle faaliyet başlatmak için pratik programlar.",
      dates: "Tarihleri al",
      spacesEyebrow: "Kiralık alanlar",
      spacesTitle: "Projeleriniz için eğitim salonu, yoga salonu, ofis, mutfak, terapi, podcast ve rehberli tur.",
      spacesDescription: "Eğitim, danışmanlık, atölye veya profesyonel etkinlik için uygun alanı rezerve edin.",
      reserveSlot: "Zaman ayırt",
      aboutEyebrow: "Hakkımızda",
      aboutTitle: "Eğitim, iyi yaşam ve profesyonel projeler için modern bir merkez.",
      aboutDescription: "IPMES, Casablanca Maârif'te çok amaçlı alanları ve pratik eğitimleri bir araya getirir.",
      contactEyebrow: "İletişim",
      contactTitle: "Eğitiminiz, rezervasyonunuz veya etkinliğiniz hakkında konuşalım.",
      contactDescription: "Uygunluk, fiyatlar ve sonraki adımlar için ihtiyacınızı WhatsApp üzerinden gönderin.",
    },
    cta: {
      eyebrow: "Hızlı rezervasyon",
      title: "Sonraki atölyeniz için eğitim, salon veya alan mı istiyorsunuz?",
      description: "İhtiyacınızı, istediğiniz tarihi ve katılımcı sayısını gönderin. IPMES ekibi doğrudan yanıt verir.",
      button: "WhatsApp ile iletişime geç",
    },
    formations: {
      "formation-hijama": "Hicama Eğitimi",
      "formation-secourisme": "İlk Yardım Eğitimi",
      "formation-aide-personnes-agees": "Yaşlı Bakımı Eğitimi",
      "formation-esthetique-non-chirurgicale": "Cerrahi Olmayan Estetik Eğitimi",
      "formation-educatrice": "Eğitmen Eğitimi",
      "formation-educatrice-specialisee": "Uzman Eğitmen Eğitimi",
      details: "Detayları gör",
    },
    spaces: {
      "training-room": "Donanımlı eğitim salonu",
      "yoga-room": "Yoga salonu",
      office: "Ofis / karşılama",
      kitchen: "Donanımlı mutfak",
      "therapy-podcast": "Terapi / podcast odası",
      "non-surgical-room": "Cerrahi olmayan estetik salonu",
      "guided-tour": "Rehberli tur",
      reserve: "Bu alanı rezerve et",
    },
  },
};

type LanguageContextValue = {
  language: LanguageCode;
  mounted: boolean;
  setLanguage: (language: LanguageCode) => void;
  t: (key: string, fallback?: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getNestedTranslation(language: LanguageCode, key: string) {
  let current: TranslationValue | undefined = translations[language];

  for (const part of key.split(".")) {
    if (typeof current !== "object" || current === null) {
      return undefined;
    }

    current = current[part];
  }

  return typeof current === "string" ? current : undefined;
}

function isLanguageCode(value: string): value is LanguageCode {
  return languages.some((language) => language.code === value);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const queryLanguage = new URLSearchParams(window.location.search).get("lang");
      const savedLanguage = window.localStorage.getItem(storageKey);

      if (queryLanguage && isLanguageCode(queryLanguage)) {
        setLanguageState(queryLanguage);
        window.localStorage.setItem(storageKey, queryLanguage);
      } else if (savedLanguage && isLanguageCode(savedLanguage)) {
        setLanguageState(savedLanguage);
      }

      setMounted(true);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    function setLanguage(nextLanguage: LanguageCode) {
      setLanguageState(nextLanguage);
      window.localStorage.setItem(storageKey, nextLanguage);
    }

    function t(key: string, fallback = key) {
      return getNestedTranslation(language, key) ?? getNestedTranslation("fr", key) ?? fallback;
    }

    return { language, mounted, setLanguage, t };
  }, [language, mounted]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
