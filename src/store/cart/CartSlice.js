import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CartService } from '@services/index';

const initialState = {
    products: [],
    productsQuantity: [],
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        updateQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const product = state.products.find((product) => product.product._id === productId);
            if (product) {
                product.quantity = quantity;
            }
        },
        updateCartQuantityAfterAuth: (state, action) => {
            const { cart } = action.payload;
            state.productsQuantity = cart;
        },
        clearCart: (state) => {
            state.productsQuantity = [];
            state.products = [];
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
                state.productsQuantity = action.payload.cart;
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
                if (action.meta.arg.details) {
                    state.products = action.payload;
                } else {
                    state.productsQuantity = action.payload;
                }
            })
            .addCase(fetchUserCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Update user cart
            .addCase(updateCartItemsQuantity.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateCartItemsQuantity.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(updateCartItemsQuantity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // Delete product from cart
            .addCase(deleteCartItem.fulfilled, (state, action) => {
                state.productsQuantity = action.payload;
                state.products = action.payload;
            });
    },
});

export const addToCart = createAsyncThunk(
    'addToCart',
    async ({ productId, quantity }, { rejectWithValue }) => {
        try {
            const data = await CartService.addToCart({ productId, quantity });
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    },
);

export const fetchUserCart = createAsyncThunk(
    'fetchUserCart',
    async ({ details }, { rejectWithValue }) => {
        try {
            const data = await CartService.getUserCart({ details });
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    },
);

export const updateCartItemsQuantity = createAsyncThunk(
    'updateCartItemsQuantity',
    async ({ products }, { rejectWithValue }) => {
        try {
            const data = await CartService.updateCartItemsQuantity({ products });
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    },
);

export const deleteCartItem = createAsyncThunk(
    'deleteCartItem',
    async ({ productId }, { rejectWithValue }) => {
        try {
            const data = await CartService.deleteCartItem({ productId });
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    },
);

export const { updateQuantity, updateCartQuantityAfterAuth, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
