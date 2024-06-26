import AdvantagesCard from '../../components/advantagesCard/AdvantagesCard';

import Container from '../container/Container';

import advantages from '../../constants/advantages';

import styles from './advantagesSection.module.scss';

const AdvantagesSection = ({ className, ...props }) => {
    return (
        <section className={`${styles.section} ${className}`} {...props}>
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