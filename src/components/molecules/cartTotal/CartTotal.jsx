import Button from '../../atoms/button/Button';
import Separator from '../../atoms/separator/Separator';
import FlexBlock from '../../helpers/flexBlock/FlexBlock';

import styles from './cartTotal.module.scss';

const CartTotal = ({ className, subTotal, total, delivery }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <div className={combinedClasses}>
            <strong className={styles.title}>Cart Total</strong>
            <FlexBlock column gap={16} className={styles.info}>
                <FlexBlock spaceBetween alignCenter>
                    <span>Subtotal:</span>
                    <span>${subTotal}</span>
                </FlexBlock>
                <Separator />
                <FlexBlock spaceBetween alignCenter>
                    <span>Shipping:</span>
                    <span>{delivery ? delivery : 'Free'}</span>
                </FlexBlock>
                <Separator />
                <FlexBlock spaceBetween alignCenter>
                    <span>Total:</span>
                    <span>${total}</span>
                </FlexBlock>
            </FlexBlock>
            <FlexBlock justifyCenter>
                <Button title="Process to checkout" type="link" className={styles.button} />
            </FlexBlock>
        </div>
    );
};

export default CartTotal;
