import { a as getPost } from "../../../../chunks/posts.js";
import { error } from "@sveltejs/kit";
const prerender = true;
const load = async ({ params }) => {
  const post = getPost(params.slug);
  if (!post) {
    throw error(404, "Post não encontrado");
  }
  return {
    content: post.default,
    meta: post.metadata
  };
};
export {
  load,
  prerender
};
