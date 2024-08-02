import useMediaQuery from '@hooks/useMediaQuery';

import Flex from '@components/helpers/flex/Flex';
import Counter from '@components/molecules/counter/Counter';
import OrderItem from '@components/molecules/orderItem/OrderItem';

import DeleteIcon from '@assets/icons/delete-from-cart.svg?react';

import styles from './cartItem.module.scss';

const CartItem = ({
    product,
    productName,
    handleDeleteProduct,
    handleProductInc,
    handleProductDec,
    totalPrice,
    subTotalPrice,
    itemQuantity,
    className,
}) => {
    const isSmallMobile = useMediaQuery('(max-width: 360px)');
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <Flex
            className={combinedClasses}
            tagElement="li"
            justifyContent="space-between"
            alignItems="center">
            <div className={styles.order}>
                <OrderItem image={product.images[0]} name={productName} className={styles.box} />
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
