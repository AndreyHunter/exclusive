import { useEffect } from 'react';

import { useAppDispatch } from '@/app/hooks';
import { fetchUserCart } from '@features/cart/cartSlice';

export const useInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUserCart());
  }, [dispatch]);
};
