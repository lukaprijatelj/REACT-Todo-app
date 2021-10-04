import { render, screen, prettyDOM } from '@testing-library/react';
import { IEntryState, IEntryProps, EntryView } from './EntryView';

test('is "Bake cake" entry view rendered', () => 
{
	let entryView = <EntryView entry={"Bake cake"} index={0} />;
	render(entryView);

	// prints DOM tree (only for debugging)
	// screen.debug();
	
	const result = screen.getByText(/Bake cake/i);
	expect(result).toBeInTheDocument();
});
