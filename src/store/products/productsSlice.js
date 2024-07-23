import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@services/axiosConfig';

const initialState = {
    products: [],
    flashSales: [],
    bestSellers: [],
    status: 'idle',
    error: null,
};

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
            .addCase(fetchFlashSales.fulfilled, (state, action) => {
                state.flashSales = action.payload;
            })
            .addCase(fetchBestSellers.fulfilled, (state, action) => {
                state.bestSellers = action.payload;
            });
    },
});

export const fetchProducts = createAsyncThunk('products/fetchProducts', async ({ limit, sort }) => {
    try {
        const res = await axios.get('/products', {
            params: {
                limit,
                sort,
            },
        });
        return res.data.products;
    } catch (err) {
        console.error(err.message);
    }
});

export const fetchFlashSales = createAsyncThunk('products/flash-sales', async ({ limit, sort }) => {
    try {
        const res = await axios.get('/products/flash-sales', {
            params: {
                limit,
                sort,
            },
        });

        return res.data.products;
    } catch (err) {
        console.error(err.message);
    }
});

export const fetchBestSellers = createAsyncThunk(
    'products/best-sellers',
    async ({ limit, sort }) => {
        try {
            const res = await axios.get('/products/best-sellers', {
                params: {
                    limit,
                    sort,
                },
            });
            return res.data.products;
        } catch (err) {
            console.error(err.message);
        }
    },
);

export default productsSlice.reducer;
