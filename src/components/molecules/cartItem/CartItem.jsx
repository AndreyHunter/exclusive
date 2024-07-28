import { useState } from 'react';

import useMediaQuery from '@hooks/useMediaQuery';

import { Strings } from '@utils/index';

import Flex from '@components/helpers/flex/Flex';
import Counter from '@components/molecules/counter/Counter';
import OrderItem from '@components/molecules/orderItem/OrderItem';

import styles from './cartItem.module.scss';

const CartItem = ({ product, quantity, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    const isSmallMobile = useMediaQuery('(max-width: 360px)');
    const [count, setCount] = useState(quantity);

    const price = product.price;
    const discountedPrice = product.discountedPrice;

    const actualPrice = discountedPrice || price;
    const subTotalPrice = price * count;
    const totalPrice = actualPrice * count;

    const handleProductInc = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const handleProductDec = () => {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
    };

    return (
        <Flex
            className={combinedClasses}
            tagElement="li"
            justifyContent="space-between"
            alignItems="center">
            <OrderItem
                image={product.images[0]}
                name={Strings.sliceString(product.name, 28, true)}
                className={styles.box}
            />
            <Flex className={styles.block} justifyContent="space-between" alignItems="center">
                <div className={styles.price}>${totalPrice}</div>
                <Counter
                    variant="cart"
                    count={count}
                    decrement={handleProductDec}
                    increment={handleProductInc}
                />
                {!isSmallMobile && <div className={styles.price}>${subTotalPrice}</div>}
            </Flex>
        </Flex>
    );
};

export default CartItem;
