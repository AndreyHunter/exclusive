import { Link } from 'react-router-dom';

import { ROUTES } from '@routes/routes';
import type { Category } from '@/types/static';

import styles from './categoryItem.module.scss';

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  const Icon = category.icon;
  return (
    <Link to={`${ROUTES.PRODUCTS}/${category.path}`} className={styles.root}>
      {Icon && <Icon className={styles.icon} />}
      <span className={styles.name}>{category.name}</span>
    </Link>
  );
};
