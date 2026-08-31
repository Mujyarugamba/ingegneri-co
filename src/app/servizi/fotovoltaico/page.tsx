import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/fotovoltaico`;

export const metadata: Metadata = {
  title: "Fotovoltaico | Ingegneri & Co",
  description: "Valutazione tecnica e progettazione di impianti fotovoltaici con o senza accumulo per edifici e imprese, integrate con consumi, impianti e obiettivi energetici.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Fotovoltaico | Ingegneri & Co", description: "Impianti fotovoltaici integrati con i reali fabbisogni energetici di edifici e imprese.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Ingegneria, Edilizia & Energia" title="Fotovoltaico" intro="Studiamo il dimensionamento dell'impianto in relazione ai consumi, alle superfici disponibili, agli impianti esistenti e agli obiettivi del cliente, valutando quando utile anche sistemi di accumulo e strategie di autoconsumo." bullets={["Analisi dei consumi", "Dimensionamento preliminare", "Valutazione delle superfici disponibili", "Accumulo e autoconsumo", "Integrazione con impianti elettrici", "Supporto tecnico alla realizzazione"]} outcomes={["Dimensionare l'impianto sui fabbisogni reali", "Aumentare l'autoconsumo", "Integrare produzione, accumulo e impianti in modo coerente"]} ecosystemHref="/servizi/ingegneria-edilizia-energia" ecosystemLabel="Ingegneria, Edilizia & Energia" />;
}
