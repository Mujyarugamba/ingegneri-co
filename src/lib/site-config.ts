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
    services: [
      "Pratiche edilizie",
      "Legge 10",
      "Efficientamento energetico",
      "Fotovoltaico",
      "Diagnosi energetiche",
      "Impianti",
      "Direzione lavori e supporto tecnico",
    ],
  },
  {
    label: "Digitalizzazione, Automazione & AI",
    href: "/servizi/digitalizzazione-automazione-ai",
    services: [
      "Automazione dei processi",
      "Transizione 5.0",
      "Servizi digitali per imprese",
      "Portali e applicazioni web",
      "Integrazione software e dati",
      "Intelligenza artificiale per PMI",
      "Analisi documentale e assistenti AI",
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
