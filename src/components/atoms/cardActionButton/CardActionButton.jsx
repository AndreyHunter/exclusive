import styles from './cardActionButton.module.scss';

const CardActionButton = ({ icon, className, props }) => {
    const combinedClasses = `${styles.root} ${className || ''}`;

    return (
        <button type="button" className={combinedClasses} {...props}>
            {icon}
        </button>
    );
};

export default CardActionButton;
