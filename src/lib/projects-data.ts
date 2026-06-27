export type ProjectIcon = "platform" | "portal" | "innovation";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  cta: {
    label: string;
    href?: string;
    comingSoon?: boolean;
  };
  icon: ProjectIcon;
};

export const projectsIntro =
  "Ogni progetto rappresenta un'opportunità per integrare competenze di ingegneria, energia, automazione, sviluppo software e innovazione tecnologica, offrendo soluzioni concrete per imprese e professionisti.";

export const projects: Project[] = [
  {
    id: "inquotus",
    title: "Inquotus",
    subtitle: "Piattaforma digitale per i lavori in quota",
    description:
      "Progetto dedicato alla digitalizzazione dei lavori in quota, sviluppato per mettere in contatto committenti, imprese e professionisti attraverso una piattaforma moderna, sicura e scalabile.",
    skills: [
      "Analisi e progettazione",
      "Architettura software",
      "UX/UI",
      "Sviluppo web",
      "SEO",
      "Cloud",
      "Automazione",
      "Intelligenza Artificiale",
    ],
    cta: { label: "Scopri il progetto", href: "#" },
    icon: "platform",
  },
  {
    id: "consorzio-isec",
    title: "Consorzio ISEC",
    subtitle: "Portale istituzionale",
    description:
      "Sviluppo, evoluzione e manutenzione del portale istituzionale dedicato al settore edilizio e della sicurezza, con particolare attenzione all'organizzazione dei contenuti e alla gestione dei servizi.",
    skills: [
      "Sviluppo web",
      "Gestione contenuti",
      "SEO",
      "Assistenza tecnica",
    ],
    cta: { label: "Scopri il progetto", href: "#" },
    icon: "portal",
  },
  {
    id: "nuovi-progetti",
    title: "Nuovi progetti",
    subtitle: "Ricerca e innovazione",
    description:
      "Ingegneri & Co sviluppa costantemente nuovi progetti nei settori dell'ingegneria, dell'energia, dell'automazione, dell'intelligenza artificiale e delle piattaforme digitali.",
    skills: [],
    cta: { label: "Prossimamente", comingSoon: true },
    icon: "innovation",
  },
];
