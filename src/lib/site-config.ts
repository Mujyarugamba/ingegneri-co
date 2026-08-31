export const siteConfig = {
  name: "Ingegneri & Co",
  url: "https://ingegnerieco.it",
  tagline: "Engineering • Energy • Innovation",
  description:
    "Rete tecnica multidisciplinare di ingegneri, architetti e geometri per edilizia, energia, impianti, automazione, servizi digitali e intelligenza artificiale per PMI.",
  institutionalPhrase:
    "Una rete di professionisti tecnici iscritti ai rispettivi Ordini e Collegi professionali.",
  professionals: "Ingegneri • Architetti • Geometri",
  email: "info@ingegnerieco.it",
  whatsApp: "371 754 0625",
  whatsAppHref: "https://wa.me/393717540625",
  copyrightYear: 2026,
  // Aggiornare con l'URL definitivo del profilo LinkedIn
  linkedinUrl: "#",
} as const;

export const siteImages = {
  logo: "/logo.png",
  hero: "/imagine.png",
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Aree di competenza", href: "/#competenze" },
  { label: "Progetti", href: "/progetti" },
  { label: "Approfondimenti", href: "/approfondimenti" },
  { label: "Contatti", href: "/#contatti" },
] as const;

export const serviceEcosystems = [
  {
    label: "Ingegneria, Edilizia & Energia",
    href: "/servizi/ingegneria-edilizia-energia",
    description:
      "Servizi tecnici per edifici, impianti ed energia, dalla pratica edilizia alla progettazione e alla gestione dell'intervento.",
    services: [
      { label: "Pratiche edilizie", href: "/servizi/pratiche-edilizie" },
      { label: "Legge 10", href: "/servizi/legge-10" },
      { label: "Efficientamento energetico", href: "/servizi/efficientamento-energetico" },
      { label: "Fotovoltaico", href: "/servizi/fotovoltaico" },
      { label: "Diagnosi energetiche", href: "/servizi/diagnosi-energetiche" },
      { label: "Impianti elettrici", href: "/servizi/impianti-elettrici" },
      { label: "Direzione lavori e supporto tecnico", href: "/servizi/direzione-lavori" },
    ],
  },
  {
    label: "Digitalizzazione, Automazione & AI",
    href: "/servizi/digitalizzazione-automazione-ai",
    description:
      "Soluzioni per digitalizzare processi, integrare dati e sistemi, automatizzare attività e applicare l'intelligenza artificiale alle PMI.",
    services: [
      { label: "Automazione dei processi", href: "/servizi/automazione-processi" },
      { label: "Transizione 5.0", href: "/servizi/transizione-5-0" },
      { label: "Servizi digitali per imprese", href: "/servizi/servizi-digitali-pmi" },
      { label: "Portali e applicazioni web", href: "/servizi/portali-applicazioni-web" },
      { label: "Integrazione software e dati", href: "/servizi/integrazione-software-dati" },
      { label: "Intelligenza artificiale per PMI", href: "/servizi/intelligenza-artificiale-pmi" },
      { label: "Analisi documentale e assistenti AI", href: "/servizi/analisi-documentale-assistenti-ai" },
      { label: "Smart Building, IoT e monitoraggio", href: "/servizi/smart-building-iot" },
    ],
  },
] as const;

export const footerAree = [
  { label: "Civile, Ambientale e Architettonica", href: "/#competenze" },
  { label: "Industriale", href: "/#competenze" },
  { label: "Dell'Informazione", href: "/#competenze" },
] as const;

export const footerServizi = [
  { label: "Ingegneria, Edilizia & Energia", href: "/servizi/ingegneria-edilizia-energia" },
  { label: "Digitalizzazione, Automazione & AI", href: "/servizi/digitalizzazione-automazione-ai" },
] as const;

export const footerLegal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
] as const;
