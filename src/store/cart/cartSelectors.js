export const productsInCartSelector = (state) => state.cart.products;
export const productsInCartQuantitySelector = (state) => state.cart.productsQuantity;

export const cartLoadingSelector = (state) => state.cart.loading;
export const cartErrorSelector = (state) => state.cart.error;
