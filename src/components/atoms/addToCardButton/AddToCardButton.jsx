import Loader from '@components/atoms/loader/Loader';

import styles from './addToCardButton.module.scss';

const AddToCardButton = ({ className, loading, showAddedMessage, onCLick, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <button
            type="button"
            className={combinedClasses}
            onClick={onCLick}
            disabled={loading}
            {...props}>
            {loading ? <Loader small/> : showAddedMessage ? 'In cart' : 'Add to cart'}
        </button>
    );
};

export default AddToCardButton;
