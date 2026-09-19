import fs from "node:fs";
import path from "node:path";

const root = path.resolve("out");

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
  const sitemapUrls = new Set(
    [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => match[1].trim())
  );

  for (const file of files) {
    const html = fs.readFileSync(file, "utf8");
    const canonicalTag = html.match(/<link[^>]*rel=["']canonical["'][^>]*>/i)?.[0];
    const canonical = canonicalTag?.match(/href=["']([^"']+)["']/i)?.[1];

    if (canonical && !sitemapUrls.has(canonical)) {
      failures.push({
        file: path.relative(root, file).replaceAll("\\", "/"),
        missing: [`canonical non presente in sitemap: ${canonical}`],
      });
    }
  }

  for (const url of sitemapUrls) {
    if (!url.startsWith("https://ingegnerieco.it/") && url !== "https://ingegnerieco.it") {
      failures.push({ file: "sitemap.xml", missing: [`URL fuori dominio canonico: ${url}`] });
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
