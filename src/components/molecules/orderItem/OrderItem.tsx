import { Link } from 'react-router-dom';
import { clsx } from 'clsx';

import { Flex } from '@components/helpers/flex/Flex';
import { ROUTES } from '@routes/routes';

import styles from './orderItem.module.scss';

interface OrderItemProps {
  id: string;
  name: string;
  image: string;
  className?: string;
}

export const OrderItem = ({ image, name, className, id }: OrderItemProps) => {
  const classes = clsx(styles.root, className);

  return (
    <Flex className={classes} alignItems="center">
      <Link to={`/${ROUTES.PRODUCT}/${id}`} className={styles.img}>
        <img src={image} alt={name} />
      </Link>
      <Link to={`/${ROUTES.PRODUCT}/${id}`} className={styles.title}>
        {name}
      </Link>
    </Flex>
  );
};
