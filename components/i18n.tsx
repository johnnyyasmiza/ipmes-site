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

export function localizedPath(href: string, language: LanguageCode) {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }

  const [pathAndQuery, hash = ""] = href.split("#");
  const [path, query = ""] = pathAndQuery.split("?");
  const params = new URLSearchParams(query);
  params.set("lang", language);
  const nextQuery = params.toString();

  return `${path || "/"}${nextQuery ? `?${nextQuery}` : ""}${hash ? `#${hash}` : ""}`;
}

export const translations: Record<LanguageCode, TranslationMap> = {
  fr: {
    common: { all: "Tous" },
    video: {
      unsupported: "Votre navigateur ne supporte pas la lecture vidéo.",
      soundPrompt: "Cliquer pour lancer la visite avec le son",
    },
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
      "non-surgical-room": "Salle esthétique non chirurgicale",
      "guided-tour": "Visite guidée",
      reserve: "Réserver cet espace",
    },
    experience: {
      eyebrow: "Expérience IPMES",
      title: "Un parcours simple, fluide et professionnel.",
      learnTitle: "Apprendre",
      learnText: "Des formations pratiques dans un cadre clair, équipé et pensé pour progresser vite.",
      learnAria: "Voir les formations",
      bookTitle: "Réserver",
      bookText: "Des espaces flexibles pour cours, rendez-vous, yoga, ateliers et événements.",
      bookAria: "Réserver sur WhatsApp",
      growTitle: "Développer",
      growText: "Un lieu professionnel pour lancer une activité, recevoir ses clients et créer du réseau.",
      growAria: "Voir les espaces",
      whatsappMessage: "Bonjour IPMES, je souhaite réserver ou avoir plus d'informations.",
    },
    why: {
      eyebrow: "Pourquoi IPMES",
      title:
        "Un lieu conçu pour apprendre, pratiquer, recevoir et transmettre dans un cadre sérieux, équipé et accessible au cœur du Maârif.",
      location: "Emplacement pratique",
      team: "Équipe pédagogique expérimentée",
      spaces: "Espaces modulables",
      booking: "Réservation simple",
      whatsappMessage:
        "Bonjour IPMES, je souhaite réserver ou avoir plus d’informations sur vos formations et espaces.",
    },
    testimonials: {
      eyebrow: "Témoignages",
      title: "Ils ont vécu l’expérience IPMES",
      description: "Des témoignages authentiques de nos apprenants et visiteurs.",
      videoLabel: "Témoignage IPMES",
    },
    footer: {
      description:
        "Centre moderne à Casablanca Maârif pour se former, réserver un espace professionnel et développer ses projets dans un cadre premium accessible.",
      navigation: "Navigation",
      spaces: "Espaces à louer",
      contact: "Contact",
      address: "Adresse : 45 rue Atlas, Maârif, Casablanca",
      reservation: "Réservations et informations par WhatsApp.",
      follow: "Suivez-nous",
      rights: "© 2026 IPMES. Tous droits réservés.",
    },
    contactCards: {
      addressLabel: "Adresse",
      addressTitle: "45 rue Atlas, Maârif, Casablanca",
      addressText: "Centre accessible pour formations, rendez-vous et réservations d'espaces.",
      whatsappLabel: "WhatsApp",
      whatsappTitle: "Réponse rapide",
      whatsappText:
        "Indiquez le service souhaité, la date, le nombre de personnes et vos coordonnées.",
      actionLabel: "Action",
    },
    aboutVision: {
      eyebrow: "Vision",
      text: "Créer un environnement fiable où apprendre, pratiquer, recevoir et organiser devient simple.",
    },
    spaceDetail: {
      details: "Détails de l'espace",
      equipment: "Équipements",
      benefits: "Avantages",
      usage: "Usages",
      back: "Retour aux espaces",
      readyTitle: "Un espace prêt pour vos activités professionnelles",
      category: "Catégorie",
      price: "Tarif",
      note:
        "Réservation sur demande avec accompagnement IPMES selon le format, la durée et les besoins techniques.",
      whatsappMessage: "Bonjour IPMES, je souhaite réserver: {title}.",
      detailsCta: "Voir les détails",
      detailsAria: "Voir les détails de {title}",
    },
    formationDetail: {
      details: "Détails de la formation",
      keyInfo: "Informations clés",
      duration: "Durée",
      frequency: "Fréquence",
      frequencyValue: "1 jour par semaine",
      price: "Prix",
      certification: "Certification",
      back: "Retour aux formations",
      reserve: "Réserver cette formation",
    },
    founder: {
      role: "Fondatrice",
      subtitle: "Fondatrice IPMES · Responsable pédagogique · Formatrice",
      cardSubtitle: "Fondatrice & Directrice pédagogique",
      cardDescription:
        "Une vision centrée sur la pratique, l’accompagnement et la qualité des parcours. IPMES accompagne les apprenants, les formateurs et les porteurs de projets dans un cadre sérieux, équipé et humain.",
      tags: "Formation|Pédagogie|Management|Accompagnement",
      profile: "Voir le profil LinkedIn",
      eyebrow: "Équipe professionnelle",
      title: "Une direction pédagogique expérimentée au service de la formation.",
      description:
        "IPMES s’appuie sur une direction pédagogique expérimentée, portée par Kawtar Chaabi, fondatrice et responsable pédagogique, avec un parcours solide dans la formation, la coordination d’équipes, la production de contenus pédagogiques et l’accompagnement professionnel.",
      experience: "Expérience",
      education: "Formation",
      verified: "Parcours vérifiable",
      consult: "Consulter le profil LinkedIn",
    },
  },
  ar: {
    common: { all: "الكل" },
    video: {
      unsupported: "متصفحك لا يدعم تشغيل الفيديو.",
      soundPrompt: "اضغط لتشغيل الزيارة مع الصوت",
    },
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
    experience: {
      eyebrow: "تجربة IPMES",
      title: "مسار بسيط، سلس ومهني.",
      learnTitle: "تعلّم",
      learnText: "تكوينات تطبيقية داخل إطار واضح ومجهز يساعدك على التقدم بثقة.",
      learnAria: "عرض التكوينات",
      bookTitle: "احجز",
      bookText: "فضاءات مرنة للدروس والمواعيد واليوغا والورشات والفعاليات.",
      bookAria: "الحجز عبر واتساب",
      growTitle: "طوّر",
      growText: "مكان مهني لإطلاق نشاطك، استقبال زبنائك وبناء شبكة علاقات.",
      growAria: "عرض الفضاءات",
      whatsappMessage: "مرحبا IPMES، أريد الحجز أو معرفة المزيد من المعلومات.",
    },
    why: {
      eyebrow: "لماذا IPMES",
      title: "مكان مصمم للتعلم والتطبيق والاستقبال والتنظيم داخل إطار جدي ومجهز وسهل الوصول في قلب المعاريف.",
      location: "موقع عملي",
      team: "فريق بيداغوجي متمرس",
      spaces: "فضاءات قابلة للتعديل",
      booking: "حجز بسيط",
      whatsappMessage: "مرحبا IPMES، أريد الحجز أو معرفة المزيد حول التكوينات والفضاءات.",
    },
    testimonials: {
      eyebrow: "شهادات",
      title: "أشخاص عاشوا تجربة IPMES",
      description: "شهادات حقيقية من المتعلمين والزوار.",
      videoLabel: "شهادة IPMES",
    },
    footer: {
      description: "مركز حديث في الدار البيضاء المعاريف للتكوين، حجز فضاءات مهنية وتطوير المشاريع في إطار راق وسهل الولوج.",
      navigation: "التنقل",
      spaces: "فضاءات للكراء",
      contact: "اتصل بنا",
      address: "العنوان: 45 شارع أطلس، المعاريف، الدار البيضاء",
      reservation: "الحجوزات والمعلومات عبر واتساب.",
      follow: "تابعونا",
      rights: "© 2026 IPMES. جميع الحقوق محفوظة.",
    },
    contactCards: {
      addressLabel: "العنوان",
      addressTitle: "45 شارع أطلس، المعاريف، الدار البيضاء",
      addressText: "مركز سهل الولوج للتكوينات والمواعيد وحجز الفضاءات.",
      whatsappLabel: "واتساب",
      whatsappTitle: "رد سريع",
      whatsappText: "اذكر الخدمة المطلوبة والتاريخ وعدد الأشخاص ومعلومات التواصل.",
      actionLabel: "إجراء",
    },
    aboutVision: {
      eyebrow: "الرؤية",
      text: "خلق بيئة موثوقة يصبح فيها التعلم والتطبيق والاستقبال والتنظيم أمورا بسيطة.",
    },
    spaceDetail: {
      details: "تفاصيل الفضاء",
      equipment: "التجهيزات",
      benefits: "المزايا",
      usage: "الاستخدامات",
      back: "العودة إلى الفضاءات",
      readyTitle: "فضاء جاهز لأنشطتكم المهنية",
      category: "الفئة",
      price: "التعرفة",
      note: "الحجز عند الطلب مع مواكبة IPMES حسب الصيغة والمدة والحاجات التقنية.",
      whatsappMessage: "مرحبا IPMES، أريد حجز: {title}.",
      detailsCta: "عرض التفاصيل",
      detailsAria: "عرض تفاصيل {title}",
    },
    formationDetail: {
      details: "تفاصيل التكوين",
      keyInfo: "معلومات أساسية",
      duration: "المدة",
      frequency: "الوتيرة",
      frequencyValue: "يوم واحد في الأسبوع",
      price: "الثمن",
      certification: "الشهادة",
      back: "العودة إلى التكوينات",
      reserve: "احجز هذا التكوين",
    },
    founder: {
      role: "المؤسسة",
      subtitle: "مؤسسة IPMES · مسؤولة بيداغوجية · مكوّنة",
      cardSubtitle: "مؤسسة ومديرة بيداغوجية",
      cardDescription:
        "رؤية مرتكزة على التطبيق والمواكبة وجودة المسارات. يواكب IPMES المتعلمين والمدربين وحاملي المشاريع داخل إطار جدي ومجهز وإنساني.",
      tags: "تكوين|بيداغوجيا|تسيير|مواكبة",
      profile: "عرض الملف على LinkedIn",
      eyebrow: "فريق مهني",
      title: "إدارة بيداغوجية متمرسة في خدمة التكوين.",
      description:
        "يعتمد IPMES على إدارة بيداغوجية متمرسة تقودها كوثر شعبي، المؤسسة والمسؤولة البيداغوجية، بخبرة قوية في التكوين وتنسيق الفرق وإنتاج المحتوى البيداغوجي والمواكبة المهنية.",
      experience: "الخبرة",
      education: "التكوين",
      verified: "مسار قابل للتحقق",
      consult: "زيارة الملف على LinkedIn",
    },
  },
  en: {
    common: { all: "All" },
    video: {
      unsupported: "Your browser does not support video playback.",
      soundPrompt: "Click to start the tour with sound",
    },
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
    experience: {
      eyebrow: "IPMES experience",
      title: "A simple, smooth and professional journey.",
      learnTitle: "Learn",
      learnText: "Practical training in a clear, equipped setting designed to help you progress quickly.",
      learnAria: "View training",
      bookTitle: "Book",
      bookText: "Flexible spaces for classes, appointments, yoga, workshops and events.",
      bookAria: "Book on WhatsApp",
      growTitle: "Grow",
      growText: "A professional place to launch an activity, receive clients and build your network.",
      growAria: "View spaces",
      whatsappMessage: "Hello IPMES, I would like to book or get more information.",
    },
    why: {
      eyebrow: "Why IPMES",
      title:
        "A place designed to learn, practice, host and share in a serious, equipped and accessible setting in the heart of Maârif.",
      location: "Convenient location",
      team: "Experienced teaching team",
      spaces: "Modular spaces",
      booking: "Simple booking",
      whatsappMessage: "Hello IPMES, I would like to book or get more information about your training and spaces.",
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "They experienced IPMES",
      description: "Authentic testimonials from our learners and visitors.",
      videoLabel: "IPMES testimonial",
    },
    footer: {
      description:
        "Modern center in Casablanca Maârif for training, professional space booking and project development in an accessible premium setting.",
      navigation: "Navigation",
      spaces: "Spaces for rent",
      contact: "Contact",
      address: "Address: 45 rue Atlas, Maârif, Casablanca",
      reservation: "Bookings and information by WhatsApp.",
      follow: "Follow us",
      rights: "© 2026 IPMES. All rights reserved.",
    },
    contactCards: {
      addressLabel: "Address",
      addressTitle: "45 rue Atlas, Maârif, Casablanca",
      addressText: "Accessible center for training, appointments and space bookings.",
      whatsappLabel: "WhatsApp",
      whatsappTitle: "Quick response",
      whatsappText: "Share the service, date, number of people and your contact details.",
      actionLabel: "Action",
    },
    aboutVision: {
      eyebrow: "Vision",
      text: "Create a reliable environment where learning, practicing, hosting and organizing become simple.",
    },
    spaceDetail: {
      details: "Space details",
      equipment: "Equipment",
      benefits: "Benefits",
      usage: "Uses",
      back: "Back to spaces",
      readyTitle: "A space ready for your professional activities",
      category: "Category",
      price: "Rate",
      note: "Booking on request with IPMES support according to the format, duration and technical needs.",
      whatsappMessage: "Hello IPMES, I would like to book: {title}.",
      detailsCta: "View details",
      detailsAria: "View details for {title}",
    },
    formationDetail: {
      details: "Training details",
      keyInfo: "Key information",
      duration: "Duration",
      frequency: "Frequency",
      frequencyValue: "1 day per week",
      price: "Price",
      certification: "Certification",
      back: "Back to training",
      reserve: "Book this training",
    },
    founder: {
      role: "Founder",
      subtitle: "Founder of IPMES · Teaching lead · Trainer",
      cardSubtitle: "Founder & Teaching Director",
      cardDescription:
        "A vision centered on practice, support and the quality of each pathway. IPMES supports learners, trainers and project leaders in a serious, equipped and human setting.",
      tags: "Training|Teaching|Management|Support",
      profile: "View LinkedIn profile",
      eyebrow: "Professional team",
      title: "Experienced teaching leadership serving professional training.",
      description:
        "IPMES relies on experienced teaching leadership led by Kawtar Chaabi, founder and teaching lead, with a strong background in training, team coordination, educational content production and professional support.",
      experience: "Experience",
      education: "Education",
      verified: "Verified background",
      consult: "Open LinkedIn profile",
    },
  },
  es: {
    common: { all: "Todo" },
    video: {
      unsupported: "Tu navegador no admite la reproducción de vídeo.",
      soundPrompt: "Haz clic para iniciar la visita con sonido",
    },
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
    experience: {
      eyebrow: "Experiencia IPMES",
      title: "Un recorrido simple, fluido y profesional.",
      learnTitle: "Aprender",
      learnText: "Formaciones prácticas en un entorno claro, equipado y pensado para avanzar rápido.",
      learnAria: "Ver formaciones",
      bookTitle: "Reservar",
      bookText: "Espacios flexibles para cursos, citas, yoga, talleres y eventos.",
      bookAria: "Reservar por WhatsApp",
      growTitle: "Desarrollar",
      growText: "Un lugar profesional para lanzar una actividad, recibir clientes y crear red.",
      growAria: "Ver espacios",
      whatsappMessage: "Hola IPMES, quiero reservar o recibir más información.",
    },
    why: {
      eyebrow: "Por qué IPMES",
      title:
        "Un lugar diseñado para aprender, practicar, recibir y transmitir en un entorno serio, equipado y accesible en el corazón del Maârif.",
      location: "Ubicación práctica",
      team: "Equipo pedagógico experimentado",
      spaces: "Espacios modulares",
      booking: "Reserva simple",
      whatsappMessage: "Hola IPMES, quiero reservar o recibir más información sobre sus formaciones y espacios.",
    },
    testimonials: {
      eyebrow: "Testimonios",
      title: "Vivieron la experiencia IPMES",
      description: "Testimonios auténticos de nuestros alumnos y visitantes.",
      videoLabel: "Testimonio IPMES",
    },
    footer: {
      description:
        "Centro moderno en Casablanca Maârif para formarse, reservar un espacio profesional y desarrollar proyectos en un entorno premium accesible.",
      navigation: "Navegación",
      spaces: "Espacios en alquiler",
      contact: "Contacto",
      address: "Dirección: 45 rue Atlas, Maârif, Casablanca",
      reservation: "Reservas e información por WhatsApp.",
      follow: "Síguenos",
      rights: "© 2026 IPMES. Todos los derechos reservados.",
    },
    contactCards: {
      addressLabel: "Dirección",
      addressTitle: "45 rue Atlas, Maârif, Casablanca",
      addressText: "Centro accesible para formaciones, citas y reservas de espacios.",
      whatsappLabel: "WhatsApp",
      whatsappTitle: "Respuesta rápida",
      whatsappText: "Indica el servicio, la fecha, el número de personas y tus datos.",
      actionLabel: "Acción",
    },
    aboutVision: {
      eyebrow: "Visión",
      text: "Crear un entorno fiable donde aprender, practicar, recibir y organizar sea simple.",
    },
    spaceDetail: {
      details: "Detalles del espacio",
      equipment: "Equipamiento",
      benefits: "Ventajas",
      usage: "Usos",
      back: "Volver a espacios",
      readyTitle: "Un espacio listo para tus actividades profesionales",
      category: "Categoría",
      price: "Tarifa",
      note: "Reserva a solicitud con acompañamiento IPMES según el formato, la duración y las necesidades técnicas.",
      whatsappMessage: "Hola IPMES, quiero reservar: {title}.",
      detailsCta: "Ver detalles",
      detailsAria: "Ver detalles de {title}",
    },
    formationDetail: {
      details: "Detalles de la formación",
      keyInfo: "Información clave",
      duration: "Duración",
      frequency: "Frecuencia",
      frequencyValue: "1 día por semana",
      price: "Precio",
      certification: "Certificación",
      back: "Volver a formaciones",
      reserve: "Reservar esta formación",
    },
    founder: {
      role: "Fundadora",
      subtitle: "Fundadora IPMES · Responsable pedagógica · Formadora",
      cardSubtitle: "Fundadora y Directora pedagógica",
      cardDescription:
        "Una visión centrada en la práctica, el acompañamiento y la calidad de los recorridos. IPMES acompaña a alumnos, formadores y emprendedores en un entorno serio, equipado y humano.",
      tags: "Formación|Pedagogía|Gestión|Acompañamiento",
      profile: "Ver perfil de LinkedIn",
      eyebrow: "Equipo profesional",
      title: "Una dirección pedagógica experimentada al servicio de la formación.",
      description:
        "IPMES se apoya en una dirección pedagógica experimentada, liderada por Kawtar Chaabi, fundadora y responsable pedagógica, con una trayectoria sólida en formación, coordinación de equipos, producción de contenidos pedagógicos y acompañamiento profesional.",
      experience: "Experiencia",
      education: "Formación",
      verified: "Trayectoria verificable",
      consult: "Consultar perfil de LinkedIn",
    },
  },
  de: {
    common: { all: "Alle" },
    video: {
      unsupported: "Ihr Browser unterstützt die Videowiedergabe nicht.",
      soundPrompt: "Klicken, um die Tour mit Ton zu starten",
    },
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
    experience: {
      eyebrow: "IPMES-Erlebnis",
      title: "Ein einfacher, flüssiger und professioneller Ablauf.",
      learnTitle: "Lernen",
      learnText: "Praxisorientierte Kurse in einem klaren, ausgestatteten Rahmen für schnellen Fortschritt.",
      learnAria: "Kurse ansehen",
      bookTitle: "Buchen",
      bookText: "Flexible Räume für Kurse, Termine, Yoga, Workshops und Events.",
      bookAria: "Über WhatsApp buchen",
      growTitle: "Entwickeln",
      growText: "Ein professioneller Ort, um eine Aktivität zu starten, Kunden zu empfangen und ein Netzwerk aufzubauen.",
      growAria: "Räume ansehen",
      whatsappMessage: "Hallo IPMES, ich möchte buchen oder weitere Informationen erhalten.",
    },
    why: {
      eyebrow: "Warum IPMES",
      title:
        "Ein Ort zum Lernen, Üben, Empfangen und Vermitteln in einem seriösen, ausgestatteten und zugänglichen Rahmen im Herzen von Maârif.",
      location: "Praktische Lage",
      team: "Erfahrenes pädagogisches Team",
      spaces: "Modulare Räume",
      booking: "Einfache Buchung",
      whatsappMessage: "Hallo IPMES, ich möchte buchen oder weitere Informationen zu Ihren Kursen und Räumen erhalten.",
    },
    testimonials: {
      eyebrow: "Stimmen",
      title: "Sie haben IPMES erlebt",
      description: "Authentische Rückmeldungen unserer Lernenden und Besucher.",
      videoLabel: "IPMES-Stimme",
    },
    footer: {
      description:
        "Modernes Zentrum in Casablanca Maârif für Kurse, professionelle Raumbuchung und Projektentwicklung in einem zugänglichen Premium-Rahmen.",
      navigation: "Navigation",
      spaces: "Räume mieten",
      contact: "Kontakt",
      address: "Adresse: 45 rue Atlas, Maârif, Casablanca",
      reservation: "Buchungen und Informationen per WhatsApp.",
      follow: "Folgen Sie uns",
      rights: "© 2026 IPMES. Alle Rechte vorbehalten.",
    },
    contactCards: {
      addressLabel: "Adresse",
      addressTitle: "45 rue Atlas, Maârif, Casablanca",
      addressText: "Zugängliches Zentrum für Kurse, Termine und Raumbuchungen.",
      whatsappLabel: "WhatsApp",
      whatsappTitle: "Schnelle Antwort",
      whatsappText: "Nennen Sie Service, Datum, Personenzahl und Ihre Kontaktdaten.",
      actionLabel: "Aktion",
    },
    aboutVision: {
      eyebrow: "Vision",
      text: "Eine verlässliche Umgebung schaffen, in der Lernen, Üben, Empfangen und Organisieren einfach wird.",
    },
    spaceDetail: {
      details: "Raumdetails",
      equipment: "Ausstattung",
      benefits: "Vorteile",
      usage: "Nutzung",
      back: "Zurück zu den Räumen",
      readyTitle: "Ein Raum bereit für Ihre professionellen Aktivitäten",
      category: "Kategorie",
      price: "Tarif",
      note: "Buchung auf Anfrage mit IPMES-Begleitung je nach Format, Dauer und technischen Bedürfnissen.",
      whatsappMessage: "Hallo IPMES, ich möchte buchen: {title}.",
      detailsCta: "Details ansehen",
      detailsAria: "Details ansehen für {title}",
    },
    formationDetail: {
      details: "Kursdetails",
      keyInfo: "Wichtige Informationen",
      duration: "Dauer",
      frequency: "Rhythmus",
      frequencyValue: "1 Tag pro Woche",
      price: "Preis",
      certification: "Zertifizierung",
      back: "Zurück zu den Kursen",
      reserve: "Diesen Kurs reservieren",
    },
    founder: {
      role: "Gründerin",
      subtitle: "Gründerin von IPMES · Pädagogische Leitung · Trainerin",
      cardSubtitle: "Gründerin & pädagogische Direktorin",
      cardDescription:
        "Eine Vision, die auf Praxis, Begleitung und Qualität der Lernwege ausgerichtet ist. IPMES begleitet Lernende, Trainer und Projektträger in einem seriösen, ausgestatteten und menschlichen Rahmen.",
      tags: "Schulung|Pädagogik|Management|Begleitung",
      profile: "LinkedIn-Profil ansehen",
      eyebrow: "Professionelles Team",
      title: "Erfahrene pädagogische Leitung im Dienst der Ausbildung.",
      description:
        "IPMES stützt sich auf eine erfahrene pädagogische Leitung unter Kawtar Chaabi, Gründerin und pädagogische Verantwortliche, mit solider Erfahrung in Ausbildung, Teamkoordination, pädagogischer Content-Produktion und professioneller Begleitung.",
      experience: "Erfahrung",
      education: "Ausbildung",
      verified: "Überprüfbarer Werdegang",
      consult: "LinkedIn-Profil öffnen",
    },
  },
  tr: {
    common: { all: "Tümü" },
    video: {
      unsupported: "Tarayıcınız video oynatmayı desteklemiyor.",
      soundPrompt: "Turu sesli başlatmak için tıklayın",
    },
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
    experience: {
      eyebrow: "IPMES deneyimi",
      title: "Basit, akıcı ve profesyonel bir yolculuk.",
      learnTitle: "Öğren",
      learnText: "Hızlı ilerlemek için net, donanımlı ve uygulamaya odaklı eğitimler.",
      learnAria: "Eğitimleri gör",
      bookTitle: "Rezerve et",
      bookText: "Dersler, randevular, yoga, atölyeler ve etkinlikler için esnek alanlar.",
      bookAria: "WhatsApp üzerinden rezerve et",
      growTitle: "Geliştir",
      growText: "Faaliyetinizi başlatmak, müşterilerinizi ağırlamak ve ağ kurmak için profesyonel bir yer.",
      growAria: "Alanları gör",
      whatsappMessage: "Merhaba IPMES, rezervasyon yapmak veya daha fazla bilgi almak istiyorum.",
    },
    why: {
      eyebrow: "Neden IPMES",
      title:
        "Maârif'in kalbinde öğrenmek, uygulamak, ağırlamak ve aktarmak için ciddi, donanımlı ve erişilebilir bir yer.",
      location: "Pratik konum",
      team: "Deneyimli pedagojik ekip",
      spaces: "Modüler alanlar",
      booking: "Kolay rezervasyon",
      whatsappMessage: "Merhaba IPMES, eğitimleriniz ve alanlarınız hakkında rezervasyon yapmak veya bilgi almak istiyorum.",
    },
    testimonials: {
      eyebrow: "Yorumlar",
      title: "IPMES deneyimini yaşadılar",
      description: "Öğrencilerimizden ve ziyaretçilerimizden gerçek yorumlar.",
      videoLabel: "IPMES yorumu",
    },
    footer: {
      description:
        "Casablanca Maârif'te eğitim almak, profesyonel alan rezerve etmek ve projeleri geliştirmek için erişilebilir premium ortam sunan modern merkez.",
      navigation: "Navigasyon",
      spaces: "Kiralık alanlar",
      contact: "İletişim",
      address: "Adres: 45 rue Atlas, Maârif, Casablanca",
      reservation: "Rezervasyonlar ve bilgiler WhatsApp üzerinden.",
      follow: "Bizi takip edin",
      rights: "© 2026 IPMES. Tüm hakları saklıdır.",
    },
    contactCards: {
      addressLabel: "Adres",
      addressTitle: "45 rue Atlas, Maârif, Casablanca",
      addressText: "Eğitimler, randevular ve alan rezervasyonları için erişilebilir merkez.",
      whatsappLabel: "WhatsApp",
      whatsappTitle: "Hızlı yanıt",
      whatsappText: "İstenen hizmeti, tarihi, kişi sayısını ve iletişim bilgilerinizi belirtin.",
      actionLabel: "İşlem",
    },
    aboutVision: {
      eyebrow: "Vizyon",
      text: "Öğrenmenin, uygulamanın, ağırlamanın ve organize etmenin kolaylaştığı güvenilir bir ortam oluşturmak.",
    },
    spaceDetail: {
      details: "Alan detayları",
      equipment: "Ekipman",
      benefits: "Avantajlar",
      usage: "Kullanımlar",
      back: "Alanlara dön",
      readyTitle: "Profesyonel aktiviteleriniz için hazır bir alan",
      category: "Kategori",
      price: "Tarife",
      note: "Format, süre ve teknik ihtiyaçlara göre IPMES desteğiyle talep üzerine rezervasyon.",
      whatsappMessage: "Merhaba IPMES, şunu rezerve etmek istiyorum: {title}.",
      detailsCta: "Detayları gör",
      detailsAria: "{title} detaylarını gör",
    },
    formationDetail: {
      details: "Eğitim detayları",
      keyInfo: "Temel bilgiler",
      duration: "Süre",
      frequency: "Sıklık",
      frequencyValue: "Haftada 1 gün",
      price: "Fiyat",
      certification: "Sertifika",
      back: "Eğitimlere dön",
      reserve: "Bu eğitimi rezerve et",
    },
    founder: {
      role: "Kurucu",
      subtitle: "IPMES kurucusu · Pedagojik sorumlu · Eğitmen",
      cardSubtitle: "Kurucu ve Pedagojik Direktör",
      cardDescription:
        "Uygulama, destek ve yolculukların kalitesine odaklanan bir vizyon. IPMES öğrencileri, eğitmenleri ve proje sahiplerini ciddi, donanımlı ve insani bir ortamda destekler.",
      tags: "Eğitim|Pedagoji|Yönetim|Destek",
      profile: "LinkedIn profilini gör",
      eyebrow: "Profesyonel ekip",
      title: "Eğitimin hizmetinde deneyimli pedagojik yönetim.",
      description:
        "IPMES, kurucu ve pedagojik sorumlu Kawtar Chaabi tarafından yönetilen deneyimli bir pedagojik yapıya dayanır; eğitim, ekip koordinasyonu, pedagojik içerik üretimi ve profesyonel destek alanlarında güçlü bir geçmişe sahiptir.",
      experience: "Deneyim",
      education: "Eğitim",
      verified: "Doğrulanabilir geçmiş",
      consult: "LinkedIn profilini aç",
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
