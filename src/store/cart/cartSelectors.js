export const productsInCartIdsSelector = (state) => state.cart.productsIds;
export const productsInCartSelector = (state) => state.cart.items;

export const cartLoadingSelector = (state) => state.cart.loading;
export const cartErrorSelector = (state) => state.cart.error;
