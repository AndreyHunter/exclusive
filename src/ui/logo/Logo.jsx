import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

const Logo = ({ color = 'black' }) => {
    const isWhite = color === 'white';
    const isBlack = color === 'black';

    return (
        <Link className={`${styles.logo} ${isWhite && styles.white} ${isBlack && styles.black}`}>
            Exclusive
        </Link>
    );
};

export default Logo;
