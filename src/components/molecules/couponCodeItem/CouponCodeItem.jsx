import Button from '../../atoms/button/Button';
import FlexBlock from '../../helpers/flexBlock/FlexBlock';

import styles from './couponCodeItem.module.scss';

import React from 'react';

const CouponCodeItem = ({ className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`;

    return (
        <FlexBlock gap={15} className={combinedClasses}>
            <div className={styles.coupon}>
                <input type="text" placeholder="Coupon Code" />
            </div>
            <Button title="Apply Coupon" />
        </FlexBlock>
    );
};

export default CouponCodeItem;