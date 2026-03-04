import type { PageLoad } from './$types';
import { PostService } from '../domain/post/post.service';
import { PostRepositoryImpl } from '../infra/post/post.repository.impl';

export const load: PageLoad = async () => {
	const repository = new PostRepositoryImpl();
	const service = new PostService(repository);
	const posts = await service.getAllPosts();
	return { posts };
};
