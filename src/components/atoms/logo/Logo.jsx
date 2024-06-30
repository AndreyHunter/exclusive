import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

const Logo = ({ color = 'black', className, ...props }) => {
    const isWhite = color === 'white';
    const isBlack = color === 'black';

    const logoClass = styles.root;
    const additionalClass = className || '';
    const whiteClass = isWhite ? styles.white : '';
    const blackClass = isBlack ? styles.black : '';

    const combinedClasses = `${logoClass} ${whiteClass} ${blackClass} ${additionalClass}`;

    return (
        <Link to="/" className={combinedClasses} {...props}>
            Exclusive
        </Link>
    );
};

export default Logo;