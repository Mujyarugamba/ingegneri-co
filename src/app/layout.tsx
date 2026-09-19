import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteConfig, siteImages } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Ingegneria, energia e innovazione`,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Ingegneria, energia e innovazione`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Ingegneria, energia e innovazione`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteImages.logo}`,
  description: siteConfig.description,
  email: siteConfig.email,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+39 339 434 0891",
    contactType: "customer service",
    availableLanguage: ["Italian"],
  },
  areaServed: siteConfig.serviceAreas.map((name) => ({
    "@type": ["Milano", "Pavia", "Verbania"].includes(name)
      ? "City"
      : "AdministrativeArea",
    name,
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  inLanguage: "it-IT",
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <meta name="google-site-verification" content="rRv3PJlH9_tZimRGMglT17ZXD9RBUxBF97-C4tTWO-8" />
        <meta property="og:image" content={`${siteConfig.url}/opengraph-image.png`} />
        <meta name="twitter:image" content={`${siteConfig.url}/twitter-image.png`} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Approfondimenti Ingegneri & Co"
          href="/feed.xml"
        />
        <link rel="describedby" href="/llms.txt" />
      </head>
      <body>
        <a
          href="#contenuto-principale"
          className="sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:not-sr-only focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-tech-blue focus:shadow-lg"
        >
          Vai al contenuto principale
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <div id="contenuto-principale" tabIndex={-1} className="outline-none">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
