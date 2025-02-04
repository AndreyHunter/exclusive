import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddToCartButton } from './AddToCartButton';
import type { AddToCartButtonProps } from './AddToCartButton';

const setup = (props: AddToCartButtonProps) => {
  render(<AddToCartButton data-testid="add-to-cart-button" {...props} />);
  const button = screen.getByTestId('add-to-cart-button');
  return { button };
};

describe('AddToCardButton component', () => {
  test('renders loader if loading is true', () => {
    setup({ loading: true, showAddedMessage: false });
    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  test('shows message "In Cart" if product is added', () => {
    const { button } = setup({ loading: false, showAddedMessage: true });
    expect(button).toHaveTextContent(/in cart/i);
  });

  test('shows message "Add to cart" if no flags are passed', () => {
    const { button } = setup({ loading: false, showAddedMessage: false });
    expect(button).toHaveTextContent(/add to cart/i);
  });

  test('checks if function executes', async () => {
    const onClickMock = jest.fn();
    const { button } = setup({
      loading: false,
      showAddedMessage: false,
      onClick: onClickMock,
    });
    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test("checks if function doesn't call when it is disabled", async () => {
    const onClickMock = jest.fn();
    const { button } = setup({ loading: true, showAddedMessage: false, onClick: onClickMock });
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});
