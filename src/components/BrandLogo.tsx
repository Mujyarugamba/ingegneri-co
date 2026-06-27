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
      className={`group inline-flex max-w-full flex-col leading-tight ${
        isFooter
          ? "gap-1.5"
          : "w-full items-center gap-2 md:w-auto md:items-start md:gap-1.5"
      }`}
    >
      <Image
        src={siteImages.logo}
        alt="Ingegneri & Co"
        width={255}
        height={105}
        className={`h-auto object-contain transition-opacity group-hover:opacity-90 ${
          isFooter
            ? "w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[255px]"
            : "w-[min(280px,90vw)] max-w-full md:w-full md:max-w-[210px] lg:max-w-[255px]"
        }`}
        priority={isHeader}
      />
      <span
        className={`font-medium text-tech-blue ${
          isFooter
            ? "text-[0.62rem] tracking-[0.12em] uppercase text-tech-blue-light"
            : "max-w-[90vw] text-center text-xs leading-snug tracking-normal md:max-w-none md:text-left md:text-[0.62rem] md:tracking-[0.12em] md:uppercase"
        }`}
      >
        {siteConfig.tagline}
      </span>
    </Link>
  );
}
