import { clsx } from 'clsx';

import { Button } from '@components/atoms/button/Button';
import { Flex } from '@components/helpers/flex/Flex';
import { OrderInfo } from '@components/molecules/orderInfo/OrderInfo';

import styles from './cartTotal.module.scss';

interface CartTotalProps {
  total: number;
  subTotal: number;
  delivery?: number;
  className?: string;
}

export const CartTotal = ({ className, subTotal, total, delivery }: CartTotalProps) => {
  const classes = clsx(styles.root, className);

  return (
    <div className={classes}>
      <strong className={styles.title}>Cart Total</strong>
      <OrderInfo total={total} subTotal={subTotal} delivery={delivery} className={styles.info} />
      <Flex justifyContent="center">
        <Button tagElement="link" to="/checkout" className={styles.button}>
          Process to checkout
        </Button>
      </Flex>
    </div>
  );
};
