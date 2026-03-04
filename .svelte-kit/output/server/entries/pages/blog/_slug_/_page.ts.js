import { error } from "@sveltejs/kit";
import { P as PostService, a as PostRepositoryImpl } from "../../../../chunks/post.repository.impl.js";
const prerender = true;
const load = async ({ params }) => {
  const repository = new PostRepositoryImpl();
  const service = new PostService(repository);
  const post = await service.getPostBySlug(params.slug);
  if (!post) {
    throw error(404, "Post não encontrado");
  }
  const content = await repository.getContent(params.slug);
  return {
    content,
    meta: post
  };
};
export {
  load,
  prerender
};
