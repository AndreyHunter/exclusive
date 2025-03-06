import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ShopNowLink } from './ShopNowLink';
import styles from './showNowLink.module.scss';

describe('ShopNowLink component', () => {
  const defaultLink = '/test-path';

  it('checks if there is the arrow if arrow prop is true', () => {
    render(
      <MemoryRouter>
        <ShopNowLink to={defaultLink} renderWith="arrow" />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('svg-mock')).toBeInTheDocument();
  });
  it('checks if there is the line if line prop is true', () => {
    render(
      <MemoryRouter>
        <ShopNowLink to={defaultLink} renderWith="line" />
      </MemoryRouter>,
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('checks if there is the row class if direction(row) prop is passed', () => {
    const { container } = render(
      <MemoryRouter>
        <ShopNowLink to={defaultLink} direction="row" />
      </MemoryRouter>,
    );
    expect(container.firstChild).toHaveClass(styles.row);
  });
  it('checks if there is the column class if direction(column) prop is passed', () => {
    const { container } = render(
      <MemoryRouter>
        <ShopNowLink to={defaultLink} direction="column" />
      </MemoryRouter>,
    );
    expect(container.firstChild).toHaveClass(styles.column);
  });
});
