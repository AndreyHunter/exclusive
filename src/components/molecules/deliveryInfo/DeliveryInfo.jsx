import { Link } from 'react-router-dom';

import Separator from '@components/atoms/separator/Separator';
import Flex from '@components/helpers/flex/Flex';

import ReloadIcon from '@assets/icons/reload.svg?react';
import TruckIcon from '@assets/icons/truck.svg?react';

import styles from './deliveryInfo.module.scss';

const DeliveryInfo = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <div className={combinedClasses}>
            <Flex alignItems="center" gap={16}>
                <TruckIcon />
                <Flex flexDirection="column" gap={8} className={styles.info}>
                    <label>Free Delivery</label>
                    <p>Enter your postal code for Delivery Availability</p>
                </Flex>
            </Flex>
            <Separator />
            <Flex alignItems="center" gap={16}>
                <ReloadIcon />
                <Flex flexDirection="column" gap={8} className={styles.info}>
                    <label>Return Delivery</label>
                    <p>
                        Free 30 Days Delivery Returns. <Link className={styles.link}>Details</Link>
                    </p>
                </Flex>
            </Flex>
        </div>
    );
};

export default DeliveryInfo;