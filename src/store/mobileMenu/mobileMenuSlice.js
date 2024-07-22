import { createSlice } from '@reduxjs/toolkit';

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
    },
});

export const { toggleMenuOpen } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
