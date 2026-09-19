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

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const missing = checks.filter(([, test]) => !test(html)).map(([name]) => name);
  if (missing.length) {
    failures.push({
      file: path.relative(root, file).replaceAll("\\", "/"),
      missing,
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
