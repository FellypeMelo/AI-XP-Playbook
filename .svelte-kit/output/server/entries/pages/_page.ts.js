import { P as PostService, a as PostRepositoryImpl } from "../../chunks/post.repository.impl.js";
const load = async () => {
  const repository = new PostRepositoryImpl();
  const service = new PostService(repository);
  const posts = await service.getAllPosts();
  return { posts };
};
export {
  load
};
