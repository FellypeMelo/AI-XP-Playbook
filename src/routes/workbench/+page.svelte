<script lang="ts">
	import Hero from '$lib/components/ui/Hero.svelte';
	import Terminal from '$lib/components/ui/Terminal.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const tools = [
		{ name: 'codebase_investigator', description: 'Deep structural analysis and dependency mapping.', status: 'Active' },
		{ name: 'tdd_coder', description: 'Red-Green-Refactor automation with AST verification.', status: 'Active' },
		{ name: 'security_audit', description: 'SAST/DAST automated scanning for iron-clad code.', status: 'Ready' }
	];

	const prompts = [
		{ title: 'System Blueprinting', type: 'Architect', description: 'Generate C4 diagrams and high-level domain constraints.' },
		{ title: 'Surgical Refactor', type: 'Editor', description: 'Transform procedural code into Clean Architecture patterns.' },
		{ title: 'Test Generation', type: 'QA', description: 'Exhaustive edge-case discovery and unit test suite creation.' }
	];
</script>

<svelte:head>
	<title>AI-XP | Workbench</title>
	<meta name="description" content="Agent tools, prompt engineering library and workflow automation." />
</svelte:head>

<Hero 
	title="Agent Workbench" 
	subtitle="The operational control center for your AI-XP agent fleet."
/>

<div class="container mx-auto px-md py-2xl">
	<div class="grid lg:grid-cols-12 gap-2xl">
		
		<!-- Left: Tool Grid -->
		<div class="lg:col-span-8">
			<section class="mb-3xl">
				<h2 class="text-sm font-mono font-bold uppercase tracking-[0.2em] text-brand-blue mb-xl flex items-center gap-sm">
					<span class="w-12 h-px bg-brand-blue"></span> // Active Tooling
				</h2>
				
				<div class="grid md:grid-cols-2 gap-md">
					{#each tools as tool}
						<div class="border-2 border-technical-slate-900 p-lg bg-white">
							<div class="flex justify-between items-start mb-md">
								<h3 class="font-mono font-bold text-brand-blue">{tool.name}</h3>
								<span class="text-[10px] px-sm py-0.5 border border-brand-green text-brand-green font-bold uppercase tracking-tighter">
									{tool.status}
								</span>
							</div>
							<p class="text-sm text-technical-slate-600 font-sans leading-relaxed mb-lg">
								{tool.description}
							</p>
							<div class="flex justify-end">
								<button class="text-xs font-mono font-black uppercase tracking-widest hover:text-brand-blue transition-colors">
									Invoke_
								</button>
							</div>
						</div>
					{/each}
				</div>
			</section>

			<section>
				<h2 class="text-sm font-mono font-bold uppercase tracking-[0.2em] text-brand-blue mb-xl flex items-center gap-sm">
					<span class="w-12 h-px bg-brand-blue"></span> // Prompt Library
				</h2>
				
				<div class="space-y-md">
					{#each prompts as prompt}
						<div class="flex gap-lg border-b-2 border-technical-slate-100 pb-md hover:bg-technical-slate-50 transition-colors p-md cursor-pointer group">
							<div class="w-24 shrink-0 text-xs font-mono font-bold text-technical-slate-400 mt-1">
								[{prompt.type}]
							</div>
							<div>
								<h3 class="font-display font-black uppercase tracking-tight group-hover:text-brand-blue transition-colors">
									{prompt.title}
								</h3>
								<p class="text-sm text-technical-slate-600 font-sans">
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
				<h2 class="text-sm font-mono font-bold uppercase tracking-[0.2em] text-brand-blue mb-xl">
					// Agent Output
				</h2>
				<Terminal title="workbench.logs">
					<div class="text-[12px] font-mono text-technical-slate-400 space-y-sm">
						<p class="text-brand-green">[READY] Workbench initialized.</p>
						<p>> monitoring workspace: G:/Programas/AI-XP-Playbook</p>
						<p class="text-brand-blue">[INFO] Found 5 active specs.</p>
						<p class="text-brand-red">[ALERT] Pending refactor in /src/infra.</p>
						<div class="flex gap-sm items-center mt-xl">
							<span class="text-brand-blue font-bold">$</span>
							<span class="animate-pulse w-2 h-4 bg-brand-blue"></span>
						</div>
					</div>
				</Terminal>
				<div class="mt-lg">
					<Button label="Execute Protocol" variant="primary" onclick={() => {}} />
				</div>
			</div>
		</div>
	</div>
</div>
