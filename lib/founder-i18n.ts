import type { LanguageCode } from "@/components/i18n";

type FounderEntry = {
  title: string;
  company: string;
  period: string;
  duration?: string;
  location?: string;
  items: string[];
};

type EducationEntry = {
  school: string;
  degree: string;
  period?: string;
};

type FounderContent = {
  experiences: FounderEntry[];
  education: EducationEntry[];
};

export const founderContent: Record<LanguageCode, FounderContent> = {
  fr: {
    experiences: [
      {
        title: "Directrice d'institut de formation",
        company: "IPMES · Temps plein",
        period: "sept. 2020 – aujourd'hui",
        duration: "5 ans 9 mois",
        location: "Préfecture de Casablanca, Casablanca-Settat, Maroc",
        items: [
          "Direction des missions pédagogiques",
          "Management des équipes projets",
          "Responsabilité vis-à-vis du client",
          "Participation au développement commercial",
          "Élaboration des offres commerciales et pédagogiques",
        ],
      },
      {
        title: "Auteur de manuels scolaires",
        company: "Hachette Livre · Freelance",
        period: "janv. 2004 – aujourd'hui",
        duration: "22 ans 5 mois",
        location: "France",
        items: [
          "Réalisation de recherches documentaires",
          "Contribution à la production de contenus pédagogiques",
          "Écriture et structuration de supports scolaires",
        ],
      },
      {
        title: "Directrice pédagogique",
        company: "Institution L'Excellence",
        period: "sept. 2005 – juil. 2020",
        duration: "14 ans 11 mois",
        location: "Préfecture de Casablanca, Casablanca-Settat, Maroc",
        items: [
          "Mise en place de nouvelles stratégies managériales",
          "Renforcement de la cohésion de l'équipe pédagogique et administrative",
          "Organisation et suivi pédagogique",
          "Coordination des équipes éducatives",
        ],
      },
      {
        title: "Institutrice de français",
        company: "Institution L'Excellence",
        period: "sept. 1998 – août 2005",
        duration: "7 ans",
        location: "Casablanca",
        items: [
          "Animation des cours",
          "Transmission des savoirs",
          "Mise en place d'un cadre de travail agréable",
          "Utilisation de techniques pédagogiques favorisant l'apprentissage",
        ],
      },
      {
        title: "Responsable administration commerciale",
        company: "Bil Consulting",
        period: "sept. 1996 – juin 1998",
        duration: "1 an 10 mois",
        location: "Casablanca",
        items: [
          "Sélection des profils recherchés par le client",
          "Utilisation de tests de connaissances",
          "Vérification du niveau professionnel des candidats",
          "Suivi administratif et commercial",
        ],
      },
    ],
    education: [
      {
        school: "Faculté des Sciences Juridiques, Économiques et Sociales de Mohammedia",
        degree: "Doctorat de droit, Droit Public",
        period: "2021 – aujourd'hui",
      },
      {
        school: "Faculté des Sciences Juridiques, Économiques et Sociales de Casablanca",
        degree: "DESA, International Law and Legal Studies",
        period: "2012",
      },
      {
        school: "Faculté des Sciences Juridiques, Économiques et Sociales de Tanger",
        degree: "Licence de droit, Public Administration",
        period: "1999 – 2003",
      },
      { school: "HEM - Business & Engineering School", degree: "Licence, Marketing", period: "1992 – 1996" },
      {
        school: "Institut Français de Casablanca",
        degree: "Certificat de formation pédagogique, Elementary Education and Teaching",
      },
    ],
  },
  ar: {
    experiences: [
      {
        title: "مديرة معهد للتكوين",
        company: "IPMES · دوام كامل",
        period: "شتنبر 2020 – اليوم",
        duration: "5 سنوات و9 أشهر",
        location: "عمالة الدار البيضاء، الدار البيضاء-سطات، المغرب",
        items: ["إدارة المهام البيداغوجية", "تسيير فرق المشاريع", "المسؤولية تجاه الزبون", "المساهمة في التطوير التجاري", "إعداد العروض التجارية والبيداغوجية"],
      },
      {
        title: "مؤلفة كتب مدرسية",
        company: "Hachette Livre · عمل حر",
        period: "يناير 2004 – اليوم",
        duration: "22 سنة و5 أشهر",
        location: "فرنسا",
        items: ["إنجاز بحوث وثائقية", "المساهمة في إنتاج محتوى بيداغوجي", "كتابة وهيكلة دعامات مدرسية"],
      },
      {
        title: "مديرة بيداغوجية",
        company: "Institution L'Excellence",
        period: "شتنبر 2005 – يوليوز 2020",
        duration: "14 سنة و11 شهرا",
        location: "عمالة الدار البيضاء، الدار البيضاء-سطات، المغرب",
        items: ["وضع استراتيجيات تسيير جديدة", "تعزيز انسجام الفريق البيداغوجي والإداري", "تنظيم وتتبع بيداغوجي", "تنسيق الفرق التربوية"],
      },
      {
        title: "أستاذة لغة فرنسية",
        company: "Institution L'Excellence",
        period: "شتنبر 1998 – غشت 2005",
        duration: "7 سنوات",
        location: "الدار البيضاء",
        items: ["تنشيط الدروس", "نقل المعارف", "إرساء إطار عمل مريح", "استعمال تقنيات بيداغوجية تشجع التعلم"],
      },
      {
        title: "مسؤولة الإدارة التجارية",
        company: "Bil Consulting",
        period: "شتنبر 1996 – يونيو 1998",
        duration: "سنة و10 أشهر",
        location: "الدار البيضاء",
        items: ["انتقاء الملفات المطلوبة من طرف الزبون", "استعمال اختبارات المعرفة", "التحقق من المستوى المهني للمرشحين", "تتبع إداري وتجاري"],
      },
    ],
    education: [
      { school: "كلية العلوم القانونية والاقتصادية والاجتماعية بالمحمدية", degree: "دكتوراه في القانون، القانون العام", period: "2021 – اليوم" },
      { school: "كلية العلوم القانونية والاقتصادية والاجتماعية بالدار البيضاء", degree: "دبلوم الدراسات العليا المعمقة، القانون الدولي والدراسات القانونية", period: "2012" },
      { school: "كلية العلوم القانونية والاقتصادية والاجتماعية بطنجة", degree: "إجازة في القانون، الإدارة العمومية", period: "1999 – 2003" },
      { school: "HEM - Business & Engineering School", degree: "إجازة، تسويق", period: "1992 – 1996" },
      { school: "المعهد الفرنسي بالدار البيضاء", degree: "شهادة تكوين بيداغوجي، التعليم الابتدائي" },
    ],
  },
  en: {
    experiences: [
      { title: "Training institute director", company: "IPMES · Full-time", period: "Sep. 2020 – present", duration: "5 years 9 months", location: "Casablanca Prefecture, Casablanca-Settat, Morocco", items: ["Leading teaching missions", "Managing project teams", "Client responsibility", "Contributing to business development", "Building commercial and teaching offers"] },
      { title: "Textbook author", company: "Hachette Livre · Freelance", period: "Jan. 2004 – present", duration: "22 years 5 months", location: "France", items: ["Documentary research", "Educational content production", "Writing and structuring school materials"] },
      { title: "Teaching director", company: "Institution L'Excellence", period: "Sep. 2005 – Jul. 2020", duration: "14 years 11 months", location: "Casablanca Prefecture, Casablanca-Settat, Morocco", items: ["New management strategies", "Strengthening teaching and administrative team cohesion", "Teaching organization and follow-up", "Coordination of education teams"] },
      { title: "French teacher", company: "Institution L'Excellence", period: "Sep. 1998 – Aug. 2005", duration: "7 years", location: "Casablanca", items: ["Teaching classes", "Knowledge transmission", "Creating a pleasant working framework", "Using teaching techniques that support learning"] },
      { title: "Commercial administration manager", company: "Bil Consulting", period: "Sep. 1996 – Jun. 1998", duration: "1 year 10 months", location: "Casablanca", items: ["Selecting client-requested profiles", "Using knowledge tests", "Checking candidates' professional level", "Administrative and commercial follow-up"] },
    ],
    education: [
      { school: "Faculty of Legal, Economic and Social Sciences of Mohammedia", degree: "Doctorate in Law, Public Law", period: "2021 – present" },
      { school: "Faculty of Legal, Economic and Social Sciences of Casablanca", degree: "DESA, International Law and Legal Studies", period: "2012" },
      { school: "Faculty of Legal, Economic and Social Sciences of Tangier", degree: "Law degree, Public Administration", period: "1999 – 2003" },
      { school: "HEM - Business & Engineering School", degree: "Bachelor's degree, Marketing", period: "1992 – 1996" },
      { school: "French Institute of Casablanca", degree: "Teaching training certificate, Elementary Education and Teaching" },
    ],
  },
  es: {
    experiences: [
      { title: "Directora de instituto de formación", company: "IPMES · Tiempo completo", period: "sept. 2020 – actualidad", duration: "5 años 9 meses", location: "Prefectura de Casablanca, Casablanca-Settat, Marruecos", items: ["Dirección de misiones pedagógicas", "Gestión de equipos de proyecto", "Responsabilidad frente al cliente", "Participación en desarrollo comercial", "Elaboración de ofertas comerciales y pedagógicas"] },
      { title: "Autora de manuales escolares", company: "Hachette Livre · Freelance", period: "ene. 2004 – actualidad", duration: "22 años 5 meses", location: "Francia", items: ["Investigación documental", "Producción de contenidos pedagógicos", "Redacción y estructuración de soportes escolares"] },
      { title: "Directora pedagógica", company: "Institution L'Excellence", period: "sept. 2005 – jul. 2020", duration: "14 años 11 meses", location: "Prefectura de Casablanca, Casablanca-Settat, Marruecos", items: ["Nuevas estrategias de gestión", "Refuerzo de la cohesión pedagógica y administrativa", "Organización y seguimiento pedagógico", "Coordinación de equipos educativos"] },
      { title: "Profesora de francés", company: "Institution L'Excellence", period: "sept. 1998 – ago. 2005", duration: "7 años", location: "Casablanca", items: ["Animación de clases", "Transmisión de saberes", "Creación de un marco de trabajo agradable", "Uso de técnicas pedagógicas favorables al aprendizaje"] },
      { title: "Responsable de administración comercial", company: "Bil Consulting", period: "sept. 1996 – jun. 1998", duration: "1 año 10 meses", location: "Casablanca", items: ["Selección de perfiles solicitados", "Uso de pruebas de conocimiento", "Verificación del nivel profesional", "Seguimiento administrativo y comercial"] },
    ],
    education: [
      { school: "Facultad de Ciencias Jurídicas, Económicas y Sociales de Mohammedia", degree: "Doctorado en Derecho, Derecho Público", period: "2021 – actualidad" },
      { school: "Facultad de Ciencias Jurídicas, Económicas y Sociales de Casablanca", degree: "DESA, Derecho internacional y estudios jurídicos", period: "2012" },
      { school: "Facultad de Ciencias Jurídicas, Económicas y Sociales de Tánger", degree: "Licenciatura en Derecho, Administración pública", period: "1999 – 2003" },
      { school: "HEM - Business & Engineering School", degree: "Licenciatura, Marketing", period: "1992 – 1996" },
      { school: "Instituto Francés de Casablanca", degree: "Certificado de formación pedagógica, Educación primaria" },
    ],
  },
  de: {
    experiences: [
      { title: "Direktorin eines Ausbildungsinstituts", company: "IPMES · Vollzeit", period: "Sept. 2020 – heute", duration: "5 Jahre 9 Monate", location: "Präfektur Casablanca, Casablanca-Settat, Marokko", items: ["Leitung pädagogischer Aufgaben", "Management von Projektteams", "Verantwortung gegenüber Kunden", "Mitwirkung an der Geschäftsentwicklung", "Erstellung kommerzieller und pädagogischer Angebote"] },
      { title: "Autorin von Schulbüchern", company: "Hachette Livre · Freelance", period: "Jan. 2004 – heute", duration: "22 Jahre 5 Monate", location: "Frankreich", items: ["Dokumentarische Recherche", "Mitwirkung an pädagogischen Inhalten", "Schreiben und Strukturieren von Schulmaterialien"] },
      { title: "Pädagogische Direktorin", company: "Institution L'Excellence", period: "Sept. 2005 – Juli 2020", duration: "14 Jahre 11 Monate", location: "Präfektur Casablanca, Casablanca-Settat, Marokko", items: ["Neue Managementstrategien", "Stärkung des pädagogischen und administrativen Teams", "Pädagogische Organisation und Nachverfolgung", "Koordination von Bildungsteams"] },
      { title: "Französischlehrerin", company: "Institution L'Excellence", period: "Sept. 1998 – Aug. 2005", duration: "7 Jahre", location: "Casablanca", items: ["Unterrichtsgestaltung", "Wissensvermittlung", "Aufbau eines angenehmen Arbeitsrahmens", "Einsatz lernfördernder pädagogischer Techniken"] },
      { title: "Leiterin Handelsadministration", company: "Bil Consulting", period: "Sept. 1996 – Juni 1998", duration: "1 Jahr 10 Monate", location: "Casablanca", items: ["Auswahl gesuchter Profile", "Einsatz von Wissenstests", "Prüfung des beruflichen Niveaus", "Administrative und kommerzielle Nachverfolgung"] },
    ],
    education: [
      { school: "Fakultät für Rechts-, Wirtschafts- und Sozialwissenschaften Mohammedia", degree: "Promotion in Recht, Öffentliches Recht", period: "2021 – heute" },
      { school: "Fakultät für Rechts-, Wirtschafts- und Sozialwissenschaften Casablanca", degree: "DESA, Internationales Recht und Rechtswissenschaften", period: "2012" },
      { school: "Fakultät für Rechts-, Wirtschafts- und Sozialwissenschaften Tanger", degree: "Lizenz in Recht, Öffentliche Verwaltung", period: "1999 – 2003" },
      { school: "HEM - Business & Engineering School", degree: "Lizenz, Marketing", period: "1992 – 1996" },
      { school: "Institut Français de Casablanca", degree: "Pädagogisches Ausbildungszertifikat, Grundschulbildung" },
    ],
  },
  tr: {
    experiences: [
      { title: "Eğitim enstitüsü direktörü", company: "IPMES · Tam zamanlı", period: "Eyl. 2020 – bugün", duration: "5 yıl 9 ay", location: "Casablanca Prefektörlüğü, Casablanca-Settat, Fas", items: ["Pedagojik görevlerin yönetimi", "Proje ekiplerinin yönetimi", "Müşteri sorumluluğu", "Ticari gelişime katkı", "Ticari ve pedagojik tekliflerin hazırlanması"] },
      { title: "Ders kitabı yazarı", company: "Hachette Livre · Serbest", period: "Oca. 2004 – bugün", duration: "22 yıl 5 ay", location: "Fransa", items: ["Belgesel araştırma", "Pedagojik içerik üretimine katkı", "Okul materyallerini yazma ve yapılandırma"] },
      { title: "Pedagojik direktör", company: "Institution L'Excellence", period: "Eyl. 2005 – Tem. 2020", duration: "14 yıl 11 ay", location: "Casablanca Prefektörlüğü, Casablanca-Settat, Fas", items: ["Yeni yönetim stratejileri", "Pedagojik ve idari ekip uyumunu güçlendirme", "Pedagojik organizasyon ve takip", "Eğitim ekiplerinin koordinasyonu"] },
      { title: "Fransızca öğretmeni", company: "Institution L'Excellence", period: "Eyl. 1998 – Ağu. 2005", duration: "7 yıl", location: "Casablanca", items: ["Dersleri yürütme", "Bilgi aktarımı", "Keyifli çalışma çerçevesi oluşturma", "Öğrenmeyi destekleyen pedagojik teknikler kullanma"] },
      { title: "Ticari idare sorumlusu", company: "Bil Consulting", period: "Eyl. 1996 – Haz. 1998", duration: "1 yıl 10 ay", location: "Casablanca", items: ["Müşteri tarafından aranan profilleri seçme", "Bilgi testleri kullanma", "Adayların profesyonel seviyesini doğrulama", "İdari ve ticari takip"] },
    ],
    education: [
      { school: "Mohammedia Hukuk, Ekonomi ve Sosyal Bilimler Fakültesi", degree: "Hukuk doktorası, Kamu hukuku", period: "2021 – bugün" },
      { school: "Casablanca Hukuk, Ekonomi ve Sosyal Bilimler Fakültesi", degree: "DESA, Uluslararası hukuk ve hukuk çalışmaları", period: "2012" },
      { school: "Tangier Hukuk, Ekonomi ve Sosyal Bilimler Fakültesi", degree: "Hukuk lisansı, Kamu yönetimi", period: "1999 – 2003" },
      { school: "HEM - Business & Engineering School", degree: "Lisans, Pazarlama", period: "1992 – 1996" },
      { school: "Casablanca Fransız Enstitüsü", degree: "Pedagojik eğitim sertifikası, İlköğretim" },
    ],
  },
};
