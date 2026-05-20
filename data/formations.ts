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
  detailContent?: {
    fr: { title: string; body: string };
    ar: { title: string; body: string };
    en?: { title: string; body: string };
    es?: { title: string; body: string };
    de?: { title: string; body: string };
    tr?: { title: string; body: string };
  };
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
    detailContent: {
      fr: {
        title: "Formation Professionnelle en Hijama",
        body: `Notre formation professionnelle en Hijama vous propose un enseignement complet et pratique des différentes techniques de thérapie naturelle et énergétique. Le programme couvre la hijama sanguine, la hijama sèche, la hijama glissante, la hijama flash, ainsi que la hijama associée aux aiguilles chinoises, à la moxibustion, aux aimants thérapeutiques et à la technique de la serviette de feu.

La formation inclut également l’apprentissage de protocoles thérapeutiques ciblés pour le traitement de la migraine, des troubles respiratoires, de l’épine calcanéenne et des douleurs du genou.

En complément, plusieurs disciplines essentielles sont abordées : bases du chiropratique, diagnostic par la langue, technique TFT, acupuncture chinoise et massage Tui Na.

À l’issue de la formation, les participants reçoivent un diplôme accrédité par le Board Allemand, une certification en premiers secours ainsi qu’une carte de sauveteur valable pendant deux ans.

Durée de la formation : 1 mois, avec une séance de formation chaque semaine.`,
      },
      ar: {
        title: "دورة الحجامة التكوينية",
        body: `تقدم لكم دورة الحجامة التكوينية برنامجًا احترافيًا متكاملاً يجمع بين الجانب النظري والتطبيقي في مختلف تقنيات العلاج الطبيعي والطاقي. يشمل التكوين الحجامة الدموية، الحجامة الجافة، الحجامة الانزلاقية، الحجامة الوميضية، إضافة إلى الحجامة بالإبر الصينية، العلاج بالمكسا، الحجامة المغناطيسية وتقنية الفوطة النارية.

كما يتضمن البرنامج بروتوكولات علاجية متخصصة للمساعدة في علاج الشقيقة، ضيق التنفس، شوكة القدم وآلام الركبة.

ويشمل التكوين أيضًا التعرف على مجموعة من التقنيات العلاجية الحديثة والتقليدية، من بينها مبادئ الكايروبراكتيك، التشخيص عن طريق اللسان، تقنية TFT، الإبر الصينية، والتدليك العلاجي التوينا.

وفي نهاية الدورة يحصل المتدرب على دبلوم معتمد من البورد الألماني، وشهادة في الإسعافات الأولية، بالإضافة إلى بطاقة منقذ صالحة لمدة سنتين.

مدة التكوين شهر كامل، بمعدل حصة تكوينية واحدة كل أسبوع.`,
      },
      en: {
        title: "Professional Hijama Training",
        body: `Our professional Hijama training offers complete, practical instruction in different natural and energy-based therapy techniques. The program covers wet hijama, dry hijama, sliding hijama, flash hijama, as well as hijama combined with Chinese needles, moxibustion, therapeutic magnets and the fire towel technique.

The training also includes targeted therapeutic protocols to help address migraine, respiratory difficulties, heel spurs and knee pain.

Several essential disciplines are also covered: chiropractic fundamentals, tongue diagnosis, TFT technique, Chinese acupuncture and Tui Na therapeutic massage.

At the end of the training, participants receive a diploma accredited by the German Board, a first aid certification and a rescuer card valid for two years.

Training duration: 1 month, with one training session each week.`,
      },
      es: {
        title: "Formación Profesional en Hijama",
        body: `Nuestra formación profesional en Hijama ofrece una enseñanza completa y práctica de las diferentes técnicas de terapia natural y energética. El programa cubre la hijama sanguínea, la hijama seca, la hijama deslizante, la hijama flash, así como la hijama asociada con agujas chinas, moxibustión, imanes terapéuticos y la técnica de la toalla de fuego.

La formación también incluye el aprendizaje de protocolos terapéuticos específicos para el tratamiento de la migraña, los trastornos respiratorios, el espolón calcáneo y los dolores de rodilla.

Como complemento, se abordan varias disciplinas esenciales: bases de quiropráctica, diagnóstico por la lengua, técnica TFT, acupuntura china y masaje terapéutico Tui Na.

Al finalizar la formación, los participantes reciben un diploma acreditado por el Board Alemán, una certificación en primeros auxilios y una tarjeta de socorrista válida durante dos años.

Duración de la formación: 1 mes, con una sesión de formación cada semana.`,
      },
      de: {
        title: "Professionelle Hijama-Ausbildung",
        body: `Unsere professionelle Hijama-Ausbildung bietet eine vollständige und praxisorientierte Vermittlung verschiedener natürlicher und energetischer Therapietechniken. Das Programm umfasst blutige Hijama, trockene Hijama, gleitende Hijama, Flash-Hijama sowie Hijama in Verbindung mit chinesischen Nadeln, Moxibustion, therapeutischen Magneten und der Feuerhandtuch-Technik.

Die Ausbildung umfasst außerdem gezielte therapeutische Protokolle zur Unterstützung bei Migräne, Atembeschwerden, Fersensporn und Knieschmerzen.

Ergänzend werden mehrere wesentliche Disziplinen behandelt: Grundlagen der Chiropraktik, Zungendiagnostik, TFT-Technik, chinesische Akupunktur und therapeutische Tui-Na-Massage.

Am Ende der Ausbildung erhalten die Teilnehmenden ein vom Deutschen Board akkreditiertes Diplom, eine Erste-Hilfe-Zertifizierung sowie eine zwei Jahre gültige Retterkarte.

Dauer der Ausbildung: 1 Monat, mit einer Schulungseinheit pro Woche.`,
      },
      tr: {
        title: "Profesyonel Hacamat Eğitimi",
        body: `Profesyonel Hacamat eğitimimiz, doğal ve enerji temelli terapi teknikleri konusunda kapsamlı ve uygulamalı bir öğretim sunar. Program; kanlı hacamat, kuru hacamat, kaydırmalı hacamat, flash hacamatın yanı sıra Çin iğneleriyle hacamat, moksa terapisi, terapötik mıknatıslar ve ateş havlusu tekniğini kapsar.

Eğitim ayrıca migren, solunum sorunları, topuk dikeni ve diz ağrılarında destekleyici hedefe yönelik terapötik protokolleri içerir.

Buna ek olarak kayropraktik temelleri, dil ile teşhis, TFT tekniği, Çin akupunkturu ve Tui Na terapötik masajı gibi temel disiplinler de ele alınır.

Eğitimin sonunda katılımcılar Alman Board tarafından akredite edilmiş bir diploma, ilk yardım sertifikası ve iki yıl geçerli kurtarıcı kartı alırlar.

Eğitim süresi: Haftada bir eğitim seansı olmak üzere 1 ay.`,
      },
    },
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
    detailContent: {
      fr: {
        title: "Formation Professionnelle en Secourisme",
        body: `Formation Professionnelle en Secourisme – Programme Pratique et Certifiant 💯

Nous vous proposons une formation complète en secourisme et premiers secours, conçue pour permettre aux participants d’acquérir les gestes essentiels d’intervention en situation d’urgence, aussi bien dans la vie quotidienne que dans un cadre professionnel.

Le programme est fortement axé sur la pratique. Il comprend l’apprentissage de la prise en charge des accidents, des malaises, de l’étouffement, des hémorragies, des brûlures, des fractures, des convulsions, de l’arrêt respiratoire et de l’arrêt cardiaque, avec une initiation aux techniques de réanimation cardio-pulmonaire et à l’utilisation du matériel de premiers secours.

La formation aborde également les règles de sécurité, l’évaluation de la situation avant intervention, la protection de la victime, l’alerte des secours et l’organisation des gestes à effectuer en attendant l’arrivée des équipes spécialisées.

À l’issue de la formation, les participants reçoivent une certification en premiers secours délivrée par l’Organisation Nationale de Secours et de Sauvetage, ainsi qu’une carte de secouriste valable pendant deux ans.

Durée de la formation : selon le programme choisi, avec des séances théoriques et pratiques intensives.`,
      },
      ar: {
        title: "دورة الإسعافات الأولية والإنقاذ",
        body: `دورة الإسعافات الأولية والإنقاذ – تكوين تطبيقي مهني 💯

نقدم لكم دورة تكوينية شاملة في الإسعافات الأولية والإنقاذ، تهدف إلى تمكين المشاركين من اكتساب المهارات الأساسية للتدخل السريع والفعال في الحالات الطارئة، سواء في الحياة اليومية أو داخل المؤسسات المهنية.

يرتكز البرنامج على الجانب التطبيقي بشكل كبير، من خلال تعلم كيفية التعامل مع الحوادث، فقدان الوعي، الاختناق، النزيف، الحروق، الكسور، التشنجات، توقف التنفس وتوقف القلب، مع التدريب على تقنيات الإنعاش القلبي الرئوي واستعمال المعدات الأساسية للإسعاف.

كما يشمل التكوين قواعد السلامة، تقييم الحالة قبل التدخل، حماية المصاب، طلب المساعدة بطريقة صحيحة، وتنظيم التدخل إلى حين وصول الفرق المختصة.

وفي نهاية الدورة، يحصل المشاركون على شهادة في الإسعافات الأولية من المنظمة الوطنية للإغاثة والإنقاذ، بالإضافة إلى بطاقة منقذ صالحة لمدة سنتين.

مدة التكوين حسب البرنامج المعتمد، مع حصص نظرية وتطبيقية مكثفة.`,
      },
      en: {
        title: "Professional First Aid Training",
        body: `Professional First Aid Training – Practical and Certifying Program 💯

We offer a complete training program in first aid and emergency response, designed to help participants acquire the essential intervention skills needed in emergency situations, both in daily life and in professional settings.

The program is strongly practice-based. It covers the management of accidents, fainting, choking, bleeding, burns, fractures, seizures, respiratory arrest and cardiac arrest, with an introduction to cardiopulmonary resuscitation techniques and the use of basic first aid equipment.

The training also covers safety rules, assessing the situation before intervening, protecting the victim, alerting emergency services and organizing the actions to perform while waiting for specialized teams to arrive.

At the end of the training, participants receive a first aid certification issued by the National Relief and Rescue Organization, as well as a first aider card valid for two years.

Training duration: according to the chosen program, with intensive theoretical and practical sessions.`,
      },
      es: {
        title: "Formación Profesional en Primeros Auxilios",
        body: `Formación Profesional en Primeros Auxilios – Programa Práctico y Certificante 💯

Ofrecemos una formación completa en socorrismo y primeros auxilios, diseñada para que los participantes adquieran los gestos esenciales de intervención en situaciones de emergencia, tanto en la vida diaria como en un entorno profesional.

El programa está fuertemente orientado a la práctica. Incluye el aprendizaje de la atención de accidentes, malestares, atragantamiento, hemorragias, quemaduras, fracturas, convulsiones, paro respiratorio y paro cardíaco, con una iniciación a las técnicas de reanimación cardiopulmonar y al uso del material básico de primeros auxilios.

La formación también aborda las reglas de seguridad, la evaluación de la situación antes de intervenir, la protección de la víctima, la alerta a los servicios de emergencia y la organización de los gestos a realizar mientras llegan los equipos especializados.

Al finalizar la formación, los participantes reciben una certificación en primeros auxilios emitida por la Organización Nacional de Socorro y Salvamento, así como una tarjeta de socorrista válida durante dos años.

Duración de la formación: según el programa elegido, con sesiones teóricas y prácticas intensivas.`,
      },
      de: {
        title: "Professionelle Erste-Hilfe-Ausbildung",
        body: `Professionelle Erste-Hilfe-Ausbildung – Praxisorientiertes und zertifizierendes Programm 💯

Wir bieten eine vollständige Ausbildung in Erster Hilfe und Rettungsmaßnahmen an, die den Teilnehmenden die wesentlichen Handgriffe für den Einsatz in Notfallsituationen vermittelt, sowohl im Alltag als auch im beruflichen Umfeld.

Das Programm ist stark praxisorientiert. Es umfasst den Umgang mit Unfällen, Unwohlsein, Erstickungsgefahr, Blutungen, Verbrennungen, Brüchen, Krampfanfällen, Atemstillstand und Herzstillstand, mit einer Einführung in die Herz-Lungen-Wiederbelebung und die Nutzung grundlegender Erste-Hilfe-Ausrüstung.

Die Ausbildung behandelt außerdem Sicherheitsregeln, die Einschätzung der Situation vor dem Eingreifen, den Schutz der betroffenen Person, das Alarmieren der Rettungsdienste und die Organisation der Maßnahmen bis zum Eintreffen der spezialisierten Teams.

Am Ende der Ausbildung erhalten die Teilnehmenden eine Erste-Hilfe-Zertifizierung der Nationalen Organisation für Hilfe und Rettung sowie eine zwei Jahre gültige Ersthelferkarte.

Dauer der Ausbildung: je nach gewähltem Programm, mit intensiven theoretischen und praktischen Einheiten.`,
      },
      tr: {
        title: "Profesyonel İlk Yardım Eğitimi",
        body: `Profesyonel İlk Yardım Eğitimi – Uygulamalı ve Sertifikalı Program 💯

Katılımcıların hem günlük yaşamda hem de profesyonel ortamlarda acil durumlara müdahale için gerekli temel becerileri kazanmasını sağlayan kapsamlı bir ilk yardım ve kurtarma eğitimi sunuyoruz.

Program büyük ölçüde uygulamaya dayanır. Kazalar, bayılma, boğulma, kanama, yanık, kırık, kasılma, solunum durması ve kalp durması gibi durumlarda müdahaleyi; kardiyopulmoner resüsitasyon tekniklerine giriş ve temel ilk yardım ekipmanının kullanımını kapsar.

Eğitim ayrıca güvenlik kurallarını, müdahale öncesi durum değerlendirmesini, yaralının korunmasını, yardım çağrısının doğru şekilde yapılmasını ve uzman ekipler gelene kadar uygulanacak adımların düzenlenmesini içerir.

Eğitimin sonunda katılımcılar Ulusal Yardım ve Kurtarma Organizasyonu tarafından verilen ilk yardım sertifikası ve iki yıl geçerli ilk yardımcı kartı alırlar.

Eğitim süresi: Seçilen programa göre, yoğun teorik ve uygulamalı seanslarla.`,
      },
    },
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
    detailContent: {
      fr: {
        title: "Formation en Assistance et Soins aux Personnes Âgées",
        body: `Formation en Assistance et Soins aux Personnes Âgées – Programme Pratique et Professionnel 💯

Nous vous proposons une formation complète et appliquée en prise en charge des personnes âgées, conçue pour développer les compétences essentielles et les techniques professionnelles nécessaires à un accompagnement humain, sécurisé et de qualité.

Le programme comprend les méthodes de soins quotidiens, les techniques d’accompagnement et de soutien psychologique, les règles d’hygiène et de sécurité, les gestes de premiers secours ainsi que les bonnes pratiques de communication et de gestion des situations particulières liées au troisième âge.

Durée de la formation : 1 mois, à raison d’une séance par semaine, le samedi ou le dimanche selon votre disponibilité.

À la fin de la formation, les participants reçoivent :
• Un diplôme professionnel international reconnu par l’Université Britannique
• Une certification en premiers secours délivrée par l’Organisation Nationale de Secours et de Sauvetage
• Une carte de secouriste valable pendant deux ans`,
      },
      ar: {
        title: "دورة رعاية المسنين",
        body: `دورة رعاية المسنين – تكوين تطبيقي شامل 💯

نقدم لكم دورة احترافية متكاملة في رعاية المسنين، تجمع بين الجانب النظري والتطبيقي، وتهدف إلى اكتساب المهارات الأساسية والتقنيات الحديثة اللازمة للتعامل المهني والإنساني مع كبار السن.

يشمل البرنامج التكويني أساليب العناية اليومية بالمسنين، تقنيات المرافقة والدعم النفسي، قواعد السلامة الصحية، والإسعافات الأولية، إلى جانب مهارات التواصل والتعامل مع الحالات الخاصة باحترافية عالية.

مدة الدورة شهر كامل، بمعدل حصة واحدة كل أسبوع، وذلك أيام السبت أو الأحد حسب الاختيار.

وفي نهاية التكوين، يحصل المشاركون على:
• دبلوم دولي مهني معترف به من الجامعة البريطانية
• شهادة في الإسعافات الأولية من المنظمة الوطنية للإغاثة والإنقاذ
• بطاقة منقذ صالحة لمدة سنتين`,
      },
      en: {
        title: "Training in Assistance and Care for Elderly People",
        body: `Training in Assistance and Care for Elderly People – Practical and Professional Program 💯

We offer a complete, applied training program in elderly care, designed to develop the essential skills and professional techniques needed to provide humane, safe and high-quality support.

The program includes daily care methods, support and psychological assistance techniques, hygiene and safety rules, first aid gestures, as well as good communication practices and management of specific situations related to older adults.

Training duration: 1 month, with one session per week, on Saturday or Sunday depending on your availability.

At the end of the training, participants receive:
• An international professional diploma recognized by the British University
• A first aid certification issued by the National Relief and Rescue Organization
• A first aider card valid for two years`,
      },
      es: {
        title: "Formación en Asistencia y Cuidados a Personas Mayores",
        body: `Formación en Asistencia y Cuidados a Personas Mayores – Programa Práctico y Profesional 💯

Ofrecemos una formación completa y aplicada en el cuidado de personas mayores, diseñada para desarrollar las competencias esenciales y las técnicas profesionales necesarias para un acompañamiento humano, seguro y de calidad.

El programa incluye métodos de cuidados diarios, técnicas de acompañamiento y apoyo psicológico, normas de higiene y seguridad, gestos de primeros auxilios, así como buenas prácticas de comunicación y gestión de situaciones particulares relacionadas con la tercera edad.

Duración de la formación: 1 mes, con una sesión por semana, el sábado o el domingo según su disponibilidad.

Al finalizar la formación, los participantes reciben:
• Un diploma profesional internacional reconocido por la Universidad Británica
• Una certificación en primeros auxilios emitida por la Organización Nacional de Socorro y Salvamento
• Una tarjeta de socorrista válida durante dos años`,
      },
      de: {
        title: "Ausbildung in Assistenz und Pflege älterer Menschen",
        body: `Ausbildung in Assistenz und Pflege älterer Menschen – Praxisorientiertes und professionelles Programm 💯

Wir bieten eine vollständige und anwendungsorientierte Ausbildung in der Betreuung älterer Menschen an, die darauf ausgerichtet ist, wesentliche Kompetenzen und professionelle Techniken für eine menschliche, sichere und hochwertige Begleitung zu entwickeln.

Das Programm umfasst Methoden der täglichen Pflege, Begleitungs- und psychologische Unterstützungstechniken, Hygiene- und Sicherheitsregeln, Erste-Hilfe-Maßnahmen sowie gute Kommunikationspraktiken und den professionellen Umgang mit besonderen Situationen im höheren Alter.

Dauer der Ausbildung: 1 Monat, mit einer Sitzung pro Woche, samstags oder sonntags je nach Verfügbarkeit.

Am Ende der Ausbildung erhalten die Teilnehmenden:
• Ein international anerkanntes Berufsdiplom der Britischen Universität
• Eine Erste-Hilfe-Zertifizierung der Nationalen Organisation für Hilfe und Rettung
• Eine zwei Jahre gültige Ersthelferkarte`,
      },
      tr: {
        title: "Yaşlılara Destek ve Bakım Eğitimi",
        body: `Yaşlılara Destek ve Bakım Eğitimi – Uygulamalı ve Profesyonel Program 💯

Yaşlı bireylerin bakımına yönelik, insani, güvenli ve kaliteli bir destek sunmak için gerekli temel becerileri ve profesyonel teknikleri geliştirmeyi amaçlayan kapsamlı ve uygulamalı bir eğitim sunuyoruz.

Program; günlük bakım yöntemlerini, refakat ve psikolojik destek tekniklerini, hijyen ve güvenlik kurallarını, ilk yardım uygulamalarını, iletişim becerilerini ve yaşlılıkla ilgili özel durumların profesyonel şekilde yönetilmesini kapsar.

Eğitim süresi: Müsaitliğinize göre cumartesi veya pazar günü, haftada bir seans olmak üzere 1 ay.

Eğitimin sonunda katılımcılar şunları alırlar:
• İngiliz Üniversitesi tarafından tanınan uluslararası profesyonel diploma
• Ulusal Yardım ve Kurtarma Organizasyonu tarafından verilen ilk yardım sertifikası
• İki yıl geçerli ilk yardımcı kartı`,
      },
    },
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
    detailContent: {
      fr: {
        title: "Formation en Esthétique Non Chirurgicale",
        body: `Formation en Esthétique Non Chirurgicale – Programme Professionnel et Pratique 💯

Nous vous proposons une formation spécialisée en esthétique non chirurgicale, destinée aux personnes souhaitant acquérir des compétences pratiques et des techniques modernes dans le domaine de la beauté, dans un cadre professionnel, sécurisé et structuré.

Le programme comprend les bases de la peau, les règles d’hygiène et de stérilisation, la préparation de l’espace de travail, l’accueil de la cliente, l’analyse du besoin, le choix du protocole adapté ainsi que le respect des règles de sécurité professionnelle pendant la pratique.

La formation inclut également des applications pratiques autour des techniques d’esthétique non chirurgicale, avec une attention particulière portée à l’harmonie du visage, à la compréhension des zones de travail, à la manipulation correcte des outils et à la qualité du résultat final.

Durant la formation, les participants apprennent aussi les erreurs à éviter, l’organisation complète d’une séance professionnelle, la relation avec la cliente ainsi que les bonnes pratiques pour développer une activité sérieuse et crédible dans le domaine de l’esthétique.

À l’issue de la formation, les participants reçoivent un diplôme professionnel accrédité, avec possibilité d’obtenir une certification complémentaire selon le programme choisi.

Durée de la formation : selon le programme sélectionné, avec des séances théoriques et pratiques.`,
      },
      ar: {
        title: "دورة التجميل غير الجراحي",
        body: `دورة التجميل غير الجراحي – تكوين احترافي تطبيقي 💯

نقدم لكم دورة احترافية متخصصة في مجال التجميل غير الجراحي، موجهة للراغبين في اكتساب مهارات عملية وتقنيات حديثة في العناية الجمالية، ضمن إطار مهني آمن ومنظم.

يشمل البرنامج التعرف على أساسيات البشرة، قواعد النظافة والتعقيم، تحضير مكان العمل، استقبال الزبونة، دراسة الحالة، اختيار البروتوكول المناسب، واحترام شروط السلامة المهنية أثناء التطبيق.

كما يتضمن التكوين تطبيقات عملية على تقنيات التجميل غير الجراحي، مع التركيز على الفهم الصحيح للوجه، التناسق الجمالي، طرق التعامل مع الأدوات، وكيفية تقديم خدمة احترافية تراعي راحة الزبونة وجودة النتيجة.

ويتم خلال الدورة شرح أهم الأخطاء التي يجب تجنبها، وطريقة تنظيم جلسة العمل من البداية إلى النهاية، إضافة إلى نصائح مهنية لبناء الثقة مع الزبائن وتطوير النشاط في مجال التجميل.

وفي نهاية التكوين، يحصل المشاركون على دبلوم مهني معتمد، مع إمكانية الحصول على شهادة إضافية حسب البرنامج المعتمد.

مدة التكوين حسب البرنامج المختار، مع حصص نظرية وتطبيقية.`,
      },
      en: {
        title: "Non-Surgical Aesthetics Training",
        body: `Non-Surgical Aesthetics Training – Professional and Practical Program 💯

We offer specialized training in non-surgical aesthetics for people who want to acquire practical skills and modern techniques in the beauty field, within a professional, safe and structured framework.

The program includes skin fundamentals, hygiene and sterilization rules, preparation of the workspace, client reception, needs analysis, selection of the appropriate protocol and respect for professional safety rules during practice.

The training also includes practical applications around non-surgical aesthetic techniques, with particular attention to facial harmony, understanding work areas, correct handling of tools and the quality of the final result.

During the training, participants also learn the mistakes to avoid, the complete organization of a professional session, the relationship with the client and the best practices for developing a serious and credible activity in the aesthetics field.

At the end of the training, participants receive an accredited professional diploma, with the possibility of obtaining an additional certification depending on the chosen program.

Training duration: according to the selected program, with theoretical and practical sessions.`,
      },
      es: {
        title: "Formación en Estética No Quirúrgica",
        body: `Formación en Estética No Quirúrgica – Programa Profesional y Práctico 💯

Ofrecemos una formación especializada en estética no quirúrgica, destinada a personas que desean adquirir competencias prácticas y técnicas modernas en el ámbito de la belleza, dentro de un marco profesional, seguro y estructurado.

El programa incluye las bases de la piel, las normas de higiene y esterilización, la preparación del espacio de trabajo, la acogida de la clienta, el análisis de la necesidad, la elección del protocolo adecuado y el respeto de las normas de seguridad profesional durante la práctica.

La formación también incluye aplicaciones prácticas en técnicas de estética no quirúrgica, con especial atención a la armonía del rostro, la comprensión de las zonas de trabajo, la manipulación correcta de las herramientas y la calidad del resultado final.

Durante la formación, los participantes también aprenden los errores que deben evitarse, la organización completa de una sesión profesional, la relación con la clienta y las buenas prácticas para desarrollar una actividad seria y creíble en el ámbito de la estética.

Al finalizar la formación, los participantes reciben un diploma profesional acreditado, con posibilidad de obtener una certificación complementaria según el programa elegido.

Duración de la formación: según el programa seleccionado, con sesiones teóricas y prácticas.`,
      },
      de: {
        title: "Ausbildung in nicht-chirurgischer Ästhetik",
        body: `Ausbildung in nicht-chirurgischer Ästhetik – Professionelles und praxisorientiertes Programm 💯

Wir bieten eine spezialisierte Ausbildung in nicht-chirurgischer Ästhetik für Personen an, die praktische Kompetenzen und moderne Techniken im Beauty-Bereich erwerben möchten, in einem professionellen, sicheren und strukturierten Rahmen.

Das Programm umfasst Grundlagen der Haut, Hygiene- und Sterilisationsregeln, Vorbereitung des Arbeitsbereichs, Empfang der Kundin, Bedarfsanalyse, Auswahl des geeigneten Protokolls sowie die Einhaltung professioneller Sicherheitsregeln während der Anwendung.

Die Ausbildung beinhaltet außerdem praktische Anwendungen rund um nicht-chirurgische ästhetische Techniken, mit besonderem Fokus auf Gesichtsharmonie, Verständnis der Arbeitsbereiche, korrekte Handhabung der Werkzeuge und Qualität des Endergebnisses.

Während der Ausbildung lernen die Teilnehmenden auch Fehler zu vermeiden, eine professionelle Sitzung vollständig zu organisieren, die Beziehung zur Kundin zu führen und bewährte Praktiken anzuwenden, um eine seriöse und glaubwürdige Tätigkeit im Ästhetikbereich aufzubauen.

Am Ende der Ausbildung erhalten die Teilnehmenden ein akkreditiertes Berufsdiplom, mit der Möglichkeit, je nach gewähltem Programm eine zusätzliche Zertifizierung zu erhalten.

Dauer der Ausbildung: je nach ausgewähltem Programm, mit theoretischen und praktischen Einheiten.`,
      },
      tr: {
        title: "Cerrahi Olmayan Estetik Eğitimi",
        body: `Cerrahi Olmayan Estetik Eğitimi – Profesyonel ve Uygulamalı Program 💯

Güzellik alanında pratik beceriler ve modern teknikler kazanmak isteyen kişilere yönelik, profesyonel, güvenli ve yapılandırılmış bir çerçevede cerrahi olmayan estetik alanında uzmanlaşmış bir eğitim sunuyoruz.

Program; cilt temellerini, hijyen ve sterilizasyon kurallarını, çalışma alanının hazırlanmasını, müşterinin karşılanmasını, ihtiyacın analizini, uygun protokolün seçilmesini ve uygulama sırasında profesyonel güvenlik kurallarına uyulmasını kapsar.

Eğitim ayrıca cerrahi olmayan estetik tekniklerine yönelik uygulamaları içerir; yüz uyumu, çalışma bölgelerinin doğru anlaşılması, araçların doğru kullanımı ve nihai sonucun kalitesi üzerinde özellikle durulur.

Eğitim boyunca katılımcılar kaçınılması gereken hataları, profesyonel bir seansın baştan sona organizasyonunu, müşteriyle ilişkiyi ve estetik alanında ciddi ve güvenilir bir faaliyet geliştirmek için iyi uygulamaları öğrenirler.

Eğitimin sonunda katılımcılar akredite profesyonel diploma alır; seçilen programa göre ek sertifika alma imkanı da bulunur.

Eğitim süresi: Seçilen programa göre, teorik ve uygulamalı seanslarla.`,
      },
    },
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
