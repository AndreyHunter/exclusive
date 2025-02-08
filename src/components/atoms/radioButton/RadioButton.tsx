import React from 'react';

import styles from './radioButton.module.scss';

interface RadioButtonProps {
  checked: boolean;
  name?: string;
  onChange: () => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ checked, name, onChange }) => {
  return (
    <label className={styles.root}>
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className={styles.radio}
      />
    </label>
  );
};
