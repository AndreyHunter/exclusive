import { clsx } from 'clsx';

import { CircleContainerIcon } from '@components/atoms/circleContainerIcon/CircleContainerIcon';
import type { OurStatisticCard } from 'types/static';

import styles from './ourStatisticItem.module.scss';

export const OurStatisticItem = ({
  amount,
  desc,
  icon,
  changeOnHover,
}: Omit<OurStatisticCard, 'id'>) => {
  const Icon = icon;
  const circleClasses = clsx(styles.icon, {
    [styles.fill]: changeOnHover === 'fill',
    [styles.stroke]: changeOnHover === 'stroke',
  });

  return (
    <li className={styles.root}>
      <CircleContainerIcon className={circleClasses}>{<Icon />}</CircleContainerIcon>
      <div className={styles.block}>
        <div>{amount}k</div>
        <p>{desc}</p>
      </div>
    </li>
  );
};
