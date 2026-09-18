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
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Impianti termici e climatizzazione"
      intro="Progettiamo e valutiamo sistemi di riscaldamento, raffrescamento e climatizzazione coordinandoli con i fabbisogni dell'edificio, gli altri impianti e gli obiettivi di efficienza energetica."
      bullets={["Analisi dei fabbisogni dell'edificio", "Dimensionamento degli impianti", "Pompe di calore", "Riscaldamento e raffrescamento", "Distribuzione, emissione e regolazione", "Integrazione con fotovoltaico e sistemi energetici"]}
      outcomes={["Dimensionare l'impianto in funzione delle esigenze reali", "Coordinare comfort, prestazioni e consumi", "Integrare in modo coerente impianti termici ed elettrici"]}
      context={["Nuove installazioni o riqualificazioni di sistemi di riscaldamento, raffrescamento e climatizzazione.", "Quando pompe di calore, fotovoltaico, impianto elettrico e regolazione devono essere valutati come parti di un unico sistema energetico."]}
      process={[
        { title: "Fabbisogni e vincoli", text: "Analizziamo edificio, destinazione d'uso, impianti esistenti e obiettivi prestazionali." },
        { title: "Dimensionamento", text: "Definiamo schema, potenze, distribuzione, terminali e regolazione in funzione del caso specifico." },
        { title: "Coordinamento impiantistico", text: "Verifichiamo l'integrazione con impianto elettrico, fotovoltaico, sistemi di controllo e altre discipline coinvolte." },
      ]}
      relatedServices={[{label:"Relazione Legge 10",href:"/servizi/legge-10"},{label:"Efficientamento energetico",href:"/servizi/efficientamento-energetico"},{label:"Fotovoltaico",href:"/servizi/fotovoltaico"},{label:"Impianti elettrici",href:"/servizi/impianti-elettrici"}]}
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}

