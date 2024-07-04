import OrderInfo from '../orderInfo/OrderInfo';
import Button from '../../atoms/button/Button';
import FlexBlock from '../../helpers/flexBlock/FlexBlock';

import styles from './cartTotal.module.scss';

const CartTotal = ({ className, subTotal, total, delivery }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <div className={combinedClasses}>
            <strong className={styles.title}>Cart Total</strong>
            <OrderInfo
                total={total}
                subTotal={subTotal}
                delivery={delivery}
                className={styles.info}
            />
            <FlexBlock justifyCenter>
                <Button
                    title="Process to checkout"
                    type="link"
                    to="/checkout"
                    className={styles.button}
                />
            </FlexBlock>
        </div>
    );
};

export default CartTotal;
