export const siteConfig = {
  name: "Ingegneri & Co",
  tagline: "Engineering • Energy • Innovation",
  description:
    "Rete tecnica multidisciplinare di ingegneri, architetti e geometri per edilizia, energia, impianti, automazione e innovazione tecnologica.",
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
  { label: "Servizi", href: "/#servizi" },
  { label: "Aree di competenza", href: "/#competenze" },
  { label: "Progetti", href: "/progetti" },
  { label: "Approfondimenti", href: "/approfondimenti" },
  { label: "Contatti", href: "/#contatti" },
] as const;

export const footerAree = [
  { label: "Civile, Ambientale e Architettonica", href: "/#competenze" },
  { label: "Industriale", href: "/#competenze" },
  { label: "Dell'Informazione", href: "/#competenze" },
] as const;

export const footerServizi = [
  { label: "Pratiche edilizie", href: "/#servizi" },
  { label: "Efficientamento energetico", href: "/#servizi" },
  { label: "Fotovoltaico", href: "/#servizi" },
  { label: "Diagnosi energetiche", href: "/#servizi" },
  { label: "Transizione 5.0", href: "/#servizi" },
  { label: "Automazione e Smart Building", href: "/#servizi" },
] as const;

export const footerLegal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
] as const;
