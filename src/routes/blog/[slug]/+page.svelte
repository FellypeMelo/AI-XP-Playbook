<script lang="ts">
  import type { PageData } from "./$types";
  import { base } from "$app/paths";

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.meta.title} | AI-XP Playbook</title>
  <meta name="description" content={data.meta.description} />
</svelte:head>

<article class="max-w-3xl mx-auto px-4 py-12">
  <!-- Post Header -->
  <header class="mb-12">
    <a
      href="{base}/blog"
      class="text-sm text-gray-500 hover:text-black mb-4 inline-block"
    >
      ← Voltar aos artigos
    </a>

    <h1 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
      {data.meta.title}
    </h1>

    <div class="flex items-center gap-4 text-sm text-gray-500">
      <time>{data.meta.date}</time>
      {#if data.meta.tags}
        <span>•</span>
        <div class="flex gap-2">
          {#each data.meta.tags as tag}
            <span class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs">
              {tag}
            </span>
          {/each}
        </div>
      {/if}
    </div>
  </header>

  <!-- Post Content -->
  <div class="prose prose-gray prose-lg max-w-none">
    <svelte:component this={data.content} />
  </div>

  <!-- Post Footer -->
  <footer class="mt-12 pt-8 border-t border-gray-200">
    <a href="{base}/blog" class="text-sm text-gray-500 hover:text-black">
      ← Voltar aos artigos
    </a>
  </footer>
</article>
