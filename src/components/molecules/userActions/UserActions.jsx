import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { productsInCartIdsSelector } from '@store/cart/cartSelectors';

import Button from '@components/atoms/button/Button';
import CircleCount from '@components/atoms/circleCount/CircleCount';
import UserMenu from '@components/organisms/userMenu/UserMenu';

import CartIcon from '@assets/icons/cart.svg?react';
import WishListIcon from '@assets/icons/heart.svg?react';
import UserIcon from '@assets/icons/user.svg?react';

import styles from './userActions.module.scss';

const UserActions = ({ reF, isOpen, isAuth, toggleMenu, color, closeMobileMenu, className }) => {
    const cartQuantity = useSelector(productsInCartIdsSelector) || 0;
    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    const colorWhite = color === 'white' ? styles.white : '';

    const handleLinkClick = () => {
        if (closeMobileMenu) closeMobileMenu();
    };

    return (
        <div className={combinedClasses}>
            <Link to="/wishlist">
                <WishListIcon
                    className={`${styles.icon} ${colorWhite}`}
                    onClick={handleLinkClick}
                />
            </Link>
            <Link to="/cart" className={styles.cart}>
                <CartIcon className={`${styles.icon} ${colorWhite}`} onClick={handleLinkClick} />
                <CircleCount quantity={cartQuantity?.length} className={styles.quantity} />
            </Link>
            {!isAuth ? (
                <Link to={isAuth ? '/account' : '/auth'} onClick={handleLinkClick}>
                    <UserIcon className={colorWhite} />
                </Link>
            ) : (
                <Button onClick={toggleMenu} className={styles.userBG} activeClass={false}>
                    <UserIcon />
                </Button>
            )}
            <div ref={reF} className={`${styles.menu} ${isOpen && styles.open}`}>
                <UserMenu closeMobileMenu={handleLinkClick} />
            </div>
        </div>
    );
};

export default UserActions;
