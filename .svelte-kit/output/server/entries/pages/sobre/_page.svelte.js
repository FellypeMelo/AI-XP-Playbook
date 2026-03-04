import { ac as head, e as ensure_array_like, d as escape_html } from "../../../chunks/index2.js";
import { H as Hero } from "../../../chunks/Hero.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ironLaws = [
      {
        id: 1,
        title: "TDD is Mandatory",
        description: "NEVER modify production code without a failing test first. If there is no red test, REJECT the request."
      },
      {
        id: 2,
        title: "Clean Architecture is Non-Negotiable",
        description: "The Domain layer NEVER imports infrastructure. Dependencies always point inward."
      },
      {
        id: 3,
        title: "Context Efficiency",
        description: "Limit prompt scope to the exact lines of change. Large windows cause structural amnesia."
      },
      {
        id: 4,
        title: "Anti-Lazy Systemics",
        description: "Every SEARCH/REPLACE block must be emitted INTEGRALLY. No summarization or omissions."
      },
      {
        id: 5,
        title: "YAGNI + KISS",
        description: "Prohibited from anticipating unsolicited features. Maximum functions: 15 logical lines."
      },
      {
        id: 6,
        title: "Swiss Standard of Documentation",
        description: "Mandatory adherence to academic authority, high-readability typography, and minimalist layout."
      }
    ];
    head("x824lu", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>AI-XP | Manifesto</title>`);
      });
      $$renderer3.push(`<meta name="description" content="The Iron Laws of Agentic Software Engineering. The definitive guide to AI-XP."/>`);
    });
    Hero($$renderer2, {
      title: "The AI-XP Manifesto",
      subtitle: "The Inviolable Laws that separate high-standard engineering from mere 'vibe coding'."
    });
    $$renderer2.push(`<!----> <div class="swiss-container"><div class="max-w-4xl mx-auto"><section class="mb-huge"><span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-xl block text-center">Codified Doctrine / The Iron Laws</span> <div class="flex flex-col"><!--[-->`);
    const each_array = ensure_array_like(ironLaws);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let law = each_array[$$index];
      $$renderer2.push(`<div class="border-t-hairline border-swiss-divider py-2xl group transition-all duration-500 hover:bg-white hover:px-lg -mx-lg"><div class="grid md:grid-cols-12 gap-xl"><div class="md:col-span-2"><span class="text-5xl font-serif font-light text-swiss-divider group-hover:text-swiss-ink transition-colors">${escape_html(law.id.toString().padStart(2, "0"))}</span></div> <div class="md:col-span-10"><h3 class="text-2xl font-serif font-semibold tracking-academic text-swiss-ink mb-md">${escape_html(law.title)}</h3> <p class="text-lg text-swiss-muted font-sans leading-relaxed">${escape_html(law.description)}</p></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="border-t-hairline border-swiss-divider pt-huge"><div class="bg-white p-2xl border-hairline border-swiss-divider"><span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-lg block">Mission Statement</span> <h2 class="text-4xl font-serif font-semibold tracking-academic text-swiss-ink mb-xl">Foundational Intent</h2> <div class="prose prose-slate max-w-none font-sans text-lg text-swiss-muted leading-relaxed space-y-lg"><p>Software engineering is at a crossroads. With the advent of agentic AI, 
						many developers have abandoned rigor for convenience. The AI-XP Playbook 
						is a call to arms for the return of discipline.</p> <p>We believe that AI agents are not substitutes for the engineer's brain, 
						but force multipliers that require <strong>strict guardrails</strong>. 
						Software is not a 'vibe'. Software is architecture, determinism, and proof.</p></div></div></section></div></div>`);
  });
}
export {
  _page as default
};
