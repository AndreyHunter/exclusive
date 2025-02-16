import { render, screen } from '@testing-library/react';

import { SectionLabel } from './SectionLabel';

it('renders correctly', () => {
  render(<SectionLabel>Label</SectionLabel>);
  expect(screen.getByText(/Label/i)).toBeInTheDocument();
});
