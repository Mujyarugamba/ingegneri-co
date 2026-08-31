import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/efficientamento-energetico`;

export const metadata: Metadata = {
  title: "Efficientamento energetico | Ingegneri & Co",
  description: "Analisi e progettazione di interventi di efficientamento energetico per edifici e imprese, dall'involucro agli impianti e ai sistemi di controllo.",
  alternates: { canonical: canonicalUrl },
  openGraph: { title: "Efficientamento energetico | Ingegneri & Co", description: "Interventi integrati per ridurre consumi e migliorare le prestazioni energetiche.", url: canonicalUrl, type: "website" },
};

export default function Page() {
  return <ServiceLanding eyebrow="Ingegneria, Edilizia & Energia" title="Efficientamento energetico" intro="Valutiamo consumi, involucro, impianti e modalità di utilizzo per individuare interventi tecnicamente coerenti e misurabili, con priorità alle soluzioni che migliorano prestazioni, controllo e affidabilità." bullets={["Analisi dei consumi", "Interventi sull'involucro", "Riqualificazione degli impianti", "Regolazione e controllo", "Integrazione con fotovoltaico", "Valutazione tecnico-economica degli interventi"]} outcomes={["Ridurre consumi e sprechi", "Migliorare comfort e prestazioni", "Definire priorità di investimento tecnicamente motivate"]} ecosystemHref="/servizi/ingegneria-edilizia-energia" ecosystemLabel="Ingegneria, Edilizia & Energia" />;
}
