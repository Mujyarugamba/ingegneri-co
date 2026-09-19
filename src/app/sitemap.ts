import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles-data";
import { getProjectDetailSlugs } from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicesLastModified = "2026-09-19";
  const articlesLastModified = [...articles]
    .map((article) => article.updatedAt ?? article.publishedAt)
    .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())[0];

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, lastModified: servicesLastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/chi-siamo`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteConfig.url}/servizi`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.95 },
    { url: `${siteConfig.url}/servizi/ingegneria-edilizia-energia`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/servizi/pratiche-edilizie`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/due-diligence-immobiliare`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/conformita-urbanistica-catastale`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/ape-certificazione-energetica`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/legge-10`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/efficientamento-energetico`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/fotovoltaico`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/diagnosi-energetiche`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/impianti-elettrici`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/impianti-termici-climatizzazione`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/direzione-lavori`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/sicurezza-cantieri`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/transizione-5-0`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/servizi/digitalizzazione-automazione-ai`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/servizi/automazione-processi`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/automazione-industriale`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/servizi-digitali-pmi`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/portali-applicazioni-web`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/integrazione-software-dati`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/intelligenza-artificiale-pmi`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/servizi/analisi-documentale-assistenti-ai`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/smart-building-iot`, lastModified: servicesLastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/progetti`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/approfondimenti`, lastModified: articlesLastModified, changeFrequency: "weekly", priority: 0.9 },
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
