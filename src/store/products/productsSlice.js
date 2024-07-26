import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@services/axiosConfig';

const initialState = {
    products: [],
    flashSales: [],
    bestSellers: [],
    error: null,
    loading: false,
};

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        clearProducts: (state) => {
            state.products = [];
            state.error = null;
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

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ limit, sort }, { rejectWithValue }) => {
        try {
            const res = await axios.get('/products', {
                params: {
                    limit,
                    sort,
                },
            });
            return res.data.products;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    },
);

export const fetchProductsByCategories = createAsyncThunk(
    'products/category',
    async ({ category, limit, sort }, { rejectWithValue }) => {
        try {
            const res = await axios.get(`/products/category${category}`, {
                params: {
                    limit,
                    sort,
                },
            });

            return res.data.products;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    },
);

export const fetchFlashSales = createAsyncThunk(
    'products/flash-sales',
    async ({ limit, sort }, { rejectWithValue }) => {
        try {
            const res = await axios.get('/products/flash-sales', {
                params: {
                    limit,
                    sort,
                },
            });

            return res.data.products;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    },
);

export const fetchBestSellers = createAsyncThunk(
    'products/best-sellers',
    async ({ limit, sort }, { rejectWithValue }) => {
        try {
            const res = await axios.get('/products/best-sellers', {
                params: {
                    limit,
                    sort,
                },
            });
            return res.data.products;
        } catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    },
);

export const { clearProducts } = productsSlice.actions;
export default productsSlice.reducer;
