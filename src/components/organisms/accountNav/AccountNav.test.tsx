import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderMockPages } from '@/tests/utils/renderMockPages';
import { ROUTES } from '@routes/routes';

import styles from './accountNav.module.scss';
import { AccountNav } from './AccountNav';

describe('AccountNav', () => {
  beforeEach(() => {
    renderMockPages(<AccountNav />, {
      initialEntry: `/${ROUTES.PROFILE}`,
      templateType: 'profile',
    });
  });

  describe('Navigation and active class', () => {
    it('starts on Profile page with active class', () => {
      const profileLink = screen.getByRole('link', { name: /My Profile/i });
      expect(screen.getByTestId('profile-page')).toBeInTheDocument();
      expect(profileLink).toHaveClass(styles.active);
    });

    it('navigates to AddressBook page and sets active class', async () => {
      const addressBookLink = screen.getByRole('link', { name: /Address Book/i });
      await userEvent.click(addressBookLink);
      expect(screen.getByTestId('address-book-page')).toBeInTheDocument();
      expect(addressBookLink).toHaveClass(styles.active);
    });

    it('navigates to PaymentOptions page and sets active class', async () => {
      const paymentOptionsLink = screen.getByRole('link', { name: /My Payment Options/i });
      await userEvent.click(paymentOptionsLink);
      expect(screen.getByTestId('payment-options-page')).toBeInTheDocument();
      expect(paymentOptionsLink).toHaveClass(styles.active);
    });

    it('navigates to WishList page', async () => {
      const wishListLink = screen.getByRole('link', { name: /My WishList/i });
      await userEvent.click(wishListLink);
      expect(screen.getByTestId('wishlist-page')).toBeInTheDocument();
    });

    it('navigates to Orders page and sets active class', async () => {
      const ordersLink = screen.getByRole('link', { name: /My Orders/i });
      await userEvent.click(ordersLink);
      expect(screen.getByTestId('orders-page')).toBeInTheDocument();
      expect(ordersLink).toHaveClass(styles.active);
    });

    it('navigates to Returns page and sets active class', async () => {
      const returnsLink = screen.getByRole('link', { name: /My Returns/i });
      await userEvent.click(returnsLink);
      expect(screen.getByTestId('returns-page')).toBeInTheDocument();
      expect(returnsLink).toHaveClass(styles.active);
    });

    it('navigates to Cancellations page and sets active class', async () => {
      const cancellationsLink = screen.getByRole('link', { name: /My Cancellations/i });
      await userEvent.click(cancellationsLink);
      expect(screen.getByTestId('cancellations-page')).toBeInTheDocument();
      expect(cancellationsLink).toHaveClass(styles.active);
    });
  });
});
