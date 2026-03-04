import { h as head, d as escape_html, e as ensure_array_like } from "../../../chunks/index2.js";
import { P as PostCard } from "../../../chunks/PostCard.js";
import { H as Hero } from "../../../chunks/Hero.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("u4k2t", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Stack Técnica | AI-XP Playbook</title>`);
      });
    });
    Hero($$renderer2, {
      title: "Índice da Stack Técnica",
      subtitle: "As escolhas arquiteturais e padrões agênticos que definem o software de alto padrão."
    });
    $$renderer2.push(`<!----> <div class="swiss-container"><div class="flex items-end justify-between mb-2xl border-b-hairline border-swiss-divider pb-lg"><div><span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-xs block">Registro</span> <h2 class="text-3xl font-serif font-semibold tracking-academic text-swiss-ink uppercase">Todas as Especificações</h2></div> <span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.2em] pb-1">${escape_html(data.posts.length)} entradas_encontradas</span></div> <div class="flex flex-col"><!--[-->`);
    const each_array = ensure_array_like(data.posts);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let post = each_array[$$index];
      PostCard($$renderer2, { post });
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
export {
  _page as default
};
