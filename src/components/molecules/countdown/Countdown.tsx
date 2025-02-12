import { clsx } from 'clsx';

import { useCountDown } from '@hooks/useCountDown';

import styles from './countdown.module.scss';

interface CountdownProps extends React.HTMLAttributes<HTMLDivElement> {
  endDate: Date;
  variant?: 'black' | 'white' | 'transparent';
  className?: string;
}

export const Countdown = ({ variant = 'black', endDate, className, ...props }: CountdownProps) => {
  const transparentClasses = clsx(styles.transparent, className);
  const defaultClasses = clsx(styles.wrapper, className);
  const combinedItemClasses = clsx(styles.item, {
    [styles.black]: variant === 'black',
    [styles.white]: variant === 'white',
  });

  const { days, hours, minutes, seconds, finished } = useCountDown(endDate, 1000);

  if (finished) {
    return null;
  }

  if (variant === 'transparent') {
    return (
      <div {...props} className={transparentClasses}>
        <div className={styles.transparent_item}>
          <span>days</span>
          <div>{days}</div>
        </div>
        <div className={styles.transparent_item}>
          <span>hours</span>
          <div>{hours}</div>
        </div>
        <div className={styles.transparent_item}>
          <span>minutes</span>
          <div>{minutes}</div>
        </div>
        <div className={styles.transparent_item}>
          <span>seconds</span>
          <div>{seconds}</div>
        </div>
      </div>
    );
  }

  return (
    <div {...props} className={defaultClasses}>
      <div className={combinedItemClasses}>
        <div>{days}</div>
        <span>Days</span>
      </div>
      <div className={combinedItemClasses}>
        <div>{hours}</div>
        <span>Hours</span>
      </div>
      <div className={combinedItemClasses}>
        <div>{minutes}</div>
        <span>Minutes</span>
      </div>
      <div className={combinedItemClasses}>
        <div>{seconds}</div>
        <span>Seconds</span>
      </div>
    </div>
  );
};
