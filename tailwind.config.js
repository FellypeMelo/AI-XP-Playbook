export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				display: ['Inter', 'system-ui', 'sans-serif']
			},
			colors: {
				brand: {
					red: '#ff2d55', // TDD Red
					green: '#00d68f', // TDD Green
					blue: '#007aff', // TDD Blue (Refactor)
				},
				technical: {
					slate: {
						50: '#f8fafc',
						100: '#f1f5f9',
						200: '#e2e8f0',
						300: '#cbd5e1',
						400: '#94a3b8',
						500: '#64748b',
						600: '#475569',
						700: '#334155',
						800: '#1e293b',
						900: '#0f172a',
						950: '#020617',
					}
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
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	]
};
