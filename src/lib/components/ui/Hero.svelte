<script lang="ts">
	let { title, subtitle } = $props<{
		title: string;
		subtitle: string;
	}>();
</script>

<section class="py-2xl border-b-2 border-technical-slate-900 bg-technical-slate-50">
	<div class="container mx-auto px-md">
		<div class="max-w-3xl">
			<h1 class="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase mb-md text-technical-slate-950">
				{title}
			</h1>
			<p class="text-xl md:text-2xl text-technical-slate-600 font-mono leading-relaxed max-w-2xl">
				<span class="text-brand-blue font-bold">//</span> {subtitle}
			</p>
		</div>
	</div>
</section>
