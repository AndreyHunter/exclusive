import { clsx } from 'clsx';

import { Flex } from '@components/helpers/flex/Flex';
import MinusIcon from '@assets/icons/minus.svg?react';
import PlusIcon from '@assets/icons/plus.svg?react';
import Arrow from '@assets/icons/small-arrow.svg?react';

import styles from './counter.module.scss';

interface CounterProps {
  variant?: 'primary' | 'cart';
  count: number;
  className?: string;
  increment: () => void;
  decrement: () => void;
}

export const Counter = ({
  variant = 'primary',
  count,
  increment,
  decrement,
  className,
}: CounterProps) => {
  const classes = clsx(styles.root, className);

  const handleIncrement = () => {
    if (count < 10) {
      increment();
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      decrement();
    }
  };

  if (variant === 'cart') {
    return (
      <Flex className={classes} gap={16}>
        <span>{count}</span>
        <Flex flexDirection="column" className={styles.buttons}>
          <button type="button" onClick={handleIncrement}>
            <Arrow />
          </button>
          <button type="button" onClick={handleDecrement}>
            <Arrow />
          </button>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex className={styles.counter} alignItems="center" justifyContent="space-between">
      <button className={styles.button} onClick={handleDecrement}>
        <MinusIcon />
      </button>
      <span>{count}</span>
      <button className={styles.activeButton} onClick={handleIncrement}>
        <PlusIcon />
      </button>
    </Flex>
  );
};
