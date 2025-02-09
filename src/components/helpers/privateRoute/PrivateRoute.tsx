import type React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@/app/hooks';
import { selectIsAuth } from '@features/auth/authSlice';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuth = useAppSelector(selectIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth');
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
};
