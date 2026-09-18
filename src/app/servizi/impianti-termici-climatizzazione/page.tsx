import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/impianti-termici-climatizzazione`;

export const metadata: Metadata = {
  title: "Impianti termici e climatizzazione | Ingegneri & Co",
  description: "Progettazione e riqualificazione di impianti termici, climatizzazione e pompe di calore, integrate con involucro, regolazione e sistemi energetici.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Impianti termici e climatizzazione | Ingegneri & Co", description: "Progettazione di impianti termici, climatizzazione, pompe di calore e sistemi di regolazione.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Ingegneria, Edilizia & Energia" title="Impianti termici e climatizzazione" intro="Progettiamo e valutiamo sistemi di riscaldamento, raffrescamento e climatizzazione coordinandoli con i fabbisogni dell'edificio, gli altri impianti e gli obiettivi di efficienza energetica." bullets={["Analisi dei fabbisogni dell'edificio", "Dimensionamento degli impianti", "Pompe di calore", "Riscaldamento e raffrescamento", "Distribuzione, emissione e regolazione", "Integrazione con fotovoltaico e sistemi energetici"]} outcomes={["Dimensionare l'impianto in funzione delle esigenze reali", "Coordinare comfort, prestazioni e consumi", "Integrare in modo coerente impianti termici ed elettrici"]} ecosystemHref="/servizi/ingegneria-edilizia-energia" ecosystemLabel="Ingegneria, Edilizia & Energia" />;
}
