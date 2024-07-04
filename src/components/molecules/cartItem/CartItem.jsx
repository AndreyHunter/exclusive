import { useState } from 'react';

import useMediaQuery from '../../../hooks/useMediaQuery';

import { Strings } from '../../../utils/index';

import FlexBlock from '../../helpers/flexBlock/FlexBlock';
import OrderItem from '../../molecules/orderItem/OrderItem';
import Counter from '../counter/Counter';

import styles from './cartItem.module.scss';

const CartItem = ({ product, className }) => {
    const [price, setPrice] = useState(product.price);
    const [subtotal, setSubTotal] = useState(product.price);

    const combinedClasses = `${styles.root} ${className || ''}`;
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
        <FlexBlock className={combinedClasses} tagElement="li" spaceBetween alignCenter>
            <OrderItem
                image={product.image}
                name={Strings.sliceString(product.name, 15)}
                className={styles.box}
            />
            <FlexBlock className={styles.block} spaceBetween alignCenter>
                <div>${price}</div>
                <Counter
                    handleIncrementPrice={handleIncrementPrice}
                    handleDecrementPrice={handleDecrementPrice}
                />
                {!isSmallMobile && <div>${subtotal}</div>}
            </FlexBlock>
        </FlexBlock>
    );
};

export default CartItem;