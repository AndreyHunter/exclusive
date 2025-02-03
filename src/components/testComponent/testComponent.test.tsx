import { render, screen } from '@testing-library/react';

import { TestComponent } from './TestComponent';

test('test-component test', () => {
  render(<TestComponent />);

  const element = screen.getByText(/HELLO FROM PULL REQUEST!/i);
  expect(element).toBeInTheDocument();
});
