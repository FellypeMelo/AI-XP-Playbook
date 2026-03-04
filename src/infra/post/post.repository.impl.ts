import type { Post } from '../../domain/post/post';
import type { PostRepository } from '../../domain/post/post.repository';

export class PostRepositoryImpl implements PostRepository {
	private postModules = import.meta.glob('/src/posts/*.md', { eager: true });

	async findAll(): Promise<Post[]> {
		const posts: Post[] = [];
		
		for (const path in this.postModules) {
			const module = this.postModules[path] as any;
			if (module.metadata) {
				posts.push({
					slug: path.replace('/src/posts/', '').replace('.md', ''),
					title: module.metadata.title,
					description: module.metadata.description,
					date: module.metadata.date,
					tags: module.metadata.tags,
					published: module.metadata.published
				});
			}
		}
		
		return posts;
	}

	async findBySlug(slug: string): Promise<Post | null> {
		const path = `/src/posts/${slug}.md`;
		const module = this.postModules[path] as any;
		
		if (!module) return null;

		return {
			slug,
			title: module.metadata.title,
			description: module.metadata.description,
			date: module.metadata.date,
			tags: module.metadata.tags,
			published: module.metadata.published
		};
	}
}
