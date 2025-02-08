import { render, screen } from '@testing-library/react';

import { SectionTitle } from './SectionTitle';

it('renders correctly', () => {
  render(<SectionTitle>Title</SectionTitle>);
  const element = screen.getByText('Title');
  expect(element).toHaveTextContent('Title');
});
