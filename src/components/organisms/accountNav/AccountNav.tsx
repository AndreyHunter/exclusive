import { NavLink, useLocation } from 'react-router-dom';

import { Flex } from '@components/helpers/flex/Flex';

import styles from './accountNav.module.scss';

export const AccountNav = ({ className }) => {
  const combinedClasses = `${styles.root} ${className || ''}`.trim();
  const { pathname } = useLocation();

  const accountClasses = [styles.link, pathname === '/profile' ? styles.active : ''].join(' ');

  const activeLinkClass = ({ isActive }) =>
    isActive ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <Flex flexDirection="column" className={combinedClasses}>
      <div>
        <strong>Manage My Account</strong>
        <Flex tagElement="ul" flexDirection="column" gap={8}>
          <li>
            <NavLink to="profile" className={accountClasses}>
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="address-book" className={activeLinkClass}>
              Address Book
            </NavLink>
          </li>
          <li>
            <NavLink to="payment-options" className={activeLinkClass}>
              My Payment Options
            </NavLink>
          </li>
          <li>
            <NavLink to="wishlist" className={activeLinkClass}>
              My WishList
            </NavLink>
          </li>
        </Flex>
      </div>
      <div>
        <strong>My Orders</strong>
        <Flex tagElement="ul" flexDirection="column" gap={8}>
          <li>
            <NavLink to="returns" className={activeLinkClass}>
              My Returns
            </NavLink>
          </li>
          <li>
            <NavLink to="cancellations" className={activeLinkClass}>
              My Cancellations
            </NavLink>
          </li>
        </Flex>
      </div>
    </Flex>
  );
};
