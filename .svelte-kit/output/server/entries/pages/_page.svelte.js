import { h as head, a as attr, e as ensure_array_like, s as stringify, d as escape_html, b as attr_class, i as clsx } from "../../chunks/index2.js";
import { b as base } from "../../chunks/server.js";
import "../../chunks/url.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import { H as Hero } from "../../chunks/Hero.js";
import { B as Button, T as Terminal } from "../../chunks/Button.js";
import { P as PostCard } from "../../chunks/PostCard.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const agentSteps = [
      { type: "input", text: "> iniciando protocolo AI-XP v1.0..." },
      { type: "success", text: "[OK] infraestrutura TDD verificada." },
      {
        type: "info",
        text: "[INFO] Escaneando domínio por violações de Clean Architecture..."
      },
      {
        type: "error",
        text: "[ERR] 3 vazamentos detectados na camada de Infraestrutura."
      },
      {
        type: "info",
        text: "> aplicando refatoração automatizada..."
      },
      {
        type: "success",
        text: "[FIXED] Domínio isolado. Todos os testes passando."
      }
    ];
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>AI-XP | Centro de Comando</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Engenharia de Software Agêntica com Rigor e Disciplina."/>`);
    });
    Hero($$renderer2, {
      title: "Engenharia com Rigor Acadêmico",
      subtitle: "Além do vibe coding. Precisão matemática, Clean Architecture e TDD Agêntico."
    });
    $$renderer2.push(`<!----> <div class="swiss-container"><div class="grid lg:grid-cols-12 gap-huge items-start"><div class="lg:col-span-7"><span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-lg block">Doutrina Primária / 01</span> <div class="space-y-xl mb-2xl"><h2 class="text-4xl md:text-5xl font-serif font-semibold tracking-academic leading-tight text-swiss-ink">Não apenas geramos código. <br/> <span class="text-swiss-muted">Arquitetamos sistemas determinísticos.</span></h2> <p class="text-lg text-swiss-muted font-sans leading-relaxed max-w-xl">O AI-XP Playbook é o framework definitivo para engenheiros que
          utilizam LLMs para construir software de classe mundial. Substituímos
          a intuição agêntica por protocolos estritos de verificação.</p></div> <div class="flex flex-wrap gap-md">`);
    Button($$renderer2, {
      label: "Stack Técnica",
      variant: "primary",
      onclick: () => window.location.href = `${base}/blog`
    });
    $$renderer2.push(`<!----> `);
    Button($$renderer2, {
      label: "Manifesto",
      variant: "outline",
      onclick: () => window.location.href = `${base}/sobre`
    });
    $$renderer2.push(`<!----></div></div> <div class="lg:col-span-5">`);
    Terminal($$renderer2, {
      title: "ai-agent-v1.sh",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="space-y-xs font-mono text-[12px]"><!--[-->`);
        const each_array = ensure_array_like(agentSteps);
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let step = each_array[$$index];
          $$renderer3.push(`<div class="flex gap-sm"><span class="text-white/20">[${escape_html((/* @__PURE__ */ new Date()).toLocaleTimeString())}]</span> <span${attr_class(clsx(step.type === "success" ? "text-brand-green" : step.type === "error" ? "text-brand-red" : step.type === "info" ? "text-brand-blue" : "text-white/60"))}>${escape_html(step.text)}</span></div>`);
        }
        $$renderer3.push(`<!--]--> <div class="flex gap-sm items-center"><span class="text-white/20">[${escape_html((/* @__PURE__ */ new Date()).toLocaleTimeString())}]</span> <span class="animate-pulse w-1.5 h-3 bg-swiss-accent"></span></div></div>`);
      }
    });
    $$renderer2.push(`<!----></div></div> <section class="mt-huge"><div class="flex items-end justify-between mb-2xl border-b-hairline border-swiss-divider pb-lg"><div><span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-xs block">Arquivo</span> <h2 class="text-3xl font-serif font-semibold tracking-academic text-swiss-ink uppercase">Últimas Specs</h2></div> <a${attr("href", `${stringify(base)}/blog`)} class="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-swiss-muted hover:text-swiss-ink transition-colors pb-1">Ver Índice →</a></div> `);
    if (data.posts && data.posts.length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex flex-col"><!--[-->`);
      const each_array_1 = ensure_array_like(data.posts);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let post = each_array_1[$$index_1];
        PostCard($$renderer2, { post });
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="py-huge border-hairline border-dashed border-swiss-divider text-center"><p class="text-swiss-muted font-mono italic text-sm tracking-widest uppercase">Nenhuma spec indexada no momento.</p></div>`);
    }
    $$renderer2.push(`<!--]--></section></div>`);
  });
}
export {
  _page as default
};
