import type { Metadata } from "next";
import LegalPageLayout, {
  LegalSection,
} from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cookie Policy | Ingegneri & Co",
  description:
    "Cookie Policy del sito Ingegneri & Co. Informazioni sull'utilizzo di cookie tecnici e sull'assenza di cookie di profilazione.",
  openGraph: {
    title: "Cookie Policy | Ingegneri & Co",
    description:
      "Informazioni sui cookie utilizzati dal sito web Ingegneri & Co.",
    type: "website",
    locale: "it_IT",
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy">
      <LegalSection title="Utilizzo dei cookie">
        <p>
          Il sito utilizza esclusivamente cookie tecnici necessari al
          funzionamento, ove presenti. Tali cookie consentono la corretta
          navigazione e il funzionamento delle pagine del sito.
        </p>
      </LegalSection>

      <LegalSection title="Cookie di profilazione e marketing">
        <p>
          Attualmente il sito non utilizza cookie di profilazione, non impiega
          sistemi pubblicitari e non utilizza strumenti di marketing che
          comportino il tracciamento dell&apos;utente per finalità promozionali.
        </p>
      </LegalSection>

      <LegalSection title="Aggiornamenti futuri">
        <p>
          Qualora in futuro vengano introdotti servizi quali Google Analytics,
          mappe interattive, social network o altri strumenti che utilizzano
          cookie, la presente Cookie Policy verrà aggiornata per fornire
          informazioni chiare e complete agli utenti.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
