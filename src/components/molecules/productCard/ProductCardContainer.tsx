import { useState } from 'react';

import { addToCart } from '@features/cart/cartSlice';
import { useAppDispatch } from '@/app/hooks';
import type { Product } from 'types/index';
import { Numbers } from '@utils/index';

import { ProductCard } from './ProductCard';

interface ProductCardContainerProps {
  product: Product;
}

type AddToCartParams = {
  productId: string;
  quantity: number;
};

export const ProductCardContainer = ({ product }: ProductCardContainerProps) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [rating, setRating] = useState(product.rating);
  const [reviewsCount, setReviewsCount] = useState(product.reviewsCount);

  const handleAddToCart = async ({ productId, quantity }: AddToCartParams) => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // @ts-ignore
      await dispatch(addToCart({ productId, quantity }));
      setShowAddedMessage(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setShowAddedMessage(false);
      }, 2000);
    }
  };

  const handleSetRating = (rating: number) => {
    setRating(rating);
    setReviewsCount((prev) => prev + 1);
  };

  return (
    <ProductCard
      product={product}
      discount={Numbers.calcDiscount(product.price, product.discountedPrice || 0)}
      showAddedMessage={showAddedMessage}
      loading={loading}
      rating={rating}
      reviewsCount={reviewsCount}
      onAddToCart={() =>
        handleAddToCart({
          productId: product._id,
          quantity: 1,
        })
      }
      onSetRating={handleSetRating}
    />
  );
};
