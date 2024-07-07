import { Link } from 'react-router-dom';

import Arrow from '@components/atoms/arrow/Arrow';

import Line from './line.svg';

import styles from './showNowLink.module.scss';

const ShopNowLink = ({
    arrow = false,
    direction = 'column',
    line = false,
    link,
    className,
    ...props
}) => {
    const combinedClasses = [
        styles.root,
        className || '',
        direction === 'row' && styles.row,
        direction === 'column' && styles.column,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={combinedClasses} {...props}>
            <Link to={link}>Shop Now</Link>
            {arrow && <Arrow color="white" />}
            {line && <img src={Line} alt="line" />}
        </div>
    );
};

export default ShopNowLink;
