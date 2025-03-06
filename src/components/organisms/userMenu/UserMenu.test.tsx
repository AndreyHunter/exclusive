import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { userMenuLinks } from '@constants/userMenuLinks';
import { renderMockPages } from '@/tests/utils/renderMockPages';

import { UserMenu } from './UserMenu';

jest.mock('@/app/hooks.ts', () => ({
  useAppSelector: () => jest.fn(),
  useAppDispatch: jest.fn(),
}));

jest.mock('@features/cart/cartSlice', () => ({}));

describe('UserMenu', () => {
  describe('Essential', () => {
    it("renders essential elements and checks link's length", () => {
      render(
        <MemoryRouter>
          <UserMenu />
        </MemoryRouter>,
      );
      expect(screen.getByRole('button', { name: /Logout/i })).toBeInTheDocument();
      expect(screen.getAllByRole('link')).toHaveLength(userMenuLinks.length);
    });
  });

  describe('Navigation', () => {
    it('navigates to profile', async () => {
      renderMockPages(<UserMenu />);
      await userEvent.click(screen.getByRole('link', { name: userMenuLinks[0].name }));
      expect(screen.getByTestId('profile-page')).toBeInTheDocument();
    });

    it('navigates to orders page', async () => {
      renderMockPages(<UserMenu />);
      await userEvent.click(screen.getByRole('link', { name: userMenuLinks[1].name }));
      expect(screen.getByTestId('orders-page')).toBeInTheDocument();
    });

    it('navigates to cancellations page', async () => {
      renderMockPages(<UserMenu />);
      await userEvent.click(screen.getByRole('link', { name: userMenuLinks[2].name }));
      expect(screen.getByTestId('cancellations-page')).toBeInTheDocument();
    });

    it('navigates to reviews page', async () => {
      renderMockPages(<UserMenu />);
      await userEvent.click(screen.getByRole('link', { name: userMenuLinks[3].name }));
      expect(screen.getByTestId('reviews-page')).toBeInTheDocument();
    });
  });
});
