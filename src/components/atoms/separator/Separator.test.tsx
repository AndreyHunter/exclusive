import { render, screen } from '@testing-library/react';

import { Separator } from './Separator';

it('renders correctly', () => {
  render(<Separator data-testid="separator" />);
  const element = screen.getByTestId('separator');
  expect(element).toBeInTheDocument();
});
