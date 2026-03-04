<script lang="ts">
	let { title, subtitle } = $props<{
		title: string;
		subtitle: string;
	}>();
</script>

<section class="bg-swiss-paper border-b-hairline border-swiss-divider">
	<div class="swiss-container">
		<div class="max-w-4xl">
			<span class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.4em] mb-xl block">
				Protocolo Conceitual / AI-XP
			</span>
			<h1 class="text-5xl md:text-8xl font-serif font-semibold tracking-academic leading-[1.1] mb-xl text-swiss-ink">
				{title}
			</h1>
			<p class="text-xl md:text-2xl text-swiss-muted font-sans leading-relaxed max-w-2xl border-l-2 border-swiss-accent pl-lg italic">
				{subtitle}
			</p>
		</div>
	</div>
</section>
