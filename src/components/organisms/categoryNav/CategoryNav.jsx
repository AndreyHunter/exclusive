import { Link } from 'react-router-dom';

import mainCategories from '@constants/mainCategories';

import Arrow from '@assets/icons/dropdown-arrow.svg?react';

import styles from './categoryNav.module.scss';

const CategoryNav = ({ className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

    return (
        <nav className={combinedClasses}>
            <ul className={styles.list}>
                {mainCategories &&
                    mainCategories.map((category) => (
                        <li key={category.id} className={styles.item}>
                            <Link to={`/catalog${category.path}`} className={styles.link}>
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