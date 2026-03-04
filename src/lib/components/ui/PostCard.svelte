<script lang="ts">
	import type { Post } from '../../../domain/post/post';

	let { post } = $props<{
		post: Post;
	}>();
</script>

<article class="group border-t-hairline border-swiss-divider py-xl first:border-t-0 transition-all duration-500 hover:bg-white hover:px-lg -mx-lg">
	<a href="/blog/{post.slug}" class="block">
		<div class="grid md:grid-cols-12 gap-lg items-start">
			<div class="md:col-span-3">
				<time class="text-[10px] font-mono text-swiss-muted uppercase tracking-[0.2em]">
					{post.date.replace(/-/g, '/')}
				</time>
			</div>
			
			<div class="md:col-span-7">
				<h3 class="text-2xl font-serif font-semibold tracking-academic text-swiss-ink mb-md group-hover:text-swiss-accent transition-colors">
					{post.title}
				</h3>
				<p class="text-sm text-swiss-muted font-sans leading-relaxed line-clamp-2">
					{post.description}
				</p>
			</div>

			<div class="md:col-span-2 flex justify-end">
				{#if post.tags && post.tags.length > 0}
					<span class="text-[9px] font-mono text-swiss-muted uppercase tracking-widest border-hairline border-swiss-divider px-sm py-xs">
						{post.tags[0]}
					</span>
				{/if}
			</div>
		</div>
	</a>
</article>
