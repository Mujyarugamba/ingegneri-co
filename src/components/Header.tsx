import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import MobileNav from "@/components/MobileNav";
import { mainNav } from "@/lib/site-config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-border/70 bg-white/95 backdrop-blur-md">
      <div className="page-container py-3 md:flex md:items-center md:justify-between md:gap-4 md:py-4 lg:py-5">
        <div className="w-full min-w-0 md:hidden">
          <div className="flex w-full flex-col items-center">
            <BrandLogo variant="header" />
          </div>

          <div className="mt-3 flex items-center justify-end border-t border-gray-border/50 pt-3">
            <MobileNav />
          </div>
        </div>

        <div className="hidden md:contents">
          <BrandLogo variant="header" />

          <nav
            className="flex items-center gap-1 xl:gap-2"
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

          <Link href="/contatti" className="btn-primary shrink-0 whitespace-nowrap">
            Richiedi una consulenza
          </Link>
        </div>
      </div>
    </header>
  );
}
