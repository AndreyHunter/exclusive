import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { clsx } from 'clsx';

import { logout } from '@features/auth/authSlice';
import { clearCart } from '@features/cart/cartSlice';
import { closeMobileMenu } from '@features/mobileMenu/mobileMenuSlice';
import { closeUserMenu, selectIsUserMenuOpen } from '@features/userMenu/userMenuSlice';
import { Flex } from '@components/helpers/flex/Flex';
import { ROUTES } from '@routes/routes';
import { userMenuLinks } from '@constants/userMenuLinks';
import LogoutIcon from '@assets/icons/logout.svg?react';
import { useAppSelector } from '@/app/hooks';

import styles from './userMenu.module.scss';

interface UserMenuProps {
  className?: string;
  onCloseMobileMenu?: () => void;
}

export const UserMenu = ({ onCloseMobileMenu, className }: UserMenuProps) => {
  const isOpen = useAppSelector(selectIsUserMenuOpen);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

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
  }, [isOpen, dispatch]);

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      dispatch(logout());
      dispatch(closeUserMenu());
      dispatch(clearCart());
    }
  };

  return (
    <nav className={clsx(styles.root, className, isOpen && styles.open)} ref={menuRef}>
      <Flex tagElement="ul" flexDirection="column" gap={10}>
        {userMenuLinks &&
          userMenuLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.id}>
                <Link to={link.path} onClick={onCloseMobileMenu}>
                  {link.path === ROUTES.PROFILE ? <Icon className={styles.user} /> : <Icon />}
                  {link.name}
                </Link>
              </li>
            );
          })}
        <li onClick={handleLogout}>
          <button>
            <LogoutIcon />
            Logout
          </button>
        </li>
      </Flex>
    </nav>
  );
};
