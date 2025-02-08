import { render, screen } from '@testing-library/react';

import { ProductPrice } from './ProductPrice';
import styles from './productPrice.module.scss';

describe('ProductPrice component', () => {
  it('checks if the component renders with price prop', () => {
    render(<ProductPrice price={100} />);
    const element = screen.getByText('$100');
    expect(element).toHaveTextContent('$100');
  });
  it('checks if the component renders with discounted price prop', () => {
    render(<ProductPrice price={100} discountedPrice={80} />);
    const newPrice = screen.getByText('$80');
    const oldPrice = screen.getByText('$100');
    expect(newPrice).toHaveTextContent('$80');
    expect(oldPrice).toHaveTextContent('$100');
    expect(oldPrice).toHaveClass(styles.discountedPrice);
  });
});
