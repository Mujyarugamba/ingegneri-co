import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/sicurezza-cantieri`;

export const metadata: Metadata = {
  title: "Sicurezza cantieri, CSP e CSE | Ingegneri & Co",
  description: "Coordinamento della sicurezza nei cantieri: incarichi CSP e CSE, PSC e supporto tecnico-documentale nelle fasi di progettazione ed esecuzione.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Sicurezza cantieri, CSP e CSE | Ingegneri & Co", description: "Coordinamento della sicurezza e supporto tecnico-documentale per i cantieri.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Ingegneria, Edilizia & Energia" title="Sicurezza cantieri e coordinamento CSP/CSE" intro="Svolgiamo attività di coordinamento della sicurezza nelle fasi di progettazione ed esecuzione nei casi previsti, integrando gli aspetti di sicurezza con il progetto e l'organizzazione del cantiere." bullets={["Coordinamento della Sicurezza in fase di Progettazione (CSP)", "Coordinamento della Sicurezza in fase di Esecuzione (CSE)", "Piano di Sicurezza e Coordinamento (PSC)", "Coordinamento della documentazione di sicurezza", "Sopralluoghi e attività previste dall'incarico", "Interfaccia tecnica con committente, imprese e professionisti"]} outcomes={["Integrare la sicurezza nella pianificazione del cantiere", "Coordinare gli adempimenti previsti dall'incarico", "Mantenere un riferimento tecnico nelle fasi di progettazione ed esecuzione"]} ecosystemHref="/servizi/ingegneria-edilizia-energia" ecosystemLabel="Ingegneria, Edilizia & Energia" />;
}
