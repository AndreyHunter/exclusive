import { useState } from 'react';

import useCounter from '@hooks/useCounter';
import useMediaQuery from '@hooks/useMediaQuery';

import { Strings } from '@utils/index';

import Flex from '@components/helpers/flex/Flex';
import Counter from '@components/molecules/counter/Counter';
import OrderItem from '@components/molecules/orderItem/OrderItem';

import styles from './cartItem.module.scss';

const CartItem = ({ product, className }) => {
    const [price, setPrice] = useState(product.price);
    const [subtotal, setSubTotal] = useState(product.price);
    const { count, handleDecrement, handleIncrement } = useCounter();

    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    const isSmallMobile = useMediaQuery('(max-width: 360px)');

    const handleProductInc = () => {
        setPrice((prev) => prev + product.price);
        handleIncrement();
    };

    const handleProductDec = () => {
        if (price <= product.price) {
            return;
        }
        handleDecrement();
        setPrice((prev) => prev - product.price);
    };

    return (
        <Flex
            className={combinedClasses}
            tagElement="li"
            justifyContent="space-between"
            alignItems="center">
            <OrderItem
                image={product.image}
                name={Strings.sliceString(product.name, 15)}
                className={styles.box}
            />
            <Flex className={styles.block} justifyContent="space-between" alignItems="center">
                <div>${price}</div>
                <Counter
                    variant="cart"
                    count={count}
                    decrement={handleProductDec}
                    increment={handleProductInc}
                />
                {!isSmallMobile && <div>${subtotal}</div>}
            </Flex>
        </Flex>
    );
};

export default CartItem;
