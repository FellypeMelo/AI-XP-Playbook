<script lang="ts">
	import type { PageData } from './$types';
	import PostCard from '$lib/components/ui/PostCard.svelte';
	import Hero from '$lib/components/ui/Hero.svelte';
	
	let { data }: { data: PageData } = $props();

	let searchQuery = $state('');
	
	let filteredPosts = $derived(
		data.posts.filter(post => 
			post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
		)
	);

	let allTags = [...new Set(data.posts.flatMap(p => p.tags || []))].sort();
</script>

<svelte:head>
	<title>AI-XP | Tech Stack</title>
	<meta name="description" content="Technical specifications and architectural patterns for Agental Software Engineering." />
</svelte:head>

<Hero 
	title="Tech Stack & Specs" 
	subtitle="Knowledge base for AI-XP patterns, architectural decisions, and agent protocols."
/>

<div class="container mx-auto px-md py-xl">
	<div class="flex flex-col lg:flex-row gap-xl">
		
		<!-- Sidebar: Filters -->
		<aside class="lg:w-64 shrink-0">
			<div class="sticky top-24 space-y-xl">
				<div>
					<h3 class="text-xs font-mono font-bold uppercase tracking-widest text-technical-slate-400 mb-md">
						Search
					</h3>
					<div class="relative">
						<input 
							type="text" 
							placeholder="Pesquisar specs..." 
							bind:value={searchQuery}
							class="w-full bg-technical-slate-50 border-2 border-technical-slate-200 px-md py-sm font-mono text-sm focus:border-technical-slate-900 focus:outline-none transition-colors"
						/>
						<div class="absolute right-md top-1/2 -translate-y-1/2 text-technical-slate-300">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
							</svg>
						</div>
					</div>
				</div>

				<div>
					<h3 class="text-xs font-mono font-bold uppercase tracking-widest text-technical-slate-400 mb-md">
						Active Tags
					</h3>
					<div class="flex flex-wrap gap-xs">
						{#each allTags as tag}
							<button 
								class="text-[10px] px-sm py-1 border rounded-full transition-colors {searchQuery === tag ? 'bg-brand-blue text-white border-brand-blue' : 'bg-white text-technical-slate-600 border-technical-slate-200 hover:border-technical-slate-900'}"
								onclick={() => searchQuery = searchQuery === tag ? '' : tag}
							>
								#{tag}
							</button>
						{/each}
					</div>
				</div>
			</div>
		</aside>

		<!-- Main Content: Post Grid -->
		<div class="flex-1">
			<div class="flex items-center justify-between mb-lg border-b border-technical-slate-100 pb-sm">
				<span class="text-xs font-mono text-technical-slate-400">
					Displaying {filteredPosts.length} of {data.posts.length} entries
				</span>
			</div>

			{#if filteredPosts.length > 0}
				<div class="grid md:grid-cols-2 gap-lg">
					{#each filteredPosts as post}
						<PostCard {post} />
					{/each}
				</div>
			{:else}
				<div class="py-3xl text-center border-2 border-dashed border-technical-slate-100 bg-technical-slate-50">
					<p class="font-mono text-technical-slate-400">No results found for "{searchQuery}"</p>
					<button 
						class="mt-md text-xs font-bold uppercase text-brand-blue hover:underline"
						onclick={() => searchQuery = ''}
					>
						Clear filters
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>
