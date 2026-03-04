import { describe, it, expect, vi } from 'vitest';
import { PostService } from './post.service';
import type { PostRepository } from './post.repository';

describe('PostService', () => {
	it('should return all published posts sorted by date', async () => {
		// Arrange
		const mockPosts = [
			{ slug: 'post-1', title: 'Post 1', date: '2026-01-01', description: 'Desc 1', published: true },
			{ slug: 'post-2', title: 'Post 2', date: '2026-02-01', description: 'Desc 2', published: true }
		];
		
		const mockRepo: PostRepository = {
			findAll: vi.fn().mockResolvedValue(mockPosts),
			findBySlug: vi.fn()
		};
		
		const service = new PostService(mockRepo);
		
		// Act
		const posts = await service.getAllPosts();
		
		// Assert
		expect(posts).toHaveLength(2);
		expect(posts[0].slug).toBe('post-2'); // Sorted by date desc
		expect(mockRepo.findAll).toHaveBeenCalled();
	});
});
