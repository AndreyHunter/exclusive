import { Link } from 'react-router-dom';

import CartIcon from '@components/atoms/cartIcon/CartIcon';
import WishListIcon from '@components/atoms/wishListIcon/WishListIcon';

import styles from './userActions.module.scss';

const UserActions = ({ color, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <div className={combinedClasses}>
            <Link to="/wishlist">
                <WishListIcon color={color} />
            </Link>
            <Link to="/cart">
                <CartIcon color={color} />
            </Link>
        </div>
    );
};

export default UserActions;
