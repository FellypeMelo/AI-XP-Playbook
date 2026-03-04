import { test, expect } from '@playwright/test';

test('workbench page shows agent tools and prompt library', async ({ page }) => {
	await page.goto('/workbench');
	await expect(page.locator('h1')).toContainText('Agent Workbench');
	await expect(page.locator('text=Prompt Library')).toBeVisible();
});
