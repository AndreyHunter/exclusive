import { render, screen } from '@testing-library/react';

import { CircleCount } from './CircleCount';

test('checks render', () => {
  render(<CircleCount quantity={10} />);
  const element = screen.getByText('10');
  expect(element).toBeInTheDocument();
});
