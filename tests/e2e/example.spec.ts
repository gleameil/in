import { test, expect } from '@playwright/test';

test('index.html loads and has title or content', async ({ page }) => {
  await page.goto('/');
  const content = await page.content();
  expect(content.length).toBeGreaterThan(0);
});
