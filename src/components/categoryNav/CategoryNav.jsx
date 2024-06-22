import { Link } from 'react-router-dom';
import categoriesNav from './categoriesNav';
import Arrow from '../../ui/Arrow/Arrow';

import styles from './categoryNav.module.scss';

const CategoryNav = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.block}>
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
            </div>
            <div className={styles.line} />
        </div>
    );
};

export default CategoryNav;
