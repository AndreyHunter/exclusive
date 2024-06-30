import { useState } from 'react';
import { Link } from 'react-router-dom';

import ProductPrice from '../../atoms/productPrice/ProductPrice';
import DiscountLabel from '../../atoms/discountLabel/DiscountLabel';
import CardActionButton from '../../atoms/cardActionButton/CardActionButton';
import FavoriteIcon from '../../atoms/favoriteIcon/FavoriteIcon';
import CompareIcon from '../../atoms/compareIcon/CompareIcon';
import AddToCardButton from '../../atoms/addToCardButton/AddToCardButton';
import ProductRating from '../../molecules/productRating/ProductRating';
import FlexBlock from '../../helpers/flexBlock/FlexBlock';

import { Numbers } from '../../../utils';

import styles from './producsCard.module.scss';

const ProductCard = ({ product }) => {
    const [rating, setRating] = useState(product.rating);
    const [reviewsCount, setReviewsCount] = useState(product.reviewsCount);

    const handleSetRating = (rating) => {
        setRating(rating);
        setReviewsCount((prev) => prev + 1);
    };

    return (
        <li className={styles.card}>
            <FlexBlock className={styles.header}>
                <Link>
                    <img src={product.image} alt={product?.name} className={styles.image} />
                </Link>
                <DiscountLabel
                    discount={
                        product.discountedPrice &&
                        Numbers.calcDiscount(product.price, product.discountedPrice)
                    }
                    className={styles.label}
                />
                <div className={styles.buttons}>
                    <CardActionButton icon={<FavoriteIcon />} />
                    <CardActionButton icon={<CompareIcon />} />
                </div>
                <AddToCardButton className={styles.button} />
            </FlexBlock>
            <FlexBlock column gap={8} className={styles.info}>
                <Link className={styles.title}>{product.name}</Link>
                <ProductPrice price={product.price} discountedPrice={product.discountedPrice} />
                <ProductRating
                    rating={rating}
                    setRating={handleSetRating}
                    reviewsCount={reviewsCount}
                />
            </FlexBlock>
        </li>
    );
};

export default ProductCard;
