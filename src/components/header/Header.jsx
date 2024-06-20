import Logo from '../../ui/logo/Logo';
import HeaderNav from './headerNav/HeaderNav';

import Container from '../container/Container';

import navBarPages from '../../constants/navBarPages';

import styles from './header.module.scss';

const Header = () => {
    return (
        <Container>
            <div className={styles.content}>
                <Logo />
                <HeaderNav pages={navBarPages} />
            </div>
        </Container>
    );
};

export default Header;
