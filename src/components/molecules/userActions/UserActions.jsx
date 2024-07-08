import { Link } from 'react-router-dom';

import CartIcon from '@assets/icons/cart.svg?react';
import WishListIcon from '@assets/icons/heart.svg?react';

import styles from './userActions.module.scss';

const UserActions = ({ color, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <div className={combinedClasses}>
            <Link to="/wishlist">
                <WishListIcon />
            </Link>
            <Link to="/cart">
                <CartIcon />
            </Link>
        </div>
    );
};

export default UserActions;
