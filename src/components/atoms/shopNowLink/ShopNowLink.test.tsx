import { render, screen } from '@testing-library/react';

import { ShopNowLink } from './ShopNowLink';
import styles from './showNowLink.module.scss';

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

jest.mock('react-router-dom', () => ({
  Link: ({ to, children }: LinkProps) => <a href={to}>{children}</a>,
}));

describe('ShopNowLink component', () => {
  const defaultLink = '/test-path';
  const testId = 'shop-now-link';

  it('checks if there is the arrow if arrow prop is true', () => {
    render(<ShopNowLink link={defaultLink} arrow />);
    expect(screen.getByTestId('svg-mock')).toBeInTheDocument();
  });
  it('checks if there is the line if line prop is true', () => {
    render(<ShopNowLink link={defaultLink} line />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('checks if there is the row class if direction(row) prop is passed', () => {
    render(<ShopNowLink data-testid={testId} link={defaultLink} direction="row" />);
    expect(screen.getByTestId(testId)).toHaveClass(styles.row);
  });
  it('checks if there is the column class if direction(column) prop is passed', () => {
    render(<ShopNowLink data-testid={testId} link={defaultLink} direction="column" />);
    expect(screen.getByTestId(testId)).toHaveClass(styles.column);
  });
});
