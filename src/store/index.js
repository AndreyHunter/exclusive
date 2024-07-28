import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import cartReducer from './cart/CartSlice';
import mobileMenuReducer from './mobileMenu/mobileMenuSlice';
import productsSliceReducer from './products/productsSlice';
import userMenuReducer from './userMenu/userMenuSlice';

export const store = configureStore({
    reducer: {
        mobileMenu: mobileMenuReducer,
        auth: authReducer,
        user: userMenuReducer,
        products: productsSliceReducer,
        cart: cartReducer,
    },
});
