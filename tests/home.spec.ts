import { test, expect } from '@playwright/test';

test('home page has technical branding', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toContainText('Engenharia de Software Agêntica');
	// Check for our new design system elements (conceptual)
	const body = page.locator('body');
	await expect(body).toHaveClass(/antialiased/);
});
