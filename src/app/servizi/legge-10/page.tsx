import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/legge-10`;

export const metadata: Metadata = {
  title: "Relazione Legge 10 | Ingegneri & Co",
  description: "Relazioni tecniche Legge 10 per gli interventi nei casi previsti dalla normativa, con verifiche dei requisiti energetici e supporto progettuale.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Relazione Legge 10 | Ingegneri & Co", description: "Relazioni tecniche energetiche e verifiche di conformità nei casi previsti dalla normativa.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Relazione tecnica Legge 10"
      intro="Predisponiamo, quando richiesta dalla normativa applicabile, la relazione tecnica energetica per interventi su edifici e impianti, coordinando dati dell'involucro, sistemi tecnici e requisiti prestazionali del progetto."
      bullets={["Nuove costruzioni", "Ristrutturazioni e riqualificazioni nei casi previsti", "Interventi sugli impianti quando soggetti a relazione", "Verifiche dell'involucro", "Verifiche dei sistemi impiantistici", "Coordinamento con progetto e pratica edilizia"]}
      outcomes={["Documentare i requisiti energetici dell'intervento", "Coordinare involucro e impianti", "Ridurre incongruenze tra progetto edilizio ed energetico"]}
      context={["Nuove costruzioni e interventi sull'edificio o sugli impianti nei casi in cui la normativa applicabile richiede la relazione tecnica energetica.", "Quando il progetto edilizio e quello impiantistico devono essere coordinati con le verifiche delle prestazioni energetiche."]}
      process={[
        { title: "Raccolta dei dati di progetto", text: "Acquisiamo geometrie, stratigrafie, caratteristiche dell'involucro e dati degli impianti previsti." },
        { title: "Verifiche energetiche", text: "Elaboriamo le verifiche richieste dal caso specifico e coordiniamo le scelte progettuali con i requisiti applicabili." },
        { title: "Relazione tecnica", text: "Predisponiamo la relazione energetica da coordinare con il progetto e con la pratica edilizia." },
      ]}
      relatedServices={[{label:"APE e certificazione energetica",href:"/servizi/ape-certificazione-energetica"},{label:"Impianti termici e climatizzazione",href:"/servizi/impianti-termici-climatizzazione"},{label:"Efficientamento energetico",href:"/servizi/efficientamento-energetico"}]}
      faqs={[
        { question: "La Relazione Legge 10 e l'APE sono la stessa cosa?", answer: "No. La relazione energetica accompagna il progetto nei casi previsti, mentre l'APE descrive la prestazione energetica dell'edificio o dell'unità immobiliare secondo la procedura applicabile." },
      ]}
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}
