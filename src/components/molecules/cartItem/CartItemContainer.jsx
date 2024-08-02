import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateQuantity } from '@store/cart/CartSlice';

import { Strings } from '@utils/index';

import CartItem from './CartItem';

const CartItemContainer = ({ product, quantity, handleDeleteProduct, className }) => {
    const dispatch = useDispatch();
    const itemQuantity = useSelector(
        (state) =>
            state.cart.products.find((item) => item.productId._id === product._id)?.quantity ||
            quantity,
    );

    const [count, setCount] = useState(quantity);
    const actualPrice = product.discountedPrice || product.price;
    const totalPrice = actualPrice * count;
    const subTotalPrice = product.price * count;

    const handleProductInc = () => {
        setCount((prev) => prev + 1);
        dispatch(updateQuantity({ productId: product._id, quantity: quantity + 1 }));
    };

    const handleProductDec = () => {
        setCount((prev) => (prev > 1 ? prev - 1 : 1));
        dispatch(
            updateQuantity({ productId: product._id, quantity: quantity > 1 ? quantity - 1 : 1 }),
        );
    };

    return (
        <CartItem
            product={product}
            quantity={quantity}
            handleDeleteProduct={handleDeleteProduct}
            handleProductInc={handleProductInc}
            handleProductDec={handleProductDec}
            totalPrice={totalPrice}
            subTotalPrice={subTotalPrice}
            itemQuantity={itemQuantity}
            productName={Strings.sliceString(product.name, 28, true)}
            className={className}
        />
    );
};

export default CartItemContainer;
