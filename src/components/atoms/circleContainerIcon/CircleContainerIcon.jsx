import styles from './circleContainerIcon.module.scss';

const CircleContainerIcon = ({ icon, className, ...props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <div className={combinedClasses} {...props}>
            <div>{icon}</div>
        </div>
    );
};

export default CircleContainerIcon;
