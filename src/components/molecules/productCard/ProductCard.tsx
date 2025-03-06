import { Link } from 'react-router-dom';

import FavoriteIcon from '@assets/icons/heart.svg?react';
import CompareIcon from '@assets/icons/compare.svg?react';
import { Strings } from '@utils/index';
import { AddToCartButton } from '@/components/molecules/addToCartButton/AddToCartButton';
import { CardActionButton } from '@components/atoms/cardActionButton/CardActionButton';
import { DiscountLabel } from '@components/atoms/discountLabel/DiscountLabel';
import { ProductPrice } from '@components/atoms/productPrice/ProductPrice';
import { Flex } from '@components/helpers/flex/Flex';
import { ProductRating } from '@components/molecules/productRating/ProductRating';
import type { Product } from 'types/index';
import { ROUTES } from '@routes/routes';

import styles from './productsCard.module.scss';

interface ProductCardProps {
  product: Product;
  discount?: number;
  loading: boolean;
  showAddedMessage: boolean;
  rating: number;
  reviewsCount: number;
  onAddToCart: () => void;
  onSetRating: (rating: number) => void;
}

export const ProductCard = ({
  product,
  discount,
  loading,
  showAddedMessage,
  rating,
  reviewsCount,
  onAddToCart,
  onSetRating,
}: ProductCardProps) => {
  return (
    <li className={styles.card}>
      <Flex
        className={styles.header}
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <Link to={`/${ROUTES.PRODUCT}/${product._id}`}>
          <img src={product.images[0]} alt={product.name} className={styles.image} />
        </Link>
        {product.discountedPrice && (
          <DiscountLabel discount={discount || 0} className={styles.label} />
        )}
        <div className={styles.buttons}>
          <CardActionButton>
            <FavoriteIcon />
          </CardActionButton>
          <CardActionButton>
            <CompareIcon />
          </CardActionButton>
        </div>
        <AddToCartButton
          onClick={onAddToCart}
          loading={loading}
          showAddedMessage={showAddedMessage}
          className={styles.button}
        />
      </Flex>
      <Flex gap={8} flexDirection="column" className={styles.info}>
        <Link to={`/${ROUTES.PRODUCT}/${product._id}`} className={styles.title}>
          {Strings.sliceString(product.name, 25, true)}
        </Link>
        <ProductPrice price={product.price} discountedPrice={product.discountedPrice} />
        <ProductRating rating={rating} reviewsCount={reviewsCount} onSetRating={onSetRating} />
      </Flex>
    </li>
  );
};
