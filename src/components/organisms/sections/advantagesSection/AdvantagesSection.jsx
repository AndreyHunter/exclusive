import AdvantagesCard from '../../../molecules/advantagesCard/AdvantagesCard';

import Container from '../../../helpers/container/Container';

import advantages from '../../../../constants/advantages';

import styles from './advantagesSection.module.scss';

const AdvantagesSection = ({ className }) => {
    const combinedClasses = `${styles.root || ''} ${className || ''}`.trim();

    return (
        <section className={combinedClasses}>
            <Container>
                <ul className={styles.grid}>
                    {advantages &&
                        advantages.map((advantage) => (
                            <AdvantagesCard key={advantage.id} advantage={advantage} />
                        ))}
                </ul>
            </Container>
        </section>
    );
};

export default AdvantagesSection;
