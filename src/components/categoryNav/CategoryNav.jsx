import { Link } from 'react-router-dom';
import categoriesNav from './categoriesNav';
import Arrow from '../../ui/Arrow/Arrow';

import styles from './categoryNav.module.scss';

const CategoryNav = () => {
    return (
        <ul className={styles.list}>
            {categoriesNav &&
                categoriesNav.map((category) => (
                    <li key={category.id} className={styles.item}>
                        <Link to={`/category${category.path}`} className={styles.link}>
                            {category.name}
                        </Link>
                        {category.subcategories && <Arrow />}
                    </li>
                ))}
        </ul>
    );
};

export default CategoryNav;
