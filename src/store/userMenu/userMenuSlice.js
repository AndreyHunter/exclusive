import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isOpen: false,
};

const userMenuSlice = createSlice({
    name: 'userMenuSlice',
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
