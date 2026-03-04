<script lang="ts">
  import type { PageData } from "./$types";
  import { base } from "$app/paths";
  import Hero from "$lib/components/ui/Hero.svelte";
  import Terminal from "$lib/components/ui/Terminal.svelte";
  import PostCard from "$lib/components/ui/PostCard.svelte";
  import Button from "$lib/components/ui/Button.svelte";

  let { data }: { data: PageData } = $props();

  const agentSteps = [
    { type: "input", text: "> iniciando protocolo AI-XP v1.0..." },
    { type: "success", text: "[OK] infraestrutura TDD verificada." },
    {
      type: "info",
      text: "[INFO] Escaneando domínio por violações de Clean Architecture...",
    },
    {
      type: "error",
      text: "[ERR] 3 vazamentos detectados na camada de Infraestrutura.",
    },
    { type: "info", text: "> aplicando refatoração automatizada..." },
    {
      type: "success",
      text: "[FIXED] Domínio isolado. Todos os testes passando.",
    },
  ];
</script>

<svelte:head>
  <title>AI-XP | Centro de Comando</title>
  <meta
    name="description"
    content="Engenharia de Software Agêntica com Rigor e Disciplina."
  />
</svelte:head>

<!-- Hero Section -->
<Hero
  title="Engenharia com Rigor Acadêmico"
  subtitle="Além do vibe coding. Precisão matemática, Clean Architecture e TDD Agêntico."
/>

<div class="swiss-container">
  <div class="grid lg:grid-cols-12 gap-huge items-start">
    <!-- Left: Philosophy & Call to Action -->
    <div class="lg:col-span-7">
      <span
        class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-lg block"
      >
        Doutrina Primária / 01
      </span>
      <div class="space-y-xl mb-2xl">
        <h2
          class="text-4xl md:text-5xl font-serif font-semibold tracking-academic leading-tight text-swiss-ink"
        >
          Não apenas geramos código. <br />
          <span class="text-swiss-muted"
            >Arquitetamos sistemas determinísticos.</span
          >
        </h2>
        <p class="text-lg text-swiss-muted font-sans leading-relaxed max-w-xl">
          O AI-XP Playbook é o framework definitivo para engenheiros que
          utilizam LLMs para construir software de classe mundial. Substituímos
          a intuição agêntica por protocolos estritos de verificação.
        </p>
      </div>

      <div class="flex flex-wrap gap-md">
        <Button
          label="Stack Técnica"
          variant="primary"
          onclick={() => (window.location.href = `${base}/blog`)}
        />
        <Button
          label="Manifesto"
          variant="outline"
          onclick={() => (window.location.href = `${base}/sobre`)}
        />
      </div>
    </div>

    <!-- Right: Agent Loop Simulation -->
    <div class="lg:col-span-5">
      <Terminal title="ai-agent-v1.sh">
        <div class="space-y-xs font-mono text-[12px]">
          {#each agentSteps as step}
            <div class="flex gap-sm">
              <span class="text-white/20"
                >[{new Date().toLocaleTimeString()}]</span
              >
              <span
                class={step.type === "success"
                  ? "text-brand-green"
                  : step.type === "error"
                    ? "text-brand-red"
                    : step.type === "info"
                      ? "text-brand-blue"
                      : "text-white/60"}
              >
                {step.text}
              </span>
            </div>
          {/each}
          <div class="flex gap-sm items-center">
            <span class="text-white/20"
              >[{new Date().toLocaleTimeString()}]</span
            >
            <span class="animate-pulse w-1.5 h-3 bg-swiss-accent"></span>
          </div>
        </div>
      </Terminal>
    </div>
  </div>

  <!-- Latest Entries List -->
  <section class="mt-huge">
    <div
      class="flex items-end justify-between mb-2xl border-b-hairline border-swiss-divider pb-lg"
    >
      <div>
        <span
          class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-xs block"
          >Arquivo</span
        >
        <h2
          class="text-3xl font-serif font-semibold tracking-academic text-swiss-ink uppercase"
        >
          Últimas Specs
        </h2>
      </div>
      <a
        href="{base}/blog"
        class="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-swiss-muted hover:text-swiss-ink transition-colors pb-1"
      >
        Ver Índice →
      </a>
    </div>

    {#if data.posts && data.posts.length > 0}
      <div class="flex flex-col">
        {#each data.posts as post}
          <PostCard {post} />
        {/each}
      </div>
    {:else}
      <div
        class="py-huge border-hairline border-dashed border-swiss-divider text-center"
      >
        <p
          class="text-swiss-muted font-mono italic text-sm tracking-widest uppercase"
        >
          Nenhuma spec indexada no momento.
        </p>
      </div>
    {/if}
  </section>
</div>
