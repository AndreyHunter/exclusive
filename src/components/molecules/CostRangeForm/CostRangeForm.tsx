import React, { useState, useEffect } from 'react';
import ReactSlider from 'react-slider';

import { Flex } from '@components/helpers/flex/Flex';

import styles from './costRangeForm.module.scss';

interface CostRangeFormProps {
  minPrice: number;
  maxPrice: number;
  onPriceRangeChange: (min: number, max: number) => void;
}

export const CostRangeForm = ({ minPrice, maxPrice, onPriceRangeChange }: CostRangeFormProps) => {
  const [localMin, setLocalMin] = useState(minPrice);
  const [localMax, setLocalMax] = useState(maxPrice);

  useEffect(() => {
    setLocalMin(minPrice);
    setLocalMax(maxPrice);
  }, [minPrice, maxPrice]);

  const handleMinInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLocalMin(value <= localMax ? value : localMax);
  };

  const handleMaxInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setLocalMax(value >= localMin ? value : localMin);
  };

  const handleSliderChange = (values: number[]) => {
    setLocalMin(values[0]);
    setLocalMax(values[1]);
  };

  const applyChanges = () => {
    onPriceRangeChange(localMin, localMax);
  };

  const min = 0;
  const max = 50000;

  return (
    <div className={styles.filterSection}>
      <h4 className={styles.title}>Cost</h4>
      <Flex gap={10} className={styles.inputContainer}>
        <input
          type="number"
          value={localMin}
          onChange={handleMinInputChange}
          placeholder="From"
          className={styles.input}
          min={min}
          max={max}
        />
        <input
          type="number"
          value={localMax}
          onChange={handleMaxInputChange}
          placeholder="To"
          className={styles.input}
          min={min}
          max={max}
        />
        <button onClick={applyChanges} className={styles.applyButton}>
          Apply
        </button>
      </Flex>

      <div className={styles.sliderContainer}>
        <ReactSlider
          className={styles.slider}
          thumbClassName={styles.thumb}
          trackClassName={styles.track}
          min={min}
          max={max}
          value={[localMin, localMax]}
          onChange={handleSliderChange}
          pearling
          minDistance={0}
        />
      </div>
    </div>
  );
};
