import WishListIcon from '../../atoms/wishListIcon/WishListIcon';
import CartIcon from '../../atoms/cartIcon/CartIcon';

import styles from './userActions.module.scss';

const UserActions = ({ className, color, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <div className={combinedClasses} {...props}>
            <button type="button">
                <WishListIcon color={color} />
            </button>
            <button type="button">
                <CartIcon color={color} />
            </button>
        </div>
    );
};

export default UserActions;
