import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

const Logo = ({ color = 'black', className, ...props }) => {
    const isWhite = color === 'white';
    const isBlack = color === 'black';

    const logoClass = styles.logo;
    const whiteClass = isWhite ? styles.white : '';
    const blackClass = isBlack ? styles.black : '';
    const additionalClass = className || '';

    const combinedClassName = `${logoClass} ${whiteClass} ${blackClass} ${additionalClass}`;

    return (
        <Link className={combinedClassName} {...props}>
            Exclusive
        </Link>
    );
};

export default Logo;