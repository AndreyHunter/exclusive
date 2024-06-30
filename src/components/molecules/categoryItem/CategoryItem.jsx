import styles from './categoryItem.module.scss';

const CategoryItem = ({ category }) => {
    const Icon = category.icon;
    return (
        <div className={styles.root}>
            <div className={styles.box}>
                {Icon && <Icon className={styles.icon} />}
                <span className={styles.name}>{category.name}</span>
            </div>
        </div>
    );
};

export default CategoryItem;