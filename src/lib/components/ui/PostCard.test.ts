import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import PostCard from './PostCard.svelte';

describe('PostCard', () => {
	it('should render post info', () => {
		const post = { slug: 'test', title: 'Test Post', description: 'Test Desc', date: '2026-03-04' };
		render(PostCard, { props: { post } });
		expect(screen.getByText('Test Post')).toBeInTheDocument();
		expect(screen.getByText('Test Desc')).toBeInTheDocument();
	});
});
