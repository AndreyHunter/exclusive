import { render, screen } from '@testing-library/react';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';

import styles from './counter.module.scss';
import { Counter } from './Counter';

const WrapperComponent = ({
  defaultCount,
  variant,
}: {
  defaultCount: number;
  variant?: 'cart';
}) => {
  const [count, setCount] = useState(defaultCount);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <Counter
      variant={variant}
      count={count}
      increment={handleIncrement}
      decrement={handleDecrement}
    />
  );
};

describe('Counter component', () => {
  describe('default variant', () => {
    it('renders with increased value (1)', async () => {
      render(<WrapperComponent defaultCount={1} />);
      const plusButton = screen.getByRole('button', { name: /button-plus/i });
      const count = screen.getByTestId('count');
      await userEvent.click(plusButton);
      expect(count).toHaveTextContent('2');
    });

    it('renders with decremented value (4)', async () => {
      render(<WrapperComponent defaultCount={5} />);
      const minusButton = screen.getByRole('button', { name: /button-minus/i });
      const count = screen.getByTestId('count');
      await userEvent.click(minusButton);
      expect(count).toHaveTextContent('4');
    });

    it("doesn't increment when count is more than 10", async () => {
      render(<WrapperComponent defaultCount={10} />);
      const plusButton = screen.getByRole('button', { name: /button-plus/i });
      const count = screen.getByTestId('count');
      await userEvent.click(plusButton);
      expect(count).toHaveTextContent('10');
    });

    it("doesn't decrement when count is less than 1", async () => {
      render(<WrapperComponent defaultCount={1} />);
      const minusButton = screen.getByRole('button', { name: /button-minus/i });
      const count = screen.getByTestId('count');
      await userEvent.click(minusButton);
      expect(count).toHaveTextContent('1');
    });
  });
  describe('cart variant', () => {
    it('renders cart counter when variant is "cart"', () => {
      render(<WrapperComponent variant="cart" defaultCount={1} />);
      const rootElement = screen.getByTestId('count').parentElement;
      expect(rootElement).toHaveClass(styles.cart);
    });
  });
});
