<script lang="ts">
	import Hero from '$lib/components/ui/Hero.svelte';
	import Terminal from '$lib/components/ui/Terminal.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const tools = [
		{ name: 'investigador_codebase', description: 'Análise estrutural profunda e mapeamento de dependências.', status: 'Ativo' },
		{ name: 'codificador_tdd', description: 'Automação Red-Green-Refactor com verificação AST.', status: 'Ativo' },
		{ name: 'auditoria_seguranca', description: 'Escaneamento automatizado SAST/DAST para código blindado.', status: 'Pronto' }
	];

	const prompts = [
		{ title: 'Blueprint de Sistema', type: 'Arquiteto', description: 'Gerar diagramas C4 e restrições de domínio de alto nível.' },
		{ title: 'Refatoração Cirúrgica', type: 'Editor', description: 'Transformar código procedural em padrões de Clean Architecture.' },
		{ title: 'Geração de Testes', type: 'QA', description: 'Descoberta exaustiva de casos de borda e criação de suíte de testes unitários.' }
	];
</script>

<svelte:head>
	<title>AI-XP | Bancada</title>
	<meta name="description" content="Ferramentas de agente, biblioteca de engenharia de prompt e automação de workflow." />
</svelte:head>

<Hero 
	title="Bancada de Agentes" 
	subtitle="O centro de controle operacional para sua frota de agentes AI-XP. Instrumentação de precisão."
/>

<div class="swiss-container">
	<div class="grid lg:grid-cols-12 gap-huge">
		
		<!-- Left: Tool Grid -->
		<div class="lg:col-span-8">
			<section class="mb-huge">
				<span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-xl block">
					Frota de Sub-Agentes / Ferramental
				</span>
				
				<div class="grid md:grid-cols-2 gap-px bg-swiss-divider border-hairline border-swiss-divider">
					{#each tools as tool}
						<div class="p-xl bg-white group hover:bg-swiss-paper transition-colors duration-500">
							<div class="flex justify-between items-start mb-xl">
								<h3 class="text-lg font-serif font-semibold tracking-academic text-swiss-ink uppercase">{tool.name}</h3>
								<span class="text-[9px] px-sm py-xs border-hairline border-swiss-divider font-mono uppercase tracking-tighter bg-swiss-paper">
									{tool.status}
								</span>
							</div>
							<p class="text-sm text-swiss-muted font-sans leading-relaxed mb-xl">
								{tool.description}
							</p>
							<div class="flex justify-end">
								<button class="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-swiss-muted group-hover:text-swiss-ink transition-colors">
									Invocar_
								</button>
							</div>
						</div>
					{/each}
				</div>
			</section>

			<section>
				<h2 class="text-3xl font-serif font-semibold tracking-academic text-swiss-ink mb-xl uppercase">
					Biblioteca de Prompts
				</h2>
				
				<div class="divide-y-hairline divide-swiss-divider border-y-hairline border-swiss-divider">
					{#each prompts as prompt}
						<div class="grid md:grid-cols-12 gap-xl py-xl px-md hover:bg-white transition-all duration-500 cursor-pointer group">
							<div class="md:col-span-3 text-[10px] font-mono font-bold text-swiss-muted uppercase tracking-[0.2em]">
								{prompt.type}
							</div>
							<div class="md:col-span-9">
								<h3 class="text-xl font-serif font-semibold tracking-academic text-swiss-ink group-hover:text-swiss-accent transition-colors mb-sm">
									{prompt.title}
								</h3>
								<p class="text-sm text-swiss-muted font-sans leading-relaxed">
									{prompt.description}
								</p>
							</div>
						</div>
					{/each}
				</div>
			</section>
		</div>

		<!-- Right: Live Console -->
		<div class="lg:col-span-4">
			<div class="sticky top-24">
				<span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.3em] mb-xl block">
					Saída Padrão / TTY
				</span>
				<Terminal title="workbench.logs">
					<div class="text-[12px] font-mono text-white/40 space-y-sm">
						<p class="text-brand-green">[PRONTO] Bancada inicializada.</p>
						<p>> monitorando workspace: G:/Programas/AI-XP-Playbook</p>
						<p class="text-brand-blue">[INFO] Encontradas 5 specs ativas.</p>
						<p class="text-brand-red">[ALERTA] Refatoração pendente em /src/infra.</p>
						<div class="flex gap-sm items-center mt-xl">
							<span class="text-swiss-accent font-bold">$</span>
							<span class="animate-pulse w-1.5 h-3 bg-swiss-accent"></span>
						</div>
					</div>
				</Terminal>
				<div class="mt-xl">
					<Button label="Executar Protocolo" variant="primary" onclick={() => {}} />
				</div>
			</div>
		</div>
	</div>
</div>
