import Separator from '../../atoms/separator/Separator';
import FlexBlock from '../../helpers/flexBlock/FlexBlock';

import styles from './orderInfo.module.scss';

const OrderInfo = ({ subTotal, total, delivery, className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`;

    return (
        <FlexBlock column gap={16} className={combinedClasses}>
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
    );
};

export default OrderInfo;
