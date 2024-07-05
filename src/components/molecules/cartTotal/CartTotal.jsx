import OrderInfo from '../orderInfo/OrderInfo';
import Button from '../../atoms/button/Button';

import Flex from '../../helpers/flex/Flex';

import styles from './cartTotal.module.scss';

const CartTotal = ({ className, subTotal, total, delivery }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <div className={combinedClasses}>
            <strong className={styles.title}>Cart Total</strong>
            <OrderInfo
                total={total}
                subTotal={subTotal}
                delivery={delivery}
                className={styles.info}
            />
            <Flex justifyContent="center">
                <Button
                    title="Process to checkout"
                    type="link"
                    to="/checkout"
                    className={styles.button}
                />
            </Flex>
        </div>
    );
};

export default CartTotal;
