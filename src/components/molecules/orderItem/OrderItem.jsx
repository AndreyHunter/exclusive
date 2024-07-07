import { Link } from 'react-router-dom';

import Flex from '@components/helpers/flex/Flex';

import styles from './orderItem.module.scss';

const OrderItem = ({ image, name, category, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return (
        <Flex className={combinedClasses} alignItems="center">
            <Link to={`/catalog/${category}/${name}`} className={styles.img}>
                <img src={image} alt={name} />
            </Link>
            <Link to={`/catalog/${category}/${name}`} className={styles.title}>
                {name}
            </Link>
        </Flex>
    );
};

export default OrderItem;
