import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '@/app/hooks';
import { selectIsAuth } from '@features/auth/authSlice';

export const PrivateRoute = ({ children }) => {
  const isAuth = useAppSelector(selectIsAuth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/auth');
    }
  }, [isAuth, navigate]);

  return isAuth ? children : null;
};
