import React, { useState } from 'react';
import { clsx } from 'clsx';

import styles from './formInput.module.scss';

interface FormInputProps extends React.HTMLAttributes<HTMLDivElement> {
  required: boolean;
  placeholder: string;
  className: string;
}

export const FormInput = ({
  required,
  placeholder,
  className,
  ...props
}: Partial<FormInputProps>) => {
  const [hasFocus, setHasFocus] = useState(false);
  const classes = clsx(styles.root, className);

  const handleFocus = () => {
    setHasFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) =>
    e.target.value ? setHasFocus(true) : setHasFocus(false);

  if (placeholder) {
    return (
      <div {...props} className={classes}>
        <div className={clsx(styles.placeholder, hasFocus && styles.focused)}>
          {placeholder} {required && <span>*</span>}
        </div>
        <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
      </div>
    );
  }

  return (
    <div {...props} className={classes}>
      <input type="text" />
    </div>
  );
};
