import GooglePlayIcon from '../../assets/icons/google-play.svg?react';
import AppleIcon from '../../assets/icons/apple.svg?react';

import styles from './mobileAppLink.module.scss';

const MobileAppLink = ({ variant, className, ...props }) => {
    const google = variant === 'google';
    const apple = variant === 'apple';
    const title = google ? 'Google play' : apple ? 'App store' : null;
    const message = google ? 'GET IT ON' : apple ? 'Download in the' : null;

    return (
        <div className={`${styles.wrapper || ''} ${className || ''}`} {...props}>
            <div className={styles.content}>
                {google && <GooglePlayIcon />}
                {apple && <AppleIcon />}
                <div className={styles.block}>
                    <div className={styles.message}>{message}</div>
                    <div className={styles.title}>{title}</div>
                </div>
            </div>
        </div>
    );
};

export default MobileAppLink;