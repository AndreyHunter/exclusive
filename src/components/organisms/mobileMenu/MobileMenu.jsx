import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { mobileMenuSelector } from '@store/mobileMenu/mobileMenuSelectors';

import mainCategories from '@constants/mainCategories';
import navBarPages from '@constants/navPages';

import SocialMediaList from '@components//molecules/socialMediaList/SocialMediaList';
import Logo from '@components/atoms/logo/Logo';
import Flex from '@components/helpers/flex/Flex';
import UserActions from '@components/molecules/userActions/UserActions';

import styles from './mobileMenu.module.scss';

const MobileMenu = () => {
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

    return (
        <section className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <Flex flexDirection="column" gap={30} className={styles.content}>
                <Flex alignItems="center" justifyContent="space-between">
                    <Logo color="white" className={styles.logo} />
                    <UserActions className={styles.actions} color="white" />
                </Flex>
                <div className={styles.grid}>
                    <Flex tagElement="ul" flexDirection="column" gap={20} className={styles.list}>
                        {mainCategories &&
                            mainCategories.map((category) => (
                                <li key={category.id}>
                                    <Link to={`/catalog${category.path}`}>{category.name}</Link>
                                </li>
                            ))}
                    </Flex>
                    <Flex tagElement="ul" flexDirection="column" gap={20} className={styles.list}>
                        {navBarPages &&
                            navBarPages.map((page) => (
                                <li key={page.id}>
                                    <Link to={page.path}>{page.name}</Link>
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
