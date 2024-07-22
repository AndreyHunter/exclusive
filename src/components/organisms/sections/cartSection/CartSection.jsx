import useMediaQuery from '@/hooks/useMediaQuery';

import Button from '@components/atoms/button/Button';
import Flex from '@components/helpers/flex/Flex';
import CartHeader from '@components/molecules/cartHeader/CartHeader';
import CartItem from '@components/molecules/cartItem/CartItem';
import CartTotal from '@components/molecules/cartTotal/CartTotal';
import CouponCodeItem from '@components/molecules/couponCodeItem/CouponCodeItem';

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
                <Button tagElement="link" to="/catalog" title="Return To Shop" variant="transparent" />
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
