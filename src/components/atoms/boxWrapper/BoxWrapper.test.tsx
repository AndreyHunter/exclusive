import { render, screen } from '@testing-library/react';

import { BoxWrapper } from './BoxWrapper';

test('checks render with class and children', () => {
  const boxId = 'test-box';
  render(
    <BoxWrapper className="test-class" data-testid={boxId}>
      Something
    </BoxWrapper>,
  );
  const box = screen.getByTestId(boxId);
  expect(box).toBeInTheDocument();
  expect(box).toHaveTextContent('Something');
  expect(box).toHaveClass('test-class');
});
