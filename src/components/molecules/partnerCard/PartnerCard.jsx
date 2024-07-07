import InstagramIcon from '@assets/icons/instagram.svg?react';
import LinkedinIcon from '@assets/icons/linkedin.svg?react';
import TwitterIcon from '@assets/icons/twitter.svg?react';

import styles from './partnerCard.module.scss';

const PartnerCard = ({ partner }) => {
    return (
        <div className={styles.slide}>
            <div className={styles.wrapper}>
                <img src={partner.image} alt={partner.name} className={styles.image} />
            </div>
            <div className={styles.info}>
                <div>
                    <div className={styles.name}>{partner.name}</div>
                    <p>{partner.position}</p>
                </div>
                <ul className={styles.list}>
                    {partner.links.twitter && (
                        <li>
                            <a href={`${partner.links.twitter}`} target="_blank">
                                <TwitterIcon className={styles.icon} />
                            </a>
                        </li>
                    )}
                    {partner.links.instagram && (
                        <li>
                            <a href={`${partner.links.instagram}`} target="_blank">
                                <InstagramIcon className={styles.instagram} />
                            </a>
                        </li>
                    )}
                    {partner.links.linkedin && (
                        <li>
                            <a href={`${partner.links.linkedin}`} target="_blank">
                                <LinkedinIcon className={styles.icon} />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default PartnerCard;
