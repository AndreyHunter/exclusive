import { render } from '@testing-library/react';

import { BurgerButton } from './BurgerButton';

test('checks render', () => {
  const { container } = render(<BurgerButton isOpen={true} />);
  expect(container.firstChild).toBeInTheDocument();
});
