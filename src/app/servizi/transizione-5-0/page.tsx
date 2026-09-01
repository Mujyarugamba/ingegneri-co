import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/transizione-5-0`;

export const metadata: Metadata = {
  title: "Transizione 5.0 2026 e iperammortamento | Ingegneri & Co",
  description: "Supporto tecnico per il Nuovo Piano Transizione 5.0 2026: beni tecnologici, interconnessione, autoproduzione da fonti rinnovabili e documentazione tecnica per l'iperammortamento.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Transizione 5.0 2026 e iperammortamento | Ingegneri & Co", description: "Supporto tecnico agli investimenti del Nuovo Piano Transizione 5.0 basato sull'iperammortamento.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Ponte tra i due ecosistemi" title="Transizione 5.0 e iperammortamento" intro="Dal 2026 il riferimento è il Nuovo Piano Transizione 5.0 basato sull'iperammortamento, che ha sostituito la precedente logica dei crediti d'imposta Transizione 4.0 e 5.0. La misura riguarda investimenti in beni strumentali tecnologicamente avanzati e, nei casi previsti, beni per l'autoproduzione di energia da fonti rinnovabili destinata all'autoconsumo. Il supporto tecnico va quindi impostato sui requisiti effettivamente applicabili al singolo investimento." bullets={["Analisi tecnica preliminare dell'investimento", "Verifica dei beni e dei requisiti di interconnessione", "Integrazione di sistemi e processi digitali", "Valutazione tecnica degli interventi per autoproduzione e autoconsumo", "Supporto alla documentazione tecnica prevista", "Coordinamento con gli altri professionisti coinvolti nella procedura"]} outcomes={["Inquadrare correttamente l'investimento rispetto alla disciplina vigente", "Costruire una documentazione tecnica coerente e verificabile", "Coordinare aspetti tecnologici, impiantistici ed energetici quando richiesti"]} ecosystemHref="/servizi/digitalizzazione-automazione-ai" ecosystemLabel="Digitalizzazione, Automazione & AI" />;
}
