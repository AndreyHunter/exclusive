import useMediaQuery from '../../../../hooks/useMediaQuery';

import Button from '../../../atoms/button/Button';
import CartHeader from '../../../molecules/cartHeader/CartHeader';
import CartItem from '../../../molecules/cartItem/CartItem';
import CouponCodeItem from '../../../molecules/couponCodeItem/CouponCodeItem';
import CartTotal from '../../../molecules/cartTotal/CartTotal';

import Flex from '../../../helpers/flex/Flex';

import styles from './cartSection.module.scss';

const CartSection = ({ className, products }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    const isSmallMobile = useMediaQuery('(max-width: 360px)');

    return (
        <Flex className={combinedClasses} tagElement="section" flexDirection="column">
            {!isSmallMobile && <CartHeader />}
            <Flex className={styles.list} tagElement="ul" flexDirection="column" gap={30}>
                {products &&
                    products.map((product) => <CartItem key={product.id} product={product} />)}
            </Flex>
            <Flex justifyContent="space-between" className={styles.buttons}>
                <Button type="link" to="/catalog" title="Return To Shop" variant="transparent" />
                <Button title="Update Cart" variant="transparent" />
            </Flex>
            <div className={styles.block}>
                <CouponCodeItem className={styles.coupon} />
                <CartTotal subTotal={1320} total={1320} />
            </div>
        </Flex>
    );
};

export default CartSection;
