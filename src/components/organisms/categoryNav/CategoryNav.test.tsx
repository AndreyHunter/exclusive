import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import { ROUTES } from '@routes/routes';
import type { Category } from 'types/static';

import styles from './categoryNav.module.scss';
import { CategoryNav } from './CategoryNav';

const ProductsPage = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === `/${ROUTES.PRODUCTS}/electronics`
        ? 'Electronics Page'
        : pathname === `/${ROUTES.PRODUCTS}/womans-fashion/shoes`
          ? 'Shoes Page'
          : ''}
    </div>
  );
};

describe('CategoryNav', () => {
  const mockCategories: Category[] = [
    { id: 1, name: 'Electronics', path: 'electronics' },
    {
      id: 2,
      name: 'Woman’s Fashion',
      path: 'womans-fashion',
      subcategories: [
        {
          id: 1,
          name: 'Shoes',
          path: 'shoes',
        },
      ],
    },
  ];

  describe('Renders', () => {
    it('renders all categories and subcategories', async () => {
      render(
        <MemoryRouter>
          <CategoryNav categories={mockCategories} />
        </MemoryRouter>,
      );

      expect(screen.getByText(/Electronics/i)).toBeInTheDocument();
      expect(screen.getByText(/Woman’s Fashion/i)).toBeInTheDocument();

      const womansFashionItem = screen.getByText(/Woman’s Fashion/i).closest('li') as HTMLElement;
      await userEvent.hover(womansFashionItem);

      expect(screen.getByText(/Shoes/i)).toBeInTheDocument();
    });

    it('renders without categories', () => {
      render(
        <MemoryRouter>
          <CategoryNav categories={[]} />
        </MemoryRouter>,
      );
      expect(screen.getByText(/There's no categories/i));
    });
  });

  describe('Navigates', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={[ROUTES.INDEX]}>
          <Routes>
            <Route path={ROUTES.INDEX} element={<CategoryNav categories={mockCategories} />} />
            <Route path={`${ROUTES.PRODUCTS}/:category`} element={<ProductsPage />} />
            <Route path={`${ROUTES.PRODUCTS}/:category/:subcategory`} element={<ProductsPage />} />
          </Routes>
        </MemoryRouter>,
      );
    });

    it('navigates to Electronics page', async () => {
      await userEvent.click(screen.getByText(/Electronics/i));
      expect(screen.getByText(/Electronics Page/i)).toBeInTheDocument();
    });

    it('navigates to Woman’s Fashion > Shoes page', async () => {
      await userEvent.hover(screen.getByText(/Woman’s Fashion/i));
      await userEvent.click(screen.getByText(/Shoes/i));
      expect(screen.getByText(/Shoes Page/i)).toBeInTheDocument();
    });
  });

  describe('Classes', () => {
    it('checks proper classes', () => {
      render(
        <MemoryRouter>
          <CategoryNav categories={mockCategories} />
        </MemoryRouter>,
      );

      const electronicsLink = screen.getByText(/Electronics/i).parentElement;
      expect(electronicsLink).toHaveClass(styles.item);
      expect(electronicsLink).not.toHaveClass(styles.categoryItem);

      const womansFashionLink = screen.getByText(/Woman’s Fashion/i).parentElement;
      expect(womansFashionLink).toHaveClass(styles.categoryItem);
      expect(womansFashionLink).not.toHaveClass(styles.item);
    });
  });
});
