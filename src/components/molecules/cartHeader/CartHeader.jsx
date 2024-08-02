import useMediaQuery from '@hooks/useMediaQuery';

import Flex from '@components/helpers/flex/Flex';

import styles from './cartHeader.module.scss';

const CartHeader = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    const isSmallMobile = useMediaQuery('(max-width: 568px)');

    return (
        <Flex justifyContent="space-between" className={combinedClasses}>
            <Flex alignItems="center" justifyContent="space-between" className={styles.left}>
                <div>Product</div>
                <div>Price</div>
            </Flex>
            <Flex alignItems="center" justifyContent="space-between" className={styles.right}>
                <div>Quantity</div>
                {!isSmallMobile && <div>Subtotal</div>}
            </Flex>
        </Flex>
    );
};

export default CartHeader;
