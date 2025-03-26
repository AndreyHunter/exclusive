import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  deleteCartItem,
  fetchUserCart,
  updateCartItemsQuantity,
  selectCartIsLoading,
  selectProductsInCart,
} from '@features/cart/cartSlice';

import CartPage from './CartPage';

const CartPageContainer = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProductsInCart);
  const loading = useAppSelector(selectCartIsLoading);

  useEffect(() => {
    dispatch(fetchUserCart(true));
  }, [dispatch]);

  const cartTotal = products?.reduce((prev, product) => {
    const actualPrice = product.product.discountedPrice || product.product.price;
    return prev + actualPrice * product.quantity;
  }, 0);

  const subTotal = products?.reduce((prev, product) => {
    return prev + product.product.price * product.quantity;
  }, 0);

  const handleUpdateCart = () => {
    dispatch(updateCartItemsQuantity(products));
  };

  const handleDeleteProduct = (productId: string) => {
    dispatch(deleteCartItem(productId));
  };

  return (
    <CartPage
      products={products}
      loading={loading}
      cartTotal={cartTotal}
      subTotal={subTotal}
      onUpdateCart={handleUpdateCart}
      onDeleteProduct={handleDeleteProduct}
    />
  );
};

export default CartPageContainer;
