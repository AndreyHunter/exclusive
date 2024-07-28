import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null,
    isAuth: !!localStorage.getItem('token'),
};

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.token = payload.token;
            state.userId = payload._id;
            state.isAuth = true;
            localStorage.setItem('token', payload.token);
            localStorage.setItem('userId', payload._id);
        },
        logout: (state) => {
            state.token = null;
            state.userId = null;
            state.isAuth = false;
            localStorage.clear();
        },
    },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
