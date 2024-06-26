import FlexBox from '../../components/flexBlock/FlexBlock';

import styles from './advantagesCard.module.scss';

const AdvantagesCard = ({ advantage }) => {
    const Icon = advantage.icon;
    return (
        <li className={styles.card}>
            <Icon />
            <FlexBox column gap={8} center>
                <div className={styles.title}>{advantage.title}</div>
                <p className={styles.desc}>{advantage.desc}</p>
            </FlexBox>
        </li>
    );
};

export default AdvantagesCard;
