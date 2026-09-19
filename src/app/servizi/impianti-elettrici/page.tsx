import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/impianti-elettrici`;

export const metadata: Metadata = {
  title: "Progettazione e verifica impianti elettrici | Ingegneri & Co",
  description: "Supporto tecnico per progettazione, verifica, adeguamento e integrazione di impianti elettrici civili e per attività professionali e produttive.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Progettazione e verifica impianti elettrici | Ingegneri & Co",
    description: "Progettazione e supporto tecnico per impianti elettrici, quadri, protezioni e distribuzione.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Progettazione e verifica impianti elettrici"
      intro="Affianchiamo privati, professionisti e imprese nella progettazione, verifica e riqualificazione degli impianti elettrici, coordinando esigenze funzionali, sicurezza, prestazioni e integrazione con gli altri sistemi dell'edificio."
      bullets={[
        "Progettazione e dimensionamento",
        "Quadri elettrici e distribuzione",
        "Protezione e sicurezza elettrica",
        "Adeguamenti e rifacimenti",
        "Integrazione con fotovoltaico e accumulo",
        "Verifiche tecniche e documentazione",
      ]}
      outcomes={[
        "Definire una soluzione coerente con l'uso dell'immobile",
        "Coordinare impianto elettrico e altri sistemi tecnici",
        "Ridurre criticità in fase di esecuzione e gestione",
      ]}
      context={["Nuovi impianti, ristrutturazioni, ampliamenti o modifiche che richiedono progettazione e coordinamento della distribuzione elettrica.", "Adeguamenti e integrazioni con fotovoltaico, accumulo, sistemi di controllo e altri impianti tecnici."]}
      process={[
        { title: "Rilievo delle esigenze", text: "Analizziamo destinazione d'uso, carichi, impianto esistente, vincoli tecnici e integrazioni previste." },
        { title: "Progettazione o verifica", text: "Definiamo distribuzione, quadri, protezioni e criteri tecnici coerenti con il perimetro dell'incarico." },
        { title: "Coordinamento", text: "Coordiniamo l'impianto elettrico con fotovoltaico, termico, automazione e altri sistemi tecnici coinvolti." },
      ]}
      relatedServices={[{label:"Fotovoltaico e sistemi di accumulo",href:"/servizi/fotovoltaico"},{label:"Smart Building, IoT e monitoraggio",href:"/servizi/smart-building-iot"},{label:"Impianti termici e climatizzazione",href:"/servizi/impianti-termici-climatizzazione"}]}
      faqs={[
        { question: "Intervenite anche su impianti elettrici esistenti?", answer: "Sì. L'attività può riguardare verifica tecnica, adeguamento, rifacimento o integrazione di impianti esistenti, in funzione dello stato dell'impianto e degli obiettivi dell'intervento." },
        { question: "La progettazione elettrica può essere coordinata con fotovoltaico, climatizzazione e automazione?", answer: "Sì. Il coordinamento tra distribuzione elettrica, fotovoltaico, sistemi termici e automazione consente di gestire in modo più coerente potenze, protezioni, alimentazioni e integrazioni tra i diversi sistemi." },
      ]}
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}
