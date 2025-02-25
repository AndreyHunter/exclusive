import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

import { ROUTES } from '@routes/routes';
import type { Category } from 'types/static';
import Arrow from '@assets/icons/dropdown-arrow.svg?react';

import styles from './categoryNav.module.scss';

interface CategoryNavProps {
  categories?: Category[];
}

export const CategoryNav = ({ categories }: CategoryNavProps) => {
  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        {categories && categories.length !== 0
          ? categories.map((category) => (
              <li
                key={category.id}
                className={clsx(
                  !category.subcategories && styles.item,
                  category.subcategories && styles.categoryItem,
                )}>
                <Link
                  to={`${ROUTES.PRODUCTS}/${category.path}`}
                  className={styles.link}
                  prefetch="none">
                  {category.name}
                </Link>
                {category.subcategories && (
                  <>
                    <Arrow />
                    <ul className={styles.subList}>
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory.id} className={styles.subItem}>
                          <Link
                            to={`${ROUTES.PRODUCTS}/${category.path}/${subcategory.path}`}
                            className={styles.subLink}
                            prefetch="none">
                            {subcategory.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))
          : "There's no categories"}
      </ul>
    </nav>
  );
};
