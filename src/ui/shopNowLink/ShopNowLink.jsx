import { Link } from 'react-router-dom';
import Arrow from '../Arrow/Arrow';

import styles from './showNowLink.module.scss';

const ShopNowLink = ({ arrow = false, link }) => {
    return (
        <div className={styles.wrapper}>
            <Link to={link}>Shop Now</Link>
            {arrow && <Arrow color="white" />}
        </div>
    );
};

export default ShopNowLink;
