import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { updateQuantity } from '@features/cart/cartSlice';
import { Strings } from '@utils/index';
import type { Product } from 'types/index';

import { CartItem } from './CartItem';

export interface CartItemContainerProps {
  product: Product;
  quantity: number;
  className?: string;
  onDeleteProduct: () => void;
}

export const CartItemContainer = ({
  product,
  quantity,
  onDeleteProduct,
  className,
}: CartItemContainerProps) => {
  const dispatch = useAppDispatch();
  const itemQuantity = useAppSelector(
    (state) =>
      state.cart.products.find((item) => item.product._id === product._id)?.quantity || quantity,
  );

  const [count, setCount] = useState(quantity);
  const actualPrice = product.discountedPrice || product.price;
  const totalPrice = actualPrice * count;
  const subTotalPrice = product.price * count;

  const handleIncrementProduct = () => {
    setCount((prev) => prev + 1);
    dispatch(updateQuantity({ productId: product._id, quantity: quantity + 1 }));
  };

  const handleDecrementProduct = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
    dispatch(updateQuantity({ productId: product._id, quantity: quantity > 1 ? quantity - 1 : 1 }));
  };

  return (
    <CartItem
      product={product}
      totalPrice={totalPrice}
      subTotalPrice={subTotalPrice}
      itemQuantity={itemQuantity}
      productName={Strings.sliceString(product.name, 28, true)}
      className={className}
      onDeleteProduct={onDeleteProduct}
      onIncrementProduct={handleIncrementProduct}
      onDecrementProduct={handleDecrementProduct}
    />
  );
};
