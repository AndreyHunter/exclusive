import { Strings } from '../../../utils/';

import OrderInfo from '../../molecules/orderInfo/OrderInfo';
import OrderItem from '../../molecules/orderItem/OrderItem';

import Flex from '../../helpers/flex/Flex';

import styles from './orderSummary.module.scss';

const OrderSummary = ({ products, total, subtotal, delivery, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <Flex flexDirection="column" gap={30} className={combinedClasses}>
            <Flex tagElement="ul" flexDirection="column" gap={30} className={styles.list}>
                {products &&
                    products.map((product) => (
                        <Flex
                            key={product.id}
                            tagElement="li"
                            gap={20}
                            justifyContent="space-between"
                            alignItems="center">
                            <OrderItem
                                image={product.image}
                                name={Strings.sliceString(product.name, 15)}
                                className={styles.box}
                            />
                            <span>${product.price}</span>
                        </Flex>
                    ))}
            </Flex>
            <OrderInfo
                total={total}
                subtotal={subtotal}
                delivery={delivery}
                className={styles.block}
            />
        </Flex>
    );
};

export default OrderSummary;
