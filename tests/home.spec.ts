import { test, expect } from '@playwright/test';

test('home page has technical branding', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toContainText('Engenharia de Software Agêntica');
	// Check for our new branding in the header
	await expect(page.locator('header')).toContainText('AI-XP');
	await expect(page.locator('nav')).toContainText('Command Center');
});
