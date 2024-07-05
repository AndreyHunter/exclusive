import { Link } from 'react-router-dom';

import WishListIcon from '../../atoms/wishListIcon/WishListIcon';
import CartIcon from '../../atoms/cartIcon/CartIcon';

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
