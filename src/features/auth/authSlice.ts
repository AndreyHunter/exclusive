import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

const initialState = {
  token: localStorage.getItem('token') || null,
  userId: localStorage.getItem('userId') || null,
  isAuth: Boolean(localStorage.getItem('token')),
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.token = payload.user.token;
      state.userId = payload.user._id;
      state.isAuth = true;
      localStorage.setItem('token', payload.user.token);
      localStorage.setItem('userId', payload.user._id);
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

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
