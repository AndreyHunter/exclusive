import { clsx } from 'clsx';

import { statisticCards } from '@constants/statisticCards';
import { Container } from '@components/helpers/container/Container';
import { OurStatisticItem } from '@components/molecules/ourStatisticItem/OurStatisticItem';

import styles from './ourStatisticList.module.scss';

interface OurStatisticListProps {
  className?: string;
}

export const OurStatisticList = ({ className }: OurStatisticListProps) => {
  const classes = clsx(styles.root, className);

  return (
    <Container>
      <ul className={classes}>
        {statisticCards.map((card) => (
          <OurStatisticItem key={card.id} {...card} />
        ))}
      </ul>
    </Container>
  );
};
