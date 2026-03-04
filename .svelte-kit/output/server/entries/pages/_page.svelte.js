import { ac as head, e as ensure_array_like, a as attr, s as stringify, d as escape_html } from "../../chunks/index2.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>AI-XP Playbook | Engenharia de Software Agêntica</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Blog técnico sobre Extreme Programming com Agentes de IA. Aprenda TDD agêntico, orquestração multiagente e Clean Architecture."/>`);
    });
    $$renderer2.push(`<div class="max-w-4xl mx-auto px-4 py-12"><section class="mb-16"><h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">Engenharia de Software<br class="md:hidden"/> Agêntica</h1> <p class="text-xl text-gray-600 max-w-2xl">Práticas disciplinadas de Extreme Programming combinadas com agentes de IA. 
			Além do "vibe coding".</p></section> <section><h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-8">Últimos Artigos</h2> `);
    if (data.posts && data.posts.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="space-y-8"><!--[-->`);
      const each_array = ensure_array_like(data.posts);
      for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
        let post = each_array[$$index_1];
        $$renderer2.push(`<article class="group"><a${attr("href", `/blog/${stringify(post.slug)}`)} class="block"><div class="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6"><time class="text-sm text-gray-400 w-32 shrink-0">${escape_html(post.date)}</time> <div><h3 class="text-lg font-semibold group-hover:underline decoration-1 underline-offset-4">${escape_html(post.title)}</h3> <p class="text-gray-600 mt-1 line-clamp-2">${escape_html(post.description)}</p> `);
        if (post.tags) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="flex gap-2 mt-3"><!--[-->`);
          const each_array_1 = ensure_array_like(post.tags);
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let tag = each_array_1[$$index];
            $$renderer2.push(`<span class="text-xs px-2 py-1 bg-gray-100 text-gray-600">${escape_html(tag)}</span>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div></div></a></article>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<p class="text-gray-500">Em breve novos artigos...</p>`);
    }
    $$renderer2.push(`<!--]--></section> <section class="mt-16 pt-12 border-t border-gray-200"><div class="bg-gray-50 p-8"><h2 class="text-lg font-semibold mb-3">O que é AI-XP?</h2> <p class="text-gray-600 mb-4">AI-XP (Artificially Intelligent eXtreme Programming) é a aplicação de práticas 
				disciplinadas de XP — TDD, refatoração, integração contínua — no contexto de 
				desenvolvimento com agentes de IA.</p> <a href="/sobre" class="text-sm font-medium underline underline-offset-4">Saiba mais →</a></div></section></div>`);
  });
}
export {
  _page as default
};
