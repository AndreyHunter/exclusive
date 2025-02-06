import { render, screen } from '@testing-library/react';

import { CardActionButton } from './CardActionButton';

test('checks if component renders', () => {
  render(<CardActionButton />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
