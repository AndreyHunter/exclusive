import { useState } from 'react';
import { Link } from 'react-router-dom';

import FlexBlock from '../../helpers/flexBlock/FlexBlock';
import Counter from '../counter/Counter';

import { Strings } from '../../../utils/index';

import styles from './cartItem.module.scss';
import useMediaQuery from '../../../hooks/useMediaQuery';

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
            <FlexBlock gap={30} className={styles.box} alignCenter>
                <Link to={`/catalog/${product.category}/${product.name}`} className={styles.img}>
                    <img src={product.image} alt={product.name} />
                </Link>
                <Link to={`/catalog/${product.category}/${product.name}`} className={styles.title}>
                    {Strings.sliceString(product.name, 15, true)}
                </Link>
            </FlexBlock>
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