import { test, expect } from "@playwright/test";

// Key routes covered by visual regression.
// After edits to a page, run `npm run test:visual` — diffs against committed baselines.
// Accept new output as baseline with `npm run test:visual:update`.
const routes = [
  { name: "home", path: "/" },
  { name: "why-us", path: "/why-us/" },
  { name: "emergency", path: "/dental-emergency/" },
  { name: "services-index", path: "/services/" },
  { name: "services-general", path: "/services/general-dentistry/" },
  {
    name: "services-oral-exams",
    path: "/services/general-dentistry/oral-exams-x-rays/",
  },
  { name: "our-team", path: "/our-team/" },
  { name: "for-patients", path: "/for-patients/" },
  { name: "contact", path: "/contact/" },
];

// Freeze CSS animations and hide caret for deterministic screenshots.
const freezeStyles = `
  *, *::before, *::after {
    transition-duration: 0s !important;
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    caret-color: transparent !important;
  }
`;

for (const route of routes) {
  test(`${route.name} matches baseline`, async ({ page }) => {
    await page.goto(route.path, { waitUntil: "networkidle" });
    await page.addStyleTag({ content: freezeStyles });
    // Wait one frame so freeze-styles apply before capture.
    await page.waitForTimeout(100);
    await expect(page).toHaveScreenshot(`${route.name}.png`, {
      fullPage: true,
    });
  });
}
