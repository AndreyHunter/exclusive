import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { mobileMenuSelector } from '@store/mobileMenu/mobileMenuSelectors';
import { closeMobileMenu } from '@store/mobileMenu/mobileMenuSlice';

import categories from '@constants/categories';
import navBarPages from '@constants/navPages';

import SocialMediaList from '@components//molecules/socialMediaList/SocialMediaList';
import Logo from '@components/atoms/logo/Logo';
import Flex from '@components/helpers/flex/Flex';
import UserActions from '@components/molecules/userActions/UserActionsContainer';

import styles from './mobileMenu.module.scss';

const MobileMenu = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(mobileMenuSelector);

    useEffect(() => {
        const body = document.querySelector('body');
        if (isOpen) {
            body.classList.add(styles.hidden);
        } else {
            body.classList.remove(styles.hidden);
        }

        return () => {
            body.classList.remove(styles.hidden);
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    const handleCloseMenu = () => {
        dispatch(closeMobileMenu());
    };

    return (
        <section className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <Flex flexDirection="column" gap={30} className={styles.content}>
                <Flex alignItems="center" justifyContent="space-between">
                    <Logo color="white" className={styles.logo} />
                    <UserActions className={styles.actions} color="white" />
                </Flex>
                <div className={styles.grid}>
                    <Flex tagElement="ul" flexDirection="column" gap={20} className={styles.list}>
                        {categories &&
                            categories.map((category) => (
                                <li key={category.id}>
                                    <Link to={`/catalog${category.path}`} onClick={handleCloseMenu}>
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                    </Flex>
                    <Flex tagElement="ul" flexDirection="column" gap={20} className={styles.list}>
                        {navBarPages &&
                            navBarPages.map((page) => (
                                <li key={page.id}>
                                    <Link to={page.path} onClick={handleCloseMenu}>
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                    </Flex>
                </div>
                <SocialMediaList />
            </Flex>
        </section>
    );
};

export default MobileMenu;
