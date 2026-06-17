import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('--- Starting Modal UX Verification ---');

  try {
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

    // 1. Verify Modal can be opened
    console.log('Testing modal open...');
    await page.getByRole('button', { name: 'Open installation guide' }).click();
    await page.waitForTimeout(500); // Wait for animation

    // 2. Verify ARIA attributes
    console.log('Verifying ARIA attributes...');
    const modal = page.getByRole('dialog');
    const isModalVisible = await modal.isVisible();
    if (!isModalVisible) throw new Error('Modal dialog not found by role');

    const ariaModal = await modal.getAttribute('aria-modal');
    if (ariaModal !== 'true') throw new Error('aria-modal="true" missing');

    const ariaLabelledBy = await modal.getAttribute('aria-labelledby');
    if (ariaLabelledBy !== 'modal-title') throw new Error('aria-labelledby missing or incorrect');

    const headingId = await page.locator('#modal-title').getAttribute('id');
    if (headingId !== 'modal-title') throw new Error('Heading ID missing');

    // 3. Verify Scroll Locking
    console.log('Verifying scroll locking...');
    const overflow = await page.evaluate(() => document.body.style.overflow);
    if (overflow !== 'hidden') throw new Error('Body scroll not locked');

    // 4. Verify Escape Key
    console.log('Testing Escape key...');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500); // Wait for animation
    const isModalVisibleAfterEscape = await modal.isVisible();
    if (isModalVisibleAfterEscape) throw new Error('Modal did not close on Escape key');

    // 5. Verify Scroll Restoring
    console.log('Verifying scroll restoring...');
    const overflowAfterClose = await page.evaluate(() => document.body.style.overflow);
    if (overflowAfterClose !== '') throw new Error('Body scroll not restored');

    console.log('✅ All Modal UX verifications passed!');
  } catch (error) {
    console.error('❌ Verification failed:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
