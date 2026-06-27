import type { Metadata } from "next";
import LegalPageLayout, {
  LegalSection,
} from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy | Ingegneri & Co",
  description:
    "Informativa sulla privacy del sito web Ingegneri & Co. Tutela dei dati personali nel rispetto del Regolamento (UE) 2016/679 (GDPR).",
  openGraph: {
    title: "Privacy Policy | Ingegneri & Co",
    description:
      "Informativa sulla privacy del sito web Ingegneri & Co nel rispetto del GDPR.",
    type: "website",
    locale: "it_IT",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      intro="Ingegneri & Co presta particolare attenzione alla tutela dei dati personali degli utenti che visitano il presente sito web."
    >
      <LegalSection title="Natura del sito">
        <p>
          Il presente sito web ha carattere prevalentemente informativo e
          istituzionale. Attraverso le sue pagine, {siteConfig.name} presenta
          le proprie competenze, i servizi offerti e contenuti di approfondimento
          tecnico a beneficio di privati, imprese e professionisti.
        </p>
      </LegalSection>

      <LegalSection title="Assenza di registrazione e moduli di contatto">
        <p>
          La navigazione del sito non richiede la registrazione degli utenti.
          Attualmente non sono presenti moduli di contatto che comportino la
          raccolta diretta di dati personali attraverso il sito web.
        </p>
        <p>
          Per richieste di consulenza o informazioni, gli utenti possono
          contattare {siteConfig.name} utilizzando i recapiti indicati nelle
          pagine del sito, come l&apos;indirizzo email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-tech-blue transition-colors hover:text-tech-blue-light"
          >
            {siteConfig.email}
          </a>{" "}
          o il numero di telefono pubblicato.
        </p>
      </LegalSection>

      <LegalSection title="Dati tecnici di navigazione">
        <p>
          Durante la normale navigazione, possono essere trattati dati tecnici
          quali indirizzo IP, tipo di browser, sistema operativo, orari di
          accesso e log di sistema. Tali informazioni vengono utilizzate
          esclusivamente per finalità di sicurezza, manutenzione e corretto
          funzionamento del servizio.
        </p>
      </LegalSection>

      <LegalSection title="Base giuridica e conformità">
        <p>
          Il trattamento dei dati personali, ove applicabile, avviene nel
          rispetto del Regolamento (UE) 2016/679 (GDPR) e della normativa
          nazionale vigente in materia di protezione dei dati personali.
        </p>
      </LegalSection>

      <LegalSection title="Titolare del sito">
        <p>
          <strong className="font-semibold text-anthracite">
            {siteConfig.name}
          </strong>
        </p>
        <p>
          Email:{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-tech-blue transition-colors hover:text-tech-blue-light"
          >
            {siteConfig.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Aggiornamenti">
        <p>
          La presente informativa potrà essere aggiornata in caso di
          introduzione di nuovi servizi, strumenti o funzionalità che comportino
          il trattamento di dati personali, anche attraverso moduli di contatto
          o servizi di terze parti.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
