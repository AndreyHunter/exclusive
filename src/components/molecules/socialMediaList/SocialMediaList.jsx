import FacebookIcon from '../../../assets/icons/facebook.svg?react';
import TwitterIcon from '../../../assets/icons/twitter.svg?react';
import InstagramIcon from '../../../assets/icons/instagram.svg?react';
import LinkedinIcon from '../../../assets/icons/linkedin.svg?react';

import styles from './socialMediaList.module.scss';

const SocialMediaList = ({ className, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <ul className={combinedClasses} {...props}>
            <li className={styles.item}>
                <a href="">
                    <FacebookIcon />
                </a>
            </li>
            <li className={styles.item}>
                <a href="">
                    <TwitterIcon />
                </a>
            </li>
            <li className={styles.item}>
                <a href="">
                    <InstagramIcon />
                </a>
            </li>
            <li className={styles.item}>
                <a href="">
                    <LinkedinIcon />
                </a>
            </li>
        </ul>
    );
};

export default SocialMediaList;