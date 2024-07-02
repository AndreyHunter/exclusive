import { Link } from 'react-router-dom';
import styles from './breadCrumbs.module.scss';

const BreadCrumbs = ({ elements, activePage, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <div className={combinedClasses}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                {elements &&
                    elements.map((item, index) => {
                        const isLast = index === elements.length - 1;
                        return (
                            <li
                                key={index}
                                className={`${styles.item} ${isLast ? styles.active : ''}`}>
                                {isLast ? item.name : <Link to={`/${item.path}`}>{item.name}</Link>}
                            </li>
                        );
                    })}
                {activePage && <li className={`${styles.item} ${styles.active}`}>{activePage}</li>}
            </ul>
        </div>
    );
};

export default BreadCrumbs;