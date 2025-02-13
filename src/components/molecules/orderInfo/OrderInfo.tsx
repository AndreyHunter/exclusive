import { clsx } from 'clsx';

import { Separator } from '@components/atoms/separator/Separator';
import { Flex } from '@components/helpers/flex/Flex';

import styles from './orderInfo.module.scss';

interface OrderInfoProps {
  total: number;
  subTotal: number;
  delivery?: number;
  className?: string;
}

export const OrderInfo = ({ subTotal, total, delivery, className }: OrderInfoProps) => {
  const classes = clsx(styles.root, className);

  return (
    <Flex flexDirection="column" gap={16} className={classes}>
      <Flex justifyContent="space-between" alignItems="center">
        <span>Subtotal:</span>
        <span>${subTotal}</span>
      </Flex>
      <Separator />
      <Flex justifyContent="space-between" alignItems="center">
        <span>Shipping:</span>
        <span>{delivery ? `$${delivery}` : 'Free'}</span>
      </Flex>
      <Separator />
      <Flex justifyContent="space-between" alignItems="center">
        <span>Total:</span>
        <span>${total}</span>
      </Flex>
    </Flex>
  );
};
