import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateQuantity } from '@store/cart/CartSlice';

import useMediaQuery from '@hooks/useMediaQuery';

import { Strings } from '@utils/index';

import Flex from '@components/helpers/flex/Flex';
import Counter from '@components/molecules/counter/Counter';
import OrderItem from '@components/molecules/orderItem/OrderItem';

import DeleteIcon from '@assets/icons/delete-from-cart.svg?react';

import styles from './cartItem.module.scss';

const CartItem = ({ product, quantity, handleDeleteProduct, className }) => {
    const dispatch = useDispatch();
    const itemQuantity = useSelector(
        (state) =>
            state.cart.items.find((item) => item.productId._id === product._id)?.quantity ||
            quantity,
    );

    const [count, setCount] = useState(quantity);
    const actualPrice = product.discountedPrice || product.price;
    const subTotalPrice = product.price * count;
    const totalPrice = actualPrice * count;

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

    const isSmallMobile = useMediaQuery('(max-width: 360px)');
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <Flex
            className={combinedClasses}
            tagElement="li"
            justifyContent="space-between"
            alignItems="center">
            <div className={styles.order}>
                <OrderItem
                    image={product.images[0]}
                    name={Strings.sliceString(product.name, 28, true)}
                    className={styles.box}
                />
                <DeleteIcon className={styles.deleteIcon} onClick={handleDeleteProduct} />
            </div>
            <Flex className={styles.block} justifyContent="space-between" alignItems="center">
                <div className={styles.price}>${totalPrice}</div>
                <Counter
                    variant="cart"
                    count={itemQuantity}
                    decrement={handleProductDec}
                    increment={handleProductInc}
                />
                {!isSmallMobile && <div className={styles.price}>${subTotalPrice}</div>}
            </Flex>
        </Flex>
    );
};

export default CartItem;
