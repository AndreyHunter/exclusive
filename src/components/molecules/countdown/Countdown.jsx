import useCountDown from '../../../hooks/useCountDown';

import styles from './countdown.module.scss';

const Countdown = ({ endDate = new Date('2024-07-30T08:52:00'), variant = 'black', className }) => {
    const transparentClassName = `${styles.transparent} ${className}`;
    const defaultClassName = `${styles.wrapper} ${className}`;

    const isTransparent = variant === 'transparent';
    const isBlack = variant === 'black';
    const isWhite = variant === 'white';
    const combinedClassName = `${styles.item} ${isBlack ? styles.black : isWhite ? styles.white : ''}`;

    const { days, hours, minutes, seconds, finished } = useCountDown(endDate, 1000);

    if (isTransparent) {
        return (
            <div className={transparentClassName}>
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
        <div className={defaultClassName}>
            <div className={combinedClassName}>
                <div>{days}</div>
                <span>Days</span>
            </div>
            <div className={combinedClassName}>
                <div>{hours}</div>
                <span>Hours</span>
            </div>
            <div className={combinedClassName}>
                <div>{minutes}</div>
                <span>Minutes</span>
            </div>
            <div className={combinedClassName}>
                <div>{seconds}</div>
                <span>Seconds</span>
            </div>
        </div>
    );
};

export default Countdown;