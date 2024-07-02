import { useState } from 'react';
import styles from './formInput.module.scss';

const FormInput = ({ className, required, placeholder, ...props }) => {
    const [hasFocus, setHasFocus] = useState(false);
    const combinedClasses = `${styles.root} ${className || ''}`;

    const handleFocus = () => {
        setHasFocus(true);
    };

    const handleBlur = (e) => (e.target.value ? setHasFocus(true) : setHasFocus(false));

    return (
        <div className={combinedClasses} {...props}>
            <div className={`${styles.placeholder} ${hasFocus ? styles.focused : ''}`}>
                {placeholder} {required && <span>*</span>}
            </div>
            <input type="text" onFocus={handleFocus} onBlur={handleBlur} />
        </div>
    );
};

export default FormInput;
