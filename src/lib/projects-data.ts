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
      "Progetto dedicato alla digitalizzazione dei lavori in quota, sviluppato per mettere in contatto committenti, imprese e professionisti attraverso una piattaforma moderna, sicura e scalabile.",
    fullDescription:
      "Inquotus nasce per digitalizzare il settore dei lavori in quota, mettendo in relazione committenti, imprese specializzate e professionisti qualificati. La piattaforma integra gestione profili, richieste di intervento, documentazione tecnica e strumenti di matching tra domanda e offerta, con un'architettura pensata per scalabilità, sicurezza e usabilità.",
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
      externalNote: "Il sito si aprirà in una nuova finestra.",
    },
    icon: "platform",
  },
  {
    id: "consorzio-isec",
    title: "Consorzio ISEC",
    subtitle: "Portale istituzionale",
    description:
      "Il Consorzio ISEC riunisce imprese, artigiani e professionisti nei settori delle costruzioni, dell'efficientamento energetico, del facility management e dei lavori civili. Grazie a una struttura flessibile e qualificata, organizza squadre operative adeguate alla complessità degli interventi, garantendo qualità, affidabilità e competitività nell'esecuzione degli appalti.",
    skills: [
      "Sviluppo web",
      "Gestione contenuti",
      "SEO",
      "Assistenza tecnica",
    ],
    cta: { label: "Scopri il progetto", href: "/progetti/consorzio-isec" },
    // TODO: aggiornare visitHref con il dominio ufficiale del Consorzio ISEC
    detail: { visitLabel: "Visita il sito", visitHref: "#" },
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
