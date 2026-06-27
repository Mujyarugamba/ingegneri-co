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
          : "w-full items-center justify-center md:w-auto md:justify-start"
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
            : "w-[min(300px,92vw)] max-w-full md:w-full md:max-w-[240px] lg:max-w-[280px]"
        }`}
        priority={isHeader}
      />
      {isFooter && (
        <span className="text-[0.62rem] font-medium tracking-[0.12em] text-tech-blue-light uppercase">
          {siteConfig.tagline}
        </span>
      )}
    </Link>
  );
}
