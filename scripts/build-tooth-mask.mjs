import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const src = resolve(here, "..", "public", "imagery", "cosmetic.webp");
const out = resolve(here, "..", "public", "imagery", "tooth-mask.png");

const { data, info } = await sharp(src)
  .ensureAlpha()
  .extractChannel("alpha")
  .raw()
  .toBuffer({ resolveWithObject: true });

const rgba = Buffer.alloc(info.width * info.height * 4);
for (let i = 0; i < data.length; i++) {
  const a = data[i];
  rgba[i * 4 + 0] = 0;
  rgba[i * 4 + 1] = 0;
  rgba[i * 4 + 2] = 0;
  rgba[i * 4 + 3] = a;
}

await sharp(rgba, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(out);

console.log(`wrote ${out} (${info.width}x${info.height})`);
