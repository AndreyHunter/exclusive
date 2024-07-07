import Flex from '@components/helpers/flex/Flex';

import styles from './advantagesCard.module.scss';

const AdvantagesCard = ({ advantage }) => {
    const Icon = advantage.icon;
    return (
        <li className={styles.card}>
            <Icon />
            <Flex flexDirection="column" alignItems="center" gap={8}>
                <div className={styles.title}>{advantage.title}</div>
                <p className={styles.desc}>{advantage.desc}</p>
            </Flex>
        </li>
    );
};

export default AdvantagesCard;
