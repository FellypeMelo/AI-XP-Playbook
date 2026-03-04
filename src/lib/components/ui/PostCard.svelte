<script lang="ts">
	import type { Post } from '../../../domain/post/post';

	let { post } = $props<{
		post: Post;
	}>();
</script>

<article class="group border-2 border-technical-slate-200 p-lg hover:border-technical-slate-900 transition-all duration-300 bg-white hover:shadow-xl">
	<a href="/blog/{post.slug}" class="block">
		<div class="flex flex-col gap-md">
			<div class="flex justify-between items-baseline border-b border-technical-slate-100 pb-sm">
				<time class="text-xs font-mono text-technical-slate-400">
					[{post.date.replace(/-/g, '.')}]
				</time>
				{#if post.tags}
					<div class="flex gap-xs">
						{#each post.tags as tag}
							<span class="text-[10px] uppercase font-bold tracking-widest text-brand-blue">
								#{tag}
							</span>
						{/each}
					</div>
				{/if}
			</div>
			
			<div>
				<h3 class="text-xl font-display font-black uppercase tracking-tight group-hover:text-brand-blue transition-colors">
					{post.title}
				</h3>
				<p class="text-technical-slate-600 mt-sm line-clamp-2 font-sans leading-relaxed">
					{post.description}
				</p>
			</div>

			<div class="pt-sm flex justify-end">
				<span class="text-xs font-mono font-bold uppercase tracking-widest group-hover:translate-x-1 transition-transform">
					Ler Spec →
				</span>
			</div>
		</div>
	</a>
</article>
