export type SpaceType =
  | "training-room"
  | "yoga-room"
  | "office"
  | "kitchen"
  | "therapy-podcast"
  | "non-surgical-room"
  | "guided-tour";

export type Space = {
  type: SpaceType;
  title: string;
  category: string;
  filter: string;
  capacity: string;
  price: string;
  description: string;
  tags: string[];
  image: string;
  imageLabel: string;
  videoUrl?: string;
  allowSoundOnClick?: boolean;
};

export const spaces: Space[] = [
  {
    type: "training-room",
    title: "Salle de formation équipée",
    category: "Formation et ateliers",
    filter: "Salle de formation équipée",
    capacity: "Formation et ateliers",
    price: "Sur demande",
    description:
      "Salle professionnelle équipée pour les formations pratiques, les ateliers et les séances pédagogiques.",
    tags: ["Formations pratiques", "Ateliers", "Pédagogie"],
    image: "/images/ipmes/training-room/ipmes-gallery-016-large.webp",
    imageLabel: "Salle formation",
    videoUrl: "/videos/salle-formation.mp4",
  },
  {
    type: "yoga-room",
    title: "Salle de yoga",
    category: "Bien-être et pratique",
    filter: "Salle de yoga",
    capacity: "Bien-être et pratique",
    price: "Sur demande",
    description:
      "Espace calme et lumineux pour les pratiques de yoga, relaxation, respiration et bien-être.",
    tags: ["Yoga", "Relaxation", "Bien-être"],
    image: "/images/ipmes/yoga/ipmes-gallery-029-large.webp",
    imageLabel: "Salle yoga",
    videoUrl: "/videos/salle-yoga.mp4",
  },
  {
    type: "office",
    title: "Bureau / accueil",
    category: "Bureau privé",
    filter: "Bureau / accueil",
    capacity: "Bureau privé",
    price: "Sur demande",
    description:
      "Bureau professionnel tout équipé, idéal pour l’accueil, l’administration et les rendez-vous.",
    tags: ["Accueil", "Administration", "Rendez-vous"],
    image: "/images/bureau-equipe.jpg",
    imageLabel: "Bureau accueil",
    videoUrl: "/videos/bureau.mp4",
  },
  {
    type: "kitchen",
    title: "Cuisine équipée",
    category: "Espace pratique",
    filter: "Cuisine équipée",
    capacity: "Espace pratique",
    price: "Sur demande",
    description:
      "Cuisine équipée pour les besoins pratiques du centre et les activités liées aux formations.",
    tags: ["Cuisine équipée", "Formations pratiques", "Ateliers culinaires"],
    image: "/images/cuisine.jpg",
    imageLabel: "Cuisine équipée",
    videoUrl: "/videos/cuisine.mp4",
  },
  {
    type: "therapy-podcast",
    title: "Salle thérapie / podcast",
    category: "Thérapie et contenu",
    filter: "Salle thérapie / podcast",
    capacity: "Thérapie et contenu",
    price: "Sur demande",
    description:
      "Salle dédiée aux séances de thérapie, aux échanges professionnels, aux podcasts et aux contenus pédagogiques.",
    tags: ["Thérapie", "Podcasts", "Contenus pédagogiques"],
    image: "/images/ipmes/hero/ipmes-gallery-076-large.webp",
    imageLabel: "Salle thérapie / podcast",
    videoUrl: "/videos/salledetherapiepodcast.mp4",
  },
  {
    type: "non-surgical-room",
    title: "Salle esthétique non chirurgicale",
    category: "Esthétique professionnelle",
    filter: "Salle esthétique non chirurgicale",
    capacity: "Esthétique professionnelle",
    price: "Sur demande",
    description:
      "Salle équipée pour les formations et démonstrations en esthétique non chirurgicale dans un cadre professionnel et sécurisé.",
    tags: ["Esthétique", "Démonstrations", "Cadre sécurisé"],
    image: "/images/salle-esthetique.jpg",
    imageLabel: "Salle esthétique non chirurgicale",
    videoUrl: "/videos/salle-chirurgie.mp4",
  },
  {
    type: "guided-tour",
    title: "Visite guidée",
    category: "Découverte du centre",
    filter: "Visite guidée",
    capacity: "Découverte du centre",
    price: "Sur demande",
    description:
      "Découvrez les espaces IPMES, les salles de formation, les équipements et l’ambiance du centre.",
    tags: ["Visite", "Centre IPMES", "Ambiance"],
    image: "/images/ipmes/hero/ipmes-gallery-076-large.webp",
    imageLabel: "Visite guidée",
    videoUrl: "/videos/visite.mp4",
    allowSoundOnClick: true,
  },
];
