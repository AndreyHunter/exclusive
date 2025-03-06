import { Strings } from '@utils/index';
import { Flex } from '@components/helpers/flex/Flex';
import { OrderInfo } from '@components/molecules/orderInfo/OrderInfo';
import { OrderItem } from '@components/molecules/orderItem/OrderItem';
import type { Product } from 'types/index';

import styles from './orderSummary.module.scss';

interface OrderSummaryProps {
  products: Product[];
  total: number;
  subtotal: number;
  delivery?: number;
}

export const OrderSummary = ({ products, total, subtotal, delivery }: OrderSummaryProps) => {
  return (
    <Flex flexDirection="column" gap={30} className={styles.root}>
      <Flex tagElement="ul" flexDirection="column" gap={30} className={styles.list}>
        {products &&
          products.map((product) => (
            <Flex
              key={product._id}
              tagElement="li"
              gap={20}
              justifyContent="space-between"
              alignItems="center">
              <OrderItem
                id={product._id}
                image={product.images[0]}
                name={Strings.sliceString(product.name, 15)}
                className={styles.box}
              />
              <span>${product.price}</span>
            </Flex>
          ))}
      </Flex>
      <OrderInfo total={total} subTotal={subtotal} delivery={delivery} />
    </Flex>
  );
};
