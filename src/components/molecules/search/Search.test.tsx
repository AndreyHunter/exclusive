import { render, screen } from '@testing-library/react';

import { Search } from './Search';

describe('Search', () => {
  it('renders correctly', () => {
    render(<Search />);
    expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'What are you looking for?');
    expect(screen.getByTestId('svg-mock')).toBeInTheDocument();
  });
});
