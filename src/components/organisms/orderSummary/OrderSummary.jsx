import { Strings } from '../../../utils/';

import FlexBlock from '../../helpers/flexBlock/FlexBlock';
import OrderInfo from '../../molecules/orderInfo/OrderInfo';
import OrderItem from '../../molecules/orderItem/OrderItem';

import styles from './orderSummary.module.scss';

const OrderSummary = ({ products, total, subtotal, delivery, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <FlexBlock column gap={30} className={combinedClasses}>
            <FlexBlock column gap={30} tagElement="ul" className={styles.list}>
                {products &&
                    products.map((product) => (
                        <FlexBlock key={product.id} tagElement="li" gap={20} spaceBetween alignCenter>
                            <OrderItem
                                image={product.image}
                                name={Strings.sliceString(product.name, 15)}
                                className={styles.box}
                            />
                            <span>${product.price}</span>
                        </FlexBlock>
                    ))}
            </FlexBlock>
            <OrderInfo
                total={total}
                subtotal={subtotal}
                delivery={delivery}
                className={styles.block}
            />
        </FlexBlock>
    );
};

export default OrderSummary;