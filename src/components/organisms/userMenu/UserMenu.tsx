import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '@features/auth/authSlice';
import { clearCart } from '@features/cart/cartSlice';
import { closeUserMenu } from '@features/userMenu/userMenuSlice';
import { Flex } from '@components/helpers/flex/Flex';
import { ROUTES } from '@routes/routes';
import { userMenuLinks } from '@constants/userMenuLinks';
import LogoutIcon from '@assets/icons/logout.svg?react';

import styles from './userMenu.module.scss';

export const UserMenu = ({ closeMobileMenu, className }) => {
  const dispatch = useDispatch();

  const combinedClasses = `${styles.root} ${className || ''}`.trim();

  const handleLogout = () => {
    if (confirm('Are you sure you want to log out?')) {
      dispatch(logout());
      dispatch(closeUserMenu());
      dispatch(clearCart());
    }
  };

  const handleLinkClick = () => {
    if (closeMobileMenu) closeMobileMenu();
  };

  return (
    <nav className={combinedClasses}>
      <Flex tagElement="ul" flexDirection="column" gap={10}>
        {userMenuLinks &&
          userMenuLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.id}>
                <Link to={link.path} onClick={handleLinkClick}>
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
