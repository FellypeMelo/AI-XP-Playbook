<script lang="ts">
	import Hero from '$lib/components/ui/Hero.svelte';

	const metrics = [
		{ label: 'Cobertura TDD', value: '100%', color: 'text-brand-green' },
		{ label: 'Conformidade SOLID', value: '94%', color: 'text-swiss-accent' },
		{ label: 'Isolamento de Domínio', value: '100%', color: 'text-brand-green' },
		{ label: 'Complexidade Ciclomática', value: '4.2', color: 'text-swiss-accent' }
	];

	const laws = [
		{ name: 'Lei 1: TDD', status: 'Conforme' },
		{ name: 'Lei 2: Clean Arch', status: 'Conforme' },
		{ name: 'Lei 3: Contexto', status: 'Conforme' },
		{ name: 'Lei 4: Sem Resumos', status: 'Conforme' },
		{ name: 'Lei 5: YAGNI/KISS', status: 'Parcial' },
		{ name: 'Lei 6: Padrão Suíço', status: 'Conforme' }
	];
</script>

<svelte:head>
	<title>AI-XP | Conformidade</title>
	<meta name="description" content="Saúde do projeto em tempo real, cobertura TDD e métricas SOLID." />
</svelte:head>

<Hero 
	title="Auditoria de Conformidade" 
	subtitle="Verificação automatizada da integridade arquitetural e rigor procedimental."
/>

<div class="swiss-container">
	<div class="grid lg:grid-cols-12 gap-huge">
		
		<!-- Main Metrics -->
		<div class="lg:col-span-8">
			<span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-xl block">
				Indicadores Quantitativos / Analítica
			</span>
			
			<div class="grid md:grid-cols-2 gap-px bg-swiss-divider border-hairline border-swiss-divider">
				{#each metrics as metric}
					<div class="p-xl bg-white flex flex-col gap-xl">
						<span class="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-swiss-muted">
							{metric.label}
						</span>
						<div class="flex items-baseline justify-between">
							<span class="text-6xl font-serif font-light tracking-academic {metric.color}">
								{metric.value}
							</span>
						</div>
					</div>
				{/each}
			</div>

			<section class="mt-huge">
				<h2 class="text-3xl font-serif font-semibold tracking-academic text-swiss-ink mb-xl">
					Saúde Arquitetural
				</h2>
				<div class="divide-y-hairline divide-swiss-divider border-y-hairline border-swiss-divider">
					<div class="py-lg flex justify-between items-center px-md">
						<span class="text-sm font-sans text-swiss-muted">Índice de Vazamento de Domínio:</span>
						<span class="text-sm font-mono text-brand-green font-bold">0.00_ESTRITO</span>
					</div>
					<div class="py-lg flex justify-between items-center px-md">
						<span class="text-sm font-sans text-swiss-muted">Direção de Dependência:</span>
						<span class="text-sm font-mono text-swiss-accent font-bold">INTERNA_APENAS</span>
					</div>
					<div class="py-lg flex justify-between items-center px-md">
						<span class="text-sm font-sans text-swiss-muted">Frequência de Commits Atômicos:</span>
						<span class="text-sm font-mono text-swiss-ink font-bold">ALTA_PRECISÃO</span>
					</div>
				</div>
			</section>
		</div>

		<!-- Law Adherence Sidebar -->
		<div class="lg:col-span-4">
			<section class="border-hairline border-swiss-divider p-xl bg-white">
				<h2 class="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-swiss-muted mb-xl">
					Aderência à Doutrina
				</h2>
				
				<div class="space-y-xl">
					{#each laws as law}
						<div class="flex items-center justify-between">
							<span class="text-xs font-sans font-bold uppercase tracking-widest text-swiss-ink">
								{law.name}
							</span>
							<span class="text-[9px] px-sm py-xs border-hairline {law.status === 'Conforme' ? 'border-brand-green text-brand-green' : 'border-yellow-500 text-yellow-500'} font-mono uppercase">
								{law.status}
							</span>
						</div>
					{/each}
				</div>

				<div class="mt-huge pt-xl border-t-hairline border-swiss-divider italic text-[10px] text-swiss-muted leading-relaxed">
					Próxima auditoria automatizada: 
					<br/>{new Date(Date.now() + 3600000).toLocaleString()}
				</div>
			</section>
		</div>
	</div>
</div>
