import useCounter from '../../../hooks/useCounter';

import FlexBlock from '../../helpers/flexBlock/FlexBlock';
import Arrow from '../../../assets/icons/second-arrow.svg?react';

import styles from './counter.module.scss';

const Counter = ({ handleIncrementPrice, handleDecrementPrice, className }) => {
    const { count, handleIncrement, handleDecrement } = useCounter();

    const combinedClasses = `${styles.root} ${className || ''}`;

    const handleCountInc = () => {
        if (count < 10) {
            handleIncrement();
            handleIncrementPrice();
        }
    };

    const handleCountDec = () => {
        if (count > 0) {
            handleDecrement();
            handleDecrementPrice();
        }
    };

    return (
        <FlexBlock className={combinedClasses} gap={16}>
            <span>{count}</span>
            <div className={styles.buttons}>
                <button type="button" onClick={handleCountInc}>
                    <Arrow />
                </button>
                <button type="button" onClick={handleCountDec}>
                    <Arrow />
                </button>
            </div>
        </FlexBlock>
    );
};

export default Counter;
