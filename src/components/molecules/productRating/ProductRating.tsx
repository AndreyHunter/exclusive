import { useState } from 'react';

import RatingIcon from '@assets/icons/star.svg?react';

import styles from './productRating.module.scss';

interface ProductRatingProps {
  rating: number;
  reviewsCount: number;
  setRating: (rating: number) => void;
}

export const ProductRating = ({ rating, setRating, reviewsCount }: ProductRatingProps) => {
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
              aria-label="rating-btn"
              className={index <= (hover || rating) ? styles.on : styles.off}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}>
              <span className={styles.star}>
                <RatingIcon />
              </span>
            </button>
          );
        })}
      </div>
      <span>{`(${reviewsCount || 0})`}</span>
    </div>
  );
};
