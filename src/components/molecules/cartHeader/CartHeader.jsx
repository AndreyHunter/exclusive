import Flex from '@components/helpers/flex/Flex';

import styles from './cartHeader.module.scss';

const CartHeader = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <Flex justifyContent="space-between" className={combinedClasses}>
            <div className={styles.product}>Product</div>
            <Flex alignItems="center" justifyContent="space-between" className={styles.block}>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
            </Flex>
        </Flex>
    );
};

export default CartHeader;
