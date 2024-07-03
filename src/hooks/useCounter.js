import { useState } from 'react';

const useCounter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        if (!count) return;
        setCount((prev) => prev - 1);
    };

    return {
        count,
        handleIncrement,
        handleDecrement,
    };
};

export default useCounter;