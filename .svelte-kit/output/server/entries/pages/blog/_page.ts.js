import { g as getPosts } from "../../../chunks/posts.js";
const prerender = true;
const load = async () => {
  const posts = getPosts();
  return { posts };
};
export {
  load,
  prerender
};
