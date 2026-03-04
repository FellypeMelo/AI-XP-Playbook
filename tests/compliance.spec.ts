import { test, expect } from '@playwright/test';

test('compliance page shows project metrics and iron law adherence', async ({ page }) => {
	await page.goto('/compliance');
	await expect(page.locator('h1')).toContainText('Compliance Dashboard');
	await expect(page.locator('text=TDD Coverage')).toBeVisible();
	await expect(page.locator('text=SOLID Compliance')).toBeVisible();
});
