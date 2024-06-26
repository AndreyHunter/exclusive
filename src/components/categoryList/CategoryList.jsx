import CategoryItem from '../categoryItem/CategoryItem';

import categories from '../../constants/categories';

import styles from './categoryList.module.scss';

const CategoryList = () => {
    return (
        <ul className={styles.list}>
            {categories &&
                categories.map((category) => (
                    <CategoryItem key={category.id} category={category} />
                ))}
        </ul>
    );
};

export default CategoryList;