import React, { useState, useEffect } from 'react';

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

  const handleMinSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= localMax) {
      setLocalMin(value);
    } else {
      setLocalMin(localMax);
    }
  };

  const handleMaxSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= localMin) {
      setLocalMax(value);
    } else {
      setLocalMax(localMin);
    }
  };

  const applyChanges = () => {
    onPriceRangeChange(localMin, localMax);
  };

  const min = 0;
  const max = 50000;
  const leftPercent = ((localMin - min) / (max - min)) * 100;
  const rightPercent = 100 - ((localMax - min) / (max - min)) * 100;
  const rangeStyle = {
    background: `linear-gradient(
      to right,
      #f5f5f5 0%,
      #f5f5f5 ${leftPercent}%,
      #db4444 ${leftPercent}%,
      #db4444 ${100 - rightPercent}%,
      #f5f5f5 ${100 - rightPercent}%,
      #f5f5f5 100%
    )`,
  };

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
        <div className={styles.sliderTrack} style={rangeStyle}></div>
        <input
          type="range"
          min={min}
          max={max}
          value={localMin}
          onChange={handleMinSliderChange}
          className={`${styles.slider} ${styles.sliderMin}`}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={localMax}
          onChange={handleMaxSliderChange}
          className={`${styles.slider} ${styles.sliderMax}`}
        />
      </div>
    </div>
  );
};
