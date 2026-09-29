import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const fotosDir = path.resolve("public/media/fotos");
const files = fs.readdirSync(fotosDir).filter(f => /\.(jpe?g|png)$/i.test(f));

console.log(`Analyzing ${files.length} images in ${fotosDir}...\n`);

for (const f of files) {
  const full = path.join(fotosDir, f);
  try {
    const probe = execSync(
      `ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=s=x:p=0 "${full}"`,
      { encoding: "utf8" }
    ).trim();
    const stat = fs.statSync(full);
    const sizeKb = Math.round(stat.size / 1024);
    console.log(`${f.padEnd(45)} | ${probe.padEnd(10)} | ${sizeKb} KB`);
  } catch (err) {
    console.error(`Error on ${f}:`, err.message);
  }
}
