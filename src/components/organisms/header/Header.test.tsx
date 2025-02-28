import { render, screen } from '@testing-library/react';

import { Header } from './Header';

jest.mock('@components/atoms/logo/Logo', () => ({
  Logo: () => <div data-testid="logo">Logo</div>,
}));

jest.mock('@components/helpers/container/Container', () => ({
  Container: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  ),
}));

jest.mock('@components/molecules/search/Search', () => ({
  Search: () => <div data-testid="search">Search</div>,
}));

jest.mock('@components/molecules/userActions/UserActionsContainer', () => ({
  UserActionsContainer: () => <div data-testid="user-actions">User Actions</div>,
}));

jest.mock('./headerNav/HeaderNav', () => ({
  HeaderNav: () => <nav data-testid="header-nav"></nav>,
}));

describe('Header', () => {
  it('renders all child components', () => {
    render(<Header />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('header-nav')).toBeInTheDocument();
    expect(screen.getByTestId('search')).toBeInTheDocument();
    expect(screen.getByTestId('user-actions')).toBeInTheDocument();
  });
});
