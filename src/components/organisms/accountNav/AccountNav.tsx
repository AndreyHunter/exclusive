import type { NavLinkRenderProps } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

import { Flex } from '@components/helpers/flex/Flex';
import { ROUTES } from '@routes/routes';

import styles from './accountNav.module.scss';

export const AccountNav = () => {
  const { pathname } = useLocation();

  const activeLinkClass = ({ isActive }: NavLinkRenderProps) =>
    isActive ? clsx(styles.link, styles.active) : styles.link;

  return (
    <Flex flexDirection="column" className={styles.root}>
      <div>
        <strong>Manage My Account</strong>
        <Flex tagElement="ul" flexDirection="column" gap={8}>
          <li>
            <NavLink
              to={`/${ROUTES.PROFILE}`}
              className={clsx(styles.link, pathname === `/${ROUTES.PROFILE}` && styles.active)}>
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ADDRESS_BOOK} className={activeLinkClass}>
              Address Book
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.PAYMENT_OPTIONS} className={activeLinkClass}>
              My Payment Options
            </NavLink>
          </li>
          <li>
            <NavLink to={`/${ROUTES.WISHLIST}`} className={activeLinkClass}>
              My WishList
            </NavLink>
          </li>
        </Flex>
      </div>
      <div>
        <strong>Orders</strong>
        <Flex tagElement="ul" flexDirection="column" gap={8}>
          <li>
            <NavLink to={ROUTES.ORDERS} className={activeLinkClass}>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.RETURNS} className={activeLinkClass}>
              My Returns
            </NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CANCELLATIONS} className={activeLinkClass}>
              My Cancellations
            </NavLink>
          </li>
        </Flex>
      </div>
    </Flex>
  );
};
