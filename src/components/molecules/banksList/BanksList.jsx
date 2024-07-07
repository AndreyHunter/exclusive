import BkashIcon from '@assets/icons/banks/BKash.svg?react';
import MasterCardIcon from '@assets/icons/banks/mastercard.svg?react';
import NagadIcon from '@assets/icons/banks/nagad.png';
import VisaIcon from '@assets/icons/banks/visa.svg?react';

import styles from './banksList.module.scss';

const BanksList = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <ul className={combinedClasses}>
            <li className={`${styles.item} ${styles.bkash}`}>
                <BkashIcon />
            </li>
            <li className={`${styles.item} ${styles.visa}`}>
                <VisaIcon />
            </li>
            <li className={`${styles.item} ${styles.mastercard}`}>
                <MasterCardIcon />
            </li>
            <li className={`${styles.item} ${styles.nagad}`}>
                <img src={NagadIcon} alt="nagad" />
            </li>
        </ul>
    );
};

export default BanksList;
