import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const publicDir = path.resolve("public");

const assets = [
  {
    input: path.join(publicDir, "imagine.png"),
    output: path.join(publicDir, "imagine.webp"),
    options: { quality: 86, alphaQuality: 100, effort: 5, smartSubsample: true },
  },
  {
    input: path.join(publicDir, "logo.png"),
    output: path.join(publicDir, "logo.webp"),
    options: { lossless: true, effort: 6 },
  },
];

function kb(bytes) {
  return (bytes / 1024).toFixed(1);
}

for (const asset of assets) {
  if (!fs.existsSync(asset.input)) {
    throw new Error(`Immagine sorgente non trovata: ${asset.input}`);
  }

  const inputStat = fs.statSync(asset.input);
  const outputExists = fs.existsSync(asset.output);
  const outputStat = outputExists ? fs.statSync(asset.output) : null;

  if (outputStat && outputStat.mtimeMs >= inputStat.mtimeMs) {
    console.log(
      `Image optimization: ${path.basename(asset.output)} già aggiornato (${kb(outputStat.size)} KB)`
    );
    continue;
  }

  await sharp(asset.input).webp(asset.options).toFile(asset.output);

  const resultStat = fs.statSync(asset.output);
  const reduction = ((1 - resultStat.size / inputStat.size) * 100).toFixed(1);
  console.log(
    `Image optimization: ${path.basename(asset.input)} ${kb(inputStat.size)} KB -> ${path.basename(asset.output)} ${kb(resultStat.size)} KB (-${reduction}%)`
  );
}
