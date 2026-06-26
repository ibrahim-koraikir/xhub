import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  try {
    await page.goto('http://localhost:3000');
    await page.setViewportSize({ width: 1280, height: 800 });

    console.log('Checking for "How to Install" button...');
    const installButton = page.getByRole('button', { name: /How to Install/i });
    await installButton.click();

    console.log('Waiting for modal to appear...');
    const modal = page.getByText(/Install in 60 seconds/i);
    await modal.waitFor({ state: 'visible', timeout: 5000 });
    console.log('Modal is visible!');

    await page.screenshot({ path: 'modal_verified.png' });

    console.log('Closing modal...');
    const closeButton = page.locator('button').filter({ has: page.locator('svg') }).first(); // Close button is an icon
    await closeButton.click();

    await modal.waitFor({ state: 'hidden', timeout: 5000 });
    console.log('Modal is hidden!');

  } catch (error) {
    console.error('Verification failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
