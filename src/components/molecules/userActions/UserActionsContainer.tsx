import React, { useEffect, useRef } from 'react';

import { closeMobileMenu } from '@features/mobileMenu/mobileMenuSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectIsAuth } from '@features/auth/authSlice';
import {
  selectIsUserMenuOpen,
  closeUserMenu,
  toggleMenuOpen,
} from '@features/userMenu/userMenuSlice';
import { selectProductsQuantity } from '@features/cart/cartSlice';

import { UserActions } from './UserActions';

export interface UserActionsContainerProps {
  color: string;
  className: string;
}

export const UserActionsContainer: React.FC<UserActionsContainerProps> = ({ color, className }) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsUserMenuOpen);
  const isAuth = useAppSelector(selectIsAuth);
  const productsQuantity = useAppSelector(selectProductsQuantity);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        dispatch(closeUserMenu());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch, menuRef, isOpen]);

  const handletoggleMenu = () => {
    dispatch(toggleMenuOpen());
  };

  const handleCloseMobileMenu = () => {
    dispatch(closeMobileMenu());
  };

  return (
    <UserActions
      ref={menuRef}
      isAuth={isAuth}
      isOpen={isOpen}
      onToggleMenu={handletoggleMenu}
      onCloseMobileMenu={handleCloseMobileMenu}
      color={color}
      className={className}
      productsQuantity={productsQuantity.length}
    />
  );
};
