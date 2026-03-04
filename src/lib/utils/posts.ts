export interface Post {
	slug: string;
	title: string;
	description: string;
	date: string;
	tags?: string[];
	published?: boolean;
}

const postModules = import.meta.glob('/src/posts/*.md', { eager: true });

export function getPosts(): Post[] {
	const posts: Post[] = [];
	
	for (const path in postModules) {
		const module = postModules[path] as any;
		if (module.metadata && module.metadata.published !== false) {
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
	
	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): { default: any; metadata: any } | null {
	const path = `/src/posts/${slug}.md`;
	const module = postModules[path] as any;
	
	if (module) {
		return module;
	}
	
	return null;
}
