#!/usr/bin/env node
// Capture reference screenshots from rundlehornsmilesdental.com for pixel-diff comparison.
// Run after every reference change, or before starting work on a page.
// Output: tests/visual/references/<slug>.png (desktop) and tests/visual/references/<slug>.mobile.png

import { chromium, devices } from "playwright";
import { mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");
const OUT_DIR = resolve(REPO_ROOT, "tests/visual/references");

const REFERENCE_BASE = "https://rundlehornsmilesdental.com";
const ROUTES = [
  { slug: "home", path: "/" },
  { slug: "why-us", path: "/why-us/" },
  { slug: "emergency", path: "/dental-emergency-ne-calgary/" },
  { slug: "our-team", path: "/our-team/" },
  { slug: "contact", path: "/contact-us/" },
  { slug: "general-dentistry", path: "/general-dentistry/" },
  { slug: "cosmetic-care", path: "/cosmetic-care/" },
  { slug: "for-patients", path: "/for-patients/" },
];

const capture = async (browser, profile, route) => {
  const ctx = await browser.newContext(profile.contextOptions);
  const page = await ctx.newPage();
  const url = REFERENCE_BASE + route.path;
  console.log(`  [${profile.name}] → ${url}`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
  const suffix = profile.name === "desktop" ? "" : `.${profile.name}`;
  const out = resolve(OUT_DIR, `${route.slug}${suffix}.png`);
  await page.screenshot({ path: out, fullPage: true });
  await ctx.close();
};

const run = async () => {
  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const profiles = [
    { name: "desktop", contextOptions: { viewport: { width: 1440, height: 900 } } },
    { name: "mobile", contextOptions: { ...devices["Pixel 7"] } },
  ];

  for (const route of ROUTES) {
    for (const profile of profiles) {
      await capture(browser, profile, route);
    }
  }

  await browser.close();
  console.log(`\n✓ references → ${OUT_DIR}`);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
