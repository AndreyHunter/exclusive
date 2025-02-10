import { advantages } from '@constants/advantages';
import { Container } from '@components/helpers/container/Container';
import { AdvantagesCard } from '@components/molecules/advantagesCard/AdvantagesCard';

import styles from './advantagesSection.module.scss';

export const AdvantagesSection = ({ className }) => {
  const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

  return (
    <section className={combinedClasses}>
      <Container>
        <ul className={styles.grid}>
          {advantages &&
            advantages.map((advantage) => <AdvantagesCard key={advantage.id} {...advantage} />)}
        </ul>
      </Container>
    </section>
  );
};
