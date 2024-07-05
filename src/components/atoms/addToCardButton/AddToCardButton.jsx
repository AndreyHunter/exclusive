import styles from './addToCardButton.module.scss';

const AddToCardButton = ({ className, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <button type="button" className={combinedClasses} {...props}>
            Add To Cart
        </button>
    );
};

export default AddToCardButton;