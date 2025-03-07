import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AccountTemplate from './AccountTemplate';

jest.mock('@components/molecules/breadCrumbs/BreadCrumbs', () => ({
  BreadCrumbs: () => <div data-testid="breadcrumbs"></div>,
}));

jest.mock('@components/organisms/accountNav/AccountNav', () => ({
  AccountNav: () => <div data-testid="account-nav"></div>,
}));

jest.mock('@/app/hooks', () => ({
  useAppSelector: () => 'testUser',
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => <div data-testid="outlet"></div>,
}));

describe('AccountTemplate', () => {
  it('renders basic layout', () => {
    render(
      <MemoryRouter>
        <AccountTemplate />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByTestId('account-nav')).toBeInTheDocument();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
    expect(screen.getByText('testUser')).toBeInTheDocument();
  });
});
