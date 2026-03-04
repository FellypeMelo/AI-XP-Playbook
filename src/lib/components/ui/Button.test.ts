import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect, vi } from 'vitest';
import Button from './Button.svelte';

describe('Button', () => {
	it('should render with label', () => {
		render(Button, { props: { label: 'Click me' } });
		const button = screen.getByRole('button', { name: /click me/i });
		expect(button).toBeInTheDocument();
	});

	it('should trigger click event', async () => {
		const onClick = vi.fn();
		render(Button, { props: { label: 'Click me', onclick: onClick } });
		const button = screen.getByRole('button');
		await fireEvent.click(button);
		expect(onClick).toHaveBeenCalled();
	});
});
