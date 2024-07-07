import { Link } from 'react-router-dom';

import styles from './logo.module.scss';

const Logo = ({ color = 'black', className, ...props }) => {
    const combinedClasses = [
        styles.root,
        color === 'white' && styles.white,
        color === 'black' && styles.black,
        className || '',
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <Link to="/" className={combinedClasses} {...props}>
            Exclusive
        </Link>
    );
};

export default Logo;
