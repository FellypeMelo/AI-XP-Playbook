import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Hero from './Hero.svelte';

describe('Hero', () => {
	it('should render main title', () => {
		render(Hero, { props: { title: 'AI-XP', subtitle: 'Engenharia Agêntica' } });
		expect(screen.getByText('AI-XP')).toBeInTheDocument();
		expect(screen.getByText('Engenharia Agêntica')).toBeInTheDocument();
	});
});
