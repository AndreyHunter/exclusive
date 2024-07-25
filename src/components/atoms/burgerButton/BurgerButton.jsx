import styles from './burgerButton.module.scss';

const BurgerButton = ({ onClick, isOpen, ...props }) => {
    const combinedClasses = `${styles.root} ${isOpen ? styles.open : ''}`.trim();

    return (
        <button type="button" className={combinedClasses} onClick={onClick} {...props}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
};

export default BurgerButton;
