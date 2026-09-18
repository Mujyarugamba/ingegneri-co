export const siteConfig = {
  name: "Ingegneri & Co",
  url: "https://ingegnerieco.it",
  tagline: "Engineering • Energy • Innovation",
  description:
    "Rete tecnica multidisciplinare di ingegneri, architetti e geometri per edilizia, energia, impianti, automazione, servizi digitali e intelligenza artificiale per PMI.",
  institutionalPhrase:
    "Una rete multidisciplinare che integra competenze di ingegneri, architetti e geometri.",
  professionals: "Ingegneri • Architetti • Geometri",
  email: "info@ingegnerieco.it",
  whatsApp: "339 434 0891",
  whatsAppHref: "https://wa.me/393394340891",
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
  { label: "Contatti", href: "/contatti" },
] as const;

export const serviceEcosystems = [
  {
    label: "Ingegneria, Edilizia & Energia",
    href: "/servizi/ingegneria-edilizia-energia",
    description:
      "Servizi tecnici per edifici, impianti ed energia, dalla pratica edilizia alla progettazione e alla gestione dell'intervento.",
    services: [
      { label: "Pratiche edilizie", href: "/servizi/pratiche-edilizie" },
      { label: "Due diligence immobiliare", href: "/servizi/due-diligence-immobiliare" },
      { label: "Conformità urbanistica e catastale", href: "/servizi/conformita-urbanistica-catastale" },
      { label: "APE e certificazione energetica", href: "/servizi/ape-certificazione-energetica" },
      { label: "Legge 10", href: "/servizi/legge-10" },
      { label: "Efficientamento energetico", href: "/servizi/efficientamento-energetico" },
      { label: "Fotovoltaico e sistemi di accumulo", href: "/servizi/fotovoltaico" },
      { label: "Diagnosi energetiche", href: "/servizi/diagnosi-energetiche" },
      { label: "Progettazione e verifica impianti elettrici", href: "/servizi/impianti-elettrici" },
      { label: "Impianti termici e climatizzazione", href: "/servizi/impianti-termici-climatizzazione" },
      { label: "Direzione lavori e supporto tecnico", href: "/servizi/direzione-lavori" },
      { label: "Sicurezza cantieri", href: "/servizi/sicurezza-cantieri" },
      { label: "Smart Building, Building Automation e IoT", href: "/servizi/smart-building-iot" },
    ],
  },
  {
    label: "Digitalizzazione, Automazione & AI",
    href: "/servizi/digitalizzazione-automazione-ai",
    description:
      "Soluzioni per digitalizzare processi, integrare dati e sistemi, automatizzare attività e applicare l'intelligenza artificiale alle PMI.",
    services: [
      { label: "Digitalizzazione delle PMI", href: "/servizi/servizi-digitali-pmi" },
      { label: "Automazione dei processi e workflow", href: "/servizi/automazione-processi" },
      { label: "Automazione industriale e sistemi di controllo", href: "/servizi/automazione-industriale" },
      { label: "Portali e applicazioni web", href: "/servizi/portali-applicazioni-web" },
      { label: "Integrazione software, API e dati", href: "/servizi/integrazione-software-dati" },
      { label: "Intelligenza artificiale per PMI", href: "/servizi/intelligenza-artificiale-pmi" },
      { label: "Analisi documentale e assistenti AI", href: "/servizi/analisi-documentale-assistenti-ai" },
      { label: "Smart Building, Building Automation e IoT", href: "/servizi/smart-building-iot" },
      { label: "Nuovo Piano Transizione 5.0", href: "/servizi/transizione-5-0" },
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
  { label: "Policy sul luogo di lavoro", href: "/policy-lavoro" },
] as const;
