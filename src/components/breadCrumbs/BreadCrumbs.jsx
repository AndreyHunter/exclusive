import { Link } from 'react-router-dom';
import styles from './breadCrumbs.module.scss';

const BreadCrumbs = ({ activePage, className }) => {
    const combinedClassName = `${styles.wrapper} ${className || ''}`;

    return (
        <div className={combinedClassName}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={`${styles.item} ${styles.active}`}>{activePage}</li>
            </ul>
        </div>
    );
};

export default BreadCrumbs;