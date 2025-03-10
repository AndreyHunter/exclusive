import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ROUTES } from '@/routes/routes';

import NotFoundPage from './NotFoundPage';

jest.mock('@components/molecules/breadCrumbs/BreadCrumbs', () => ({
  BreadCrumbs: () => <div data-testid="breadcrumbs"></div>,
}));

describe('NotFoundPage', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );
  });

  it('renders main elements', () => {
    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /404 Not Found/i })).toBeInTheDocument();
    expect(screen.getByText(/Your visited page not found/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Back to home page/i })).toBeInTheDocument();
  });

  it('checks path in link', () => {
    expect(screen.getByRole('link', { name: /Back to home page/i })).toHaveAttribute(
      'href',
      ROUTES.INDEX,
    );
  });
});
