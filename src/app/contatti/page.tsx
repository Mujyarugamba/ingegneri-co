import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contatti | Ingegneri & Co",
  description:
    "Contatta Ingegneri & Co per consulenze tecniche, informazioni sui servizi e supporto per i tuoi progetti.",
  openGraph: {
    title: "Contatti | Ingegneri & Co",
    description:
      "Contatta Ingegneri & Co per consulenze tecniche e informazioni sui servizi.",
    type: "website",
    locale: "it_IT",
  },
};

export default function ContattiPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-anthracite">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #2563a8 0%, transparent 45%), radial-gradient(circle at 80% 20%, #1a4d7c 0%, transparent 35%)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[3.5rem_3.5rem]" />

        <div className="relative page-container max-w-[900px] py-12 md:py-16 lg:py-24">
          <p className="section-label text-tech-blue-light">Contatti</p>
          <h1 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            Parliamo del tuo progetto
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
            Che tu sia un privato, un&apos;impresa o un professionista del
            settore, siamo a disposizione per una consulenza personalizzata.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-light">
        <div className="mx-auto w-full max-w-[900px] min-w-0 px-4 sm:px-6 lg:px-10">
          <div className="rounded-2xl border border-gray-border bg-white p-6 text-center shadow-sm sm:p-10 lg:p-14">
            <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
              Raccontaci le tue esigenze: ti aiuteremo a trovare la soluzione
              tecnica più adatta.
            </p>

            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
              <div>
                <p className="text-xs font-semibold tracking-widest text-gray-muted uppercase">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block text-base font-semibold text-tech-blue transition-colors hover:text-tech-blue-light"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div
                className="hidden h-10 w-px bg-gray-border sm:block"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-semibold tracking-widest text-gray-muted uppercase">
                  WhatsApp
                </p>
                <a
                  href={siteConfig.whatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-base font-semibold text-tech-blue transition-colors hover:text-tech-blue-light"
                >
                  {siteConfig.whatsApp}
                </a>
              </div>
            </div>

            <a
              href={siteConfig.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 px-8 py-3.5"
            >
              Contattaci su WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
