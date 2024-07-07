import CircleContainerIcon from '@components/atoms/circleContainerIcon/CircleContainerIcon';

import styles from './ourStatisticItem.module.scss';

const OurStatisticItem = ({ card, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();
    const Icon = card.icon;

    const hoverClass = card.changeOnHover === 'fill' ? styles.fill : styles.stroke;
    const circleClass = `${styles.icon} ${hoverClass}`;

    return (
        <li className={combinedClasses}>
            <CircleContainerIcon icon={<Icon />} className={circleClass} />
            <div className={styles.block}>
                <div>{card.amount}k</div>
                <p>{card.desc}</p>
            </div>
        </li>
    );
};

export default OurStatisticItem;
