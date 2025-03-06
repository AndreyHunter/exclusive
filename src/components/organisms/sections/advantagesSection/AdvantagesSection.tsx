import { clsx } from 'clsx';

import type { Advantage } from 'types/static';
import { advantages as defaultAdvantages } from '@constants/advantages';
import { Container } from '@components/helpers/container/Container';
import { AdvantagesCard } from '@components/molecules/advantagesCard/AdvantagesCard';

import styles from './advantagesSection.module.scss';

interface AdvantagesSectionProps {
  className?: string;
  advantages?: Advantage[];
}

export const AdvantagesSection = ({
  className,
  advantages = defaultAdvantages,
}: AdvantagesSectionProps) => {
  const classes = clsx(styles.root, className);

  return (
    <section className={classes}>
      <Container>
        <ul className={styles.grid}>
          {advantages.map((advantage) => (
            <AdvantagesCard key={advantage.id} {...advantage} />
          ))}
        </ul>
      </Container>
    </section>
  );
};
