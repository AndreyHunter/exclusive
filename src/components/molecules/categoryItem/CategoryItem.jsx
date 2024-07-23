import { Link } from 'react-router-dom';

import styles from './categoryItem.module.scss';

const CategoryItem = ({ category }) => {
    const Icon = category.icon;
    return (
        <Link to={`/category/electronics${category.path}`} className={styles.root}>
            {Icon && <Icon className={styles.icon} />}
            <span className={styles.name}>{category.name}</span>
        </Link>
    );
};

export default CategoryItem;