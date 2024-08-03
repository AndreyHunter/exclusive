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
        dispatch(fetchUserCart({ details: true }));
    }, []);

    const cartTotal = products?.reduce((prev, product) => {
        const actualPrice = product.product.discountedPrice || product.product.price;
        return prev + actualPrice * product.quantity;
    }, 0);

    const subTotal = products?.reduce((prev, product) => {
        return prev + product.product.price * product.quantity;
    }, 0);

    const handleUpdateCart = () => {
        dispatch(updateCartItemsQuantity({ products }));
    };

    const handleDeleteItem = ({ productId }) => {
        dispatch(deleteCartItem({ productId }));
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
