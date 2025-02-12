import { clsx } from 'clsx';

import { Button } from '@components/atoms/button/Button';
import { Flex } from '@components/helpers/flex/Flex';

import styles from './couponCodeItem.module.scss';

interface CouponCodeItemProps {
  className?: string;
}

export const CouponCodeItem = ({ className }: CouponCodeItemProps) => {
  const classes = clsx(styles.root, className);
  return (
    <Flex gap={15} className={classes}>
      <div className={styles.coupon}>
        <input type="text" placeholder="Coupon Code" />
      </div>
      <Button title="Apply Coupon" />
    </Flex>
  );
};
