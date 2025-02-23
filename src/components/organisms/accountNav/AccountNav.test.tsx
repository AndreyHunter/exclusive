import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route, Outlet } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { ROUTES } from '@routes/routes';

import styles from './accountNav.module.scss';
import { AccountNav } from './AccountNav';

const ProfileTemplate = () => (
  <div data-test-id="profile-template">
    <AccountNav />
    <Outlet />
  </div>
);

const ProfilePage = () => <div data-testid="profile"></div>;
const AddressBookPage = () => <div data-testid="address-book"></div>;
const PaymentOptionsPage = () => <div data-testid="payment-options"></div>;
const WishListPage = () => <div data-testid="wishlist"></div>;
const OrdersPage = () => <div data-testid="orders"></div>;
const ReturnsPage = () => <div data-testid="returns"></div>;
const CancellationsPage = () => <div data-testid="cancellations"></div>;

describe('AccountNav', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={[`/${ROUTES.PROFILE}`]}>
        <Routes>
          <Route path={`/${ROUTES.WISHLIST}`} element={<WishListPage />} />
          <Route path={`/${ROUTES.PROFILE}`} element={<ProfileTemplate />}>
            <Route index element={<ProfilePage />} />
            <Route path={ROUTES.ADDRESS_BOOK} element={<AddressBookPage />} />
            <Route path={ROUTES.PAYMENT_OPTIONS} element={<PaymentOptionsPage />} />
            <Route path={ROUTES.ORDERS} element={<OrdersPage />} />
            <Route path={ROUTES.RETURNS} element={<ReturnsPage />} />
            <Route path={ROUTES.CANCELLATIONS} element={<CancellationsPage />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );
  });

  describe('Navigation and active class', () => {
    it('starts on Profile page with active class', () => {
      const profileLink = screen.getByRole('link', { name: /My Profile/i });
      expect(screen.getByTestId('profile')).toBeInTheDocument();
      expect(profileLink).toHaveClass(styles.active);
    });

    it('navigates to AddressBook page and sets active class', async () => {
      const addressBookLink = screen.getByRole('link', { name: /Address Book/i });
      await userEvent.click(addressBookLink);
      expect(screen.getByTestId('address-book')).toBeInTheDocument();
      expect(addressBookLink).toHaveClass(styles.active);
    });

    it('navigates to PaymentOptions page and sets active class', async () => {
      const paymentOptionsLink = screen.getByRole('link', { name: /My Payment Options/i });
      await userEvent.click(paymentOptionsLink);
      expect(screen.getByTestId('payment-options')).toBeInTheDocument();
      expect(paymentOptionsLink).toHaveClass(styles.active);
    });

    it('navigates to WishList page', async () => {
      const wishListLink = screen.getByRole('link', { name: /My WishList/i });
      await userEvent.click(wishListLink);
      expect(screen.getByTestId('wishlist')).toBeInTheDocument();
    });

    it('navigates to Orders page and sets active class', async () => {
      const ordersLink = screen.getByRole('link', { name: /My Orders/i });
      await userEvent.click(ordersLink);
      expect(screen.getByTestId('orders')).toBeInTheDocument();
      expect(ordersLink).toHaveClass(styles.active);
    });

    it('navigates to Returns page and sets active class', async () => {
      const returnsLink = screen.getByRole('link', { name: /My Returns/i });
      await userEvent.click(returnsLink);
      expect(screen.getByTestId('returns')).toBeInTheDocument();
      expect(returnsLink).toHaveClass(styles.active);
    });

    it('navigates to Cancellations page and sets active class', async () => {
      const cancellationsLink = screen.getByRole('link', { name: /My Cancellations/i });
      await userEvent.click(cancellationsLink);
      expect(screen.getByTestId('cancellations')).toBeInTheDocument();
      expect(cancellationsLink).toHaveClass(styles.active);
    });
  });
});
