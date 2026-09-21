// Content model for Dali Bacha Boxing Club — sourced from @boxing_club_dali_bacha (Instagram)

export const CLUB = {
  name: "Dali Bacha Boxing Club",
  shortName: "DALI BACHA",
  tagline: "Plus qu'un club, une famille",
  hashtag: "#Soliman",
  slogan: "Dépasse tes limites avec nous",
  location: "Soliman, Tunisie",
  phone: "+216 54 60 31 06",
  whatsapp: "21654603106",
  instagram: "https://www.instagram.com/boxing_club_dali_bacha/",
  mapsUrl: "https://maps.app.goo.gl/DSYRcxQz83hgqk2X8",
  followers: 7395,
  posts: 213,
  following: 1976,
  category: "Gym / Physical fitness centre",
};

export const STATS = [
  { label: "Membres actifs", value: 250, suffix: "+" },
  { label: "Followers Instagram", value: 7395, suffix: "+" },
  { label: "Coachs certifiés", value: 5, suffix: "" },
  { label: "Années d'expérience", value: 10, suffix: "+" },
];

export const PROGRAMS = [
  {
    id: "boxe-anglaise",
    title: "Boxe Anglaise",
    subtitle: "Technique • Puissance • Discipline",
    description:
      "L'école classique de la boxe : jeu de jambes, garde, combinaisons de poings et stratégie de combat. Encadrement pour débutants comme pour compétiteurs.",
    icon: "gloves",
  },
  {
    id: "boxe-junior",
    title: "Boxe Junior",
    subtitle: "Dès 6 ans",
    description:
      "Un programme pensé pour les enfants : coordination, confiance en soi, respect et discipline dans un cadre sécurisé et bienveillant.",
    icon: "kid",
  },
  {
    id: "femmes",
    title: "Boxe Femmes",
    subtitle: "Hommes & Femmes bienvenus",
    description:
      "Des cours dédiés pour les femmes qui veulent se défouler, se défendre et se dépasser — dans une ambiance motivante et sans jugement.",
    icon: "female",
  },
  {
    id: "prepa-physique",
    title: "Préparation Physique",
    subtitle: "Cardio • Force • Explosivité",
    description:
      "Circuits inspirés de la boxe pour brûler un maximum de calories, gagner en endurance et sculpter le corps comme un vrai combattant.",
    icon: "fire",
  },
  {
    id: "competition",
    title: "Compétition",
    subtitle: "Ring & tournois",
    description:
      "Pour les boxeurs qui veulent monter sur le ring : suivi personnalisé, sparring encadré et préparation aux galas et compétitions officielles.",
    icon: "trophy",
  },
  {
    id: "stages",
    title: "Stages & Events",
    subtitle: "En partenariat avec WarZone",
    description:
      "Stages intensifs de boxe anglaise animés par des experts, portes ouvertes et événements communautaires tout au long de l'année.",
    icon: "calendar",
  },
];

export const COACHES = [
  {
    id: "dali",
    name: "Dali Bacha",
    role: "Fondateur & Head Coach",
    bio: "Fondateur du club, Dali a construit bien plus qu'une salle de boxe : une famille. Passionné, exigeant et toujours présent pour ses athlètes.",
  },
  {
    id: "zied",
    name: "Coach Zied",
    role: "Coach Boxe Anglaise",
    bio: "Spécialiste de la boxe anglaise, Coach Zied forme aussi bien les débutants que les compétiteurs prêts à monter sur le ring.",
  },
  {
    id: "nadia",
    name: "Coach Nadia",
    role: "Coach Boxe Junior & Femmes",
    bio: "À l'écoute des plus jeunes et des athlètes féminines, Coach Nadia crée un cadre motivant, sécurisé et familial pour progresser.",
  },
];

export const SCHEDULE = [
  { day: "Lundi", classes: [{ name: "Boxe Anglaise", time: "18:00 - 19:30" }, { name: "Boxe Junior", time: "16:30 - 17:30" }] },
  { day: "Mardi", classes: [{ name: "Boxe Femmes", time: "17:00 - 18:00" }, { name: "Préparation Physique", time: "19:00 - 20:00" }] },
  { day: "Mercredi", classes: [{ name: "Boxe Anglaise", time: "18:00 - 19:30" }, { name: "Boxe Junior", time: "16:30 - 17:30" }] },
  { day: "Jeudi", classes: [{ name: "Boxe Femmes", time: "17:00 - 18:00" }, { name: "Sparring / Compétition", time: "19:30 - 21:00" }] },
  { day: "Vendredi", classes: [{ name: "Boxe Anglaise", time: "18:00 - 19:30" }] },
  { day: "Samedi", classes: [{ name: "Boxe Junior", time: "10:00 - 11:00" }, { name: "Open Gym", time: "11:00 - 13:00" }] },
];

export const TESTIMONIALS = [
  {
    name: "Sami R.",
    role: "Membre depuis 2 ans",
    quote:
      "Ici on ne vient pas juste pour s'entraîner, on vient parce qu'on nous attend. C'est vraiment une famille, pas un club.",
  },
  {
    name: "Amira K.",
    role: "Boxe Femmes",
    quote:
      "J'avais peur de commencer la boxe à 30 ans. Aujourd'hui je monte sur le ring avec confiance grâce à l'équipe de Dali.",
  },
  {
    name: "Parent d'un élève",
    role: "Boxe Junior",
    quote:
      "Mon fils a gagné en discipline et en confiance. Les coachs sont patients et exigeants au bon moment.",
  },
  {
    name: "Yassine T.",
    role: "Compétiteur",
    quote:
      "Coach Zied m'a préparé pour mon premier gala en quelques mois. Le sérieux de l'encadrement fait toute la différence.",
  },
];

export const GALLERY = [
  { id: 1, label: "Stage de Boxe Anglaise x WarZone", type: "event" },
  { id: 2, label: "Entraînement Boxe Junior", type: "training" },
  { id: 3, label: "Sparring Boxe Anglaise", type: "training" },
  { id: 4, label: "Coach Zied & athlète", type: "coach" },
  { id: 5, label: "Boxe Femmes en action", type: "training" },
  { id: 6, label: "Course matinale — Team", type: "community" },
  { id: 7, label: "Gala de boxe — montée sur ring", type: "competition" },
  { id: 8, label: "Team Dali Bacha au complet", type: "community" },
  { id: 9, label: "Jeunes champions", type: "competition" },
];

export const EVENT = {
  title: "Stage de Boxe Anglaise",
  partner: "x WarZone",
  description:
    "Un stage intensif encadré par des coachs experts pour progresser rapidement en technique, cardio et mental de combattant. Inscriptions limitées.",
  contact: ["54003106", "29498011"],
};
