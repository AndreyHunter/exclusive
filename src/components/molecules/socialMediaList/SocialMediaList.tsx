import FacebookIcon from '@assets/icons/facebook.svg?react';
import InstagramIcon from '@assets/icons/instagram.svg?react';
import LinkedinIcon from '@assets/icons/linkedin.svg?react';
import TwitterIcon from '@assets/icons/twitter.svg?react';

import styles from './socialMediaList.module.scss';

export const SocialMediaList = () => {
  return (
    <ul className={styles.root}>
      <li>
        <a href="">
          <FacebookIcon />
        </a>
      </li>
      <li>
        <a href="">
          <TwitterIcon />
        </a>
      </li>
      <li>
        <a href="">
          <InstagramIcon />
        </a>
      </li>
      <li>
        <a href="">
          <LinkedinIcon />
        </a>
      </li>
    </ul>
  );
};
