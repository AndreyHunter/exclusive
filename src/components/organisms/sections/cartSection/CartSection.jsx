import useMediaQuery from '../../../../hooks/useMediaQuery';

import Button from '../../../atoms/button/Button';
import FlexBlock from '../../../helpers/flexBlock/FlexBlock';
import CartHeader from '../../../molecules/cartHeader/CartHeader';
import CartItem from '../../../molecules/cartItem/CartItem';
import CouponCodeItem from '../../../molecules/couponCodeItem/CouponCodeItem';
import CartTotal from '../../../molecules/cartTotal/CartTotal';

import styles from './cartSection.module.scss';

const CartSection = ({ className, products }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;
    const isSmallMobile = useMediaQuery('(max-width: 360px)');

    return (
        <FlexBlock className={combinedClasses} tagElement="section" column>
            {!isSmallMobile && <CartHeader />}
            <FlexBlock className={styles.list} tagElement="ul" column gap={30}>
                {products &&
                    products.map((product) => <CartItem key={product.id} product={product} />)}
            </FlexBlock>
            <FlexBlock spaceBetween className={styles.buttons}>
                <Button type="link" to="/catalog" title="Return To Shop" variant="transparent" />
                <Button title="Update Cart" variant="transparent" />
            </FlexBlock>
            <div className={styles.block}>
                <CouponCodeItem className={styles.coupon} />
                <CartTotal subTotal={1320} total={1320} />
            </div>
        </FlexBlock>
    );
};

export default CartSection;
