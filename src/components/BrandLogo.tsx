import Image from "next/image";
import Link from "next/link";
import { siteConfig, siteImages } from "@/lib/site-config";

type BrandLogoProps = {
  variant?: "header" | "footer";
};

export default function BrandLogo({ variant = "header" }: BrandLogoProps) {
  const isFooter = variant === "footer";
  const isHeader = variant === "header";

  return (
    <Link
      href="/"
      className={`group inline-flex max-w-full leading-tight ${
        isFooter
          ? "flex-col gap-1.5"
          : "w-full flex-col items-center justify-center md:w-auto md:items-start md:justify-start"
      }`}
    >
      <Image
        src={siteImages.logo}
        alt="Ingegneri & Co"
        width={280}
        height={115}
        className={`h-auto object-contain transition-opacity group-hover:opacity-90 ${
          isFooter
            ? "w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[255px]"
            : "w-[min(340px,94vw)] max-w-full md:w-full md:max-w-[240px] lg:max-w-[280px]"
        }`}
        priority={isHeader}
      />
      {isHeader && (
        <span className="mt-1 text-center text-[0.72rem] font-semibold tracking-[0.08em] text-anthracite-soft uppercase md:hidden">
          {siteConfig.tagline}
        </span>
      )}
      {isFooter && (
        <span className="text-[0.62rem] font-medium tracking-[0.12em] text-tech-blue-light uppercase">
          {siteConfig.tagline}
        </span>
      )}
    </Link>
  );
}
