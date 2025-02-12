import { render, screen, act } from '@testing-library/react';

import { Countdown } from './Countdown';
import styles from './countdown.module.scss';

describe('CountDown component', () => {
  const testId = 'countdown';

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  const renderComponent = (variant?: 'black' | 'white' | 'transparent') => {
    render(
      <Countdown
        data-testid={testId}
        variant={variant}
        endDate={new Date(Date.now() + 10000000)}
      />,
    );
  };

  it("renders with default variant when prop isn't passed", () => {
    renderComponent();
    expect(screen.getByTestId(testId)).toHaveClass(styles.wrapper);
  });

  it('renders with white class if variant is "white"', () => {
    renderComponent('white');
    expect(screen.getByTestId(testId).firstChild).toHaveClass(styles.white);
  });

  it('renders with transparent class when variant is "transparent"', () => {
    renderComponent('transparent');
    expect(screen.getByTestId(testId)).toHaveClass(styles.transparent);
  });

  it("doesn't render when timer is expired", () => {
    const { container } = render(<Countdown endDate={new Date(Date.now() - 1000)} />);
    expect(container.firstChild).toBeNull();
  });

  it('returns null when timer is expired', () => {
    const { container } = render(<Countdown endDate={new Date(Date.now() + 3000)} />);
    expect(container.firstChild).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(container.firstChild).toBeNull();
  });
});
