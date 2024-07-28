import { useState } from 'react';

const useCounter = (defaultCount) => {
    const [count, setCount] = useState(defaultCount || 1);

    const increment = () => {
        setCount((prev) => prev + 1);
    };

    const decrement = () => {
        if (count <= 1) return;
        setCount((prev) => prev - 1);
    };

    return {
        count,
        increment,
        decrement,
    };
};

export default useCounter;
