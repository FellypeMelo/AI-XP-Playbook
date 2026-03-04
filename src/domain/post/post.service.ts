import type { Post } from './post';
import type { PostRepository } from './post.repository';

export class PostService {
	constructor(private repository: PostRepository) {}

	async getAllPosts(): Promise<Post[]> {
		const posts = await this.repository.findAll();
		return posts
			.filter(post => post.published !== false)
			.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	}

	async getPostBySlug(slug: string): Promise<Post | null> {
		return this.repository.findBySlug(slug);
	}
}
