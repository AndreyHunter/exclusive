import useCountDown from '../../../hooks/useCountDown';

import styles from './countdown.module.scss';

const Countdown = ({
    endDate = new Date('2024-07-30T08:52:00'),
    variant = 'black',
    className,
    ...props
}) => {
    const additionalClass = className || '';
    const defaultClass = `${styles.wrapper} ${additionalClass}`.trim();
    const transparentClass = `${styles.transparent} ${additionalClass}`.trim();

    const combinedItemClasses = [
        styles.item,
        variant === 'black' && styles.black,
        variant === 'white' && styles.white,
        variant === 'transparent' && styles,
    ]
        .filter(Boolean)
        .join(' ');

    const { days, hours, minutes, seconds, finished } = useCountDown(endDate, 1000);

    if (variant === 'transparent') {
        return (
            <div className={transparentClass} {...props}>
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
        <div className={defaultClass} {...props}>
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

export default Countdown;
