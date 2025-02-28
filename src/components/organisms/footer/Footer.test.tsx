import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { renderMockPages } from '@tests/utils/renderMockPages';
import * as reduxHooks from '@/app/hooks';

import { Footer } from './Footer';

jest.mock('@components/molecules/sendEmailForm/SendEmailForm', () => ({
  SendEmailForm: () => <div data-testid="send-email-form" />,
}));

jest.mock('@/app/hooks', () => ({
  useAppSelector: jest.fn(),
}));

describe('Footer', () => {
  beforeEach(() => {
    jest.spyOn(reduxHooks, 'useAppSelector').mockReturnValue(true);
  });

  describe('Rendering', () => {
    it('renders main footer sections', () => {
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>,
      );

      expect(screen.getByText(/Subscribe/i)).toBeInTheDocument();
      expect(screen.getByText(/Support/i)).toBeInTheDocument();
      expect(screen.getByText('Account')).toBeInTheDocument();
      expect(screen.getByText(/Quick Link/i)).toBeInTheDocument();
      expect(screen.getByText(/Download App/i)).toBeInTheDocument();

      expect(screen.getByTestId('send-email-form')).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    beforeEach(() => {
      renderMockPages(<Footer />);
    });

    it('navigates to Profile page when "My Account" link is clicked', async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole('link', { name: /My Account/i }));
      expect(screen.getByTestId('profile-page')).toBeInTheDocument();
    });

    it('navigates to SignUpPage page when "Login / Register" link is clicked', async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole('link', { name: 'Login / Register' }));
      expect(screen.getByTestId('signup-page')).toBeInTheDocument();
    });

    it('navigates to CartPage page when "Cart" link is clicked', async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole('link', { name: /Cart/i }));
      expect(screen.getByTestId('cart-page')).toBeInTheDocument();
    });

    it('navigates to Wishlist page when "Wishlist" link is clicked', async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole('link', { name: /Wishlist/i }));
      expect(screen.getByTestId('wishlist-page')).toBeInTheDocument();
    });

    it('navigates to Shop page when "Shop" link is clicked', async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole('link', { name: /Shop/i }));
      expect(screen.getByTestId('products-page')).toBeInTheDocument();
    });

    it('navigates to Privacy Policy page when "Privacy Policy" link is clicked', async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole('link', { name: /Privacy Policy/i }));
      expect(screen.getByTestId('privacy-policy-page')).toBeInTheDocument();
    });

    it('navigates to Terms Of Use page when "Terms Of Use" link is clicked', async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole('link', { name: /Terms Of Use/i }));
      expect(screen.getByTestId('terms-of-use-page')).toBeInTheDocument();
    });

    it('navigates to FAQ page when "FAQ" link is clicked', async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole('link', { name: /FAQ/i }));
      expect(screen.getByTestId('faq-page')).toBeInTheDocument();
    });

    it('navigates to Contacts page when "Contacts" link is clicked', async () => {
      const user = userEvent.setup();
      await user.click(screen.getByRole('link', { name: /Contacts/i }));
      expect(screen.getByTestId('contacts-page')).toBeInTheDocument();
    });
  });
});
