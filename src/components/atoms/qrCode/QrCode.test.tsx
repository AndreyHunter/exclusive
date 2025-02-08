import { render, screen } from '@testing-library/react';

import { QrCode } from './QrCode';

it('renders correctly', () => {
  render(<QrCode />);
  const element = screen.getByRole('img');
  expect(element).toBeInTheDocument();
});
