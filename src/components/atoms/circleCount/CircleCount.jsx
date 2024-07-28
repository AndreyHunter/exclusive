import styles from './circleCount.module.scss';

const CircleCount = ({ quantity, className }) => {
    const combinedClasses = `${styles.root} ${className || ''}`.trim();

    return <div className={combinedClasses}>{quantity}</div>;
};

export default CircleCount;
