import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import { mockProducts } from '@tests/__fixtures__/index';
import * as mediaQueryHook from '@hooks/useMediaQuery';
import { ROUTES } from '@routes/routes';

import CartPage from './CartPage';

jest.mock('@components/molecules/breadCrumbs/BreadCrumbs', () => ({
  BreadCrumbs: () => <div data-testid="breadcrumbs"></div>,
}));

jest.mock('@components/molecules/cartHeader/CartHeader', () => ({
  CartHeader: () => <div data-testid="cart-header"></div>,
}));

jest.mock('@components/molecules/cartItem/CartItemContainer', () => ({
  CartItemContainer: () => <div data-testid="cart-item">Cart Item</div>,
}));

jest.mock('@components/molecules/cartTotal/CartTotal', () => ({
  CartTotal: () => <div data-testid="cart-total"></div>,
}));

jest.mock('@components/molecules/couponCodeItem/CouponCodeItem', () => ({
  CouponCodeItem: () => <div data-testid="coupon-code-item"></div>,
}));

const ProductsPage = () => <div data-testid="products-page"></div>;

describe('CartPage', () => {
  const defaultProps = {
    products: mockProducts.map((product) => ({ product, quantity: 1 })),
    loading: false,
    subTotal: 350,
    cartTotal: 400,
    onUpdateCart: jest.fn(),
    onDeleteProduct: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderCartPage = (props = {}, isMobile = false) => {
    jest.spyOn(mediaQueryHook, 'useMediaQuery').mockReturnValue(isMobile);
    return render(
      <MemoryRouter>
        <CartPage {...defaultProps} {...props} />
      </MemoryRouter>,
    );
  };

  it('renders all components correctly', () => {
    renderCartPage();

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByTestId('cart-header')).toBeInTheDocument();
    expect(screen.getByTestId('coupon-code-item')).toBeInTheDocument();
    expect(screen.getByTestId('cart-total')).toBeInTheDocument();
  });

  it('renders correct number of cart items', () => {
    renderCartPage();

    const cartItems = screen.getAllByTestId('cart-item');
    expect(cartItems).toHaveLength(mockProducts.length);
  });

  it('calls onUpdateCart when update cart button is clicked', async () => {
    renderCartPage();

    const button = screen.getByRole('button', { name: /Update Cart/i });
    await userEvent.click(button);

    expect(defaultProps.onUpdateCart).toHaveBeenCalled();
  });

  it('does not render CartHeader on small mobile screens', () => {
    renderCartPage({}, true);

    expect(screen.queryByTestId('cart-header')).not.toBeInTheDocument();
  });

  it('navigates to products page', async () => {
    render(
      <MemoryRouter initialEntries={[`/${ROUTES.CART}`]}>
        <Routes>
          <Route path={`/${ROUTES.PRODUCTS}`} element={<ProductsPage />} />
          <Route path={`/${ROUTES.CART}`} element={<CartPage {...defaultProps} />} />
        </Routes>
      </MemoryRouter>,
    );
    await userEvent.click(screen.getByRole('link', { name: /Return To Shop/i }));
    expect(screen.getByTestId('products-page')).toBeInTheDocument();
  });
});
