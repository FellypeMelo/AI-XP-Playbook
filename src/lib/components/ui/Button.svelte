<script lang="ts">
	let { label, onclick, variant = 'primary', type = 'button' } = $props<{
		label: string;
		onclick?: () => void;
		variant?: 'primary' | 'secondary' | 'outline';
		type?: 'button' | 'submit' | 'reset';
	}>();

	const baseStyles = "px-xl py-md font-sans text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 active:opacity-80 border-hairline";
	
	const variants = {
		primary: "bg-swiss-ink text-white border-swiss-ink hover:bg-swiss-muted hover:border-swiss-muted",
		secondary: "bg-swiss-accent text-white border-swiss-accent hover:opacity-90",
		outline: "bg-transparent text-swiss-ink border-swiss-ink hover:bg-swiss-ink hover:text-white"
	};
</script>

<button 
	{type}
	class="{baseStyles} {variants[variant]}"
	{onclick}
>
	{label}
</button>
