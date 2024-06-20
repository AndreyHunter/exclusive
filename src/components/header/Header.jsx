import Logo from '../../ui/logo/Logo';
import HeaderNav from './headerNav/HeaderNav';
import Search from '../search/Search';

import navBarPages from '../../constants/navBarPages';

import styles from './header.module.scss';

const Header = () => {
    return (
        <div className={styles.content}>
            <Logo />
            <HeaderNav pages={navBarPages} />
            <Search />
        </div>
    );
};

export default Header;
