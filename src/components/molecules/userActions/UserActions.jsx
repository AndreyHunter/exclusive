import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { isUserMenuOpenSelector } from '@store/userMenu/userMenuSelectors';
import { closeUserMenu, toggleMenuOpen } from '@store/userMenu/userMenuSlice';

import Button from '@components/atoms/button/Button';
import UserMenu from '@components/organisms/userMenu/UserMenu';

import CartIcon from '@assets/icons/cart.svg?react';
import WishListIcon from '@assets/icons/heart.svg?react';
import UserIcon from '@assets/icons/user.svg?react';

import styles from './userActions.module.scss';

const UserActions = ({ color, className }) => {
    const dispatch = useDispatch();
    const isOpen = useSelector(isUserMenuOpenSelector);

    const menuRef = useRef(null);
    const isAuth = useSelector((state) => state.auth.isAuth);

    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    const colorWhite = color === 'white' ? styles.white : '';

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                dispatch(closeUserMenu());
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    const toggleMenu = () => {
        dispatch(toggleMenuOpen());
    };

    return (
        <div className={combinedClasses}>
            <Link to="/wishlist">
                <WishListIcon className={`${styles.icon} ${colorWhite}`} />
            </Link>
            <Link to="/cart">
                <CartIcon className={`${styles.icon} ${colorWhite}`} />
            </Link>
            {!isAuth ? (
                <Link to={isAuth ? '/account' : '/auth'}>
                    <UserIcon />
                </Link>
            ) : (
                <Button onClick={toggleMenu} className={styles.userBG} activeClass={false}>
                    <UserIcon />
                </Button>
            )}
            <div ref={menuRef} className={`${styles.menu} ${isOpen && styles.open}`}>
                <UserMenu />
            </div>
        </div>
    );
};

export default UserActions;
