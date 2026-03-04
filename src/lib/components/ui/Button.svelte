<script lang="ts">
	let { label, onclick, variant = 'primary', type = 'button' } = $props<{
		label: string;
		onclick?: () => void;
		variant?: 'primary' | 'secondary' | 'outline';
		type?: 'button' | 'submit' | 'reset';
	}>();

	const baseStyles = "px-md py-sm font-mono text-sm uppercase tracking-wider transition-all duration-200 active:scale-95 border-2";
	
	const variants = {
		primary: "bg-technical-slate-900 text-white border-technical-slate-900 hover:bg-technical-slate-800",
		secondary: "bg-brand-blue text-white border-brand-blue hover:bg-blue-600",
		outline: "bg-transparent text-technical-slate-900 border-technical-slate-900 hover:bg-technical-slate-50"
	};
</script>

<button 
	{type}
	class="{baseStyles} {variants[variant]}"
	{onclick}
>
	{label}
</button>
