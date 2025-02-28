import { NavLink, useLocation } from 'react-router-dom';

import type { Page } from 'types/static';

import line from './line.svg';
import styles from './headerNav.module.scss';

interface HeaderNavProps {
  pages: Page[];
}

export const HeaderNav = ({ pages }: HeaderNavProps) => {
  const location = useLocation();
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        {pages &&
          pages.map((page) => (
            <li key={page.id} className={styles.item}>
              <NavLink to={page.path} className={styles.link}>
                {page.name}
                {location.pathname.replace('/', '') === page.path ? <img src={line} /> : null}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};
