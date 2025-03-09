import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { User } from 'types/index';
import type { RootState } from '@/app/store';

interface AuthState {
  token: string | null;
  userId: string | null;
  userName: string | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  userId: localStorage.getItem('userId') || null,
  userName: localStorage.getItem('user-name') || null,
  isAuth: Boolean(localStorage.getItem('token')),
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<{ user: User }>) => {
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
      state.userName = null;
      state.isAuth = false;
      localStorage.clear();
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectUserName = (state: RootState) => state.auth.userName;
