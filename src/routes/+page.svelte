<script lang="ts">
	import type { PageData } from './$types';
	import Hero from '$lib/components/ui/Hero.svelte';
	import Terminal from '$lib/components/ui/Terminal.svelte';
	import PostCard from '$lib/components/ui/PostCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	
	let { data }: { data: PageData } = $props();

	const agentSteps = [
		{ type: 'input', text: '> initiating protocol AI-XP v1.0...' },
		{ type: 'success', text: '[OK] TDD infrastructure verified.' },
		{ type: 'info', text: '[INFO] Scanning domain for Clean Architecture violations...' },
		{ type: 'error', text: '[ERR] 3 leaks detected in Infrastructure layer.' },
		{ type: 'info', text: '> applying automated refactoring...' },
		{ type: 'success', text: '[FIXED] Domain isolated. All tests passing.' }
	];
</script>

<svelte:head>
	<title>AI-XP | Command Center</title>
	<meta name="description" content="Engenharia de Software Agêntica com Rigor e Disciplina." />
</svelte:head>

<!-- Hero Section -->
<Hero 
	title="Engenharia de Software Agêntica" 
	subtitle="Além do 'vibe coding'. Rigor matemático, Clean Architecture e TDD agêntico."
/>

<div class="container mx-auto px-md py-2xl">
	<div class="grid lg:grid-cols-12 gap-2xl">
		
		<!-- Left: Philosophy & Call to Action -->
		<div class="lg:col-span-7 flex flex-col justify-center">
			<h2 class="text-sm font-mono font-bold uppercase tracking-[0.2em] text-brand-blue mb-md">
				// Core Philosophy
			</h2>
			<div class="space-y-md mb-xl">
				<p class="text-2xl md:text-3xl font-display font-bold leading-tight uppercase">
					Não geramos apenas código. <br/>
					<span class="text-technical-slate-400">Construímos sistemas determinísticos.</span>
				</p>
				<p class="text-lg text-technical-slate-600 font-sans leading-relaxed">
					O AI-XP Playbook é o framework definitivo para engenheiros que utilizam LLMs para 
					construir software de classe mundial. Substituímos a intuição agêntica por 
					protocolos estritos de verificação.
				</p>
			</div>
			
			<div class="flex gap-md">
				<Button label="Explorar Tech Stack" variant="primary" onclick={() => window.location.href = '/blog'} />
				<Button label="Ler Manifesto" variant="outline" onclick={() => window.location.href = '/sobre'} />
			</div>
		</div>

		<!-- Right: Agent Loop Simulation -->
		<div class="lg:col-span-5">
			<Terminal title="ai-agent-v1.sh">
				<div class="space-y-xs font-mono text-[13px]">
					{#each agentSteps as step}
						<div class="flex gap-sm">
							<span class="text-technical-slate-500">[{new Date().toLocaleTimeString()}]</span>
							<span class={
								step.type === 'success' ? 'text-brand-green' : 
								step.type === 'error' ? 'text-brand-red' : 
								step.type === 'info' ? 'text-brand-blue' : 'text-technical-slate-300'
							}>
								{step.text}
							</span>
						</div>
					{/each}
					<div class="flex gap-sm items-center">
						<span class="text-technical-slate-500">[{new Date().toLocaleTimeString()}]</span>
						<span class="animate-pulse w-2 h-4 bg-brand-blue"></span>
					</div>
				</div>
			</Terminal>
		</div>
	</div>

	<!-- Latest Entries Grid -->
	<section class="mt-3xl">
		<div class="flex items-center justify-between mb-xl border-b-2 border-technical-slate-100 pb-md">
			<h2 class="text-2xl font-display font-black uppercase tracking-tighter">
				Últimas Specs
			</h2>
			<a href="/blog" class="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue hover:underline">
				Ver todos →
			</a>
		</div>

		{#if data.posts && data.posts.length > 0}
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
				{#each data.posts as post}
					<PostCard {post} />
				{/each}
			</div>
		{:else}
			<div class="p-2xl border-2 border-dashed border-technical-slate-200 text-center">
				<p class="text-technical-slate-400 font-mono italic text-sm">Nenhuma spec indexada no momento.</p>
			</div>
		{/if}
	</section>
</div>
