import fs from "node:fs";
import path from "node:path";

const siteUrl = "https://www.ingegnerieco.it";
const key = "540b2bf2be696b69b838724601bf46d7";
const sitemapPath = path.resolve("out", "sitemap.xml");

if (!fs.existsSync(sitemapPath)) {
  throw new Error("IndexNow: sitemap.xml non trovato. Eseguire prima npm run build.");
}

const sitemap = fs.readFileSync(sitemapPath, "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gi)]
  .map((match) => match[1].trim())
  .filter((url) => url.startsWith(siteUrl));

if (!urlList.length) {
  throw new Error("IndexNow: nessun URL canonico trovato nella sitemap.");
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  signal: AbortSignal.timeout(15_000),
  body: JSON.stringify({
    host: new URL(siteUrl).hostname,
    key,
    keyLocation: `${siteUrl}/${key}.txt`,
    urlList,
  }),
});

const body = await response.text();

if (![200, 202].includes(response.status)) {
  throw new Error(
    `IndexNow: risposta ${response.status} ${response.statusText}${body ? ` — ${body}` : ""}`
  );
}

console.log(
  `IndexNow: inviati ${urlList.length} URL, risposta HTTP ${response.status}.`
);
