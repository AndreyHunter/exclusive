import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cartLoadingSelector, productsInCartSelector } from '@store/cart/cartSelectors';
import { deleteCartItem, fetchUserCart, updateCartItemsQuantity } from '@store/cart/CartSlice';

import CartPage from './CartPage';

const CartPageContainer = () => {
    const dispatch = useDispatch();
    const products = useSelector(productsInCartSelector);
    const loading = useSelector(cartLoadingSelector);

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        dispatch(fetchUserCart({ userId, details: true }));
    }, []);

    const cartTotal = products?.reduce((prev, product) => {
        const actualPrice = product.productId.discountedPrice || product.productId.price;
        return prev + actualPrice * product.quantity;
    }, 0);

    const subTotal = products?.reduce((prev, product) => {
        return prev + product.productId.price * product.quantity;
    }, 0);

    const handleUpdateCart = () => {
        dispatch(updateCartItemsQuantity({ userId: localStorage.getItem('userId'), products }));
    };

    const handleDeleteItem = ({ userId, productId }) => {
        dispatch(deleteCartItem({ userId, productId }));
    };

    return (
        <CartPage
            products={products}
            loading={loading}
            handleUpdateCart={handleUpdateCart}
            handleDeleteItem={handleDeleteItem}
            cartTotal={cartTotal}
            subTotal={subTotal}
        />
    );
};

export default CartPageContainer;
