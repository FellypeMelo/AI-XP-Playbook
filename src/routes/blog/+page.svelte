<script lang="ts">
	import type { PageData } from './$types';
	import PostCard from '$lib/components/ui/PostCard.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Stack Técnica | AI-XP Playbook</title>
</svelte:head>

<Hero 
	title="Índice da Stack Técnica" 
	subtitle="As escolhas arquiteturais e padrões agênticos que definem o software de alto padrão." 
/>

<div class="swiss-container">
	<div class="flex items-end justify-between mb-2xl border-b-hairline border-swiss-divider pb-lg">
		<div>
			<span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-xs block">Registro</span>
			<h2 class="text-3xl font-serif font-semibold tracking-academic text-swiss-ink uppercase">
				Todas as Especificações
			</h2>
		</div>
		<span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.2em] pb-1">
			{data.posts.length} entradas_encontradas
		</span>
	</div>

	<div class="flex flex-col">
		{#each data.posts as post}
			<PostCard {post} />
		{/each}
	</div>
</div>
