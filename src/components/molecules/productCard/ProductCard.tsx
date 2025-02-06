import { useState } from 'react';
import { Link } from 'react-router-dom';

import FavoriteIcon from '@assets/icons/heart.svg?react';
import { Numbers, Strings } from '@utils/index';
import { AddToCartButton } from '@/components/atoms/addToCartButton/AddToCartButton';
import { CardActionButton } from '@components/atoms/cardActionButton/CardActionButton';
import { CompareIcon } from '@components/atoms/compareIcon/CompareIcon';
import { DiscountLabel } from '@components/atoms/discountLabel/DiscountLabel';
import { ProductPrice } from '@components/atoms/productPrice/ProductPrice';
import { Flex } from '@components/helpers/flex/Flex';
import { ProductRating } from '@components/molecules/productRating/ProductRating';

import styles from './productsCard.module.scss';

export const ProductCard = ({ product, handleAddToCart, loading, showAddedMessage }) => {
  const [rating, setRating] = useState(product.rating);
  const [reviewsCount, setReviewsCount] = useState(product.reviewsCount);

  const handleSetRating = (rating) => {
    setRating(rating);
    setReviewsCount((prev) => prev + 1);
  };

  return (
    <li className={styles.card}>
      <Flex
        className={styles.header}
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <Link>
          <img src={product.images[0]} alt={product?.name} className={styles.image} />
        </Link>
        <DiscountLabel
          discount={
            product.discountedPrice && Numbers.calcDiscount(product.price, product.discountedPrice)
          }
          className={styles.label}
        />
        <div className={styles.buttons}>
          <CardActionButton>
            <FavoriteIcon />
          </CardActionButton>
          <CardActionButton>
            <CompareIcon />
          </CardActionButton>
        </div>
        <AddToCartButton
          className={styles.button}
          onClick={handleAddToCart}
          loading={loading}
          showAddedMessage={showAddedMessage}
        />
      </Flex>
      <Flex gap={8} flexDirection="column" className={styles.info}>
        <Link className={styles.title}>{Strings.sliceString(product.name, 25, true)}</Link>
        <ProductPrice price={product.price} discountedPrice={product.discountedPrice} />
        <ProductRating rating={rating} setRating={handleSetRating} reviewsCount={reviewsCount} />
      </Flex>
    </li>
  );
};
