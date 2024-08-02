import axios from './axiosConfig';

export const addToCart = async ({ userId, productId, quantity }) => {
    try {
        const { data } = await axios.post('/cart', { userId, productId, quantity });

        if (!data) {
            throw new Error('Can"t add product to cart');
        }

        return data;
    } catch (err) {
        console.error(`Service error: ${err.message}`);
        throw err;
    }
};

export const getUserCart = async ({ userId, details }) => {
    try {
        const { data } = await axios.get('/cart', {
            params: {
                userId,
                details,
            },
        });

        if (!data) {
            throw new Error('Cart wasn"t found');
        }

        return data;
    } catch (err) {
        console.error(`Service error: ${err.message}`);
        throw err;
    }
};

export const updateCartItemsQuantity = async ({ userId, products }) => {
    try {
        const { data } = await axios.put('/cart', { userId, products });

        if (!data) {
            throw new Error('Cart wasn"t update');
        }

        return data;
    } catch (err) {
        console.error(`Service error: ${err.message}`);
        throw err;
    }
};

export const deleteCartItem = async ({ userId, productId }) => {
    try {
        const { data } = await axios.delete('/cart', {
            params: { userId, productId },
        });

        if (!data) {
            throw new Error('product wasn"t delete');
        }

        return data;
    } catch (err) {
        console.error(`Service error: ${err.message}`);
        throw err;
    }
};
