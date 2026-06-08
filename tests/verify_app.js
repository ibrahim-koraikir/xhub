import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Wait for server to be ready
  let attempts = 0;
  while (attempts < 10) {
    try {
      await page.goto('http://localhost:3000');
      break;
    } catch (e) {
      attempts++;
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  await page.setViewportSize({ width: 1280, height: 800 });

  // Wait for animations/images
  await page.waitForTimeout(2000);

  await page.screenshot({ path: 'verification.png', fullPage: true });

  await browser.close();
})();
