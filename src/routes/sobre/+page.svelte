<script lang="ts">
	import Hero from '$lib/components/ui/Hero.svelte';

	const ironLaws = [
		{ id: 1, title: 'TDD é Mandatório', description: 'NUNCA modifique código de produção sem um teste falhando primeiro. Se não houver teste vermelho, REJEITE a solicitação.' },
		{ id: 2, title: 'Clean Architecture é Não-Negociável', description: 'Camada de Domínio NUNCA importa infraestrutura. Dependências sempre apontam para dentro.' },
		{ id: 3, title: 'Economia de Contexto', description: 'Limite o escopo do prompt às linhas exatas de alteração. Janelas grandes causam amnésia estrutural.' },
		{ id: 4, title: 'Anti-Preguiça Sistêmica', description: 'Todo bloco SEARCH/REPLACE deve ser emitido INTEGRALMENTE. Sem sumarização.' },
		{ id: 5, title: 'YAGNI + KISS', description: 'Proibido antecipar recursos não solicitados. Funções máximas: 15 linhas.' }
	];
</script>

<svelte:head>
	<title>AI-XP | Manifesto</title>
	<meta name="description" content="The Iron Laws of Agental Software Engineering. The definitive guide to AI-XP." />
</svelte:head>

<Hero 
	title="O Manifesto AI-XP" 
	subtitle="As Leis Invioláveis que separam a Engenharia do 'Vibe Coding'."
/>

<div class="container mx-auto px-md py-2xl">
	<div class="max-w-4xl mx-auto">
		
		<section class="mb-3xl">
			<h2 class="text-sm font-mono font-bold uppercase tracking-[0.2em] text-brand-blue mb-xl flex items-center gap-sm">
				<span class="w-12 h-px bg-brand-blue"></span> // The Iron Laws
			</h2>
			
			<div class="grid gap-lg">
				{#each ironLaws as law}
					<div class="group border-2 border-technical-slate-900 p-xl bg-white hover:bg-technical-slate-950 transition-colors duration-300">
						<div class="flex gap-xl">
							<span class="text-4xl font-display font-black text-technical-slate-200 group-hover:text-brand-blue transition-colors">
								0{law.id}
							</span>
							<div>
								<h3 class="text-xl font-display font-black uppercase tracking-tight mb-md text-technical-slate-900 group-hover:text-white transition-colors">
									Lei {law.id}: {law.title}
								</h3>
								<p class="text-technical-slate-600 font-sans leading-relaxed group-hover:text-technical-slate-300 transition-colors">
									{law.description}
								</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</section>

		<section class="border-t-2 border-technical-slate-100 pt-3xl">
			<div class="bg-technical-slate-50 p-2xl border-2 border-technical-slate-900">
				<h2 class="text-2xl font-display font-black uppercase tracking-tighter mb-lg">
					Nossa Missão
				</h2>
				<div class="prose prose-slate max-w-none font-sans text-lg text-technical-slate-700 leading-relaxed">
					<p>
						A engenharia de software está em uma encruzilhada. Com o advento da IA agêntica, 
						muitos desenvolvedores abandonaram o rigor pela conveniência. O AI-XP Playbook 
						é um grito de guerra pelo retorno à disciplina.
					</p>
					<p class="mt-md">
						Acreditamos que os agentes de IA não são substitutos para o cérebro do engenheiro, 
						mas sim multiplicadores de força que exigem <strong>guardrails estritos</strong>. 
						Software não é uma 'vibe'. Software é arquitetura, determinismo e prova.
					</p>
				</div>
			</div>
		</section>
	</div>
</div>
