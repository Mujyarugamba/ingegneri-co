import Link from "next/link";
import { serviceEcosystems } from "@/lib/site-config";

export function HomeServiceEcosystems() {
  return (
    <section id="servizi" aria-labelledby="servizi-title" className="section-padding bg-white">
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="section-label">Servizi</p>
          <h2 id="servizi-title" className="section-title">
            Due ecosistemi di competenze
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-muted lg:text-lg">
            Ingegneri &amp; Co integra competenze tecniche tradizionali e innovazione digitale in due percorsi distinti ma coordinati, così da rendere più chiara la scelta del servizio e mantenere un unico interlocutore multidisciplinare.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {serviceEcosystems.map((ecosystem) => (
            <article key={ecosystem.href} className="rounded-2xl border border-gray-border bg-gray-light/60 p-6 md:p-8">
              <h3 className="text-2xl font-bold tracking-tight text-anthracite">{ecosystem.label}</h3>
              <p className="mt-4 leading-relaxed text-gray-muted">{ecosystem.description}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {ecosystem.services.slice(0, 6).map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-sm font-medium text-anthracite-soft underline decoration-gray-border underline-offset-4 transition hover:text-tech-blue"
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={ecosystem.href} className="btn-primary mt-8 inline-flex">
                Scopri tutti i servizi
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
