import { render, screen } from '@testing-library/react';

import { DiscountLabel } from './DiscountLabel';

it('checks render with discount', () => {
  render(<DiscountLabel discount={20} />);
  const element = screen.getByText('-20%');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent('-20%');
});
