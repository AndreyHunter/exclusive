import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

import { ROUTES } from '@routes/routes';
import { Button } from '@components/atoms/button/Button';
import { CircleCount } from '@components/atoms/circleCount/CircleCount';
import { UserMenu } from '@components/organisms/userMenu/UserMenu';
import CartIcon from '@assets/icons/cart.svg?react';
import WishListIcon from '@assets/icons/heart.svg?react';
import UserIcon from '@assets/icons/user.svg?react';

import type { UserActionsContainerProps } from './UserActionsContainer';
import styles from './userActions.module.scss';

interface UserActionsProps extends UserActionsContainerProps {
  ref: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  isAuth: boolean;
  productsQuantity: number;
  onToggleMenu: () => void;
  onCloseMobileMenu: () => void;
}

export const UserActions: React.FC<UserActionsProps> = ({
  ref,
  isOpen,
  isAuth,
  color,
  className,
  productsQuantity,
  onToggleMenu,
  onCloseMobileMenu,
}) => {
  const classes = clsx(styles.root, className);
  const colorWhite = clsx(color === 'white' && styles.white);

  return (
    <div className={classes}>
      <Link to={ROUTES.WISHLIST}>
        <WishListIcon className={`${styles.icon} ${colorWhite}`} onClick={onCloseMobileMenu} />
      </Link>
      <Link to={ROUTES.CART} className={styles.cart}>
        <CartIcon className={`${styles.icon} ${colorWhite}`} onClick={onCloseMobileMenu} />
        <CircleCount quantity={productsQuantity || 0} className={styles.quantity} />
      </Link>
      {!isAuth ? (
        <Link
          to={isAuth ? ROUTES.PROFILE : `${ROUTES.AUTH}/${ROUTES.SIGNUP}`}
          onClick={onCloseMobileMenu}>
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
      <div ref={ref} className={`${styles.menu} ${isOpen && styles.open}`}>
        <UserMenu closeMobileMenu={onCloseMobileMenu} />
      </div>
    </div>
  );
};
