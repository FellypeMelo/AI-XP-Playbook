<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title = 'terminal', children } = $props<{
		title?: string;
		children?: Snippet;
	}>();
</script>

<div class="bg-technical-slate-900 rounded-lg overflow-hidden border-2 border-technical-slate-800 shadow-2xl font-mono text-sm">
	<!-- Title Bar -->
	<div class="bg-technical-slate-800 px-md py-xs flex items-center gap-sm">
		<div class="flex gap-xs">
			<div class="w-3 h-3 rounded-full bg-brand-red opacity-80"></div>
			<div class="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
			<div class="w-3 h-3 rounded-full bg-brand-green opacity-80"></div>
		</div>
		<div class="flex-1 text-center text-technical-slate-400 text-xs select-none">
			{title}
		</div>
	</div>
	
	<!-- Content Area -->
	<div class="p-md text-technical-slate-100 min-h-[200px]">
		{@render children?.()}
	</div>
</div>
