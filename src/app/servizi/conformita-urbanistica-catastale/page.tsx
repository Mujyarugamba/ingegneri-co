import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/conformita-urbanistica-catastale`;

export const metadata: Metadata = {
  title: "Conformità urbanistica e catastale | Ingegneri & Co",
  description: "Verifica della conformità urbanistica e catastale, dello stato legittimo e delle eventuali difformità di immobili prima di interventi, vendite o acquisti.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Conformità urbanistica e catastale | Ingegneri & Co", description: "Verifiche tecniche e documentali per confrontare titoli edilizi, catasto e stato dei luoghi.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Ingegneria, Edilizia & Energia" title="Conformità urbanistica e catastale" intro="Verifichiamo la documentazione urbanistica e catastale dell'immobile e la confrontiamo con lo stato dei luoghi per individuare eventuali difformità e gli approfondimenti tecnici necessari." bullets={["Accesso e analisi dei titoli edilizi disponibili", "Verifica dello stato legittimo", "Confronto tra elaborati autorizzati e stato dei luoghi", "Verifica catastale e planimetrica", "Individuazione di difformità", "Valutazione tecnica delle possibili regolarizzazioni"]} outcomes={["Conoscere la situazione urbanistica e catastale dell'immobile", "Individuare criticità prima di lavori, vendite o acquisti", "Definire gli eventuali approfondimenti o percorsi di regolarizzazione"]} ecosystemHref="/servizi/ingegneria-edilizia-energia" ecosystemLabel="Ingegneria, Edilizia & Energia" />;
}
