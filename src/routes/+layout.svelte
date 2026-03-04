<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	
	let { children } = $props();
	
	const navLinks = [
		{ href: '/', label: 'Command Center' },
		{ href: '/blog', label: 'Tech Stack' },
		{ href: '/sobre', label: 'Manifesto' }
	];
</script>

<div class="min-h-screen flex flex-col bg-white text-technical-slate-900 selection:bg-brand-blue selection:text-white">
	<!-- Top Progress Bar (Conceptual) -->
	<div class="h-1 bg-brand-blue w-full opacity-20"></div>

	<!-- Header -->
	<header class="border-b-2 border-technical-slate-900 sticky top-0 bg-white/80 backdrop-blur-md z-50">
		<nav class="container mx-auto px-md py-md flex items-center justify-between">
			<a href="/" class="group flex items-center gap-sm">
				<div class="w-8 h-8 bg-technical-slate-900 flex items-center justify-center group-hover:bg-brand-blue transition-colors">
					<span class="text-white font-mono font-bold text-xs">XP</span>
				</div>
				<div class="flex flex-col leading-none">
					<span class="text-lg font-display font-black tracking-tighter uppercase">AI-XP</span>
					<span class="text-[10px] font-mono font-bold text-technical-slate-400 uppercase tracking-widest">Playbook.v1</span>
				</div>
			</a>
			
			<ul class="hidden md:flex gap-xl">
				{#each navLinks as link}
					<li>
						<a 
							href={link.href} 
							class="text-xs font-mono font-bold uppercase tracking-widest transition-all hover:text-brand-blue {$page.url.pathname === link.href ? 'text-brand-blue border-b-2 border-brand-blue' : 'text-technical-slate-500'}"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Mobile Menu Button (Conceptual) -->
			<button class="md:hidden p-sm">
				<div class="w-6 h-0.5 bg-technical-slate-900 mb-1"></div>
				<div class="w-6 h-0.5 bg-technical-slate-900 mb-1"></div>
				<div class="w-6 h-0.5 bg-technical-slate-900"></div>
			</button>
		</nav>
	</header>

	<!-- Main Content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t-2 border-technical-slate-900 py-xl mt-3xl bg-technical-slate-50">
		<div class="container mx-auto px-md">
			<div class="grid md:grid-cols-2 gap-xl items-center">
				<div>
					<p class="text-xs font-mono text-technical-slate-400 uppercase tracking-widest mb-sm">
						Built with Rigor & Agents
					</p>
					<p class="text-sm font-sans text-technical-slate-600">
						© {new Date().getFullYear()} AI-XP Governance Framework. 
						<br/>Licensed under MIT + Akita-Driven Protocol.
					</p>
				</div>
				<div class="flex md:justify-end gap-md">
					<div class="px-md py-sm border border-technical-slate-200 bg-white text-[10px] font-mono uppercase tracking-tighter">
						Status: <span class="text-brand-green font-bold">Stable</span>
					</div>
					<div class="px-md py-sm border border-technical-slate-200 bg-white text-[10px] font-mono uppercase tracking-tighter">
						Compliance: <span class="text-brand-blue font-bold">100%</span>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>
