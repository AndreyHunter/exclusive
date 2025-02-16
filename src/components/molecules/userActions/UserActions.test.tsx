import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { ROUTES } from '@routes/routes';

import { UserActions } from './UserActions';

jest.mock('@components/organisms/userMenu/UserMenu', () => ({
  UserMenu: () => null,
}));

describe('UserActions', () => {
  const noop = () => {};
  const handleToggleMenuMock = jest.fn();

  it('renders links with proper paths', () => {
    render(
      <MemoryRouter>
        <UserActions isAuth={false} productsQuantity={0} onToggleMenu={noop} />
      </MemoryRouter>,
    );
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', `/${ROUTES.WISHLIST}`);
    expect(links[1]).toHaveAttribute('href', `/${ROUTES.CART}`);
    expect(links[2]).toHaveAttribute('href', `/${ROUTES.AUTH}/${ROUTES.SIGNUP}`);
  });

  it('displays different product quantities correctly', () => {
    const { rerender } = render(
      <MemoryRouter>
        <UserActions isAuth={false} productsQuantity={0} onToggleMenu={noop} />
      </MemoryRouter>,
    );
    expect(screen.getByText('0')).toBeInTheDocument();

    rerender(
      <MemoryRouter>
        <UserActions isAuth={false} productsQuantity={1} onToggleMenu={noop} />
      </MemoryRouter>,
    );

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('renders and calls the button when user has an account', async () => {
    render(
      <MemoryRouter>
        <UserActions isAuth={true} productsQuantity={0} onToggleMenu={handleToggleMenuMock} />
      </MemoryRouter>,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(handleToggleMenuMock).toHaveBeenCalledTimes(1);
  });
});
