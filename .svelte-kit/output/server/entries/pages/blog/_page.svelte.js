import { ac as head, e as ensure_array_like, a as attr, s as stringify, d as escape_html } from "../../../chunks/index2.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("u4k2t", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Artigos | AI-XP Playbook</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Todos os artigos sobre Engenharia de Software Agêntica, TDD agêntico e práticas de XP com IA."/>`);
    });
    $$renderer2.push(`<div class="max-w-4xl mx-auto px-4 py-12"><h1 class="text-3xl font-bold tracking-tight mb-8">Artigos</h1> `);
    if (data.posts && data.posts.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="space-y-8"><!--[-->`);
      const each_array = ensure_array_like(data.posts);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let post = each_array[$$index_1];
        $$renderer2.push(`<article class="group border-b border-gray-100 pb-8"><a${attr("href", `/blog/${stringify(post.slug)}`)} class="block"><div class="flex flex-col gap-2"><time class="text-sm text-gray-400">${escape_html(post.date)}</time> <h2 class="text-xl font-semibold group-hover:underline decoration-1 underline-offset-4">${escape_html(post.title)}</h2> <p class="text-gray-600">${escape_html(post.description)}</p> `);
        if (post.tags) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="flex gap-2 mt-2"><!--[-->`);
          const each_array_1 = ensure_array_like(post.tags);
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let tag = each_array_1[$$index];
            $$renderer2.push(`<span class="text-xs px-2 py-1 bg-gray-100 text-gray-600">${escape_html(tag)}</span>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div></a></article>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<p class="text-gray-500">Em breve...</p>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
