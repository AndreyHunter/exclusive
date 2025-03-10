import { render, screen } from '@testing-library/react';

import WishListPage from './WishListPage';

jest.mock('@components/molecules/breadCrumbs/BreadCrumbs', () => ({
  BreadCrumbs: () => <div data-testid="breadCrumbs"></div>,
}));

jest.mock('@components/organisms/wishList/WishList', () => ({
  WishList: () => <div data-testid="wishList"></div>,
}));

jest.mock(
  '@components/organisms/sections/suggestedProductsSection/SuggestedProductsSectionContainer',
  () => ({
    SuggestedProductsSectionContainer: () => <div data-testid="suggested-products-section"></div>,
  }),
);

describe('WishListPage', () => {
  it('renders main elements', () => {
    render(<WishListPage />);
    expect(screen.getByTestId('breadCrumbs')).toBeInTheDocument();
    expect(screen.getByTestId('wishList')).toBeInTheDocument();
    expect(screen.getByTestId('suggested-products-section')).toBeInTheDocument();
  });
});
