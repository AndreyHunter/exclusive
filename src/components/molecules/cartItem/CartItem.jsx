import { useState } from 'react';

import useMediaQuery from '../../../hooks/useMediaQuery';

import { Strings } from '../../../utils/index';

import OrderItem from '../../molecules/orderItem/OrderItem';
import Counter from '../counter/Counter';

import Flex from '../../helpers/flex/Flex';

import styles from './cartItem.module.scss';

const CartItem = ({ product, className }) => {
    const [price, setPrice] = useState(product.price);
    const [subtotal, setSubTotal] = useState(product.price);

    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    const isSmallMobile = useMediaQuery('(max-width: 360px)');

    const handleIncrementPrice = () => {
        setPrice((prev) => prev + product.price);
    };

    const handleDecrementPrice = () => {
        if (price <= product.price) {
            return;
        }
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
                    handleIncrementPrice={handleIncrementPrice}
                    handleDecrementPrice={handleDecrementPrice}
                />
                {!isSmallMobile && <div>${subtotal}</div>}
            </Flex>
        </Flex>
    );
};

export default CartItem;
