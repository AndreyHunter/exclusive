import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';
import { CartService } from '@services/index';
import type { RejectValueType, Cart } from 'types/index';

interface CartState {
  products: Cart;
  productsQuantity: number;
  loading: boolean;
  error: string | null | undefined;
}

const initialState: CartState = {
  products: [],
  productsQuantity: 0,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    updateQuantity: (
      state,
      { payload }: PayloadAction<{ productId: string; quantity: number }>,
    ) => {
      const product = state.products.find((product) => product.product._id === payload.productId);
      if (product) {
        product.quantity = payload.quantity;
      }
    },
    updateCartQuantityAfterAuth: (state, { payload }: PayloadAction<{ cart: Cart }>) => {
      state.productsQuantity = payload.cart.length;
    },
    clearCart: (state) => {
      state.products = [];
      state.productsQuantity = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      // Add to cart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.productsQuantity = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Get user cart
      .addCase(fetchUserCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserCart.fulfilled, (state, action) => {
        state.loading = false;
        if (action.meta.arg) {
          state.products = action.payload as Cart;
          state.productsQuantity = (action.payload as Cart).length;
        } else {
          if (typeof action.payload === 'object') {
            state.productsQuantity = action.payload.length;
          } else {
            state.productsQuantity = action.payload;
          }
        }
      })
      .addCase(fetchUserCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Update user cart
      .addCase(updateCartItemsQuantity.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCartItemsQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(updateCartItemsQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Delete product from cart
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productsQuantity = action.payload.length;
      });
  },
});

export const addToCart = createAsyncThunk<
  number,
  { productId: string; quantity: number },
  RejectValueType
>('addToCart', async ({ productId, quantity }, { rejectWithValue }) => {
  try {
    const data = await CartService.addToCart(productId, quantity);
    return data;
  } catch (err) {
    const error = (err as Error).message;
    return rejectWithValue(error);
  }
});

export const fetchUserCart = createAsyncThunk<Cart | number, boolean | undefined, RejectValueType>(
  'fetchUserCart',
  async (details, { rejectWithValue }) => {
    try {
      const data = await CartService.getUserCart(details);
      return data;
    } catch (err) {
      const error = (err as Error).message;
      return rejectWithValue(error);
    }
  },
);

export const updateCartItemsQuantity = createAsyncThunk<Cart, Cart, RejectValueType>(
  'updateCartItemsQuantity',
  async (products, { rejectWithValue }) => {
    try {
      const data = await CartService.updateCartItemsQuantity(products);
      return data;
    } catch (err) {
      const error = (err as Error).message;
      return rejectWithValue(error);
    }
  },
);

export const deleteCartItem = createAsyncThunk<Cart, string, RejectValueType>(
  'deleteCartItem',
  async (productId, { rejectWithValue }) => {
    try {
      const data = await CartService.deleteCartItem(productId);
      return data;
    } catch (err) {
      const error = (err as Error).message;
      return rejectWithValue(error);
    }
  },
);

export const { updateQuantity, updateCartQuantityAfterAuth, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectProductsInCart = (state: RootState) => state.cart.products;
export const selectProductsQuantity = (state: RootState) => state.cart.productsQuantity;
export const selectCartIsLoading = (state: RootState) => state.cart.loading;
export const selectCartError = (state: RootState) => state.cart.error;
