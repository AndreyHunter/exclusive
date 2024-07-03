import FlexBlock from '../../helpers/flexBlock/FlexBlock';

import styles from './cartHeader.module.scss';

const CartHeader = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <FlexBlock spaceBetween className={combinedClasses}>
            <div className={styles.product}>Product</div>
            <FlexBlock alignCenter spaceBetween className={styles.block}>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
            </FlexBlock>
        </FlexBlock>
    );
};

export default CartHeader;
