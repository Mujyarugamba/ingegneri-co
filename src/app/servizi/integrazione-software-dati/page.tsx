import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/integrazione-software-dati`;

export const metadata: Metadata = {
  title: "Integrazione software e dati | Ingegneri & Co",
  description:
    "Integrazione tra software, database e strumenti aziendali per ridurre duplicazioni, automatizzare flussi e rendere i dati più utilizzabili.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Integrazione software e dati | Ingegneri & Co",
    description: "Collegamento tra sistemi, database e applicazioni per processi più ordinati e dati più accessibili.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Digitalizzazione, Automazione & AI"
      title="Integrazione software e dati"
      intro="Colleghiamo strumenti, database e applicazioni per ridurre passaggi manuali, duplicazioni e frammentazione delle informazioni, progettando flussi coerenti con l'organizzazione reale dell'impresa."
      bullets={[
        "Analisi dei sistemi esistenti",
        "Integrazione tra applicazioni e database",
        "Automazione dello scambio dati",
        "Riduzione delle duplicazioni informative",
        "Dashboard e flussi operativi",
        "Supporto alla migrazione e normalizzazione dei dati",
      ]}
      outcomes={[
        "Rendere i dati più accessibili e affidabili",
        "Ridurre attività manuali ripetitive",
        "Creare una base tecnica per automazioni e AI",
      ]}
      ecosystemHref="/servizi/digitalizzazione-automazione-ai"
      ecosystemLabel="Digitalizzazione, Automazione & AI"
    />
  );
}
