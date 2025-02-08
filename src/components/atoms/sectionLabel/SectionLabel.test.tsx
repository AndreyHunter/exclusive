import { render, screen } from '@testing-library/react';

import { SectionLabel } from './SectionLabel';

it('renders correctly', () => {
  render(<SectionLabel>Label</SectionLabel>);
  const element = screen.getByText(/Label/i);
  expect(element).toHaveTextContent(/Label/i);
});
