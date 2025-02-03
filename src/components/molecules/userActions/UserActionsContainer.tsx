import { useEffect, useRef } from 'react';

import { closeMobileMenu } from '@features/mobileMenu/mobileMenuSlice';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectIsAuth } from '@features/auth/authSlice';
import {
  selectIsUserMenuOpen,
  closeUserMenu,
  toggleMenuOpen,
} from '@features/userMenu/userMenuSlice';

import { UserActions } from './UserActions';

export const UserActionsContainer = ({ color, onClick, className }) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsUserMenuOpen);

  const menuRef = useRef(null);
  const isAuth = useAppSelector(selectIsAuth);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        dispatch(closeUserMenu());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch, menuRef, isOpen]);

  const toggleMenu = () => {
    dispatch(toggleMenuOpen());
  };

  const handleCloseMobileMenu = () => {
    dispatch(closeMobileMenu());
  };

  return (
    <UserActions
      reF={menuRef}
      isAuth={isAuth}
      isOpen={isOpen}
      toggleMenu={toggleMenu}
      closeMobileMenu={handleCloseMobileMenu}
      color={color}
      onClick={onClick}
      className={className}
    />
  );
};
