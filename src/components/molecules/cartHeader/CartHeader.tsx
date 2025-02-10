import { clsx } from 'clsx';

import { useMediaQuery } from '@hooks/useMediaQuery';
import { Flex } from '@components/helpers/flex/Flex';

import styles from './cartHeader.module.scss';

interface CartHeaderProps {
  className?: string;
}

export const CartHeader = ({ className }: CartHeaderProps) => {
  const classes = clsx(styles.root, className);
  const isSmallMobile = useMediaQuery('(max-width: 568px)');

  return (
    <Flex justifyContent="space-between" className={classes}>
      <Flex alignItems="center" justifyContent="space-between" className={styles.left}>
        <div>Product</div>
        <div>Price</div>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" className={styles.right}>
        <div>Quantity</div>
        {!isSmallMobile && <div>Subtotal</div>}
      </Flex>
    </Flex>
  );
};
