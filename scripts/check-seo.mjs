import fs from "node:fs";
import path from "node:path";

const root = path.resolve("out");
const canonicalOrigin = "https://www.ingegnerieco.it";

if (!fs.existsSync(root)) {
  console.error("SEO check: cartella out non trovata. Eseguire prima npm run build.");
  process.exit(1);
}

function collectHtml(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return collectHtml(full);
    return entry.isFile() && entry.name.endsWith(".html") ? [full] : [];
  });
}

const files = collectHtml(root).filter((file) => {
  const rel = path.relative(root, file).replaceAll("\\", "/");
  return rel !== "404.html" && !rel.includes("_not-found");
});

const checks = [
  ["title", (html) => /<title>[^<]+<\/title>/i.test(html)],
  ["meta description", (html) => /<meta[^>]+name=["']description["'][^>]*>/i.test(html)],
  ["canonical", (html) => /<link[^>]+rel=["']canonical["'][^>]*>/i.test(html)],
  ["og:title", (html) => /<meta[^>]+property=["']og:title["'][^>]*>/i.test(html)],
  ["og:description", (html) => /<meta[^>]+property=["']og:description["'][^>]*>/i.test(html)],
  ["og:image", (html) => /<meta[^>]+property=["']og:image["'][^>]*>/i.test(html)],
  ["twitter:card", (html) => /<meta[^>]+name=["']twitter:card["'][^>]*>/i.test(html)],
  ["twitter:image", (html) => /<meta[^>]+name=["']twitter:image["'][^>]*>/i.test(html)],
  ["lang=it", (html) => /<html[^>]+lang=["']it["']/i.test(html)],
];

const failures = [];
const titles = new Map();
const canonicals = new Map();

function routeFromHtml(file) {
  const rel = path.relative(root, file).replaceAll("\\", "/");
  if (rel === "index.html") return "/";
  return `/${rel.replace(/\.html$/, "")}`;
}

const routes = new Set(files.map(routeFromHtml));

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const rel = path.relative(root, file).replaceAll("\\", "/");
  const missing = checks.filter(([, test]) => !test(html)).map(([name]) => name);

  const h1Count = (html.match(/<h1\b/gi) || []).length;
  if (h1Count !== 1) missing.push(`H1 count=${h1Count}`);

  const singletonTags = [
    ["title", (html.match(/<title>[^<]*<\/title>/gi) || []).length],
    ["meta description", (html.match(/<meta[^>]+name=["']description["'][^>]*>/gi) || []).length],
    ["canonical", (html.match(/<link[^>]+rel=["']canonical["'][^>]*>/gi) || []).length],
    ["og:title", (html.match(/<meta[^>]+property=["']og:title["'][^>]*>/gi) || []).length],
    ["og:description", (html.match(/<meta[^>]+property=["']og:description["'][^>]*>/gi) || []).length],
    ["twitter:card", (html.match(/<meta[^>]+name=["']twitter:card["'][^>]*>/gi) || []).length],
  ];

  for (const [name, count] of singletonTags) {
    if (count !== 1) missing.push(`${name} count=${count}`);
  }

  const normalizeSocialImageUrl = (value) => {
    try {
      const url = new URL(value);
      url.search = "";
      url.hash = "";
      return url.toString();
    } catch {
      return value.split(/[?#]/)[0];
    }
  };

  const socialImageUrls = (tags) =>
    tags
      .map((tag) => tag.match(/content=["']([^"']+)["']/i)?.[1])
      .filter(Boolean)
      .map(normalizeSocialImageUrl);

  const ogImageTags = html.match(/<meta[^>]+property=["']og:image["'][^>]*>/gi) || [];
  const ogImageUrls = socialImageUrls(ogImageTags);
  if (!ogImageUrls.length) {
    missing.push("og:image mancante");
  } else if (new Set(ogImageUrls).size > 1) {
    missing.push(`og:image in conflitto: ${[...new Set(ogImageUrls)].join(", ")}`);
  }

  const twitterImageTags = html.match(/<meta[^>]+name=["']twitter:image["'][^>]*>/gi) || [];
  const twitterImageUrls = socialImageUrls(twitterImageTags);
  if (!twitterImageUrls.length) {
    missing.push("twitter:image mancante");
  } else if (new Set(twitterImageUrls).size > 1) {
    missing.push(`twitter:image in conflitto: ${[...new Set(twitterImageUrls)].join(", ")}`);
  }

  if (/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)) {
    missing.push("meta robots noindex inatteso");
  }

  const images = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => match[0]);
  const imagesWithoutAlt = images.filter((tag) => !/\balt=["'][^"']*["']/i.test(tag));
  if (imagesWithoutAlt.length) {
    missing.push(`immagini senza alt=${imagesWithoutAlt.length}`);
  }

  const blankTargets = [...html.matchAll(/<a\b[^>]*target=["']_blank["'][^>]*>/gi)].map(
    (match) => match[0]
  );
  const unsafeBlankTargets = blankTargets.filter((tag) => {
    const rel = tag.match(/\brel=["']([^"']*)["']/i)?.[1] ?? "";
    return !/\bnoopener\b/i.test(rel);
  });
  if (unsafeBlankTargets.length) {
    missing.push(`link target=_blank senza noopener=${unsafeBlankTargets.length}`);
  }

  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
  if (title) {
    const previous = titles.get(title);
    if (previous) failures.push({ file: rel, missing: [`title duplicato con ${previous}`] });
    else titles.set(title, rel);
  }

  const canonicalTag = html.match(/<link[^>]*rel=["']canonical["'][^>]*>/i)?.[0];
  const canonical = canonicalTag?.match(/href=["']([^"']+)["']/i)?.[1];
  if (canonical) {
    const previous = canonicals.get(canonical);
    if (previous) failures.push({ file: rel, missing: [`canonical duplicato con ${previous}`] });
    else canonicals.set(canonical, rel);
  }

  const jsonLdBlocks = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const block of jsonLdBlocks) {
    try {
      JSON.parse(block[1]);
    } catch {
      missing.push("JSON-LD non valido");
      break;
    }
  }

  const hrefs = [...html.matchAll(/href=["']([^"']+)["']/gi)].map((match) => match[1]);
  const brokenLinks = new Set();

  for (const href of hrefs) {
    if (!href.startsWith("/") || href.startsWith("//") || href.startsWith("/_next/")) continue;

    const target = href.split("#")[0].split("?")[0] || "/";
    const normalized = target !== "/" ? target.replace(/\/$/, "") : "/";

    if (/\.[a-z0-9]+$/i.test(normalized)) {
      const assetPath = path.join(root, normalized.slice(1));
      if (!fs.existsSync(assetPath)) brokenLinks.add(href);
      continue;
    }

    if (!routes.has(normalized)) brokenLinks.add(href);
  }

  if (brokenLinks.size) {
    missing.push(`link interni non risolti: ${[...brokenLinks].join(", ")}`);
  }

  if (missing.length) {
    failures.push({ file: rel, missing });
  }
}


const robotsPath = path.join(root, "robots.txt");
const sitemapPath = path.join(root, "sitemap.xml");

if (!fs.existsSync(robotsPath)) {
  failures.push({ file: "robots.txt", missing: ["file non trovato"] });
} else {
  const robots = fs.readFileSync(robotsPath, "utf8");
  if (!/User-agent:\s*\*/i.test(robots)) {
    failures.push({ file: "robots.txt", missing: ["User-agent: *"] });
  }
  if (!/Sitemap:\s*https:\/\/ingegnerieco\.it\/sitemap\.xml/i.test(robots)) {
    failures.push({ file: "robots.txt", missing: ["riferimento alla sitemap canonica"] });
  }
}

if (!fs.existsSync(sitemapPath)) {
  failures.push({ file: "sitemap.xml", missing: ["file non trovato"] });
} else {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");
  const normalizeUrl = (value) =>
    value === `${canonicalOrigin}/`
      ? canonicalOrigin
      : value.replace(/\/$/, "");

  const sitemapUrls = new Set(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) =>
      normalizeUrl(match[1].trim())
    )
  );

  for (const file of files) {
    const html = fs.readFileSync(file, "utf8");
    const canonicalTag = html.match(/<link[^>]*rel=["']canonical["'][^>]*>/i)?.[0];
    const canonical = canonicalTag?.match(/href=["']([^"']+)["']/i)?.[1];
    const normalizedCanonical = canonical ? normalizeUrl(canonical) : null;

    if (normalizedCanonical && !sitemapUrls.has(normalizedCanonical)) {
      failures.push({
        file: path.relative(root, file).replaceAll("\\", "/"),
        missing: [`canonical non presente in sitemap: ${canonical}`],
      });
    }
  }

  for (const url of sitemapUrls) {
    if (!url.startsWith(`${canonicalOrigin}/`) && url !== canonicalOrigin) {
      failures.push({ file: "sitemap.xml", missing: [`URL fuori dominio canonico: ${url}`] });
      continue;
    }

    const pathname = new URL(url).pathname || "/";
    const normalizedPathname = pathname !== "/" ? pathname.replace(/\/$/, "") : "/";

    if (!routes.has(normalizedPathname)) {
      failures.push({
        file: "sitemap.xml",
        missing: [`URL senza pagina esportata: ${url}`],
      });
    }
  }
}


const indexNowKey = "540b2bf2be696b69b838724601bf46d7";
const indexNowKeyPath = path.join(root, `${indexNowKey}.txt`);
if (!fs.existsSync(indexNowKeyPath)) {
  failures.push({ file: `${indexNowKey}.txt`, missing: ["chiave IndexNow non trovata"] });
} else {
  const publishedKey = fs.readFileSync(indexNowKeyPath, "utf8").trim();
  if (publishedKey !== indexNowKey) {
    failures.push({ file: `${indexNowKey}.txt`, missing: ["contenuto chiave IndexNow non valido"] });
  }
}

const feedPath = path.join(root, "feed.xml");
if (!fs.existsSync(feedPath)) {
  failures.push({ file: "feed.xml", missing: ["file non trovato"] });
} else {
  const feed = fs.readFileSync(feedPath, "utf8");
  const feedChecks = [
    ["RSS 2.0", /<rss\b[^>]*version=["']2\.0["']/i.test(feed)],
    ["titolo feed", /<title>Approfondimenti Ingegneri &amp; Co<\/title>/i.test(feed)],
    ["link canonico", /<link>https:\/\/ingegnerieco\.it\/approfondimenti<\/link>/i.test(feed)],
    ["almeno un item", /<item>[\s\S]*?<\/item>/i.test(feed)],
  ];
  const missingFeed = feedChecks.filter(([, ok]) => !ok).map(([name]) => name);
  if (missingFeed.length) {
    failures.push({ file: "feed.xml", missing: missingFeed });
  }
}

const llmsPath = path.join(root, "llms.txt");
if (!fs.existsSync(llmsPath)) {
  failures.push({ file: "llms.txt", missing: ["file non trovato"] });
} else {
  const llms = fs.readFileSync(llmsPath, "utf8");
  const llmsChecks = [
    ["H1 Ingegneri & Co", /^# Ingegneri & Co/m.test(llms)],
    ["sezione servizi", /^## Servizi principali/m.test(llms)],
    ["link servizi", /https:\/\/ingegnerieco\.it\/servizi\//.test(llms)],
    ["link approfondimenti", /https:\/\/ingegnerieco\.it\/approfondimenti/.test(llms)],
    ["link progetti", /https:\/\/ingegnerieco\.it\/progetti/.test(llms)],
    ["link contatti", /https:\/\/ingegnerieco\.it\/contatti/.test(llms)],
  ];

  const missingLlms = llmsChecks.filter(([, ok]) => !ok).map(([name]) => name);
  if (missingLlms.length) {
    failures.push({ file: "llms.txt", missing: missingLlms });
  }

  const llmsUrls = [...llms.matchAll(/https:\/\/ingegnerieco\.it([^\s)]+)/g)].map(
    (match) => match[1] || "/"
  );

  for (const target of llmsUrls) {
    const normalized = target !== "/" ? target.replace(/\/$/, "") : "/";
    if (!routes.has(normalized)) {
      failures.push({ file: "llms.txt", missing: [`link interno non risolto: ${target}`] });
    }
  }
}



const assetBudgets = [
  { file: "imagine.webp", maxBytes: 300 * 1024 },
  { file: "logo.webp", maxBytes: 300 * 1024 },
];

for (const budget of assetBudgets) {
  const assetPath = path.join(root, budget.file);
  if (!fs.existsSync(assetPath)) {
    failures.push({ file: budget.file, missing: ["asset ottimizzato non trovato"] });
    continue;
  }

  const size = fs.statSync(assetPath).size;
  if (size > budget.maxBytes) {
    failures.push({
      file: budget.file,
      missing: [`peso ${(size / 1024).toFixed(1)} KB oltre budget ${(budget.maxBytes / 1024).toFixed(0)} KB`],
    });
  }
}

if (failures.length) {
  console.error("SEO smoke test fallito:");
  for (const failure of failures) {
    console.error(`- ${failure.file}: manca ${failure.missing.join(", ")}`);
  }
  process.exit(1);
}

console.log(`SEO smoke test OK: ${files.length} pagine HTML verificate.`);
