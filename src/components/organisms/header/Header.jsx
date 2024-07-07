import navPages from '@constants/navPages';

import Logo from '@components/atoms/logo/Logo';
import Container from '@components/helpers/container/Container';
import Search from '@components/molecules/search/Search';
import UserActions from '@components/molecules/userActions/UserActions';

import HeaderNav from './headerNav/HeaderNav';

import styles from './header.module.scss';

const Header = ({ className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

    return (
        <header className={combinedClasses}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <Logo />
                        <HeaderNav pages={navPages} className={styles.nav} />
                    </div>
                    <div className={styles.wrapper}>
                        <Search className={styles.search} />
                        <UserActions />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
