import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchUserCart } from '@features/cart/cartSlice';

export const useInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    dispatch(fetchUserCart({ userId }));
  }, [dispatch]);
};
