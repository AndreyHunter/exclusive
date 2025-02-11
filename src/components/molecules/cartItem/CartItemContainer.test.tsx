import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { CartItemContainer } from './CartItemContainer';
import { mockProduct } from './CartItem.fixtures';
import { CartItem } from './CartItem';

jest.mock('./CartItem', () => ({
  CartItem: jest.fn(),
}));

jest.mock('@features/cart/cartSlice.ts', () => ({
  updateQuantity: () => {},
}));

const mockReducer = (state = { products: [] }, action: { type: string }) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

describe('CartItemContainer component', () => {
  const store = configureStore({
    reducer: {
      cart: mockReducer,
    },
  });

  it('passes props to CartItem correctly', () => {
    const handleDeleteProduct = jest.fn();

    render(
      <Provider store={store}>
        <CartItemContainer
          product={mockProduct}
          quantity={1}
          onDeleteProduct={handleDeleteProduct}
        />
      </Provider>,
    );

    expect(CartItem).toHaveBeenCalledWith(
      expect.objectContaining({
        product: mockProduct,
        itemQuantity: 1,
        onDeleteProduct: handleDeleteProduct,
        productName: expect.any(String),
        onIncrementProduct: expect.any(Function),
        onDecrementProduct: expect.any(Function),
        totalPrice: expect.any(Number),
        subTotalPrice: expect.any(Number),
      }),
      undefined,
    );
  });
});
