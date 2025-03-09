import { render, screen } from '@testing-library/react';

import { OrderInfo } from './OrderInfo';

describe('OrderInfo component', () => {
  it('renders OrderInfo component and checks content', () => {
    render(<OrderInfo subTotal={120} total={100} delivery={20} />);

    expect(screen.getByText('$120.00')).toBeInTheDocument();
    expect(screen.getByText('$100.00')).toBeInTheDocument();
    expect(screen.getByText('$20')).toBeInTheDocument();
  });

  it('renders OrderInfo component with free delivery', () => {
    render(<OrderInfo subTotal={50} total={50} />);
    expect(screen.getByText('Free')).toBeInTheDocument();
  });
});
