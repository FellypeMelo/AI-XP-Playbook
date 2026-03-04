export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Sans', 'Inter', 'system-ui', 'sans-serif'],
				serif: ['IBM Plex Serif', 'Georgia', 'serif'],
				mono: ['JetBrains Mono', 'monospace'],
				display: ['IBM Plex Serif', 'serif']
			},
			colors: {
				brand: {
					red: '#ff2d55', // TDD Red
					green: '#00d68f', // TDD Green
					blue: '#007aff', // TDD Blue (Refactor)
				},
				swiss: {
					paper: '#f8fafc',
					ink: '#0f172a',
					muted: '#64748b',
					divider: '#cbd5e1',
					accent: '#007aff'
				}
			},
			spacing: {
				'xs': '4px',
				'sm': '8px',
				'md': '16px',
				'lg': '24px',
				'xl': '32px',
				'2xl': '48px',
				'3xl': '64px',
				'huge': '128px',
			},
			borderWidth: {
				'hairline': '0.5px',
			},
			letterSpacing: {
				'swiss': '0.02em',
				'academic': '-0.01em',
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	]
};
