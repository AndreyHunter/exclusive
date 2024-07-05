import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import Logo from '../../atoms/logo/Logo';
import UserActions from '../../molecules/userActions/UserActions';
import SocialMediaList from '../../molecules/socialMediaList/SocialMediaList';

import Flex from '../../helpers/flex/Flex';

import mainCategories from '../../../constants/mainCategories';
import navBarPages from '../../../constants/navPages';

import styles from './mobileMenu.module.scss';

const MobileMenu = ({ isOpen }) => {
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

    return (
        <section className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
            <Flex flexDirection="column" gap={30} className={styles.content}>
                <Flex alignItems="center" justifyContent="space-between">
                    <Logo color="white" className={styles.logo} />
                    <UserActions className={styles.actions} color="white" />
                </Flex>
                <div className={styles.grid}>
                    <Flex
                        tagElement="ul"
                        flexDirection="column"
                        gap={20}
                        className={styles.list}>
                        {mainCategories &&
                            mainCategories.map((category) => (
                                <li key={category.id}>
                                    <Link to={`/catalog${category.path}`}>{category.name}</Link>
                                </li>
                            ))}
                    </Flex>
                    <Flex
                        tagElement="ul"
                        flexDirection="column"
                        gap={20}
                        className={styles.list}>
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
