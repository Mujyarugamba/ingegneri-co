import Link from "next/link";
import {
  footerAree,
  footerLegal,
  footerServizi,
  siteConfig,
} from "@/lib/site-config";

function FooterColumn({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {title ? (
        <p className="text-xs font-semibold tracking-[0.18em] text-tech-blue-light uppercase">
          {title}
        </p>
      ) : null}
      <div className={title ? "mt-5" : undefined}>{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-anthracite">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <FooterColumn>
            <Link href="/" className="group inline-flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-tech-blue-light">
                {siteConfig.name}
              </span>
              <span className="mt-1.5 text-[0.62rem] font-medium tracking-[0.12em] text-tech-blue-light uppercase">
                {siteConfig.tagline}
              </span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
          </FooterColumn>

          <FooterColumn title="Aree">
            <ul className="flex flex-col gap-3">
              {footerAree.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Servizi">
            <ul className="flex flex-col gap-3">
              {footerServizi.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/75 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contatti">
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="text-sm text-white/75">
                  {siteConfig.professionals}
                </span>
              </li>
              <li>
                <span className="mt-1 block text-xs leading-relaxed text-white/50">
                  {siteConfig.institutionalPhrase}
                </span>
              </li>
            </ul>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-gray-muted">
            &copy; {siteConfig.copyrightYear} {siteConfig.name}. Tutti i diritti
            riservati.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLegal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-xs text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
