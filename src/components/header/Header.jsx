import Logo from '../../ui/logo/Logo';
import HeaderNav from './headerNav/HeaderNav';
import Search from '../search/Search';
import UserActions from '../userActions/UserActions';

import navBarPages from '../../constants/navBarPages';

import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.content}>
            <Logo />
            <HeaderNav pages={navBarPages} />
            <div className={styles.wrapper}>
                <Search />
                <UserActions />
            </div>
        </div>
    );
};

export default Header;
