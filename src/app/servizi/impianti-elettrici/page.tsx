import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/impianti-elettrici`;

export const metadata: Metadata = {
  title: "Impianti elettrici | Ingegneri & Co",
  description:
    "Supporto tecnico per progettazione, verifica, adeguamento e integrazione di impianti elettrici civili e per attività professionali e produttive.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Impianti elettrici | Ingegneri & Co",
    description: "Progettazione e supporto tecnico per impianti elettrici, quadri, protezioni e distribuzione.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Impianti elettrici"
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
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}
