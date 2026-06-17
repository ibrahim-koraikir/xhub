import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost:3000');

  // Verify Scroll Progress Bar
  const progressBar = await page.locator('header > div').first();
  const initialWidth = await progressBar.evaluate(el => el.style.width);
  console.log(`Initial progress bar width: ${initialWidth}`);

  // 1. Scroll and check progress bar
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
  await page.waitForTimeout(1000);
  const midWidth = await progressBar.evaluate(el => el.style.width);
  console.log(`Midpoint progress bar width: ${midWidth}`);

  // 2. Mobile Menu (viewport change)
  await page.setViewportSize({ width: 375, height: 667 });
  await page.waitForTimeout(1000);

  const menuButton = page.getByLabel(/menu/i).first();
  await menuButton.click();
  console.log('Mobile menu toggled');

  await page.waitForTimeout(1000);
  const mobileNavLinks = page.locator('header nav').last().locator('a');
  console.log(`Mobile nav links count: ${await mobileNavLinks.count()}`);

  // 3. Modal
  const installButton = page.getByLabel(/installation guide/i);
  await installButton.click();
  await page.waitForTimeout(1000);
  const modal = page.getByRole('dialog');
  console.log(`Modal visible: ${await modal.isVisible()}`);
  console.log(`Modal aria-labelledby: ${await modal.getAttribute('aria-labelledby')}`);

  // 4. Back to Top
  await page.evaluate(() => window.scrollTo(0, 2000));
  await page.waitForTimeout(1000);
  const backToTop = page.getByLabel(/back to top/i);
  console.log(`Back to top button visible: ${await backToTop.isVisible()}`);

  await page.screenshot({ path: 'verification_ux.png' });

  await browser.close();
})();
