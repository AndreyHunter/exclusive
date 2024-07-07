import Separator from '@components/atoms/separator/Separator';
import Flex from '@components/helpers/flex/Flex';

import styles from './orderInfo.module.scss';

const OrderInfo = ({ subTotal, total, delivery, className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

    return (
        <Flex flexDirection="column" gap={16} className={combinedClasses}>
            <Flex justifyContent="space-between" alignItems="center">
                <span>Subtotal:</span>
                <span>${subTotal}</span>
            </Flex>
            <Separator />
            <Flex justifyContent="space-between" alignItems="center">
                <span>Shipping:</span>
                <span>{delivery ? delivery : 'Free'}</span>
            </Flex>
            <Separator />
            <Flex justifyContent="space-between" alignItems="center">
                <span>Total:</span>
                <span>${total}</span>
            </Flex>
        </Flex>
    );
};

export default OrderInfo;
