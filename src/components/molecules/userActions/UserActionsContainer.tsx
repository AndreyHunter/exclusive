import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectIsAuth } from '@features/auth/authSlice';
import { toggleMenuOpen } from '@features/userMenu/userMenuSlice';
import { selectProductsQuantity } from '@features/cart/cartSlice';
import { closeMobileMenu } from '@features/mobileMenu/mobileMenuSlice';

import { UserActions } from './UserActions';

export interface UserActionsContainerProps {
  color?: 'white';
  mobile?: boolean;
  className?: string;
}

export const UserActionsContainer = ({ color, mobile, className }: UserActionsContainerProps) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const productsQuantity = useAppSelector(selectProductsQuantity);

  const handleToggleMenu = () => {
    dispatch(toggleMenuOpen());
  };

  const handleCloseMobileMenu = () => {
    if (mobile) {
      dispatch(closeMobileMenu());
    }
  };

  return (
    <UserActions
      isAuth={isAuth}
      onCloseMobileMenu={handleCloseMobileMenu}
      color={color}
      className={className}
      productsQuantity={productsQuantity}
      onToggleMenu={handleToggleMenu}
    />
  );
};
