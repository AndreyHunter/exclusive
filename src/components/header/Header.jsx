import Logo from '../../ui/logo/Logo';
import HeaderNav from './headerNav/HeaderNav';
import Search from '../search/Search';
import UserActions from '../userActions/UserActions';

import navBarPages from '../../constants/navBarPages';

import Container from '../container/Container';

import styles from './header.module.scss';

const Header = () => {
    return (
        <Container>
            <div className={styles.content}>
                <div className={styles.left}>
                    <Logo />
                    <HeaderNav pages={navBarPages} />
                </div>
                <div className={styles.wrapper}>
                    <Search />
                    <UserActions />
                </div>
            </div>
        </Container>
    );
};

export default Header;
