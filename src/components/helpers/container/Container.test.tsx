import { render, screen } from '@testing-library/react';

import { Container } from './Container';
import styles from './container.module.scss';

describe('Container component', () => {
  const testId = 'container';
  it('renders children properly', () => {
    render(<Container data-testid={testId}>content</Container>);
    expect(screen.getByTestId(testId)).toHaveTextContent(/content/i);
  });
  it('renders with default class is prop variant isn"t passed', () => {
    render(<Container data-testid={testId}>content</Container>);
    expect(screen.getByTestId(testId)).toHaveClass(styles.default);
  });
  it('renders with small class if variant prop is "small"', () => {
    render(
      <Container data-testid={testId} variant="small">
        content
      </Container>,
    );
    expect(screen.getByTestId(testId)).toHaveClass(styles.small);
  });
  it('renders with large class is variant prop is "large"', () => {
    render(
      <Container data-testid={testId} variant="large">
        content
      </Container>,
    );
    expect(screen.getByTestId(testId)).toHaveClass(styles.large);
  });
});
