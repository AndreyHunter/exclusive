import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CheckoutPage from './CheckoutPage';

jest.mock('@/app/hooks', () => ({
  useAppDispatch: () => jest.fn(),
  useAppSelector: jest.fn(() => []),
}));

jest.mock('@features/cart/cartSlice', () => ({
  fetchUserCart: () => jest.fn(),
}));

jest.mock('@components/molecules/breadCrumbs/BreadCrumbs', () => ({
  BreadCrumbs: () => <div data-testid="breadcrumbs"></div>,
}));

jest.mock('@components/organisms/orderForm/OrderForm', () => ({
  OrderForm: () => <div data-testid="order-form"></div>,
}));

jest.mock('@components/organisms/orderSummary/OrderSummary', () => ({
  OrderSummary: () => <div data-testid="order-summary"></div>,
}));

jest.mock('@components/molecules/couponCodeItem/CouponCodeItem', () => ({
  CouponCodeItem: () => <div data-testid="coupon-code-item"></div>,
}));

jest.mock('@components/molecules/banksList/BanksList', () => ({
  BanksList: () => <div data-testid="banks-list"></div>,
}));

describe('CheckoutPage', () => {
  beforeEach(() => {
    render(<CheckoutPage />);
  });

  it('renders main elements', () => {
    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByTestId('order-form')).toBeInTheDocument();
    expect(screen.getByTestId('order-summary')).toBeInTheDocument();
    expect(screen.getByTestId('coupon-code-item')).toBeInTheDocument();
    expect(screen.getByTestId('banks-list')).toBeInTheDocument();
    expect(screen.getByText(/Billing Details/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Place Order/i })).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(2);
  });

  it('sets payment method', async () => {
    const user = userEvent.setup();
    const radios = screen.getAllByRole('radio');
    const bankRadio = radios[0];
    const cashRadio = radios[1];

    expect(bankRadio).not.toBeChecked();
    expect(cashRadio).not.toBeChecked();

    await user.click(bankRadio);
    expect(bankRadio).toBeChecked();
    expect(cashRadio).not.toBeChecked();

    await user.click(cashRadio);
    expect(cashRadio).toBeChecked();
    expect(bankRadio).not.toBeChecked();
  });
});
