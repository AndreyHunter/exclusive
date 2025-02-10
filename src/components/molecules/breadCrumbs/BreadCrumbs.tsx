import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

import { ROUTES } from '@routes/routes';
import type { BreadCrumbsType } from 'types/index';

import styles from './breadCrumbs.module.scss';

interface breakCrumbsProps {
  elements?: BreadCrumbsType[];
  activePage?: string;
  className?: string;
}

export const BreadCrumbs = ({ elements, activePage = '', className }: breakCrumbsProps) => {
  const classes = clsx(styles.root, className);
  const activePageClasses = clsx(styles.item, styles.active);
  return (
    <div className={classes}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to={ROUTES.INDEX}>Home</Link>
        </li>
        {elements &&
          elements.map((item, index) => {
            const isLast = index === elements.length - 1;
            return (
              <li key={index} className={clsx(styles.item, isLast && styles.active)}>
                {isLast ? item.name : <Link to={item.path}>{item.name}</Link>}
              </li>
            );
          })}
        {activePage && <li className={activePageClasses}>{activePage}</li>}
      </ul>
    </div>
  );
};
