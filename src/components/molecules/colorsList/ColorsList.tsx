import { Link } from 'react-router-dom';

import { Flex } from '@components/helpers/flex/Flex';
import { ROUTES } from '@routes/routes';

import styles from './colorsList.module.scss';

export interface Color {
  productId: string;
  color: string;
}

interface ColorsListProps {
  colors: Color[];
}

export const ColorsList = ({ colors }: ColorsListProps) => {
  return (
    <Flex tagElement="ul" alignItems="center" gap={8}>
      {colors.map(({ color, productId }, index) => (
        <li key={index} className={styles.item}>
          <Link to={`/${ROUTES.PRODUCT}/${productId}`} className={styles.color}>
            <div style={{ backgroundColor: color }}></div>
          </Link>
        </li>
      ))}
    </Flex>
  );
};
