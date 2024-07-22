import Button from '@components/atoms/button/Button';
import Flex from '@components/helpers/flex/Flex';
import OrderInfo from '@components/molecules/orderInfo/OrderInfo';

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
                    tagElement="link"
                    to="/checkout"
                    className={styles.button}
                />
            </Flex>
        </div>
    );
};

export default CartTotal;
