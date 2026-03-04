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
      { href: "/", label: "Início" },
      { href: "/blog", label: "Artigos" },
      { href: "/sobre", label: "Sobre" }
    ];
    $$renderer2.push(`<div class="min-h-screen flex flex-col"><header class="border-b border-gray-200 py-4"><nav class="max-w-4xl mx-auto px-4 flex items-center justify-between"><a href="/" class="text-xl font-bold tracking-tight">AI-XP <span class="text-gray-500">Playbook</span></a> <ul class="flex gap-6"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", link.href)}${attr_class(`text-sm link-underline ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === link.href ? "font-semibold" : "text-gray-600")}`)}>${escape_html(link.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></nav></header> <main class="flex-1">`);
    children($$renderer2);
    $$renderer2.push(`<!----></main> <footer class="border-t border-gray-200 py-6 mt-12"><div class="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} AI-XP Playbook. Licença CC BY-SA.</p></div></footer></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};
