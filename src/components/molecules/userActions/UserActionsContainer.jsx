import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isAuthSelector } from '@store/auth/authSelectors';
import { closeMobileMenu } from '@store/mobileMenu/mobileMenuSlice';
import { isUserMenuOpenSelector } from '@store/userMenu/userMenuSelectors';
import { closeUserMenu, toggleMenuOpen } from '@store/userMenu/userMenuSlice';

import UserActions from './UserActions';

const UserActionsContainer = ({ color, onClick, className }) => {
    const dispatch = useDispatch();
    const isOpen = useSelector(isUserMenuOpenSelector);

    const menuRef = useRef(null);
    const isAuth = useSelector(isAuthSelector);

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
    }, [dispatch, menuRef]);

    const toggleMenu = () => {
        dispatch(toggleMenuOpen());
    };

    const handleCloseMobileMenu = () => {
        dispatch(closeMobileMenu());
    };

    return (
        <UserActions
            reF={menuRef}
            isAuth={isAuth}
            isOpen={isOpen}
            toggleMenu={toggleMenu}
            closeMobileMenu={handleCloseMobileMenu}
            color={color}
            onClick={onClick}
            className={className}
        />
    );
};

export default UserActionsContainer;
