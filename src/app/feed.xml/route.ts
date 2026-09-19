import { articles } from "@/lib/articles-data";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const sortedArticles = [...articles].sort(
    (a, b) =>
      new Date(b.updatedAt ?? b.publishedAt).getTime() -
      new Date(a.updatedAt ?? a.publishedAt).getTime(),
  );

  const lastBuildDate = sortedArticles[0]
    ? new Date(sortedArticles[0].updatedAt ?? sortedArticles[0].publishedAt).toUTCString()
    : new Date("2026-09-19").toUTCString();

  const items = sortedArticles
    .map((article) => {
      const url = `${siteConfig.url}/approfondimenti/${article.slug}`;
      const pubDate = new Date(article.publishedAt).toUTCString();

      return `<item>
<title>${escapeXml(article.title)}</title>
<link>${url}</link>
<guid isPermaLink="true">${url}</guid>
<description>${escapeXml(article.description)}</description>
<category>${escapeXml(article.category)}</category>
<pubDate>${pubDate}</pubDate>
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Approfondimenti Ingegneri &amp; Co</title>
<link>${siteConfig.url}/approfondimenti</link>
<description>${escapeXml("Guide tecniche e aggiornamenti su edilizia, energia, impianti, automazione e innovazione.")}</description>
<language>it-IT</language>
<lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
