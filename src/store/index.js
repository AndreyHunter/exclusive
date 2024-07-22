import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import mobileMenuReducer from './mobileMenu/mobileMenuSlice';
import userMenuReducer from './userMenu/userMenuSlice';

export const store = configureStore({
    reducer: {
        mobileMenu: mobileMenuReducer,
        auth: authReducer,
        user: userMenuReducer,
    },
});
