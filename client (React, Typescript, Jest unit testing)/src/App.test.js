import { render, screen } from '@testing-library/react';
import App from './App';

test('is "todo list" text rendered', () => 
{
	render(<App />);
	const linkElement = screen.getByText(/todo list/i);
	expect(linkElement).toBeInTheDocument();
});
