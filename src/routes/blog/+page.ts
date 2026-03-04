import { getPosts } from '$lib/utils/posts';

export const prerender = true;

export const load = async () => {
	const posts = getPosts();
	return { posts };
};
