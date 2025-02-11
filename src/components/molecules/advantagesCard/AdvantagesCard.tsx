import { Flex } from '@components/helpers/flex/Flex';
import type { Advantage } from 'types/static';

import styles from './advantagesCard.module.scss';

export const AdvantagesCard = ({ title, desc, icon }: Omit<Advantage, 'id'>) => {
  const Icon = icon;
  return (
    <li className={styles.root}>
      <Icon />
      <Flex flexDirection="column" alignItems="center" gap={8}>
        <div className={styles.title}>{title}</div>
        <p className={styles.desc}>{desc}</p>
      </Flex>
    </li>
  );
};
