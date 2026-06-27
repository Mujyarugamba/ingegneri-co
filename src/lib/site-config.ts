export const siteConfig = {
  name: "Ingegneri & Co",
  tagline: "Engineering • Energy • Innovation",
  description:
    "Studio di ingegneria multidisciplinare per edilizia, energia, impianti, automazione e innovazione tecnologica.",
  email: "info@ingegnerieco.it",
  phone: "339 434 0891",
  phoneHref: "tel:+393394340891",
  copyrightYear: 2026,
} as const;

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Chi siamo", href: "/#chi-siamo" },
  { label: "Servizi", href: "/#servizi" },
  { label: "Aree di competenza", href: "/#competenze" },
  { label: "Blog", href: "#" },
  { label: "Contatti", href: "/#contatti" },
] as const;

export const footerAree = [
  { label: "Civile e Ambientale", href: "/#competenze" },
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
  { label: "Privacy Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const;
