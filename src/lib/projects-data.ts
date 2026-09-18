export type ProjectIcon = "platform" | "portal" | "innovation";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  skills: string[];
  features?: string[];
  cta: {
    label: string;
    href?: string;
    comingSoon?: boolean;
  };
  detail?: {
    visitLabel: string;
    visitHref: string;
    external?: boolean;
    externalNote?: string;
  };
  icon: ProjectIcon;
};

export const projectsIntro =
  "Ogni progetto rappresenta un'opportunità per integrare competenze di ingegneria, energia, automazione, sviluppo software e innovazione tecnologica, offrendo soluzioni concrete per imprese e professionisti.";

export const portfolioPageIntro =
  "Una selezione di progetti che rappresentano il nostro approccio multidisciplinare all'ingegneria, all'energia, all'innovazione e allo sviluppo di soluzioni digitali.";

export const projects: Project[] = [
  {
    id: "inquotus",
    title: "Inquotus",
    subtitle: "Piattaforma digitale per i lavori in quota",
    description:
      "Progetto dedicato alla digitalizzazione dei lavori in quota, sviluppato per mettere in contatto committenti, imprese e professionisti attraverso una piattaforma progettata con attenzione a usabilità, sicurezza applicativa e possibilità di evoluzione.",
    fullDescription:
      "Inquotus nasce per digitalizzare il settore dei lavori in quota, mettendo in relazione committenti, imprese specializzate e professionisti. La piattaforma integra gestione profili, richieste di intervento, documentazione tecnica e strumenti di matching tra domanda e offerta, con un'architettura progettata per evolvere insieme alle esigenze del servizio e con attenzione a sicurezza e usabilità.",
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
    features: [
      "Registrazione e gestione profili per committenti, imprese e professionisti",
      "Pubblicazione e gestione delle richieste di intervento",
      "Sistema di preventivazione e comparazione delle offerte",
      "Archivio documentale e gestione certificazioni",
      "Dashboard operative e notifiche in tempo reale",
      "Ottimizzazione SEO e visibilità online della piattaforma",
    ],
    cta: { label: "Scopri il progetto", href: "/progetti/inquotus" },
    detail: {
      visitLabel: "Visita il sito",
      visitHref: "https://www.inquotus.it",
      external: true,
      externalNote: "Il sito si aprirà in una nuova scheda.",
    },
    icon: "platform",
  },
  {
    id: "consorzio-isec",
    title: "Consorzio ISEC",
    subtitle: "Portale istituzionale",
    description:
      "Progetto e sviluppo del portale istituzionale del Consorzio ISEC, pensato per presentare in modo chiaro la rete di imprese, artigiani e professionisti, i settori operativi e le competenze disponibili per appalti e interventi integrati.",
    fullDescription:
      "Il progetto ha riguardato la costruzione della presenza digitale istituzionale del Consorzio ISEC, con organizzazione dei contenuti, sviluppo del portale, impostazione SEO e supporto tecnico. L'obiettivo è rendere comprensibili struttura, ambiti di attività e capacità operative del consorzio, offrendo un punto di riferimento digitale coerente per imprese, professionisti e committenti.",
    skills: [
      "Sviluppo web",
      "Gestione contenuti",
      "SEO",
      "Assistenza tecnica",
    ],
    features: [
      "Presentazione istituzionale del consorzio e della rete professionale",
      "Organizzazione dei settori di attività e delle competenze",
      "Struttura responsive per consultazione desktop e mobile",
      "Impostazione SEO e gestione dei contenuti",
    ],
    cta: { label: "Scopri il progetto", href: "/progetti/consorzio-isec" },
    icon: "portal",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.id === slug);
}

export function getProjectDetailSlugs(): string[] {
  return projects
    .filter((project) => !project.cta.comingSoon && project.cta.href)
    .map((project) => project.id);
}

export function getProjectCardHref(project: Project): string | undefined {
  if (project.cta.comingSoon) return undefined;
  return project.cta.href;
}
