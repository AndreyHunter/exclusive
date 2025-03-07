import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

const initialState = {
  token: localStorage.getItem('token') || null,
  userId: localStorage.getItem('userId') || null,
  isAuth: Boolean(localStorage.getItem('token')),
  userName: localStorage.getItem('user-name') || null,
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.token = payload.user.token;
      state.userId = payload.user._id;
      state.userName = payload.user.name;
      state.isAuth = true;
      localStorage.setItem('token', payload.user.token);
      localStorage.setItem('userId', payload.user._id);
      localStorage.setItem('user-name', payload.user.name);
    },
    logout: (state) => {
      state.token = null;
      state.userId = null;
      state.isAuth = false;
      state.userName = null;
      localStorage.clear();
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectUserName = (state: RootState) => state.auth.userName;
