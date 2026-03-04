import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Terminal from './Terminal.svelte';

describe('Terminal', () => {
	it('should render with title', () => {
		render(Terminal, { props: { title: 'agent.sh' } });
		expect(screen.getByText('agent.sh')).toBeInTheDocument();
	});
});
