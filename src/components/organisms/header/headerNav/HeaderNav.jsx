import { NavLink, useLocation } from 'react-router-dom';

import line from './line.svg';

import styles from './headerNav.module.scss';

const HeaderNav = ({ pages, className, ...props }) => {
    const location = useLocation();
    const combinedClassName = `${styles.nav || ''} ${className || ''}`;

    return (
        <nav className={combinedClassName} {...props}>
            <ul className={styles.list}>
                {pages &&
                    pages.map((page, index) => (
                        <li key={index} className={styles.item}>
                            <NavLink to={page.path} className={styles.link}>
                                {page.name}
                                {location.pathname === page.path ? <img src={line} /> : null}
                            </NavLink>
                        </li>
                    ))}
            </ul>
        </nav>
    );
};

export default HeaderNav;