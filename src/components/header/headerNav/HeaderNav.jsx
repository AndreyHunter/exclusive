import { NavLink, useLocation } from 'react-router-dom';

import line from './line.svg';

import styles from './headerNav.module.scss';

const HeaderNav = ({ pages }) => {
    const location = useLocation();
    // const isActive = ({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link);

    return (
        <nav>
            <ul className={styles.list}>
                {pages &&
                    pages.map((page, index) => (
                        <li key={index}>
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
