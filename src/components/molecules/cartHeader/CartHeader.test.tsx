import { render, screen } from '@testing-library/react';

import * as useMediaQueryMock from '@hooks/useMediaQuery';

import { CartHeader } from './CartHeader';

describe('CartHeader component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders Subtotal on large screen', () => {
    jest.spyOn(useMediaQueryMock, 'useMediaQuery').mockReturnValue(false);
    render(<CartHeader />);
    expect(screen.getByText('Subtotal')).toBeInTheDocument();
  });

  it("doesn't render Subtotal on small screen", () => {
    jest.spyOn(useMediaQueryMock, 'useMediaQuery').mockReturnValue(true);
    render(<CartHeader />);
    expect(screen.queryByText('Subtotal')).not.toBeInTheDocument();
  });
});
