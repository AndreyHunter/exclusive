import { Separator } from '@components/atoms/separator/Separator';
import { Flex } from '@components/helpers/flex/Flex';

import styles from './orderInfo.module.scss';

interface OrderInfoProps {
  total: number;
  subTotal: number;
  delivery?: number;
}

export const OrderInfo = ({ subTotal, total, delivery }: OrderInfoProps) => {
  return (
    <Flex flexDirection="column" gap={16} className={styles.root}>
      <Flex justifyContent="space-between" alignItems="center">
        <span>Subtotal:</span>
        <span>${subTotal.toFixed(2)}</span>
      </Flex>
      <Separator />
      <Flex justifyContent="space-between" alignItems="center">
        <span>Shipping:</span>
        <span>{delivery ? `$${delivery}` : 'Free'}</span>
      </Flex>
      <Separator />
      <Flex justifyContent="space-between" alignItems="center">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </Flex>
    </Flex>
  );
};
