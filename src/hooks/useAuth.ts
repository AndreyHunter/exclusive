import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUser } from '@features/auth/authSlice';
import { updateCartQuantityAfterAuth } from '@features/cart/cartSlice';
import axios from '@services/axiosConfig';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleSignup = async (body) => {
    setLoading(true);
    try {
      const res = await axios.post('/auth/signup', body);
      dispatch(setUser(res.data));
      dispatch(updateCartQuantityAfterAuth(res.data));
      return true;
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleSignin = async (body) => {
    setLoading(true);
    try {
      const res = await axios.post('/auth/signin', body);
      dispatch(setUser(res.data));
      dispatch(updateCartQuantityAfterAuth(res.data));
      return true;
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSignup,
    handleSignin,
    loading,
    error,
  };
};
