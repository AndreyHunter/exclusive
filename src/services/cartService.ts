import type { Cart } from 'types/index';

import axios from './axiosConfig';

export const addToCart = async (productId: string, quantity: number): Promise<number> => {
  try {
    const { data } = await axios.post('/cart', { productId, quantity });

    if (!data) {
      throw new Error('Can"t add product to cart');
    }

    return data;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};

export const getUserCart = async (details?: boolean): Promise<Cart | number> => {
  try {
    const { data } = await axios.get<Cart | number>('/cart', {
      params: {
        details,
      },
    });

    return data;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};

export const updateCartItemsQuantity = async (products: Cart): Promise<Cart> => {
  try {
    const { data } = await axios.put<Cart>('/cart', { products });

    if (!data) {
      throw new Error('Cart wasn"t update');
    }

    return data;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};

export const deleteCartItem = async (productId: string): Promise<Cart> => {
  try {
    const { data } = await axios.delete<Cart>('/cart', {
      params: { productId },
    });

    if (!data) {
      throw new Error('product wasn"t delete');
    }

    return data;
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`Service error: ${errorMessage}`);
    throw err;
  }
};
