<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	
	let { children } = $props();
	
	const navLinks = [
		{ href: '/', label: 'Início' },
		{ href: '/blog', label: 'Artigos' },
		{ href: '/sobre', label: 'Sobre' }
	];
</script>

<div class="min-h-screen flex flex-col">
	<!-- Header -->
	<header class="border-b border-gray-200 py-4">
		<nav class="max-w-4xl mx-auto px-4 flex items-center justify-between">
			<a href="/" class="text-xl font-bold tracking-tight">
				AI-XP <span class="text-gray-500">Playbook</span>
			</a>
			
			<ul class="flex gap-6">
				{#each navLinks as link}
					<li>
						<a 
							href={link.href} 
							class="text-sm link-underline {$page.url.pathname === link.href ? 'font-semibold' : 'text-gray-600'}"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</header>

	<!-- Main Content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-gray-200 py-6 mt-12">
		<div class="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
			<p>© {new Date().getFullYear()} AI-XP Playbook. Licença CC BY-SA.</p>
		</div>
	</footer>
</div>
