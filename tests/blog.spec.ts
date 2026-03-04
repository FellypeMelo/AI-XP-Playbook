import { test, expect } from '@playwright/test';

test('tech stack page lists specs and filters by search', async ({ page }) => {
	await page.goto('/blog');
	await expect(page.locator('h1')).toContainText('Tech Stack');
	
	const postCards = page.locator('article');
	const initialCount = await postCards.count();
	expect(initialCount).toBeGreaterThan(0);

	// Search simulation (conceptual - will be implemented)
	await page.fill('input[placeholder*="Pesquisar"]', 'AI-XP');
	// Wait for filtering logic
	await expect(postCards).toContainText(['AI-XP']);
});
