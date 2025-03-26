import { useState } from 'react';

interface UseCounterProps {
  defaultCount: number;
  min: number;
  max: number;
}

export const useCounter = ({ defaultCount = 1, min = 1, max = 100 }: Partial<UseCounterProps>) => {
  const [count, setCount] = useState(defaultCount || 1);

  const increment = () => {
    if (count > max) return;
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count <= min) return;
    setCount((prev) => prev - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
};
