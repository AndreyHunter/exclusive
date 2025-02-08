import React from 'react';
import { clsx } from 'clsx';

import qrCodeImage from '@assets/images/qr-code.jpg';

import styles from './qrCode.module.scss';

interface QrCodeProps {
  className?: string;
}

export const QrCode: React.FC<QrCodeProps> = ({ className }) => {
  const classes = clsx(styles.root, className);

  return (
    <div className={classes}>
      <img src={qrCodeImage} alt="qr-code" />
    </div>
  );
};
