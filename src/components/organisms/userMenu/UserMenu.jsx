import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeToken } from '@store/auth/authSlice';
import { closeUserMenu } from '@store/userMenu/userMenuSlice';

import Flex from '@components/helpers/flex/Flex';

import CancelIcon from '@assets/icons/cancel.svg?react';
import LogoutIcon from '@assets/icons/logout.svg?react';
import OrderIcon from '@assets/icons/order.svg?react';
import ReviewIcon from '@assets/icons/review.svg?react';
import UserIcon from '@assets/icons/user.svg?react';

import styles from './userMenu.module.scss';

const UserMenu = ({ className }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        if (confirm('Are you sure you want to log out?')) {
            dispatch(removeToken());
            dispatch(closeUserMenu());
        }
    };

    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <nav className={combinedClasses}>
            <Flex tagElement="ul" flexDirection="column" gap={10}>
                <li>
                    <Link to="/account" className={styles.user}>
                        <UserIcon />
                        Manage My Account
                    </Link>
                </li>
                <li>
                    <Link to="/my-orders">
                        <OrderIcon />
                        My Orders
                    </Link>
                </li>
                <li>
                    <Link to="my-cancellations">
                        <CancelIcon />
                        My Cancellations
                    </Link>
                </li>
                <li>
                    <Link to="my-reviews">
                        <ReviewIcon />
                        My Reviews
                    </Link>
                </li>
                <li onClick={handleLogout}>
                    <button>
                        <LogoutIcon />
                        Logout
                    </button>
                </li>
            </Flex>
        </nav>
    );
};

export default UserMenu;
