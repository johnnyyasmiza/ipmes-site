export type SpaceType =
  | "training-room"
  | "yoga-room"
  | "office"
  | "kitchen"
  | "therapy-podcast"
  | "non-surgical-room"
  | "guided-tour";

export type SpaceVideoSources = {
  desktop: string;
  mobile?: string;
  fallback?: string;
};

export type Space = {
  type: SpaceType;
  slug: string;
  title: string;
  category: string;
  filter: string;
  capacity: string;
  price: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  equipment: string[];
  benefits: string[];
  image: string;
  poster: string;
  imageLabel: string;
  video: SpaceVideoSources;
  ctaLabel: string;
  allowSoundOnClick?: boolean;
};

export const spaces: Space[] = [
  {
    type: "training-room",
    slug: "salle-formation-equipee",
    title: "Salle de formation équipée",
    category: "Formation, conférence et ateliers",
    filter: "Salle de formation équipée",
    capacity: "Formation, conférence et ateliers",
    price: "Sur demande",
    description:
      "Un espace modulable et professionnel pensé pour accueillir formations, conférences, ateliers pratiques et séances pédagogiques dans les meilleures conditions.",
    detailedDescription:
      "La salle de formation IPMES offre un cadre sérieux, confortable et entièrement équipé pour organiser des formations professionnelles, des conférences, des réunions pédagogiques ou des ateliers pratiques. Son aménagement modulable permet d'adapter l'espace selon le format de l'événement : présentation, cours théorique, démonstration, travail en groupe ou session interactive.",
    tags: ["Formation", "Conférence", "Ateliers", "Pédagogie", "Datashow", "Tableau interactif"],
    equipment: [
      "Datashow / projecteur",
      "Tableau interactif",
      "Tableau classique",
      "Ordinateur disponible",
      "Climatisation",
      "Connexion internet haut débit",
      "Chaises et tables modulables",
      "Configuration formation ou conférence",
      "Éclairage adapté",
      "Support pédagogique possible",
    ],
    benefits: [
      "Salle modulable selon le besoin",
      "Idéale pour formation professionnelle",
      "Convient aux conférences et ateliers",
      "Environnement calme et structuré",
      "Image professionnelle pour les intervenants",
    ],
    image: "/images/ipmes/spaces/ipmes-gallery-021-large.webp",
    poster: "/images/posters/spaces/salle-formation.jpg",
    imageLabel: "Salle formation",
    video: {
      desktop: "/videos/salle-formation.mp4",
      mobile: "/videos/optimized/salle-formation-mobile.mp4",
      fallback: "/videos/salle-formation.mp4",
    },
    ctaLabel: "Réserver la salle de formation",
  },
  {
    type: "yoga-room",
    slug: "salle-yoga",
    title: "Salle de yoga",
    category: "Bien-être, relaxation et pratiques douces",
    filter: "Salle de yoga",
    capacity: "Bien-être, relaxation et pratiques douces",
    price: "Sur demande",
    description:
      "Une salle calme de 50 m² dédiée au yoga, à la relaxation, à la respiration et aux disciplines de bien-être.",
    detailedDescription:
      "La salle de yoga IPMES est un espace de 50 m² conçu pour offrir une atmosphère apaisante, lumineuse et confortable. Elle convient parfaitement aux séances de yoga, relaxation, respiration, méditation, Reiki, pratiques corporelles douces ou ateliers bien-être. Le sol dédié et l'ambiance sonore permettent de créer une expérience immersive, professionnelle et sereine.",
    tags: ["Yoga", "Relaxation", "Reiki", "Bien-être", "Respiration", "Méditation"],
    equipment: [
      "Surface de 50 m²",
      "Sol adapté aux pratiques douces",
      "Sonorisation disponible",
      "Ambiance calme et lumineuse",
      "Climatisation",
      "Espace modulable",
      "Possibilité d'accueil en petit groupe",
      "Éclairage doux",
      "Cadre propice à la relaxation",
    ],
    benefits: [
      "Idéal pour yoga et bien-être",
      "Atmosphère calme et professionnelle",
      "Espace confortable pour les participants",
      "Adapté aux ateliers de relaxation",
      "Salle prête à l'usage",
    ],
    image: "/images/ipmes/yoga/ipmes-gallery-029-large.webp",
    poster: "/images/posters/spaces/salle-yoga.jpg",
    imageLabel: "Salle yoga",
    video: {
      desktop: "/videos/salle-yoga.mp4",
      mobile: "/videos/optimized/salle-yoga-mobile.mp4",
      fallback: "/videos/salle-yoga.mp4",
    },
    ctaLabel: "Réserver la salle de yoga",
  },
  {
    type: "office",
    slug: "bureau-accueil",
    title: "Bureau / accueil",
    category: "Bureau privé, secrétariat et rendez-vous",
    filter: "Bureau / accueil",
    capacity: "Bureau privé, secrétariat et rendez-vous",
    price: "Sur demande",
    description:
      "Un bureau professionnel équipé avec accueil, secrétariat, confort et services pratiques pour recevoir vos clients dans un cadre sérieux.",
    detailedDescription:
      "Le bureau IPMES est un espace professionnel conçu pour les rendez-vous, consultations, entretiens, réunions privées ou besoins administratifs. Il comprend un bureau équipé, un espace d'accueil, ainsi qu'un service de secrétariat avec secrétaire à disposition selon les besoins. L'espace offre un cadre confortable, confidentiel et fonctionnel pour travailler ou recevoir dans de bonnes conditions.",
    tags: ["Bureau privé", "Secrétariat", "Accueil", "Rendez-vous", "Internet haut débit", "Confort"],
    equipment: [
      "Bureau équipé",
      "Secrétariat disponible",
      "Réponse téléphonique possible",
      "Accueil client",
      "Machine à café",
      "Réfrigérateur",
      "Micro-ondes",
      "Toilettes privatives",
      "Connexion internet haut débit",
      "Climatisation",
      "Espace confidentiel",
      "Mobilier professionnel",
    ],
    benefits: [
      "Idéal pour rendez-vous professionnels",
      "Image sérieuse pour recevoir les clients",
      "Secrétariat possible",
      "Confort complet sur place",
      "Bureau prêt à l'emploi",
      "Convient aux consultations et entretiens",
    ],
    image: "/images/bureau-equipe.jpg",
    poster: "/images/posters/spaces/bureau-accueil.jpg",
    imageLabel: "Bureau accueil",
    video: {
      desktop: "/videos/bureau.mp4",
      mobile: "/videos/optimized/bureau-mobile.mp4",
      fallback: "/videos/bureau.mp4",
    },
    ctaLabel: "Réserver le bureau",
  },
  {
    type: "kitchen",
    slug: "cuisine-equipee",
    title: "Cuisine équipée",
    category: "Ateliers culinaires, formation et démonstration",
    filter: "Cuisine équipée",
    capacity: "Ateliers culinaires, formation et démonstration",
    price: "Sur demande",
    description:
      "Une cuisine équipée pour les formations pratiques, ateliers culinaires, démonstrations et séances pédagogiques autour de la cuisine.",
    detailedDescription:
      "La cuisine équipée IPMES est pensée pour accueillir des ateliers culinaires, formations pratiques, démonstrations, séances pédagogiques ou activités autour de la nutrition et de la cuisine. L'espace permet aux formateurs et participants de travailler dans un cadre organisé, propre et fonctionnel.",
    tags: ["Cuisine", "Atelier", "Formation pratique", "Démonstration", "Nutrition", "Pédagogie"],
    equipment: [
      "Plan de travail",
      "Plaque de cuisson",
      "Équipement de préparation",
      "Espace démonstration",
      "Rangements",
      "Réfrigérateur selon disponibilité",
      "Micro-ondes",
      "Matériel pédagogique possible",
      "Zone pratique pour ateliers",
    ],
    benefits: [
      "Adaptée aux formations cuisine",
      "Idéale pour ateliers pratiques",
      "Cadre propre et organisé",
      "Permet les démonstrations en groupe",
      "Espace fonctionnel pour formateurs",
    ],
    image: "/images/cuisine.jpg",
    poster: "/images/posters/spaces/cuisine.jpg",
    imageLabel: "Cuisine équipée",
    video: {
      desktop: "/videos/cuisine.mp4",
      mobile: "/videos/optimized/cuisine-mobile.mp4",
      fallback: "/videos/cuisine.mp4",
    },
    ctaLabel: "Réserver la cuisine",
  },
  {
    type: "therapy-podcast",
    slug: "salle-therapie-podcast",
    title: "Salle thérapie / podcast",
    category: "Thérapie, coaching, podcast et contenu audio",
    filter: "Salle thérapie / podcast",
    capacity: "Thérapie, coaching, podcast et contenu audio",
    price: "Sur demande",
    description:
      "Un espace calme et confidentiel pour les séances de thérapie, coaching, accompagnement, podcast et enregistrement audio.",
    detailedDescription:
      "La salle thérapie / podcast IPMES est un espace intime, calme et professionnel, adapté aux séances d'accompagnement, thérapie, coaching, relaxation guidée, entretien individuel ou enregistrement de podcast. L'atmosphère est pensée pour favoriser l'écoute, la concentration et la confidentialité.",
    tags: ["Thérapie", "Podcast", "Coaching", "Confidentialité", "Audio", "Accompagnement"],
    equipment: [
      "Espace calme",
      "Mobilier confortable",
      "Configuration entretien ou podcast",
      "Connexion internet haut débit",
      "Ambiance confidentielle",
      "Possibilité d'installation micro selon besoin",
      "Éclairage doux",
      "Climatisation",
    ],
    benefits: [
      "Idéal pour thérapie et coaching",
      "Convient aux podcasts et contenus audio",
      "Cadre confidentiel",
      "Ambiance professionnelle et rassurante",
      "Espace prêt pour entretien individuel",
    ],
    image: "/images/ipmes/hero/ipmes-gallery-076-large.webp",
    poster: "/images/posters/spaces/salle-therapie-podcast.jpg",
    imageLabel: "Salle thérapie / podcast",
    video: {
      desktop: "/videos/salletherapiepodcast.mp4",
      mobile: "/videos/optimized/salletherapiepodcast-mobile.mp4",
      fallback: "/videos/salletherapiepodcast.mp4",
    },
    ctaLabel: "Réserver la salle thérapie / podcast",
  },
  {
    type: "non-surgical-room",
    slug: "salle-esthetique-non-chirurgicale",
    title: "Salle esthétique non chirurgicale",
    category: "Esthétique, pratique encadrée et formation",
    filter: "Salle esthétique non chirurgicale",
    capacity: "Esthétique, pratique encadrée et formation",
    price: "Sur demande",
    description:
      "Un espace dédié aux formations et pratiques esthétiques non chirurgicales dans un cadre propre, professionnel et encadré.",
    detailedDescription:
      "La salle esthétique non chirurgicale IPMES est conçue pour les formations, démonstrations et pratiques encadrées dans le domaine de l'esthétique. L'espace offre un environnement propre, organisé et professionnel, adapté aux séances pédagogiques, aux démonstrations techniques et aux ateliers pratiques.",
    tags: ["Esthétique", "Non chirurgical", "Formation", "Démonstration", "Pratique", "Hygiène"],
    equipment: [
      "Mobilier adapté",
      "Espace propre et organisé",
      "Zone de démonstration",
      "Éclairage adapté",
      "Climatisation",
      "Matériel pédagogique possible",
      "Configuration formation pratique",
      "Espace formateur / apprenants",
    ],
    benefits: [
      "Adaptée aux formations esthétiques",
      "Cadre sérieux et professionnel",
      "Idéale pour démonstrations pratiques",
      "Environnement rassurant",
      "Compatible avec ateliers encadrés",
    ],
    image: "/images/salle-esthetique.jpg",
    poster: "/images/posters/spaces/esthetique.jpg",
    imageLabel: "Salle esthétique non chirurgicale",
    video: {
      desktop: "/videos/salle-chirurgie.mp4",
      mobile: "/videos/optimized/salle-chirurgie-mobile.mp4",
      fallback: "/videos/salle-chirurgie.mp4",
    },
    ctaLabel: "Réserver la salle esthétique",
  },
  {
    type: "guided-tour",
    slug: "visite-guidee",
    title: "Visite guidée",
    category: "Découverte du centre",
    filter: "Visite guidée",
    capacity: "Découverte du centre",
    price: "Sur demande",
    description:
      "Découvrez les espaces IPMES, les salles de formation, les équipements et l'ambiance du centre.",
    detailedDescription:
      "La visite guidée permet de découvrir l'ambiance IPMES, les différentes salles disponibles et les configurations possibles avant de réserver un espace pour une formation, un atelier ou un rendez-vous professionnel.",
    tags: ["Visite", "Centre IPMES", "Ambiance"],
    equipment: ["Présentation des espaces", "Accompagnement sur place", "Conseil selon le besoin"],
    benefits: ["Découvrir le centre avant réservation", "Choisir l'espace adapté", "Préparer votre activité"],
    image: "/images/ipmes/hero/ipmes-gallery-076-large.webp",
    poster: "/images/ipmes/hero/ipmes-gallery-076-large.webp",
    imageLabel: "Visite guidée",
    video: {
      desktop: "/videos/grdvisite.mp4",
      mobile: "/videos/optimized/grdvisite-mobile.mp4",
      fallback: "/videos/grdvisite.mp4",
    },
    ctaLabel: "Réserver une visite",
  },
];
