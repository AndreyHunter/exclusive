import { clsx } from 'clsx';

import EmailIcon from '@assets/icons/contacts-email.svg?react';
import PhoneIcon from '@assets/icons/contacts-phone.svg?react';

import styles from './contactsLabel.module.scss';

interface ContactsLabelProps {
  icon?: 'phone' | 'email';
  label: string;
  className?: string;
}

export const ContactsLabel = ({ icon, label, className }: ContactsLabelProps) => {
  const classes = clsx(styles.root, className);

  const isPhone = icon === 'phone';
  const isEmail = icon === 'email';
  const iconResult = isPhone ? <PhoneIcon /> : isEmail ? <EmailIcon /> : null;

  return (
    <div className={classes}>
      {iconResult} <span>{label}</span>
    </div>
  );
};
