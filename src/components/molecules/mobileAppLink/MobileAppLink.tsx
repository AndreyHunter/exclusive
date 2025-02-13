import { clsx } from 'clsx';

import GooglePlayIcon from '@assets/icons/google-play.svg?react';
import AppleIcon from '@assets/icons/apple.svg?react';

import styles from './mobileAppLink.module.scss';

interface MobileAppLinkProps {
  variant: 'google' | 'apple';
  className?: string;
}

export const MobileAppLink = ({ variant, className }: MobileAppLinkProps) => {
  const classes = clsx(styles.root, className);
  const config = {
    google: {
      Icon: GooglePlayIcon,
      message: 'GET IT ON',
      title: 'Google play',
    },
    apple: {
      Icon: AppleIcon,
      message: 'Download in the',
      title: 'App store',
    },
  };

  const { Icon, message, title } = config[variant];
  const testId = variant === 'google' ? 'google' : variant === 'apple' ? 'apple' : '';

  return (
    <div className={classes}>
      <div className={styles.content}>
        <span data-testid={testId}>
          <Icon />
        </span>
        <div className={styles.block}>
          <div className={styles.message}>{message}</div>
          <div className={styles.title}>{title}</div>
        </div>
      </div>
    </div>
  );
};
