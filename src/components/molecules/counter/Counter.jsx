import useCounter from '@hooks/useCounter';

import Flex from '@components/helpers/flex/Flex';

import Arrow from '@assets/icons/second-arrow.svg?react';

import styles from './counter.module.scss';

const Counter = ({ handleIncrementPrice, handleDecrementPrice, className }) => {
    const { count, handleIncrement, handleDecrement } = useCounter();

    const combinedClasses = `${styles.root} ${className || ''}`.trim();

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
        <Flex className={combinedClasses} gap={16}>
            <span>{count}</span>
            <Flex flexDirection="column" className={styles.buttons}>
                <button type="button" onClick={handleCountInc}>
                    <Arrow />
                </button>
                <button type="button" onClick={handleCountDec}>
                    <Arrow />
                </button>
            </Flex>
        </Flex>
    );
};

export default Counter;
