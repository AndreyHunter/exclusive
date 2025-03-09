import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

import { ROUTES } from '@routes/routes';
import { Button } from '@components/atoms/button/Button';
import { CircleCount } from '@components/atoms/circleCount/CircleCount';
import { UserMenu } from '@components/organisms/userMenu/UserMenu';
import CartIcon from '@assets/icons/cart.svg?react';
import WishListIcon from '@assets/icons/heart.svg?react';
import UserIcon from '@assets/icons/user.svg?react';

import styles from './userActions.module.scss';
import type { UserActionsContainerProps } from './UserActionsContainer';

interface UserActionsProps extends UserActionsContainerProps {
  isAuth: boolean;
  productsQuantity: number;
  onCloseMobileMenu: () => void;
  onToggleMenu: () => void;
}

export const UserActions = ({
  isAuth,
  color,
  productsQuantity,
  className,
  onCloseMobileMenu,
  onToggleMenu,
}: UserActionsProps) => {
  const colorWhite = clsx(color === 'white' && styles.white);
  const classes = clsx(styles.icon, colorWhite);

  return (
    <div className={clsx(styles.root, className)}>
      <Link to={ROUTES.WISHLIST} onClick={onCloseMobileMenu}>
        <WishListIcon className={classes} />
      </Link>
      <Link to={ROUTES.CART} className={styles.cart} onClick={onCloseMobileMenu}>
        <CartIcon className={classes} />
        <CircleCount quantity={productsQuantity} className={styles.quantity} />
      </Link>
      {!isAuth ? (
        <Link to={`${ROUTES.AUTH}/${ROUTES.SIGNUP}`}>
          <UserIcon className={colorWhite} />
        </Link>
      ) : (
        <Button
          onClick={onToggleMenu}
          className={styles.userBG}
          activeClass={false}
          variant="transparent">
          <UserIcon />
        </Button>
      )}
      <UserMenu className={styles.menu} onCloseMobileMenu={onCloseMobileMenu} />
    </div>
  );
};
