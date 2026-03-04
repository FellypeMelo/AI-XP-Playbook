import { test, expect } from '@playwright/test';

test('manifesto page has mandatory iron laws', async ({ page }) => {
	await page.goto('/sobre');
	await expect(page.locator('h1')).toContainText('Manifesto');
	await expect(page.locator('text=Lei 1: TDD é Mandatório')).toBeVisible();
	await expect(page.locator('text=Iron Laws')).toBeVisible();
});
