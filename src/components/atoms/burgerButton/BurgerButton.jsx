import { useState } from 'react';
import styles from './burgerButton.module.scss';

const BurgerButton = ({ onClick, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const combinedClasses = `${styles.root} ${isOpen ? styles.open : ''}`;

    const handleSetOpen = () => {
        setIsOpen((prev) => !prev);
        if (onClick) {
            onClick();
        }
    };

    return (
        <button type="button" className={combinedClasses} onClick={handleSetOpen} {...props}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default BurgerButton;
