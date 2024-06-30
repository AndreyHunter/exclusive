import { Link } from 'react-router-dom';
import Arrow from '../../atoms/arrow/Arrow';
import Line from './line.svg';

import styles from './showNowLink.module.scss';

const ShopNowLink = ({ arrow = false, direction = 'column', line = false, link }) => {
    const isRow = direction === 'row';
    const isColumn = direction === 'column';

    return (
        <div
            className={`${styles.wrapper} ${isRow ? styles.row : isColumn ? styles.column : null}`}>
            <Link to={link}>Shop Now</Link>
            {arrow && <Arrow color="white" />}
            {line && <img src={Line} alt="line" />}
        </div>
    );
};

export default ShopNowLink;
