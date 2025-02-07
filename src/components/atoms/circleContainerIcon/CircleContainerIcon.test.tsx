import { render } from '@testing-library/react';

import { CircleContainerIcon } from './CircleContainerIcon';

it('checks render', () => {
  const { container } = render(<CircleContainerIcon>content</CircleContainerIcon>);
  expect(container.firstChild).toBeInTheDocument();
});
