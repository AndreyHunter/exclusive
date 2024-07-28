import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@services/axiosConfig';

const initialState = {
    items: [],
    productsIds: [],
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Add to cart
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.productsIds = action.payload.cart;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Get user cart
            .addCase(fetchUserCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUserCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchUserCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Get user cart ids
            .addCase(fetchUserCartByIds.fulfilled, (state, action) => {
                state.productsIds = action.payload;
            });
    },
});

export const addToCart = createAsyncThunk('addToCart', async ({ userId, productId, quantity }) => {
    try {
        const res = await axios.post('/cart', { userId, productId, quantity });

        if (!res) {
            throw new Error('Can"t add product to cart');
        }

        return res.data;
    } catch (err) {
        console.error(err.message);
    }
});

export const fetchUserCart = createAsyncThunk('fetchUserCart', async (userId) => {
    try {
        const res = await axios.get('/cart', {
            params: {
                userId,
            },
        });

        return res.data;
    } catch (err) {
        console.error(err.message);
    }
});

export const fetchUserCartByIds = createAsyncThunk('fetchUserCartIds', async (userId) => {
    try {
        const res = await axios.get('/cart/ids', {
            params: {
                userId,
            },
        });

        return res.data;
    } catch (err) {
        console.error(err.message);
    }
});

export default cartSlice.reducer;
