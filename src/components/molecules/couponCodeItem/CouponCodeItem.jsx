import Button from '../../atoms/button/Button';

import Flex from '../../helpers/flex/Flex';

import styles from './couponCodeItem.module.scss';

const CouponCodeItem = ({ className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

    return (
        <Flex gap={15} className={combinedClasses}>
            <div className={styles.coupon}>
                <input type="text" placeholder="Coupon Code" />
            </div>
            <Button title="Apply Coupon" />
        </Flex>
    );
};

export default CouponCodeItem;