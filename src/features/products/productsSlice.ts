import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { handleAxiosError } from '@utils/others/index';
import type { RootState } from '@/app/store';
import type { Product, RejectValueType } from 'types/index';
import { ProductService } from '@services/index';

interface ProductsState {
  products: Product[];
  flashSales: Product[];
  bestSellers: Product[];
  error: string | null | undefined;
  loading: boolean;
}

const initialState: ProductsState = {
  products: [],
  flashSales: [],
  bestSellers: [],
  error: null,
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProducts: (state) => {
      state.products = [];
      state.bestSellers = [];
      state.flashSales = [];
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Products By Categories
      .addCase(fetchProductsByCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsByCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsByCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Flash Sales
      .addCase(fetchFlashSales.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFlashSales.fulfilled, (state, action) => {
        state.loading = false;
        state.flashSales = action.payload;
      })
      .addCase(fetchFlashSales.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Best Sellers
      .addCase(fetchBestSellers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBestSellers.fulfilled, (state, action) => {
        state.loading = false;
        state.bestSellers = action.payload;
      })
      .addCase(fetchBestSellers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const fetchProducts = createAsyncThunk<
  Product[],
  { limit: number; sort?: string },
  RejectValueType
>('products/fetchProducts', async ({ limit, sort }, { rejectWithValue }) => {
  try {
    const res = await ProductService.getProducts({ limit, sort });
    return res;
  } catch (err) {
    const error = handleAxiosError(err);
    return rejectWithValue(error);
  }
});

export const fetchProductsByCategories = createAsyncThunk<
  Product[],
  { category: string; limit: number; sort?: string },
  RejectValueType
>('products/fetchProductsByCategories', async ({ category, limit, sort }, { rejectWithValue }) => {
  try {
    const res = await ProductService.getProductsByCategories({ category, limit, sort });
    return res;
  } catch (err) {
    const error = handleAxiosError(err);
    return rejectWithValue(error);
  }
});

export const fetchFlashSales = createAsyncThunk<
  Product[],
  { limit: number; sort?: string },
  RejectValueType
>('products/fetchFlashSales', async ({ limit, sort }, { rejectWithValue }) => {
  try {
    const res = await ProductService.getFlashSales({ limit, sort });
    return res;
  } catch (err) {
    const error = handleAxiosError(err);
    return rejectWithValue(error);
  }
});

export const fetchBestSellers = createAsyncThunk<
  Product[],
  { limit: number; sort?: string },
  RejectValueType
>('products/fetchBestSellers', async ({ limit, sort }, { rejectWithValue }) => {
  try {
    const res = await ProductService.getBestSellers({ limit, sort });
    return res;
  } catch (err) {
    const error = handleAxiosError(err);
    return rejectWithValue(error);
  }
});

export const { clearProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const selectProducts = (state: RootState) => state.products.products;
export const selectFlashSales = (state: RootState) => state.products.flashSales;
export const selectBestSellers = (state: RootState) => state.products.bestSellers;
export const selectProductsIsLoading = (state: RootState) => state.products.loading;
export const selectProductsError = (state: RootState) => state.products.error;
