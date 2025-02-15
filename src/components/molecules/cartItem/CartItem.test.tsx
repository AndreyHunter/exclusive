import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as useMediaQueryMock from '@hooks/useMediaQuery';
import { mockProduct } from '@tests/__fixtures__/index';

import { CartItem } from './CartItem';

jest.mock('@components/molecules/orderItem/OrderItem', () => ({
  OrderItem: () => null,
}));

jest.mock('@components/molecules/counter/Counter', () => ({
  Counter: () => null,
}));

const onDeleteProductMock = jest.fn();

const mockProps = {
  product: mockProduct,
  productName: mockProduct.name,
  totalPrice: 100,
  subTotalPrice: 120,
  itemQuantity: 1,
  onDeleteProduct: onDeleteProductMock,
  onDecrementProduct: jest.fn(),
  onIncrementProduct: jest.fn(),
};

describe('CartItem component', () => {
  it('renders subTotalPrice on large screen', () => {
    const mock = jest.spyOn(useMediaQueryMock, 'useMediaQuery');
    mock.mockReturnValue(false);
    render(<CartItem {...mockProps} />);
    expect(screen.getByText('$120')).toBeInTheDocument();
  });
  it("doesn't render subTotalPrice on small screen", () => {
    jest.spyOn(useMediaQueryMock, 'useMediaQuery').mockReturnValue(true);
    render(<CartItem {...mockProps} />);
    expect(screen.queryByText('$120')).not.toBeInTheDocument();
  });
  it('calls onDeleteProduct correctly', async () => {
    render(<CartItem {...mockProps} />);
    await userEvent.click(screen.getByTestId('delete-icon-button'));
    expect(onDeleteProductMock).toHaveBeenCalledTimes(1);
  });
});
