import { useState } from 'react';

import { addToCart } from '@features/cart/cartSlice';
import { useAppDispatch } from '@/app/hooks';

import { ProductCard } from './ProductCard';

export const ProductCardContainer = ({ product }) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const handleAddToCart = async ({ productId, userId, quantity }) => {
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await dispatch(addToCart({ productId, userId, quantity }));
      setShowAddedMessage(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setShowAddedMessage(false);
      }, 2000);
    }
  };

  return (
    <ProductCard
      product={product}
      handleAddToCart={() =>
        handleAddToCart({
          productId: product._id,
          userId: localStorage.getItem('userId'),
          quantity: 1,
        })
      }
      showAddedMessage={showAddedMessage}
      loading={loading}
    />
  );
};
