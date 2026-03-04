<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	
	let { children } = $props();
	
	const navLinks = [
		{ href: '/', label: 'Centro de Comando' },
		{ href: '/blog', label: 'Stack Técnica' },
		{ href: '/sobre', label: 'Manifesto' },
		{ href: '/workbench', label: 'Bancada' },
		{ href: '/compliance', label: 'Conformidade' }
	];
</script>

<div class="min-h-screen flex flex-col bg-swiss-paper text-swiss-ink">
	<!-- Header -->
	<header class="border-b-hairline border-swiss-divider sticky top-0 bg-swiss-paper/80 backdrop-blur-sm z-50">
		<nav class="max-w-7xl mx-auto px-lg py-lg flex items-center justify-between">
			<a href="/" class="group flex flex-col items-start gap-xs">
				<span class="text-2xl font-serif font-semibold tracking-academic leading-none">AI-XP Playbook</span>
				<span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.2em] leading-none">Versão 1.0.0_SWISS</span>
			</a>
			
			<ul class="hidden md:flex gap-xl">
				{#each navLinks as link}
					<li>
						<a 
							href={link.href} 
							class="text-xs font-sans font-medium uppercase tracking-[0.1em] transition-all hover:text-swiss-accent {$page.url.pathname === link.href ? 'text-swiss-ink' : 'text-swiss-muted'}"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>

			<!-- Mobile Indicator -->
			<div class="md:hidden w-6 h-hairline bg-swiss-ink"></div>
		</nav>
	</header>

	<!-- Main Content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t-hairline border-swiss-divider py-2xl mt-huge bg-white">
		<div class="max-w-7xl mx-auto px-lg">
			<div class="grid md:grid-cols-2 gap-xl items-start">
				<div>
					<p class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-sm">
						Fundamentos da Engenharia de Alto Padrão
					</p>
					<p class="text-xs font-sans text-swiss-muted leading-relaxed">
						© {new Date().getFullYear()} AI-XP Governance Framework. 
						<br/>Baseado no Protocolo Akita-Driven & Rigor Acadêmico Suíço.
					</p>
				</div>
				<div class="flex md:justify-end gap-md">
					<div class="px-md py-xs border-hairline border-swiss-divider bg-swiss-paper text-[9px] font-mono uppercase tracking-widest">
						Status: <span class="text-brand-green font-bold">Estável</span>
					</div>
					<div class="px-md py-xs border-hairline border-swiss-divider bg-swiss-paper text-[9px] font-mono uppercase tracking-widest">
						Padrão: <span class="text-swiss-ink font-bold">Swiss_04</span>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>
