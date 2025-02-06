import React from 'react';
import { clsx } from 'clsx';

import styles from './checkbox.module.scss';

interface CheckBoxProps {
  checked?: boolean;
  onChange: () => void;
}

export const Checkbox: React.FC<CheckBoxProps> = ({ checked = false, onChange }) => {
  const classes = clsx(styles.root, checked && styles.checked);
  return (
    <label className={classes}>
      <input type="checkbox" checked={checked} onChange={onChange} className={styles.checkbox} />
    </label>
  );
};
