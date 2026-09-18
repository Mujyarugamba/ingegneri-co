import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/transizione-5-0`;

export const metadata: Metadata = {
  title: "Nuovo Piano Transizione 5.0 e iperammortamento | Ingegneri & Co",
  description: "Supporto tecnico per il Nuovo Piano Transizione 5.0: beni tecnologicamente avanzati, interconnessione, autoproduzione da fonti rinnovabili e documentazione tecnica per l'iperammortamento.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Nuovo Piano Transizione 5.0 e iperammortamento | Ingegneri & Co",
    description: "Supporto tecnico agli investimenti del Nuovo Piano Transizione 5.0 basato sull'iperammortamento.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ponte tra i due ecosistemi"
      title="Nuovo Piano Transizione 5.0 e iperammortamento"
      intro="Il Nuovo Piano Transizione 5.0 sostiene gli investimenti effettuati dal 1° gennaio 2026 al 30 settembre 2028 attraverso una maggiorazione fiscale del costo dei beni agevolabili. La misura riguarda beni strumentali tecnologicamente avanzati e, nei casi previsti, investimenti per l'autoproduzione di energia da fonti rinnovabili destinata all'autoconsumo."
      bullets={["Analisi tecnica preliminare dell'investimento", "Verifica dei beni tecnologicamente avanzati e dei requisiti di interconnessione", "Integrazione di sistemi e processi digitali", "Valutazione tecnica degli interventi per autoproduzione e autoconsumo", "Supporto alla documentazione tecnica prevista", "Coordinamento con gli altri professionisti coinvolti nella procedura"]}
      outcomes={["Inquadrare correttamente l'investimento rispetto alla disciplina vigente", "Costruire una documentazione tecnica coerente e verificabile", "Coordinare aspetti tecnologici, impiantistici ed energetici quando richiesti"]}
      context={["Investimenti in beni strumentali nuovi funzionali alla trasformazione tecnologica e digitale dell'impresa.", "Progetti che comprendono anche autoproduzione da fonti rinnovabili e sistemi di stoccaggio nei casi ammessi dalla disciplina vigente."]}
      process={[
        { title: "Pre-verifica tecnica", text: "Analizziamo beni, processo produttivo, interconnessione prevista e componenti energetiche dell'investimento." },
        { title: "Requisiti e documentazione", text: "Coordiniamo gli elementi tecnici necessari alle comunicazioni e alle certificazioni previste per il progetto." },
        { title: "Verifica finale", text: "Supportiamo la verifica della coerenza tra investimento realizzato, interconnessione, documentazione e requisiti applicabili." },
      ]}
      relatedServices={[{label:"Automazione industriale e sistemi di controllo",href:"/servizi/automazione-industriale"},{label:"Fotovoltaico e sistemi di accumulo",href:"/servizi/fotovoltaico"},{label:"Diagnosi energetiche",href:"/servizi/diagnosi-energetiche"},{label:"Integrazione software, API e dati",href:"/servizi/integrazione-software-dati"}]}
      faqs={[
        { question: "Il Nuovo Piano Transizione 5.0 è ancora un credito d'imposta?", answer: "No. La misura 2026 utilizza una maggiorazione del costo di acquisizione dei beni ai fini fiscali, quindi non opera come credito d'imposta compensabile in F24." },
        { question: "Quali investimenti possono rientrare nel nuovo piano?", answer: "La misura riguarda beni materiali e immateriali strumentali nuovi funzionali alla trasformazione tecnologica e digitale e, nei casi previsti, beni per l'autoproduzione di energia da fonti rinnovabili destinata all'autoconsumo, compresi i sistemi di stoccaggio." },
      ]}
      ecosystemHref="/servizi/digitalizzazione-automazione-ai"
      ecosystemLabel="Digitalizzazione, Automazione & AI"
    />
  );
}
