export type Formation = {
  id: string;
  slug: string;
  titleFr: string;
  titleAr: string;
  shortDescriptionFr: string;
  shortDescriptionAr: string;
  durationFr: string;
  durationAr: string;
  price: string;
  priceAr: string;
  diplomaFr: string;
  diplomaAr: string;
  diplomaCountry: string;
  diplomaFlagImage: string;
  diplomaLabel: string;
  category: string;
  image: string;
  videoUrl?: string;
  whatsappMessageFr: string;
  whatsappMessageAr: string;
  highlightsFr: string[];
  highlightsAr: string[];
  details: string[];
};

export const formations: Formation[] = [
  {
    id: "formation-hijama",
    slug: "hijama",
    titleFr: "Formation Hijama",
    titleAr: "تكوين الحجامة",
    shortDescriptionFr:
      "Une formation pratique et encadrée pour apprendre les bases de la hijama, l'hygiène et l'accompagnement du client en toute sécurité.",
    shortDescriptionAr:
      "تكوين تطبيقي ومؤطر لتعلم أساسيات الحجامة، قواعد النظافة، ومرافقة الزبون بطريقة آمنة ومهنية.",
    durationFr: "1 mois",
    durationAr: "شهر واحد",
    price: "3000 DH",
    priceAr: "3000 درهم",
    diplomaFr: "Diplôme certifié Allemagne",
    diplomaAr: "دبلوم معتمد من ألمانيا",
    diplomaCountry: "Allemagne",
    diplomaFlagImage: "/images/flags/allmagne.jpeg",
    diplomaLabel: "Diplôme certifié Allemagne",
    category: "Santé / bien-être",
    image: "/images/ipmes/trainings/ipmes-gallery-048-large.webp",
    videoUrl: "/videos/hijama.mp4",
    whatsappMessageFr:
      "Bonjour IPMES, je souhaite avoir plus d'informations sur la formation Hijama.",
    whatsappMessageAr:
      "السلام عليكم IPMES، أريد معلومات أكثر حول تكوين الحجامة.",
    highlightsFr: ["Hygiène et sécurité", "Protocole pratique", "Accompagnement client"],
    highlightsAr: ["النظافة والسلامة", "بروتوكول تطبيقي", "مرافقة الزبون"],
    details: [
      "Hygiène et sécurité",
      "Protocole pratique",
      "Bases théoriques",
      "Accompagnement client",
      "Pratique encadrée",
    ],
  },
  {
    id: "formation-secourisme",
    slug: "secourisme",
    titleFr: "Formation Secourisme",
    titleAr: "تكوين الإسعافات الأولية",
    shortDescriptionFr:
      "Un programme essentiel pour apprendre les gestes de premiers secours et intervenir avec calme face aux situations d'urgence.",
    shortDescriptionAr:
      "برنامج أساسي لتعلم مبادئ الإسعافات الأولية والتدخل بهدوء ومسؤولية في الحالات المستعجلة.",
    durationFr: "1 mois",
    durationAr: "شهر واحد",
    price: "3000 DH",
    priceAr: "3000 درهم",
    diplomaFr: "Diplôme + carte professionnelle secouriste UK",
    diplomaAr: "دبلوم مع بطاقة مهنية للمسعف",
    diplomaCountry: "Royaume-Uni",
    diplomaFlagImage: "/images/flags/angleterre.jpeg",
    diplomaLabel: "Diplôme + carte professionnelle secouriste UK",
    category: "Santé / sécurité",
    image: "/images/ipmes/trainings/ipmes-gallery-053-large.webp",
    videoUrl: "/videos/secourisme.MP4",
    whatsappMessageFr:
      "Bonjour IPMES, je souhaite avoir plus d'informations sur la formation Secourisme.",
    whatsappMessageAr:
      "السلام عليكم IPMES، أريد معلومات أكثر حول تكوين الإسعافات الأولية.",
    highlightsFr: ["Gestes d'urgence", "Mises en situation", "Carte professionnelle"],
    highlightsAr: ["إجراءات الطوارئ", "تمارين تطبيقية", "بطاقة مهنية"],
    details: [
      "Gestes d'urgence",
      "Mises en situation",
      "Premiers secours",
      "Carte professionnelle",
    ],
  },
  {
    id: "formation-aide-personnes-agees",
    slug: "aide-personnes-agees",
    titleFr: "Formation Aide aux personnes âgées",
    titleAr: "تكوين مساعدة الأشخاص المسنين",
    shortDescriptionFr:
      "Une formation humaine et professionnelle pour accompagner les personnes âgées avec attention, respect et bonnes pratiques de sécurité.",
    shortDescriptionAr:
      "تكوين إنساني ومهني لمرافقة الأشخاص المسنين بعناية واحترام مع اعتماد ممارسات السلامة الأساسية.",
    durationFr: "1 mois",
    durationAr: "شهر واحد",
    price: "2700 DH",
    priceAr: "2700 درهم",
    diplomaFr: "Diplôme international reconnu certifié UK + Canada",
    diplomaAr: "دبلوم دولي معترف به ومعتمد من المملكة المتحدة وكندا",
    diplomaCountry: "Royaume-Uni",
    diplomaFlagImage: "/images/flags/angleterre.jpeg",
    diplomaLabel: "Diplôme international reconnu certifié UK",
    category: "Social / santé",
    image: "/images/ipmes/trainings/ipmes-gallery-054-large.webp",
    videoUrl: "/videos/aide-personnes-agees.mp4",
    whatsappMessageFr:
      "Bonjour IPMES, je souhaite avoir plus d'informations sur la formation Aide aux personnes âgées.",
    whatsappMessageAr:
      "السلام عليكم IPMES، أريد معلومات أكثر حول تكوين مساعدة الأشخاص المسنين.",
    highlightsFr: ["Accompagnement quotidien", "Sécurité de la personne", "Diplôme international"],
    highlightsAr: ["المرافقة اليومية", "سلامة الشخص", "دبلوم دولي"],
    details: [
      "Accompagnement quotidien",
      "Sécurité de la personne",
      "Hygiène et confort",
      "Communication bienveillante",
      "Diplôme international",
    ],
  },
  {
    id: "formation-esthetique-non-chirurgicale",
    slug: "esthetique-non-chirurgicale",
    titleFr: "Formation Esthétique non chirurgicale",
    titleAr: "تكوين التجميل غير الجراحي",
    shortDescriptionFr:
      "Une formation spécialisée pour découvrir les bases des soins esthétiques non chirurgicaux dans un cadre professionnel et rassurant.",
    shortDescriptionAr:
      "تكوين متخصص لاكتشاف أساسيات العناية التجميلية غير الجراحية داخل إطار مهني ومطمئن.",
    durationFr: "1 mois",
    durationAr: "شهر واحد",
    price: "Sur demande",
    priceAr: "عند الطلب",
    diplomaFr: "Certification esthétique Allemagne",
    diplomaAr: "شهادة تجميل معتمدة من ألمانيا",
    diplomaCountry: "Turquie",
    diplomaFlagImage: "/images/flags/turkey.jpeg",
    diplomaLabel: "Certification esthétique Turquie",
    category: "Esthétique",
    image: "/images/ipmes/trainings/ipmes-gallery-056-large.webp",
    videoUrl: "/videos/formation-esthetique.mp4",
    whatsappMessageFr:
      "Bonjour IPMES, je souhaite avoir plus d'informations sur la formation Esthétique non chirurgicale.",
    whatsappMessageAr:
      "السلام عليكم IPMES، أريد معلومات أكثر حول تكوين التجميل غير الجراحي.",
    highlightsFr: ["Techniques non chirurgicales", "Cadre professionnel", "Certificat IPMES"],
    highlightsAr: ["تقنيات غير جراحية", "إطار مهني", "شهادة IPMES"],
    details: [
      "Bases théoriques",
      "Démonstration sur mannequin",
      "Hygiène professionnelle",
      "Sécurité du geste",
    ],
  },
  {
    id: "formation-educatrice",
    slug: "educatrice",
    titleFr: "Formation Éducatrice",
    titleAr: "تكوين المربية",
    shortDescriptionFr:
      "Un parcours pour acquérir les bases de l'accompagnement éducatif, de l'organisation d'activités et de la relation avec l'enfant.",
    shortDescriptionAr:
      "مسار لتعلم أساسيات المرافقة التربوية، تنظيم الأنشطة، وبناء علاقة مهنية مع الطفل.",
    durationFr: "Sur demande",
    durationAr: "عند الطلب",
    price: "Sur demande",
    priceAr: "عند الطلب",
    diplomaFr: "Certificat IPMES",
    diplomaAr: "شهادة IPMES",
    diplomaCountry: "Maroc",
    diplomaFlagImage: "/images/flags/maroc.jpeg",
    diplomaLabel: "Certificat IPMES",
    category: "Éducation",
    image: "/images/ipmes/training-room/ipmes-gallery-017-large.webp",
    videoUrl: "/videos/formation-educatrice.mp4",
    whatsappMessageFr:
      "Bonjour IPMES, je souhaite avoir plus d'informations sur la formation Éducatrice.",
    whatsappMessageAr:
      "السلام عليكم IPMES، أريد معلومات أكثر حول تكوين المربية.",
    highlightsFr: ["Accompagnement éducatif", "Activités adaptées", "Posture professionnelle"],
    highlightsAr: ["مرافقة تربوية", "أنشطة مناسبة", "سلوك مهني"],
    details: [
      "Accompagnement éducatif",
      "Activités adaptées",
      "Relation avec l’enfant",
      "Organisation pédagogique",
    ],
  },
  {
    id: "formation-educatrice-specialisee",
    slug: "educatrice-specialisee",
    titleFr: "Formation Éducatrice spécialisée",
    titleAr: "تكوين المربية المتخصصة",
    shortDescriptionFr:
      "Une formation approfondie pour développer une posture éducative adaptée aux besoins spécifiques et aux situations d'accompagnement.",
    shortDescriptionAr:
      "تكوين معمق لتطوير ممارسات تربوية ملائمة للاحتياجات الخاصة ولمختلف وضعيات المرافقة.",
    durationFr: "Sur demande",
    durationAr: "عند الطلب",
    price: "Sur demande",
    priceAr: "عند الطلب",
    diplomaFr: "Certificat IPMES",
    diplomaAr: "شهادة IPMES",
    diplomaCountry: "Maroc",
    diplomaFlagImage: "/images/flags/maroc.jpeg",
    diplomaLabel: "Certificat IPMES",
    category: "Éducation spécialisée",
    image: "/images/ipmes/training-room/ipmes-gallery-016-large.webp",
    videoUrl: "/videos/hero-educatrice.mp4",
    whatsappMessageFr:
      "Bonjour IPMES, je souhaite avoir plus d'informations sur la formation Éducatrice spécialisée.",
    whatsappMessageAr:
      "السلام عليكم IPMES، أريد معلومات أكثر حول تكوين المربية المتخصصة.",
    highlightsFr: ["Besoins spécifiques", "Approche individualisée", "Certificat IPMES"],
    highlightsAr: ["احتياجات خاصة", "مقاربة فردية", "شهادة IPMES"],
    details: [
      "Besoins spécifiques",
      "Posture éducative",
      "Accompagnement individualisé",
      "Activités adaptées",
    ],
  },
];
