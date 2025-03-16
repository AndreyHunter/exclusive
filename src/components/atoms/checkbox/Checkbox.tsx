import React from 'react';
import { clsx } from 'clsx';

import { Flex } from '@/components/helpers/flex/Flex';

import styles from './checkbox.module.scss';

interface CheckBoxProps {
  checked: boolean;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckBoxProps> = ({ checked = false, label, onChange }) => {
  const checkboxClasses = clsx(styles.customCheckbox, checked && styles.checked);

  return (
    <Flex gap={7} alignItems="center">
      <label className={styles.label}>
        <input type="checkbox" checked={checked} onChange={onChange} className={styles.checkbox} />
        <span className={checkboxClasses}></span>
        {label && <span className={styles.span}>{label}</span>}
      </label>
    </Flex>
  );
};
