import { render, screen } from '@testing-library/react';

import { mockProducts } from '@tests/__fixtures__';

import { OrderSummary } from './OrderSummary';

jest.mock('@components/molecules/orderItem/OrderItem', () => ({
  OrderItem: () => <div data-testid="order-item" />,
}));

jest.mock('@components/molecules/orderInfo/OrderInfo', () => ({
  OrderInfo: () => <div data-testid="order-info" />,
}));

describe('OrderSummary', () => {
  const mockProps = {
    products: mockProducts,
    total: 300,
    subtotal: 320,
    delivery: 0,
  };

  beforeEach(() => {
    render(<OrderSummary {...mockProps} />);
  });

  it('renders correct number of products', () => {
    const orderItems = screen.getAllByTestId('order-item');
    expect(orderItems).toHaveLength(mockProducts.length);
  });

  it('renders OrderInfo component', () => {
    expect(screen.getByTestId('order-info')).toBeInTheDocument();
  });

  it('displays product prices', () => {
    expect(screen.getByText(`$${mockProducts[0].price}`)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProducts[1].price}`)).toBeInTheDocument();
  });
});
