import { clsx } from 'clsx';

import { useMediaQuery } from '@hooks/useMediaQuery';
import { Flex } from '@components/helpers/flex/Flex';
import { OrderItem } from '@components/molecules/orderItem/OrderItem';
import { Counter } from '@components/molecules/counter/Counter';
import DeleteIcon from '@assets/icons/delete-from-cart.svg?react';

import type { CartItemContainerProps } from './CartItemContainer';
import styles from './cartItem.module.scss';

interface CartItemProps extends Omit<CartItemContainerProps, 'quantity'> {
  productName: string;
  totalPrice: number;
  subTotalPrice: number;
  itemQuantity: number;
  onIncrementProduct: () => void;
  onDecrementProduct: () => void;
}

export const CartItem = ({
  product,
  productName,
  totalPrice,
  subTotalPrice,
  itemQuantity,
  className,
  onDeleteProduct,
  onIncrementProduct,
  onDecrementProduct,
}: CartItemProps) => {
  const isSmallMobile = useMediaQuery('(max-width: 568px)');
  const classes = clsx(styles.root, className);

  return (
    <Flex className={classes} tagElement="li" justifyContent="space-between" alignItems="center">
      <div className={styles.order}>
        <OrderItem
          image={product.images[0]}
          name={productName}
          className={styles.box}
          id={product._id}
        />
        <div className={styles.price}>${totalPrice}</div>
        <DeleteIcon
          data-testid="delete-icon-button"
          className={styles.deleteIcon}
          onClick={onDeleteProduct}
        />
      </div>
      <Flex className={styles.block} justifyContent="space-between" alignItems="center">
        <Counter
          variant="cart"
          count={itemQuantity}
          increment={onIncrementProduct}
          decrement={onDecrementProduct}
        />
        {!isSmallMobile && <div className={styles.price}>${subTotalPrice}</div>}
      </Flex>
    </Flex>
  );
};
