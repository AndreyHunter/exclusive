import Logo from '../../ui/logo/Logo';
import HeaderNav from './headerNav/HeaderNav';
import Search from '../search/Search';
import UserActions from '../userActions/UserActions';

import navPages from '../../constants/navPages';

import Container from '../container/Container';

import styles from './header.module.scss';

const Header = ({ className, ...props }) => {
    const combinedClassName = `${styles.header || ''} ${className || ''}`;

    return (
        <header className={combinedClassName} {...props}>
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