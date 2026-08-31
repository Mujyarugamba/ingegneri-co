import type { MetadataRoute } from "next";
import { getAllArticleSlugs } from "@/lib/articles-data";
import { getProjectDetailSlugs } from "@/lib/projects-data";
import { siteConfig } from "@/lib/site-config";

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
    { url: `${siteConfig.url}/servizi/transizione-5-0`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/servizi/digitalizzazione-automazione-ai`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/servizi/automazione-processi`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/servizi-digitali-pmi`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/servizi/intelligenza-artificiale-pmi`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/servizi/portali-applicazioni-web`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${siteConfig.url}/progetti`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/approfondimenti`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/contatti`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteConfig.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/cookie-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/policy-lavoro`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = getAllArticleSlugs().map((slug) => ({
    url: `${siteConfig.url}/approfondimenti/${slug}`,
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
