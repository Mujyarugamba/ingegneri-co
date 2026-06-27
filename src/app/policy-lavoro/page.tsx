import type { Metadata } from "next";
import Link from "next/link";
import LegalPageLayout, {
  LegalSection,
} from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Policy sul luogo di lavoro | Ingegneri & Co",
  description:
    "Scopri la policy sul luogo di lavoro adottata da Ingegneri & Co, rete tecnica multidisciplinare composta da ingegneri, architetti e geometri.",
  openGraph: {
    title: "Policy sul luogo di lavoro | Ingegneri & Co",
    description:
      "Scopri la policy sul luogo di lavoro adottata da Ingegneri & Co, rete tecnica multidisciplinare composta da ingegneri, architetti e geometri.",
    type: "website",
    locale: "it_IT",
  },
};

const modalitaOperative = [
  "attività presso la sede del cliente",
  "sopralluoghi e cantieri",
  "lavoro da remoto",
  "incontri presso le sedi dei professionisti della rete",
  "riunioni online",
];

export default function PolicyLavoroPage() {
  return (
    <LegalPageLayout
      title="Policy sul luogo di lavoro"
      label="Organizzazione"
      intro="Ingegneri & Co adotta un modello organizzativo flessibile, orientato alla collaborazione, alla qualità dei servizi e alla vicinanza alle esigenze dei clienti."
    >
      <LegalSection title="Modalità operative">
        <p>
          Le attività vengono svolte in funzione delle caratteristiche di
          ciascun progetto e possono prevedere:
        </p>
        <ul className="mt-2 flex flex-col gap-2.5">
          {modalitaOperative.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-base text-anthracite-soft"
            >
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-tech-blue" />
              {item}
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection title="Una rete di professionisti">
        <p>
          Ingegneri &amp; Co è una rete tecnica multidisciplinare composta da
          ingegneri, architetti e geometri iscritti ai rispettivi Ordini e
          Collegi professionali.
        </p>
        <p>
          La collaborazione tra professionisti con competenze differenti
          consente di affrontare progetti complessi integrando competenze nei
          settori dell&apos;edilizia, dell&apos;energia, degli impianti,
          dell&apos;automazione, dell&apos;innovazione tecnologica e dello
          sviluppo di soluzioni digitali.
        </p>
      </LegalSection>

      <LegalSection title="Flessibilità e presenza sul territorio">
        <p>
          L&apos;organizzazione delle attività viene definita in base alle
          esigenze del progetto, privilegiando la collaborazione tra i
          professionisti della rete, la presenza presso il cliente quando
          necessario e l&apos;utilizzo di strumenti digitali per garantire
          rapidità, efficienza e continuità operativa.
        </p>
      </LegalSection>

      <div className="mt-4 rounded-2xl border border-gray-border bg-gray-light p-8 text-center">
        <h2 className="text-lg font-bold tracking-tight text-anthracite">
          Contatti
        </h2>
        <p className="mt-3 text-base leading-relaxed text-anthracite-soft">
          Per ulteriori informazioni sulle modalità operative di Ingegneri
          &amp; Co è possibile contattarci attraverso la pagina Contatti.
        </p>
        <Link href="/contatti" className="btn-primary mt-6">
          Contattaci
        </Link>
      </div>
    </LegalPageLayout>
  );
}
