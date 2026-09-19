import type { Metadata } from "next";
import { ServiceLanding } from "@/components/ServiceLanding";
import { siteConfig } from "@/lib/site-config";

const canonicalUrl = `${siteConfig.url}/servizi/direzione-lavori`;

export const metadata: Metadata = {
  title: "Direzione lavori e supporto tecnico | Ingegneri & Co",
  description: "Direzione lavori, coordinamento tecnico e assistenza nelle fasi esecutive per interventi edilizi, impiantistici ed energetici.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Direzione lavori e supporto tecnico | Ingegneri & Co",
    description: "Coordinamento tecnico e assistenza nelle fasi operative dell'intervento.",
    url: canonicalUrl,
    type: "website",
  },
};

export default function Page() {
  return (
    <ServiceLanding
      eyebrow="Ingegneria, Edilizia & Energia"
      title="Direzione lavori e supporto tecnico"
      intro="Seguiamo l'intervento nelle fasi operative, coordinando aspetti tecnici, documentazione e confronto con imprese e fornitori, con l'obiettivo di mantenere coerenza tra progetto, esecuzione e risultato finale."
      bullets={[
        "Assistenza tecnica in cantiere",
        "Coordinamento con imprese e fornitori",
        "Verifica della coerenza con il progetto",
        "Gestione delle varianti tecniche",
        "Supporto alla documentazione di fine lavori",
        "Interfaccia tecnica con il committente",
      ]}
      outcomes={[
        "Ridurre incongruenze tra progetto ed esecuzione",
        "Gestire tempestivamente le criticità tecniche",
        "Mantenere tracciabilità delle decisioni operative",
      ]}
      context={["Interventi edilizi o impiantistici nei quali è necessario mantenere continuità tra progetto, decisioni operative ed esecuzione.", "Cantieri con più imprese, fornitori o competenze tecniche che richiedono un riferimento per il coordinamento delle attività di competenza."]}
      process={[
        { title: "Avvio e coordinamento", text: "Allineiamo progetto, imprese, fornitori e programma delle attività rispetto al perimetro dell'incarico." },
        { title: "Controllo dell'esecuzione", text: "Seguiamo le fasi operative e verifichiamo la coerenza tecnica tra quanto progettato e quanto realizzato." },
        { title: "Varianti e chiusura", text: "Gestiamo gli aspetti tecnici delle variazioni e supportiamo la documentazione conclusiva dell'intervento." },
      ]}
      relatedServices={[{label:"Pratiche edilizie",href:"/servizi/pratiche-edilizie"},{label:"Sicurezza cantieri",href:"/servizi/sicurezza-cantieri"},{label:"Impianti elettrici",href:"/servizi/impianti-elettrici"},{label:"Impianti termici e climatizzazione",href:"/servizi/impianti-termici-climatizzazione"}]}
      faqs={[
        { question: "La direzione lavori coincide con l'esecuzione delle opere?", answer: "No. La direzione lavori svolge le attività tecniche previste dall'incarico e verifica la coerenza dell'esecuzione con il progetto; l'esecuzione materiale delle opere resta in capo alle imprese e ai fornitori incaricati." },
        { question: "La direzione lavori può comprendere anche aspetti impiantistici?", answer: "Sì, quando il perimetro dell'incarico lo prevede. Il coordinamento può riguardare opere edilizie, impianti elettrici, sistemi termici e altre discipline tecniche coinvolte nell'intervento." },
      ]}
      ecosystemHref="/servizi/ingegneria-edilizia-energia"
      ecosystemLabel="Ingegneria, Edilizia & Energia"
    />
  );
}
