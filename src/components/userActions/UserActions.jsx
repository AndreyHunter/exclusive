import WishListIcon from '../../ui/wishListIcon/WishListIcon';
import CartIcon from '../../ui/cartIcon/CartIcon';

import styles from './userActions.module.scss';

const UserActions = () => {
    return (
        <div className={styles.buttons}>
            <button type="button">
                <WishListIcon />
            </button>
            <button type="button">
                <CartIcon />
            </button>
        </div>
    );
};

export default UserActions;
