import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

const initialState = {
  isOpen: false,
};

export const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState,
  reducers: {
    toggleMenuOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeMobileMenu: (state) => {
      state.isOpen = false;
    },
  },
});

export const { toggleMenuOpen, closeMobileMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;

export const selectIsMobileMenuOpen = (state: RootState) => state.mobileMenu.isOpen;
