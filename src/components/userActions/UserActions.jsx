import WishListIcon from '../../ui/wishListIcon/WishListIcon';
import CartIcon from '../../ui/cartIcon/CartIcon';

import styles from './userActions.module.scss';

const UserActions = ({ className, color, ...props }) => {
    const combinedClassName = `${styles.buttons} ${className || ''}`;

    return (
        <div className={combinedClassName} {...props}>
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