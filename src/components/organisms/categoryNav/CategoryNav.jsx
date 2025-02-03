import { Link } from 'react-router-dom';

import { ROUTES } from '@/routes/routes';
import { categories } from '@constants/categories';
import Arrow from '@assets/icons/dropdown-arrow.svg?react';

import styles from './categoryNav.module.scss';

const CategoryNav = ({ className }) => {
  const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

  return (
    <nav className={combinedClasses}>
      <ul className={styles.list}>
        {categories &&
          categories.map((category) => (
            <li key={category.id} className={styles.item}>
              <Link
                to={`${ROUTES.PRODUCTS}/${category.path}`}
                className={styles.link}
                prefetch="none">
                {category.name}
              </Link>
              {category.subcategories && <Arrow />}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default CategoryNav;
