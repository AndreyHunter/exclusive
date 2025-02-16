import { render } from '@testing-library/react';

import { BoxWrapper } from './BoxWrapper';

it('renders with class and children', () => {
  const { container } = render(<BoxWrapper className="test-class">Something</BoxWrapper>);
  const box = container.firstChild;
  expect(box).toBeInTheDocument();
  expect(box).toHaveTextContent('Something');
  expect(box).toHaveClass('test-class');
});
