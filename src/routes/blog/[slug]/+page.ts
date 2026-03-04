import { getPost } from '$lib/utils/posts';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load = async ({ params }) => {
	const post = getPost(params.slug);
	
	if (!post) {
		throw error(404, 'Post não encontrado');
	}
	
	return {
		content: post.default,
		meta: post.metadata
	};
};
