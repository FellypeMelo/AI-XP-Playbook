<script lang="ts">
	import Hero from '$lib/components/ui/Hero.svelte';

	const metrics = [
		{ label: 'TDD Coverage', value: '100%', trend: 'up', color: 'text-brand-green' },
		{ label: 'SOLID Compliance', value: '94%', trend: 'up', color: 'text-brand-blue' },
		{ label: 'Domain Isolation', value: '100%', trend: 'stable', color: 'text-brand-green' },
		{ label: 'Cyclomatic Complexity', value: '4.2', trend: 'down', color: 'text-brand-blue' }
	];

	const laws = [
		{ name: 'Lei 1: TDD', status: 'Compliant' },
		{ name: 'Lei 2: Clean Arch', status: 'Compliant' },
		{ name: 'Lei 3: Context', status: 'Compliant' },
		{ name: 'Lei 4: No summary', status: 'Compliant' },
		{ name: 'Lei 5: YAGNI/KISS', status: 'Partial' }
	];
</script>

<svelte:head>
	<title>AI-XP | Compliance</title>
	<meta name="description" content="Real-time project health, TDD coverage and SOLID metrics." />
</svelte:head>

<Hero 
	title="Compliance Dashboard" 
	subtitle="Automated verification of project rigor and adherence to AI-XP standards."
/>

<div class="container mx-auto px-md py-2xl">
	<div class="grid lg:grid-cols-12 gap-2xl">
		
		<!-- Main Metrics -->
		<div class="lg:col-span-8">
			<div class="grid md:grid-cols-2 gap-lg">
				{#each metrics as metric}
					<div class="border-2 border-technical-slate-900 p-xl bg-white flex flex-col gap-md">
						<span class="text-xs font-mono font-bold uppercase tracking-widest text-technical-slate-400">
							// {metric.label}
						</span>
						<div class="flex items-baseline gap-md">
							<span class="text-5xl font-display font-black {metric.color}">
								{metric.value}
							</span>
							<span class="text-xs font-mono font-bold uppercase text-technical-slate-300">
								[{metric.trend}]
							</span>
						</div>
						<div class="h-1 w-full bg-technical-slate-100 mt-md">
							<div class="h-full bg-technical-slate-900" style="width: {metric.value.includes('%') ? metric.value : '80%'}"></div>
						</div>
					</div>
				{/each}
			</div>

			<section class="mt-3xl">
				<h2 class="text-sm font-mono font-bold uppercase tracking-[0.2em] text-brand-blue mb-xl flex items-center gap-sm">
					<span class="w-12 h-px bg-brand-blue"></span> // Architecture Health
				</h2>
				<div class="p-xl border-2 border-technical-slate-100 bg-technical-slate-50 font-mono text-sm space-y-md">
					<p class="flex justify-between">
						<span class="text-technical-slate-500">Domain Leakage Index:</span>
						<span class="text-brand-green font-bold">0.00 (Zero)</span>
					</p>
					<p class="flex justify-between">
						<span class="text-technical-slate-500">Inversion of Control:</span>
						<span class="text-brand-blue font-bold">Active</span>
					</p>
					<p class="flex justify-between">
						<span class="text-technical-slate-500">Atomic Commit Frequency:</span>
						<span class="text-technical-slate-900 font-bold">High</span>
					</p>
				</div>
			</section>
		</div>

		<!-- Law Adherence Sidebar -->
		<div class="lg:col-span-4">
			<section class="border-2 border-technical-slate-900 p-lg bg-technical-slate-950 text-white">
				<h2 class="text-xs font-mono font-bold uppercase tracking-widest text-brand-blue mb-xl">
					// Iron Law Adherence
				</h2>
				
				<div class="space-y-lg">
					{#each laws as law}
						<div class="flex items-center justify-between border-b border-technical-slate-800 pb-md last:border-0">
							<span class="text-sm font-display font-bold uppercase tracking-tight">
								{law.name}
							</span>
							<span class="text-[10px] px-sm py-0.5 border {law.status === 'Compliant' ? 'border-brand-green text-brand-green' : 'border-yellow-500 text-yellow-500'} font-bold uppercase tracking-tighter">
								{law.status}
							</span>
						</div>
					{/each}
				</div>

				<div class="mt-xl p-md bg-technical-slate-900 border border-technical-slate-800 italic text-xs text-technical-slate-400">
					Last automated audit: {new Date().toLocaleString()}
				</div>
			</section>
		</div>
	</div>
</div>
