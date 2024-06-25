import { useState } from 'react';

import RatingIcon from '../../ui/ratingIcon/RatingIcon';

import styles from './productRating.module.scss';

const ProductRating = ({ rating, setRating, reviewsCount }) => {
    const [hover, setHover] = useState(0);

    return (
        <div className={styles.wrapper}>
            <div className={styles.rating}>
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? styles.on : styles.off}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}>
                            <span className={styles.star}>
                                <RatingIcon filled={index <= (hover || rating)} />
                            </span>
                        </button>
                    );
                })}
            </div>
            <span>{`(${reviewsCount || 0})`}</span>
        </div>
    );
};

export default ProductRating;
