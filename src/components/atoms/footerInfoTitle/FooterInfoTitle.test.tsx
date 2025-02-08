import { render, screen } from '@testing-library/react';

import { FooterInfoTitle } from './FooterInfoTitle';

it('renders component', () => {
  render(<FooterInfoTitle title="value" />);
  expect(screen.getByText(/value/i)).toHaveTextContent(/value/i);
});
