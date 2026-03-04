import { g as getContext, e as ensure_array_like, a as attr, b as attr_class, s as stringify, c as store_get, d as escape_html, u as unsubscribe_stores } from "../../chunks/index2.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import "../../chunks/state.svelte.js";
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children } = $$props;
    const navLinks = [
      { href: "/", label: "Centro de Comando" },
      { href: "/blog", label: "Stack Técnica" },
      { href: "/sobre", label: "Manifesto" },
      { href: "/workbench", label: "Bancada" },
      { href: "/compliance", label: "Conformidade" }
    ];
    $$renderer2.push(`<div class="min-h-screen flex flex-col bg-swiss-paper text-swiss-ink"><header class="border-b-hairline border-swiss-divider sticky top-0 bg-swiss-paper/80 backdrop-blur-sm z-50"><nav class="max-w-7xl mx-auto px-lg py-lg flex items-center justify-between"><a href="/" class="group flex flex-col items-start gap-xs"><span class="text-2xl font-serif font-semibold tracking-academic leading-none">AI-XP Playbook</span> <span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.2em] leading-none">Versão 1.0.0_SWISS</span></a> <ul class="hidden md:flex gap-xl"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", link.href)}${attr_class(`text-xs font-sans font-medium uppercase tracking-[0.1em] transition-all hover:text-swiss-accent ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href ? "text-swiss-ink" : "text-swiss-muted")}`)}>${escape_html(link.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul> <div class="md:hidden w-6 h-hairline bg-swiss-ink"></div></nav></header> <main class="flex-1">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> <footer class="border-t-hairline border-swiss-divider py-2xl mt-huge bg-white"><div class="max-w-7xl mx-auto px-lg"><div class="grid md:grid-cols-2 gap-xl items-start"><div><p class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-sm">Fundamentos da Engenharia de Alto Padrão</p> <p class="text-xs font-sans text-swiss-muted leading-relaxed">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} AI-XP Governance Framework. <br/>Baseado no Protocolo Akita-Driven &amp; Rigor Acadêmico Suíço.</p></div> <div class="flex md:justify-end gap-md"><div class="px-md py-xs border-hairline border-swiss-divider bg-swiss-paper text-[9px] font-mono uppercase tracking-widest">Status: <span class="text-brand-green font-bold">Estável</span></div> <div class="px-md py-xs border-hairline border-swiss-divider bg-swiss-paper text-[9px] font-mono uppercase tracking-widest">Padrão: <span class="text-swiss-ink font-bold">Swiss_04</span></div></div></div></div></footer></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
