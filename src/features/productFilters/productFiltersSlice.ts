import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/app/store';

export interface FiltersState {
  priceRange: [number, number];
  sortBy: 'price_asc' | 'price_desc' | 'newest' | 'rating' | 'popularity';
  specificFilters: { [key: string]: any };
}

const initialState: FiltersState = {
  priceRange: [0, 50000],
  sortBy: 'popularity',
  specificFilters: {},
};

export const productFilters = createSlice({
  name: 'productFilters',
  initialState,
  reducers: {
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
    },
    setSortBy: (state, action: PayloadAction<FiltersState['sortBy']>) => {
      state.sortBy = action.payload;
    },

    setSpecificFilter: (state, action: PayloadAction<{ key: string; value: any }>) => {
      const { key, value } = action.payload;
      state.specificFilters[key] = value;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const { setPriceRange, setSortBy, setSpecificFilter, resetFilters } = productFilters.actions;

export const selectAllFilters = (state: RootState) => state.productFilters;
export const selectPriceRange = (state: RootState) => state.productFilters.priceRange;
export const selectSortBy = (state: RootState) => state.productFilters.sortBy;

export const selectSpecificFilters = (state: RootState) => state.productFilters.specificFilters;

export default productFilters.reducer;
