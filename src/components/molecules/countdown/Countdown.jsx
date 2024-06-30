import useCountDown from '../../../hooks/useCountDown';

import styles from './countdown.module.scss';

const Countdown = ({
    endDate = new Date('2024-07-30T08:52:00'),
    variant = 'black',
    className,
    ...props
}) => {
    const isTransparent = variant === 'transparent';
    const isBlack = variant === 'black';
    const isWhite = variant === 'white';

    const transparentClass = `${styles.transparent} ${className || ''}`;
    const defaultClass = `${styles.wrapper} ${className || ''}`;

    const combinedClasses = `${styles.item} ${isBlack ? styles.black : isWhite ? styles.white : ''}`;

    const { days, hours, minutes, seconds, finished } = useCountDown(endDate, 1000);

    if (isTransparent) {
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
            <div className={combinedClasses}>
                <div>{days}</div>
                <span>Days</span>
            </div>
            <div className={combinedClasses}>
                <div>{hours}</div>
                <span>Hours</span>
            </div>
            <div className={combinedClasses}>
                <div>{minutes}</div>
                <span>Minutes</span>
            </div>
            <div className={combinedClasses}>
                <div>{seconds}</div>
                <span>Seconds</span>
            </div>
        </div>
    );
};

export default Countdown;
