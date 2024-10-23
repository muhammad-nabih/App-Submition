import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: '#A8DC2A',
					foreground: 'hsl(var(--primary-foreground))',
					dark: '#00150B',
					muted: '#00150B99',
					light: '#00150B80',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
                    
					section: '#f7f8f8',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: '#A8DC2A',
					hover: '#86b022',
					foreground: 'hsl(var(--accent-foreground))',
				},
				submit: {
					DEFAULT: '#A8DC2A33',
					hover: '#A8DC2A',
					foreground: 'hsl(var(--accent-foreground))',
				},

				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				error: '#BB1212',
				notification: '#D53838',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				'body-1': 'var(--body-1-font-family)',
				'body-2': 'var(--body-2-font-family)',
				h1: 'var(--h1-font-family)',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};

export default config;
