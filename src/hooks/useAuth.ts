import { useState } from 'react';
import { AxiosError } from 'axios';

import { useAppDispatch } from '@/app/hooks';
import { setUser } from '@features/auth/authSlice';
import { updateCartQuantityAfterAuth } from '@features/cart/cartSlice';
import axios from '@services/axiosConfig';

export type FormSigninData = {
  contact: string;
  password: string;
};

export type FormSignupData = FormSigninData & {
  name: string;
};

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const dispatch = useAppDispatch();

  const handleSignup = async (body: FormSignupData): Promise<boolean> => {
    setLoading(true);
    try {
      const res = await axios.post('/auth/signup', body);
      dispatch(setUser(res.data));
      dispatch(updateCartQuantityAfterAuth(res.data));
      return true;
    } catch (err) {
      const error = err as Error;
      if (err instanceof AxiosError) {
        setError(err?.response?.data?.message || error.message);
      } else {
        setError(error.message);
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleSignin = async (body: FormSigninData): Promise<boolean> => {
    setLoading(true);
    try {
      const res = await axios.post('/auth/signin', body);
      dispatch(setUser(res.data));
      dispatch(updateCartQuantityAfterAuth(res.data));
      return true;
    } catch (err) {
      const error = err as Error;
      if (err instanceof AxiosError) {
        setError(err?.response?.data?.message || error.message);
      } else {
        setError(error.message);
      }
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
