import { Link } from 'react-router-dom';

import CartIcon from '@assets/icons/cart.svg?react';
import WishListIcon from '@assets/icons/heart.svg?react';

import styles from './userActions.module.scss';

const UserActions = ({ color, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    const colorWhite = color === 'white' ? styles.white : '';

    return (
        <div className={combinedClasses}>
            <Link to="/wishlist">
                <WishListIcon className={`${styles.icon} ${colorWhite}`} />
            </Link>
            <Link to="/cart">
                <CartIcon className={`${styles.icon} ${colorWhite}`} />
            </Link>
        </div>
    );
};

export default UserActions;