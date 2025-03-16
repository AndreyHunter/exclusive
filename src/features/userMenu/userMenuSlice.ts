import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

export interface UserMenuState {
  isOpen: boolean;
}

const initialState: UserMenuState = {
  isOpen: false,
};

const userMenuSlice = createSlice({
  name: 'userMenu',
  initialState,
  reducers: {
    toggleMenuOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeUserMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { closeUserMenu, toggleMenuOpen } = userMenuSlice.actions;
export default userMenuSlice.reducer;

export const selectIsUserMenuOpen = (state: RootState) => state.userMenu.isOpen;
