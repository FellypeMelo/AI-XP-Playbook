import { describe, it, expect, vi } from 'vitest';
import { PostRepositoryImpl } from './post.repository.impl';

describe('PostRepositoryImpl', () => {
	it('should list posts from filesystem', async () => {
		// Mock the glob import if necessary or test with real files
		// For now, let's assume we can mock the internal glob used by the impl
		const repo = new PostRepositoryImpl();
		const posts = await repo.findAll();
		
		expect(Array.isArray(posts)).toBe(true);
		expect(posts.length).toBeGreaterThan(0);
		expect(posts[0]).toHaveProperty('slug');
		expect(posts[0]).toHaveProperty('title');
	});
});
