import Image from "next/image";
import Link from "next/link";
import { siteConfig, siteImages } from "@/lib/site-config";

type BrandLogoProps = {
  variant?: "header" | "footer";
};

export default function BrandLogo({ variant = "header" }: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className={`group inline-flex min-w-0 max-w-full flex-col gap-1 leading-tight sm:gap-1.5 ${
        isFooter ? "" : "min-w-0 shrink"
      }`}
    >
      <Image
        src={siteImages.logo}
        alt="Ingegneri & Co"
        width={255}
        height={105}
        className={`h-auto w-full object-contain transition-opacity group-hover:opacity-90 ${
          isFooter
            ? "max-w-[180px] sm:max-w-[220px] lg:max-w-[255px]"
            : "max-w-[130px] sm:max-w-[180px] md:max-w-[210px] lg:max-w-[255px]"
        }`}
        priority={!isFooter}
      />
      <span
        className={`text-[0.55rem] font-medium tracking-[0.1em] uppercase sm:text-[0.62rem] sm:tracking-[0.12em] ${
          isFooter ? "text-tech-blue-light" : "text-tech-blue"
        }`}
      >
        {siteConfig.tagline}
      </span>
    </Link>
  );
}
