<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title = 'terminal', children } = $props<{
		title?: string;
		children?: Snippet;
	}>();
</script>

<div class="bg-swiss-ink rounded-none overflow-hidden border-hairline border-swiss-ink font-mono text-sm shadow-none">
	<!-- Title Bar -->
	<div class="bg-swiss-ink border-b-hairline border-white/10 px-md py-sm flex items-center gap-sm">
		<div class="flex gap-xs">
			<div class="w-2 h-2 bg-brand-red"></div>
			<div class="w-2 h-2 bg-yellow-500"></div>
			<div class="w-2 h-2 bg-brand-green"></div>
		</div>
		<div class="flex-1 text-center text-white/40 text-[10px] uppercase tracking-widest select-none">
			{title}
		</div>
	</div>
	
	<!-- Content Area -->
	<div class="p-lg text-white/90 min-h-[200px] leading-relaxed">
		{@render children?.()}
	</div>
</div>
