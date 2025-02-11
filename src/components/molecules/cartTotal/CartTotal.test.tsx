import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { CartTotal } from './CartTotal';

jest.mock('@components/molecules/orderInfo/OrderInfo', () => ({
  OrderInfo: jest.fn(),
}));

describe('CartTotal component', () => {
  it('checks if link has proper href', () => {
    render(
      <MemoryRouter>
        <CartTotal total={100} subTotal={120} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/checkout');
    screen.debug();
  });
});
