import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles-data";
import { getProjectDetailSlugs } from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/servizi`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${siteConfig.url}/servizi/ingegneria-edilizia-energia`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/servizi/pratiche-edilizie`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/legge-10`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/efficientamento-energetico`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/fotovoltaico`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/diagnosi-energetiche`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/impianti-elettrici`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/direzione-lavori`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/transizione-5-0`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/servizi/digitalizzazione-automazione-ai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/servizi/automazione-processi`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/servizi-digitali-pmi`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/portali-applicazioni-web`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/integrazione-software-dati`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/intelligenza-artificiale-pmi`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/servizi/analisi-documentale-assistenti-ai`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/smart-building-iot`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/progetti`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/approfondimenti`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/contatti`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteConfig.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/cookie-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/policy-lavoro`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${siteConfig.url}/approfondimenti/${article.slug}`,
    lastModified: article.updatedAt ?? article.publishedAt,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = getProjectDetailSlugs().map((slug) => ({
    url: `${siteConfig.url}/progetti/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes, ...projectRoutes];
}
