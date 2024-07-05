import { NavLink, useLocation } from 'react-router-dom';

import Flex from '../../helpers/flex/Flex';

import styles from './accountNav.module.scss';

const AccountNav = ({ className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    const { pathname } = useLocation();

    const accountClasses = [
        styles.link,
        pathname === '/account' ? styles.active : '',
        pathname === '/account/profile' ? styles.active : '',
    ].join(' ');

    const activeLinkClass = ({ isActive }) =>
        isActive ? `${styles.link} ${styles.active}` : styles.link;

    return (
        <Flex flexDirection="column" className={combinedClasses}>
            <div>
                <strong>Manage My Account</strong>
                <Flex tagElement="ul" flexDirection="column" gap={8}>
                    <li>
                        <NavLink to="/account/profile" className={accountClasses}>
                            My Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/account/address-book" className={activeLinkClass}>
                            Address Book
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/account/payment-options" className={activeLinkClass}>
                            My Payment Options
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/account/wishlist" className={activeLinkClass}>
                            My WishList
                        </NavLink>
                    </li>
                </Flex>
            </div>
            <div>
                <strong>My Orders</strong>
                <Flex tagElement="ul" flexDirection="column" gap={8}>
                    <li>
                        <NavLink to="/account/returns" className={activeLinkClass}>
                            My Returns
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/account/cancellations" className={activeLinkClass}>
                            My Cancellations
                        </NavLink>
                    </li>
                </Flex>
            </div>
        </Flex>
    );
};

export default AccountNav;
