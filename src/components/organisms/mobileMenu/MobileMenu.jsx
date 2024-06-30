import { useEffect } from 'react';

import Logo from '../../atoms/logo/Logo';
import FlexBlock from '../../helpers/flexBlock/FlexBlock';
import UserActions from '../../molecules/userActions/UserActions';
import SocialMediaList from '../../molecules/socialMediaList/SocialMediaList';

import mainCategories from '../../../constants/mainCategories';
import navBarPages from '../../../constants/navPages';

import styles from './mobileMenu.module.scss';
import { Link } from 'react-router-dom';

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
            <FlexBlock column gap={30} className={styles.content}>
                <FlexBlock alignCenter spaceBetween>
                    <Logo color="white" className={styles.logo} />
                    <UserActions className={styles.actions} color="white" />
                </FlexBlock>
                <div className={styles.grid}>
                    <FlexBlock tagElement="ul" column gap={20} className={styles.list}>
                        {mainCategories &&
                            mainCategories.map((category) => (
                                <li key={category.id}>
                                    <Link to={`/catalog${category.path}`}>{category.name}</Link>
                                </li>
                            ))}
                    </FlexBlock>
                    <FlexBlock tagElement="ul" column gap={20} className={styles.list}>
                        {navBarPages &&
                            navBarPages.map((page) => (
                                <li key={page.id}>
                                    <Link to={page.path}>{page.name}</Link>
                                </li>
                            ))}
                    </FlexBlock>
                </div>
                <SocialMediaList />
            </FlexBlock>
        </section>
    );
};

export default MobileMenu;
