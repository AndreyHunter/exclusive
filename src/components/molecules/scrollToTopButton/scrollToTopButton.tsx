import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

import Arrow from '@assets/icons/arrow.svg?react';

import styles from './scrollToTopButton.module.scss';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const classes = clsx(styles.root, isVisible && styles.visible);

  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button className={classes} onClick={scrollTo}>
      <Arrow />
    </button>
  );
};
