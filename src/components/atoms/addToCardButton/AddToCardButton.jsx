import styles from './addToCardButton.module.scss';

import React from 'react';

const AddToCardButton = ({ className, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <button type="button" className={combinedClasses} {...props}>
            Add To Cart
        </button>
    );
};

export default AddToCardButton;