import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CouponCodeItem } from './CouponCodeItem';

describe('CouponCodeItem component', () => {
  it('should render input and button', () => {
    render(<CouponCodeItem />);
    const inputElement = screen.getByPlaceholderText(/Coupon Code/i);
    const buttonElement = screen.getByRole('button', { name: /Apply Coupon/i });
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('should allow user to type a coupon code', async () => {
    render(<CouponCodeItem />);
    const inputElement = screen.getByPlaceholderText(/Coupon Code/i);
    await userEvent.type(inputElement, 'DISCOUNT10');
    expect(inputElement).toHaveValue('DISCOUNT10');
  });

  // it('should handle apply coupon action', async () => {
  //   const mockApplyCoupon = jest.fn();
  //   render(<CouponCodeItem />);
  //   const inputElement = screen.getByPlaceholderText(/Coupon Code/i);
  //   const buttonElement = screen.getByRole('button', { name: /Apply Coupon/i });

  //   await userEvent.type(inputElement, 'DISCOUNT10');
  //   await userEvent.click(buttonElement);
  // });
});
