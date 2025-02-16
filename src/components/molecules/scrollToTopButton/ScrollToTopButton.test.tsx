import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ScrollToTopButton } from './ScrollToTopButton';
import styles from './scrollToTopButton.module.scss';

describe('ScrollToTopButton', () => {
  const mockScrollTo = jest.fn();

  beforeEach(() => {
    Object.defineProperty(window, 'scrollTo', {
      value: mockScrollTo,
      writable: true,
    });

    jest.clearAllMocks();
  });

  it('should show button when scrolled more than 600px', () => {
    render(<ScrollToTopButton />);
    const button = screen.getByRole('button');

    expect(button).not.toHaveClass(styles.visible);

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 700, configurable: true });
      window.dispatchEvent(new Event('scroll'));
    });

    expect(button).toHaveClass(styles.visible);

    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, configurable: true });
      window.dispatchEvent(new Event('scroll'));
    });

    expect(button).not.toHaveClass(styles.visible);
  });

  it('should scroll to top when clicked', async () => {
    render(<ScrollToTopButton />);
    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });

  it('should clean up scroll event listener on unmount', () => {
    const addEventListenerSpy = jest.spyOn(window, 'addEventListener');
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    const { unmount } = render(<ScrollToTopButton />);

    expect(addEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));

    addEventListenerSpy.mockRestore();
    removeEventListenerSpy.mockRestore();
  });
});
