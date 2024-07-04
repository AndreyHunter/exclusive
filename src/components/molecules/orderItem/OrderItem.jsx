import { Link } from 'react-router-dom';

import FlexBlock from '../../helpers/flexBlock/FlexBlock';

import styles from './orderItem.module.scss';

const OrderItem = ({ image, name, category, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <FlexBlock className={combinedClasses} alignCenter>
            <Link to={`/catalog/${category}/${name}`} className={styles.img}>
                <img src={image} alt={name} />
            </Link>
            <Link to={`/catalog/${category}/${name}`} className={styles.title}>
                {name}
            </Link>
        </FlexBlock>
    );
};

export default OrderItem;