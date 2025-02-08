import { render, screen } from '@testing-library/react';

import { FormLabel } from './FormLabel';

it('renders component with label', () => {
  render(<FormLabel label="value" />);
  const element = screen.getByText(/value/i);
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(/value/i);
});
