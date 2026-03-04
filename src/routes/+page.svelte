<script lang="ts">
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>AI-XP Playbook | Engenharia de Software Agêntica</title>
	<meta name="description" content="Blog técnico sobre Extreme Programming com Agentes de IA. Aprenda TDD agêntico, orquestração multiagente e Clean Architecture." />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12">
	<!-- Hero Section -->
	<section class="mb-16">
		<h1 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">
			Engenharia de Software<br class="md:hidden" /> Agêntica
		</h1>
		<p class="text-xl text-gray-600 max-w-2xl">
			Práticas disciplinadas de Extreme Programming combinadas com agentes de IA. 
			Além do "vibe coding".
		</p>
	</section>

	<!-- Latest Posts -->
	<section>
		<h2 class="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-8">
			Últimos Artigos
		</h2>

		{#if data.posts && data.posts.length > 0}
			<div class="space-y-8">
				{#each data.posts as post}
					<article class="group">
						<a href="/blog/{post.slug}" class="block">
							<div class="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
								<time class="text-sm text-gray-400 w-32 shrink-0">
									{post.date}
								</time>
								<div>
									<h3 class="text-lg font-semibold group-hover:underline decoration-1 underline-offset-4">
										{post.title}
									</h3>
									<p class="text-gray-600 mt-1 line-clamp-2">
										{post.description}
									</p>
									{#if post.tags}
										<div class="flex gap-2 mt-3">
											{#each post.tags as tag}
												<span class="text-xs px-2 py-1 bg-gray-100 text-gray-600">
													{tag}
												</span>
											{/each}
										</div>
									{/if}
								</div>
							</div>
						</a>
					</article>
				{/each}
			</div>
		{:else}
			<p class="text-gray-500">Em breve novos artigos...</p>
		{/if}
	</section>

	<!-- About Section -->
	<section class="mt-16 pt-12 border-t border-gray-200">
		<div class="bg-gray-50 p-8">
			<h2 class="text-lg font-semibold mb-3">O que é AI-XP?</h2>
			<p class="text-gray-600 mb-4">
				AI-XP (Artificially Intelligent eXtreme Programming) é a aplicação de práticas 
				disciplinadas de XP — TDD, refatoração, integração contínua — no contexto de 
				desenvolvimento com agentes de IA.
			</p>
			<a href="/sobre" class="text-sm font-medium underline underline-offset-4">
				Saiba mais →
			</a>
		</div>
	</section>
</div>
