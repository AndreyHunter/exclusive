import styles from './addToCardButton.module.scss';

import React from 'react';

const AddToCardButton = ({ className, ...props }) => {
    return (
        <button type="button" className={`${styles.button} ${className}`} {...props}>
            Add To Cart
        </button>
    );
};

export default AddToCardButton;