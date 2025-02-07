import { render, screen } from '@testing-library/react';

import { Loader } from './Loader';
import styles from './loader.module.scss';

it('renders component with small class is prop is passed', () => {
  render(<Loader data-testid="loader" small />);
  const element = screen.getByTestId('loader');
  expect(element).toHaveClass(styles.small);
});
