import { useEffect } from 'react';

import Logo from '../../ui/logo/Logo';
import FlexBlock from '../flexBlock/FlexBlock';
import UserActions from '../userActions/UserActions';
import SocialMediaList from '../socialMediaList/SocialMediaList';

import mainCategories from '../../constants/mainCategories';
import navBarPages from '../../constants/navPages';

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
            <div className={styles.content}>
                <FlexBlock column gap={30}>
                    <FlexBlock alignCenter spaceBetween>
                        <Logo color="white" className={styles.logo} />
                        <UserActions className={styles.actions} color="white" />
                    </FlexBlock>
                    <div className={styles.grid}>
                        <FlexBlock tagElement="ul" column gap={20} className={styles.list}>
                            {mainCategories &&
                                mainCategories.map((category) => (
                                    <li key={category.id}>{category.name}</li>
                                ))}
                        </FlexBlock>
                        <FlexBlock tagElement="ul" column gap={20} className={styles.list}>
                            {navBarPages &&
                                navBarPages.map((page) => <li key={page.id}>{page.name}</li>)}
                        </FlexBlock>
                    </div>
                    <SocialMediaList />
                </FlexBlock>
            </div>
        </section>
    );
};

export default MobileMenu;