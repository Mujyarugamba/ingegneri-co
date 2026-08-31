import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type ServiceLandingProps = {
  eyebrow: string;
  title: string;
  intro: string;
  bullets: string[];
  outcomes: string[];
  ecosystemHref: string;
  ecosystemLabel: string;
};

export function ServiceLanding({
  eyebrow,
  title,
  intro,
  bullets,
  outcomes,
  ecosystemHref,
  ecosystemLabel,
}: ServiceLandingProps) {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{intro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold">Cosa comprende il servizio</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {bullets.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-200 p-5 text-slate-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-3xl bg-slate-950 p-7 text-white">
          <h2 className="text-2xl font-semibold">Obiettivo</h2>
          <ul className="mt-5 space-y-3 text-slate-200">
            {outcomes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href={siteConfig.whatsAppHref}
              className="rounded-full bg-white px-5 py-3 text-center font-semibold text-slate-950"
            >
              Parla con noi su WhatsApp
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="rounded-full border border-white/30 px-5 py-3 text-center font-semibold text-white"
            >
              Scrivici via email
            </a>
          </div>
        </aside>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <Link href={ecosystemHref} className="font-semibold text-slate-900 underline underline-offset-4">
            Torna a {ecosystemLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
