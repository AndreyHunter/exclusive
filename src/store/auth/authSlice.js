import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token') || null,
    isAuth: !!localStorage.getItem('token'),
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload;
            state.isAuth = true;
            localStorage.setItem('token', payload);
        },
        removeToken: (state) => {
            state.token = null;
            state.isAuth = false;
            localStorage.removeItem('token');
        },
    },
});

export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
