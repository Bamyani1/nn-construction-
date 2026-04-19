#!/usr/bin/env node
// Converts NN-pictures/*.HEIC -> public/assets/projects/<slug>/NN.webp
// Pipeline: sips (HEIC -> q95 JPEG) -> sharp (resize 1600px max, EXIF-rotate, WebP q80).
// Re-runnable: wipes each slug folder before writing.

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, renameSync, rmSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { randomUUID } from "node:crypto";
import sharp from "sharp";

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const SRC = join(ROOT, "NN-pictures");
const DST = join(ROOT, "public", "assets", "projects");
const TMP = join("/tmp", "nn-build");

// Folder name on disk -> slug in /public/assets/projects/
const SLUG_MAP = {
  "Bathroom-remodel": "primary-bath-renovation",
  "Break-work": "brick-facade-restoration",
  "Foundation waterproofing ": "foundation-waterproofing",
  "New roof in Brooklyn ": "brooklyn-flat-roof",
  "roof-work": "standing-seam-reroof",
  "window": "custom-window-install",
};

// Hero-first order per slug (filenames without extension). Hero is index 0.
const ORDER = {
  "standing-seam-reroof": [
    "IMG_1747", "IMG_1754", "IMG_1848", "IMG_2695", "IMG_2696", "IMG_2698",
    "IMG_3520", "IMG_3540", "IMG_3541", "IMG_3682", "IMG_4777", "IMG_4780", "IMG_4819",
  ],
  "brooklyn-flat-roof": ["IMG_6516", "IMG_6469", "IMG_6470"],
  "primary-bath-renovation": ["IMG_0796", "IMG_0671", "IMG_0677", "IMG_0745"],
  "brick-facade-restoration": ["IMG_0763", "IMG_0580", "IMG_0597", "IMG_0599", "IMG_0749", "IMG_0753"],
  "foundation-waterproofing": ["IMG_2558", "IMG_1009", "IMG_1010", "IMG_1014", "IMG_2557"],
  "custom-window-install": ["IMG_2664", "IMG_2631", "IMG_2634", "IMG_2656"],
};

function ensure(dir) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

function pad(n) {
  return String(n).padStart(2, "0");
}

async function convert(heicPath, outPath) {
  const tmpJpg = join(TMP, `${randomUUID()}.jpg`);
  execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "95", heicPath, "--out", tmpJpg], { stdio: ["ignore", "ignore", "inherit"] });
  await sharp(tmpJpg)
    .rotate() // apply EXIF orientation
    .resize({ width: 1600, height: 1600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(outPath);
  rmSync(tmpJpg, { force: true });
}

async function main() {
  ensure(TMP);
  ensure(DST);

  let totalIn = 0;
  let totalOut = 0;
  let totalCount = 0;
  const skipped = [];

  for (const [folder, slug] of Object.entries(SLUG_MAP)) {
    const srcDir = join(SRC, folder);
    if (!existsSync(srcDir)) {
      console.warn(`! Source folder missing: ${folder}`);
      continue;
    }

    const dstDir = join(DST, slug);
    // Write into a tmp folder first; rename to final only after every file
    // for this slug succeeds. If sips or sharp throws mid-way, the live
    // destination is left untouched so the production site is never empty.
    const tmpDir = join(DST, `${slug}.tmp-${randomUUID().slice(0, 8)}`);
    ensure(tmpDir);

    const available = new Set(
      readdirSync(srcDir).filter((f) => !f.startsWith("."))
    );

    for (const f of available) {
      if (f.toLowerCase().endsWith(".mov")) {
        skipped.push(`${folder}/${f}`);
      }
    }

    const order = ORDER[slug] || [];
    let idx = 1;
    let folderIn = 0;
    let folderOut = 0;

    try {
      for (const base of order) {
        const heicName = `${base}.HEIC`;
        if (!available.has(heicName)) {
          console.warn(`  ! ${folder}/${heicName} not found, skipping`);
          continue;
        }
        const heicPath = join(srcDir, heicName);
        const outPath = join(tmpDir, `${pad(idx)}.webp`);
        const inBytes = statSync(heicPath).size;
        await convert(heicPath, outPath);
        const outBytes = statSync(outPath).size;
        folderIn += inBytes;
        folderOut += outBytes;
        console.log(`  ${slug}/${pad(idx)}.webp  ${(inBytes / 1024).toFixed(0)}KB -> ${(outBytes / 1024).toFixed(0)}KB  (${base})`);
        idx += 1;
      }

      // All files succeeded — atomic swap tmp -> final.
      if (existsSync(dstDir)) rmSync(dstDir, { recursive: true, force: true });
      renameSync(tmpDir, dstDir);
    } catch (err) {
      // Something broke mid-run — leave the old dstDir in place, drop the tmp.
      rmSync(tmpDir, { recursive: true, force: true });
      throw err;
    }

    totalIn += folderIn;
    totalOut += folderOut;
    totalCount += idx - 1;
    console.log(`→ ${slug}: ${idx - 1} files, ${(folderIn / 1024 / 1024).toFixed(1)}MB -> ${(folderOut / 1024 / 1024).toFixed(1)}MB\n`);
  }

  console.log(`Done. ${totalCount} webps written.`);
  console.log(`Total: ${(totalIn / 1024 / 1024).toFixed(1)}MB HEIC -> ${(totalOut / 1024 / 1024).toFixed(1)}MB WebP (${((1 - totalOut / totalIn) * 100).toFixed(0)}% reduction).`);
  if (skipped.length) console.log(`Skipped (MOV): ${skipped.join(", ")}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
