import { Link } from 'react-router-dom';

import Flex from '@components/helpers/flex/Flex';
import { ROUTES } from '@routes/routes';

import styles from './orderItem.module.scss';

const OrderItem = ({ image, name, category, className, id }) => {
  const combinedClasses = `${styles.root} ${className || ''}`.trim();

  return (
    <Flex className={combinedClasses} alignItems="center">
      <Link to={`/${ROUTES.PRODUCT}/${id}`} className={styles.img}>
        <img src={image} alt={name} />
      </Link>
      <Link to={`/${ROUTES.PRODUCT}/${id}`} className={styles.title}>
        {name}
      </Link>
    </Flex>
  );
};

export default OrderItem;
