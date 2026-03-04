import { error } from '@sveltejs/kit';
import { PostService } from '../../../domain/post/post.service';
import { PostRepositoryImpl } from '../../../infra/post/post.repository.impl';

export const prerender = true;

export const load = async ({ params }) => {
	const repository = new PostRepositoryImpl();
	const service = new PostService(repository);
	
	const post = await service.getPostBySlug(params.slug);
	
	if (!post) {
		throw error(404, 'Post não encontrado');
	}

	const content = await repository.getContent(params.slug);
	
	return {
		content,
		meta: post
	};
};
