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
    reducers: {
        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const product = state.items.find((product) => product.productId._id === productId);
            if (product) {
                product.quantity = quantity;
            }
        },
    },
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
            })
            // Update user cart
            .addCase(updateCartItemsQuantity.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCartItemsQuantity.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(updateCartItemsQuantity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteCartItem.fulfilled, (state, action) => {
                state.items = action.payload;
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

export const updateCartItemsQuantity = createAsyncThunk(
    'updateCartItemsQuantity',
    async ({ userId, products }) => {
        try {
            const res = await axios.put('/cart', { userId, products });
            return res.data;
        } catch (err) {
            console.error(err.message);
        }
    },
);

export const deleteCartItem = createAsyncThunk('deleteCartItem', async ({ userId, productId }) => {
    try {
        const { data } = await axios.delete('/cart', {
            params: { userId, productId },
        });
        return data;
    } catch (err) {
        console.error(err.message);
    }
});

export const { updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
