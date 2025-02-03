import { configureStore } from '@reduxjs/toolkit';

import productsReducer from '@features/products/productsSlice';
import authReducer from '@features/auth/authSlice';
import cartReducer from '@features/cart/cartSlice';
import mobileMenuReducer from '@features/mobileMenu/mobileMenuSlice';
import userMenuReducer from '@features/userMenu/userMenuSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    cart: cartReducer,
    mobileMenu: mobileMenuReducer,
    userMenu: userMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
