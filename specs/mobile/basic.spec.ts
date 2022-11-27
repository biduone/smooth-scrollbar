import { expect, test } from '@playwright/test';

test('smooth-scrollbar homepage', async ({ page }) => {
  
  await page.goto('/', {
    waitUntil: 'domcontentloaded'
  });

  await expect(page).toHaveTitle('Smooth Scrollbar');
});
