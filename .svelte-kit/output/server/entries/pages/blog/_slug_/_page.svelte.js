import { h as head, a as attr, d as escape_html, e as ensure_array_like, s as stringify } from "../../../../chunks/index2.js";
import { b as base } from "../../../../chunks/server.js";
import "../../../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/root.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("1teoznn", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(data.meta.title)} | AI-XP Playbook</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", data.meta.description)}/>`);
    });
    $$renderer2.push(`<article class="max-w-3xl mx-auto px-4 py-12"><header class="mb-12"><a${attr("href", `${stringify(base)}/blog`)} class="text-sm text-gray-500 hover:text-black mb-4 inline-block">← Voltar aos artigos</a> <h1 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">${escape_html(data.meta.title)}</h1> <div class="flex items-center gap-4 text-sm text-gray-500"><time>${escape_html(data.meta.date)}</time> `);
    if (data.meta.tags) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<span>•</span> <div class="flex gap-2"><!--[-->`);
      const each_array = ensure_array_like(data.meta.tags);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        $$renderer2.push(`<span class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs">${escape_html(tag)}</span>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></header> <div class="prose prose-gray prose-lg max-w-none">`);
    if (data.content) {
      $$renderer2.push("<!--[-->");
      data.content($$renderer2, {});
      $$renderer2.push("<!--]-->");
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push("<!--]-->");
    }
    $$renderer2.push(`</div> <footer class="mt-12 pt-8 border-t border-gray-200"><a${attr("href", `${stringify(base)}/blog`)} class="text-sm text-gray-500 hover:text-black">← Voltar aos artigos</a></footer></article>`);
  });
}
export {
  _page as default
};
