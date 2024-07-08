import { useState } from 'react';

const useCounter = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
    };

    const handleDecrement = () => {
        if (count <= 1) return;
        setCount((prev) => prev - 1);
    };

    return {
        count,
        handleIncrement,
        handleDecrement,
    };
};

export default useCounter;