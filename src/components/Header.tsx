import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { mainNav } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-border/70 bg-white/95 backdrop-blur-md">
      <div className="page-container flex items-center justify-between gap-3 py-3 md:gap-4 md:py-4 lg:py-5">
        <BrandLogo variant="header" />

        <nav
          className="hidden items-center gap-1 md:flex xl:gap-2"
          aria-label="Navigazione principale"
        >
          {mainNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-anthracite-soft transition-colors hover:text-tech-blue lg:px-3.5"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center">
          <Link
            href="/contatti"
            className="btn-primary whitespace-nowrap md:hidden"
          >
            Contattaci
          </Link>
          <Link
            href="/contatti"
            className="btn-primary hidden whitespace-nowrap md:inline-flex"
          >
            Richiedi una consulenza
          </Link>
        </div>
      </div>
    </header>
  );
}
