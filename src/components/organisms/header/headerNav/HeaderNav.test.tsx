import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderMockPages } from '@tests/utils/renderMockPages';
import { navPages } from '@constants/navPages';
import { ROUTES } from '@routes/routes';

import { HeaderNav } from './HeaderNav';

describe('HeaderNav', () => {
  beforeEach(() => {
    renderMockPages(<HeaderNav pages={navPages} />);
  });

  describe('Rendering', () => {
    it('displays all navigation links', () => {
      navPages.forEach((page) => {
        const link = screen.getByRole('link', { name: new RegExp(page.name, 'i') });
        expect(link).toBeInTheDocument();
        const expectedHref = page.path === ROUTES.INDEX ? ROUTES.INDEX : `/${page.path}`;
        expect(link).toHaveAttribute('href', expectedHref);
      });
    });
  });

  describe('Navigate', () => {
    it('navigates to Home page', async () => {
      await userEvent.click(screen.getByRole('link', { name: /Home/i }));
      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    it('navigates to Contacts page', async () => {
      await userEvent.click(screen.getByRole('link', { name: /Contacts/i }));
      expect(screen.getByTestId('contacts-page')).toBeInTheDocument();
    });

    it('navigates to About page', async () => {
      await userEvent.click(screen.getByRole('link', { name: /About/i }));
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });

    it('navigates to Sign Up page', async () => {
      await userEvent.click(screen.getByRole('link', { name: /Sign Up/i }));
      expect(screen.getByTestId('signup-page')).toBeInTheDocument();
    });
  });
});
