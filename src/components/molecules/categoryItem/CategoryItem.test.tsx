import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ROUTES } from '@routes/routes';
import type { Category } from 'types/static';

import { CategoryItem } from './CategoryItem';

describe('CategoryItem component', () => {
  const mockCategory: Category = {
    id: 1,
    name: 'clothes',
    path: 'clothes',
    icon: () => <svg>icon</svg>,
  };

  const renderComponent = () => {
    render(
      <MemoryRouter>
        <CategoryItem category={mockCategory} />
      </MemoryRouter>,
    );
  };

  beforeEach(() => {
    renderComponent();
  });

  it('renders link with correct href', () => {
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/${ROUTES.PRODUCTS}/${mockCategory.path}`,
    );
  });
  it('renders icon when provided', () => {
    expect(screen.getByText('icon')).toBeInTheDocument();
  });
  it('renders category name', () => {
    expect(screen.getByText(mockCategory.name)).toBeInTheDocument();
  });
});
