<script lang="ts">
	import type { PageData } from './$types';
	
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Artigos | AI-XP Playbook</title>
	<meta name="description" content="Todos os artigos sobre Engenharia de Software Agêntica, TDD agêntico e práticas de XP com IA." />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12">
	<h1 class="text-3xl font-bold tracking-tight mb-8">Artigos</h1>

	{#if data.posts && data.posts.length > 0}
		<div class="space-y-8">
			{#each data.posts as post}
				<article class="group border-b border-gray-100 pb-8">
					<a href="/blog/{post.slug}" class="block">
						<div class="flex flex-col gap-2">
							<time class="text-sm text-gray-400">
								{post.date}
							</time>
							<h2 class="text-xl font-semibold group-hover:underline decoration-1 underline-offset-4">
								{post.title}
							</h2>
							<p class="text-gray-600">
								{post.description}
							</p>
							{#if post.tags}
								<div class="flex gap-2 mt-2">
									{#each post.tags as tag}
										<span class="text-xs px-2 py-1 bg-gray-100 text-gray-600">
											{tag}
										</span>
									{/each}
								</div>
							{/if}
						</div>
					</a>
				</article>
			{/each}
		</div>
	{:else}
		<p class="text-gray-500">Em breve...</p>
	{/if}
</div>
