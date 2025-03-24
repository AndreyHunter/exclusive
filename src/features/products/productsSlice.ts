import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { handleAxiosError } from '@utils/others/index';
import type { RootState } from '@/app/store';
import type { Product, ProductsResponse, RejectValueType } from 'types/index';
import { ProductService } from '@services/index';
import { Utils } from '@utils/index';

import type { FiltersState } from '../productFilters/productFiltersSlice';

export interface ProductsState {
  products: Product[];
  error: string | null | undefined;
  loading: boolean;
  hasMore: boolean;
}

const initialState: ProductsState = {
  products: [],
  error: null,
  loading: false,
  hasMore: true,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearProducts: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, { payload }) => {
        const { products, hasMore } = payload;
        state.loading = false;
        state.hasMore = hasMore;
        state.products = [...state.products, ...products];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

type ProductsType = 'products' | 'products-category' | 'flash-sales' | 'best-sellers';

export const fetchProducts = createAsyncThunk<
  ProductsResponse,
  { limit: number; page: number; type: ProductsType; category?: string; filters?: FiltersState },
  RejectValueType
>(
  'products/fetchProducts',
  async ({ limit, page, type, category, filters }, { rejectWithValue }) => {
    let queryFilters: object = {};

    if (filters) {
      queryFilters = Utils.createFlatObjectFromFilters(filters);
    }

    try {
      let res: { products: Product[]; hasMore: boolean } = { products: [], hasMore: true };

      if (type === 'products') {
        res = await ProductService.getProducts({ limit, page, queryFilters });
      }

      if (type === 'products-category') {
        res = await ProductService.getProductsByCategories({ limit, page, category, queryFilters });
      }

      if (type === 'best-sellers') {
        res = await ProductService.getBestSellers({ limit, page, queryFilters });
      }

      if (type === 'flash-sales') {
        res = await ProductService.getFlashSales({ limit, page, queryFilters });
      }

      return res;
    } catch (err) {
      const error = handleAxiosError(err);
      return rejectWithValue(error);
    }
  },
);

export const { clearProducts } = productsSlice.actions;
export default productsSlice.reducer;

export const selectProducts = (state: RootState) => state.products.products;
export const selectProductsIsLoading = (state: RootState) => state.products.loading;
export const selectProductsError = (state: RootState) => state.products.error;
export const selectHasMore = (state: RootState) => state.products.hasMore;
